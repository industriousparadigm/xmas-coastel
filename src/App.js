import "./App.css"
import YouTube from "react-youtube"
import { useState, useEffect } from "react"
import siteData from "./siteData"
import antonio from "./antonio.png"

function App() {
  const [videoIds, setVideoIds] = useState(
    []
    //   [
    //   "TBWwqoQrSL8",
    //   "ARJAPAPMvNU",
    //   "7bB9ntvdkpE",
    //   "r01Qobesj1Y",
    //   "6sEh-IcndNI",
    // ]
  )

  useEffect(() => {
    const fetchVideoIds = async () => {
      const videoIds = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YT_KEY}&channelId=UCCmfNcoIXkBDPh5hxonV8_A&part=snippet,id&order=date&maxResults=50`
      )
        .then((res) => res.json())
        .then((something) => console.log(something))
        .then((data) =>
          data.items ? data.items.map((item) => item.id.videoId) : []
        )

      console.log(videoIds)

      setVideoIds(videoIds)
    }
    fetchVideoIds()
  }, [])
  return (
    <div className="App">
      <img src={antonio} className={"top-image"} alt="antonio" />
      <h1>Coastel 🙂🎵</h1>
      {siteData.textBlocks.map((paragraph) => (
        <p key={paragraph.slice(0, 12)} className="intro-text">
          {paragraph}
        </p>
      ))}
      {videoIds.map((videoId) => (
        <YouTube videoId={videoId} className="video-container" key={videoId} />
      ))}
    </div>
  )
}

// AIzaSyAzj14iu7S_xdCC_5Fz27Ndn7Hr_smKbjc

export default App
