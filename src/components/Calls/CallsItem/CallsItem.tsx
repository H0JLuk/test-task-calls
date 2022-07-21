import React, { memo, useEffect } from 'react';

import { TCall } from '../../../types/Call';
import Image from '../../Image';

import IcommingIcon from '../../../assets/icons/incoming-arrow.svg';
import OutGoingIcon from '../../../assets/icons/outgoing-arrow.svg';
import { getCallRecord } from '../../../utils/helpers';
import useAudio from '../../../hooks/useAudio';
import AudioPlayer from '../../common/AudioPlayer';

const ImgByCallType = {
  0: OutGoingIcon,
  1: IcommingIcon,
};

type CallsItemProps = {
  callItem: TCall;
  canPlaying: boolean;
  setPlayingCallId: (id: number) => void;
};

const CallsItem = memo(function CallsItem({ callItem, canPlaying, setPlayingCallId }: CallsItemProps) {
  // const hasRequiredAudioFields = callItem.record && callItem.partnership_id;
  const callRecordUrl = getCallRecord(callItem.record, callItem.partnership_id);
  // const callRecordUrl = null;

  const { player, isLoading: isAudioLoading, isError: isAudioError } = useAudio(callRecordUrl, canPlaying);

  useEffect(() => () => player?.setIsPlaying(false), []);

  const onPlayAudio = () => {
    player?.setIsPlaying(true);
    setPlayingCallId(callItem.id);
  };

  const onPauseAudio = () => player?.setIsPlaying(false);

  return (
    <tr className='border-t border-gray-200 h-[65px] text-[#122945]'>
      <td>
        <Image src={ImgByCallType[callItem.in_out]} />
      </td>
      <td className='text-[15px] leading-[140%]'>{callItem.date.slice(-8, -3)}</td>
      <td>
        <Image src={callItem.person_avatar} className='w-[32px] h-[32px] rounded-[50%]' />
      </td>
      <td className='text-[15px]'>
        <p>{callItem.partner_data.name}</p>
        <p className='text-[#5E7793]'>{callItem.partner_data.phone}</p>
      </td>
      <td className='text-[#5E7793] text-[15px] pr-4'>{callItem.source}</td>
      <td className='text-[#EA1A4F] text-[14px]'>Скрипт не использован</td>
      <td className='pr-10'>
        {!isAudioLoading && !isAudioError && player && (
          <AudioPlayer
            isPlaying={player?.isPlaying && canPlaying}
            onPlayAudio={onPlayAudio}
            onPauseAudio={onPauseAudio}
            curTime={Math.floor(player!.curTime!)}
            duration={player!.duration!}
            onTimeUpdate={(time: number) => player?.setClickedTime(time)}
          />
        )}
      </td>
    </tr>
  );
});

export default CallsItem;
