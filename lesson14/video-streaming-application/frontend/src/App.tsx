import './App.css';

import { useEffect, useState } from 'react'
import VideoPlayer from './Components/VideoPlayer'


const videoIds = [
  'chainsaw0', 
  'chainsaw2', 
  'demonslayer8', 
  'demonslayer9', 
  'demonslayer10', 
  'demonslayer11'
];

function App() {
  const [count, setCount] = useState<number>(0);
  const [videoId, setVideoId] = useState<string>(videoIds[count]);
  // const [videoPlayer, setVideoPlayer] = useState<ReactNode | null>(<VideoPlayer videoId={videoId} />);

  useEffect(function (): void {
    console.log(count);
    setVideoId(() => videoIds[count]);
  }, [count]);

  useEffect(function (): void {
    console.log(videoId);
  }, [videoId]);

  // useEffect(function () {
  //   setVideoPlayer(() => null);
  //   setVideoPlayer(() => <VideoPlayer videoId={videoId} />);
  // }, [videoId]);

  return (
    <div>
      <button onClick={function () {
        // location.reload();
        if(count >= videoIds.length - 1) {
          setCount(() => 0);
        } else {
          setCount(prev => prev + 1);
        }
      }}>Next Video!!</button>
      <br/>
      <VideoPlayer videoId={ videoId }></VideoPlayer>
    </div>
  )
}



export default App;
