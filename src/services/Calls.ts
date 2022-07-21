import { baseUrl, defaultHeaders } from '.';
import { TCall, TCallSign } from '../types/Call';
import { DefaultServerResponse } from '../types/Server';
import { dateToString } from '../utils/helpers';

export const inOutByCallSign = {
  [TCallSign.INCOMMING]: 1,
  [TCallSign.OUTGOING]: 0,
} as const;

export type GetCallsParams = {
  dateStart?: Date;
  dateEnd?: Date;
  inOut?: 0 | 1;
};
export const getCalls = async (params: GetCallsParams): Promise<DefaultServerResponse<TCall>> => {
  const urlWithParams = new URL(`${baseUrl!}/getList`);

  const { dateStart, dateEnd, inOut } = params || {};
  dateStart && urlWithParams.searchParams.append('date_start', dateToString(dateStart));
  dateEnd && urlWithParams.searchParams.append('date_end', dateToString(dateEnd));
  Number.isInteger(params.inOut) && urlWithParams.searchParams.append('in_out', String(inOut));

  // urlWithParams.searchParams.append('limit', '50');
  // urlWithParams.searchParams.append('offset', '5');

  const response = await fetch(urlWithParams.toString(), {
    method: 'POST',
    headers: defaultHeaders,
  });
  return response.json();
};
 