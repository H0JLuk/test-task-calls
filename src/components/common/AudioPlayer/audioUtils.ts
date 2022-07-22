import { padStart } from '../../../utils/helpers'

export const calcAudioTimeFromNumber = (time: number): string => {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60);
  return `${minutes}:${padStart(seconds, '0', 2)}`;
};
