import { useEffect, useRef, useState } from 'react';
import { getAudioBlob } from '../services/Audio';

export default function useAudio(recordUrl: string | null, canPlaying: boolean) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [duration, setDuration] = useState(0);
  const [curTime, setCurTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState<number | null>(null);

  useEffect(() => {
    if (recordUrl) {
      loadAudio(recordUrl);
    } else {
      audioRef.current = null;
      setIsError(true);
      setIsLoading(false);
    }
  }, [recordUrl]);
  
  useEffect(() => {
    if (!audioRef.current) return;

    const setAudioData = () => {
      console.log('audioRef.current!.duration', audioRef.current!.duration)
      setDuration(Math.floor(audioRef.current!.duration));
      setCurTime(audioRef.current!.currentTime);
    }
    
    const setAudioTime = () => setCurTime(audioRef.current!.currentTime);

    audioRef.current.addEventListener("loadeddata", setAudioData);
    audioRef.current.addEventListener("timeupdate", setAudioTime);

    isPlaying && canPlaying ? audioRef.current.play() : audioRef.current.pause();

    if (clickedTime && clickedTime !== curTime) {
      debugger;
      audioRef.current.currentTime = clickedTime;
      setClickedTime(null);
    } 

    return () => {
      audioRef.current!.removeEventListener("loadeddata", setAudioData);
      audioRef.current!.removeEventListener("timeupdate", setAudioTime);
    }
  });

  async function loadAudio(serverUrl: string) {
    try {
      setIsLoading(true);
      setIsError(false);

      const mp3 = await getAudioBlob(serverUrl);
      const audioUrl = window.URL.createObjectURL(mp3);
      audioRef.current = new Audio(audioUrl);
      audioRef.current.load();
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const player = {
    curTime,
    duration,
    isPlaying,
    setIsPlaying: setIsPlaying,
    setClickedTime,
  };

  return { isLoading, isError, player: isLoading ? null : player };
}
