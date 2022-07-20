import React, { ImgHTMLAttributes, SyntheticEvent } from 'react';

const IMG_PLACEHOLDER = 'https://www.urbansplash.co.uk/images/placeholder-16-9.jpg';

type ImageProps = {
  src: string;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>;

function Image({ src, ...rest }: ImageProps) {
  const onError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = IMG_PLACEHOLDER;
  };

  return <img src={src} onError={onError} alt={rest.alt} {...rest} />;
}

export default Image;
