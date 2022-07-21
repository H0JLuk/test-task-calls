import React, { memo, useMemo, useRef } from 'react';

import { ReactComponent as DownloadSvg } from '../../../assets/icons/download.svg';
import { ReactComponent as CloseSvg } from '../../../assets/icons/close.svg';
import { ReactComponent as PlayIcon } from '../../../assets/icons/play.svg';
import { ReactComponent as PauseIcon } from '../../../assets/icons/pause.svg';
import { calcAudioTimeFromNumber } from './audioUtils';

const AUDIO_BAR_WIDTH = 164;

type AudioPlayerProps = {
  isPlaying?: boolean;
  onPlayAudio: () => void;
  onPauseAudio: () => void;
  onTimeUpdate: (time: number) => void;
  curTime: number;
  duration: number;
};

const calcProgressBarStyles = (percent: number) => ({
  width: `${percent}%`,
  borderTopRightRadius: percent > 97 ? '2px' : 0,
  borderBottomRightRadius: percent > 97 ? '2px' : 0,
});

const AudioPlayer = memo(function AudioPlayer({
  isPlaying = true,
  onPlayAudio,
  onPauseAudio,
  onTimeUpdate,
  curTime,
  duration,
}: AudioPlayerProps) {
  const totalAudioTime = useMemo(() => calcAudioTimeFromNumber(duration), [duration]);
  const playedTime = useMemo(() => calcAudioTimeFromNumber(curTime), [curTime]);

  const curPercentage = (curTime / duration) * 100;

  return (
    <div className='flex items-center justify-between bg-[#EAF0FA] rounded-[48px] min-w-[350px] h-12 px-4'>
      <p className='text-[15px] text-[#122945]'>{totalAudioTime} {playedTime}</p>

      <div className='relative h-[4px] bg-[#ADBFDF] rounded-[2px] cursor-pointer' style={{ width: AUDIO_BAR_WIDTH }}>
        <div
          className='absolute left-0 top-0 h-full bg-[#002CFB] rounded-l-[2px]'
          style={calcProgressBarStyles(curPercentage)}
        ></div>
      </div>

      {isPlaying ? (
        <PauseIcon className='cursor-pointer' onClick={onPauseAudio} />
      ) : (
        <PlayIcon className='cursor-pointer' onClick={onPlayAudio} />
      )}

      <DownloadSvg className='cursor-not-allowed' />
      <CloseSvg className='cursor-not-allowed' />
    </div>
  );
});

export default AudioPlayer;
