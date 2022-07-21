import { baseUrl } from '../services'

const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

export const dateToString = (date: Date) =>
  [
    padTo2Digits(date.getFullYear()), 
    padTo2Digits(date.getMonth() + 1),
    date.getDate()
  ].join('-');

