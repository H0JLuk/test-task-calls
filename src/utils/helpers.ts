// import { baseUrl } from '../services';

const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

export const dateToString = (date: Date) =>
  [
    padTo2Digits(date.getFullYear()), 
    padTo2Digits(date.getMonth() + 1),
    date.getDate()
  ].join('-');

export const getCallRecord = (recordId: string, partnershipId: string) =>
  // `${baseUrl}/getRecord?record=${recordId}&partnership_id=${partnershipId}`;
  `http://localhost:3001/record`;

export const padStart = (str: string | number, char: string, expectedLength: number): string => {
  str = String(str);
  const lengthForInsert = expectedLength - str.length;

  if (lengthForInsert <= 0) return str;
  return char.repeat(lengthForInsert) + str;
};
