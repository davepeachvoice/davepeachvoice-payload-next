import { Open_Sans } from '@next/font/google';
import classNames from 'classnames';
import { FC } from 'react';
import NavigationBar from '../components/NavigationBar';
import SocialIcons from '../components/SocialIcons';
import '../styles/globals.css';

interface Props {
  title: string;
  children?: React.ReactNode;
}

// this site's default font family
const openSans = Open_Sans({ subsets: ['latin'] });

const Layout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
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
                Copyright ©{new Date().getFullYear()} Dave Peach
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
