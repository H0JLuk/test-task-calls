// import { defaultHeaders } from '.';

export const getAudioBlob = async (serverUrl: string): Promise<Blob> => {
  const response = await fetch(serverUrl, {
    method: 'POST',
    headers: {
      // Authorization: defaultHeaders.Authorization,
      // 'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
      // 'Content-Transfer-Encoding': 'binary',
      // 'Content-Disposition': 'filename="record.mp3"',
    },
  });
  const mp3 = await response.blob();
  return mp3;
};
