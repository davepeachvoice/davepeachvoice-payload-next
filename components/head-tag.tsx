import { usePathname } from 'next/navigation';
import { FC } from 'react';

export interface Props {
  title: string;
}

const HeadTag: FC<Props> = ({ title }) => {
  const pathname = usePathname();

  const description =
    'Dave Peach is a male voice actor ready to help your clients build their brands. Learn how today.';

  // TODO: is there some way to generate the cloudinary part programmatically using next/image
  const metaImage =
    'https://res.cloudinary.com/prestocloud/image/upload/f_auto,c_limit,w_640,q_auto/dave-peach-web-netlify-cms/march_madness.png';

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta property="og:title" content={title}></meta>
      <meta property="og:url" content={pathname ?? undefined}></meta>
      <meta property="og:type" content="article"></meta>
      <meta property="og:image" content={metaImage}></meta>
      <meta property="og:description" content={description}></meta>

      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://res.cloudinary.com/prestocloud/image/upload/v1642970801/dave-peach-web-netlify-cms/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://res.cloudinary.com/prestocloud/image/upload/v1642970801/dave-peach-web-netlify-cms/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://res.cloudinary.com/prestocloud/image/upload/v1642970801/dave-peach-web-netlify-cms/favicon/favicon-16x16.png"
      />
      <link
        rel="manifest"
        href="https://res.cloudinary.com/prestocloud/raw/upload/v1642970801/dave-peach-web-netlify-cms/favicon/site.webmanifest"
      />
    </>
  );
};

export default HeadTag;
