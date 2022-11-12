import { Open_Sans } from '@next/font/google';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import NavigationBar from '../components/NavigationBar';
import SocialIcons from '../components/SocialIcons';
import { buildTitle } from '../lib/build-title';
import '../styles/globals.css';

interface Props {
  title: string;
  children?: React.ReactNode;
}

// this site's default font family
const openSans = Open_Sans({ subsets: ['latin'] });

const Layout: FC<Props> = ({ children }) => {
  const title = buildTitle();

  const pathname = usePathname();

  const description =
    'Dave Peach is a male voice actor ready to help your clients build their brands. Learn how today.';

  // TODO: is there some way to generate the cloudinary part programmatically using next/image
  const metaImage =
    'https://res.cloudinary.com/prestocloud/image/upload/f_auto,c_limit,w_640,q_auto/dave-peach-web-netlify-cms/march_madness.png';

  return (
    <html lang="en">
      <head>
        <meta name="description" content={description}></meta>
        <meta property="og:title" content={title}></meta>
        <meta property="og:url" content={pathname}></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:image" content={metaImage}></meta>
        <meta property="og:description" content={description}></meta>

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
      </head>
      <body>
        <div
          className={classNames(
            openSans.className,
            'min-h-screen w-full bg-neutral-900'
          )}
        >
          <NavigationBar></NavigationBar>
          <article className="flex flex-1 flex-col">{children}</article>
          <footer className="mt-10 flex w-full items-center justify-center pb-6">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <SocialIcons></SocialIcons>
              <div className="align-center flex h-full w-full justify-center text-[silver]">
                Copyright © {new Date().getFullYear()} Dave Peach
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
