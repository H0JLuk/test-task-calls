import { padStart } from '../../../utils/helpers'

export const calcAudioTimeFromNumber = (time: number): string => {
  console.log('time', time)
  const seconds = time % 60;
  const minutes = Math.floor(time / 60);
  return `${padStart(minutes, '0', 2)}:${padStart(seconds, '0', 2)}`;
};
