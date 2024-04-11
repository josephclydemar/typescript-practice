import { useRef, useEffect } from 'react';

type VideoPlayerProps = {
    videoId: string;
}

export default function VideoPlayer({ videoId }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(function () {
        if(videoRef.current !== null && videoRef.current !== undefined) {
            videoRef.current.pause();
            videoRef.current.removeAttribute('src');
            videoRef.current.load();
        }
    });

    return (
        <div>
            <video ref={videoRef} width='845' height='480' controls autoPlay>
                <source src={ `/api/video/${videoId}` } type='video/mp4'></source>
                Wala!!!
            </video>
        </div>
    );
}
