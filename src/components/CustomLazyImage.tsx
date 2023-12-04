import Image from 'next/image';

const CustomLazyImage = ({ alt = '', effect = '', src = '', cls = '' }) => {
  return (
    <Image alt={alt} src={src} placeholder="blur" fill={true} className={cls} />
  );
};

export default CustomLazyImage;
