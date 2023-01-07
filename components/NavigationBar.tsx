import { Orbitron } from '@next/font/google';
import classNames from 'classnames';
import Link from 'next/link';

const orbitron = Orbitron({ subsets: ['latin'] });

const NavigationBar = () => {
  return (
    <div className="flex items-center justify-between bg-black py-6 px-6">
      <Link
        href="/"
        className={classNames(
          'text-base text-orange-500 md:text-2xl',
          orbitron.className
        )}
        style={{ lineHeight: 1 }}
      >
        Dave Peach:
        <br />
        Professional Voice
      </Link>
      <div>
        <div className="justify-end">
          <div
          // a11yTitle='Navigation Menu'
          // dropProps={{ align: { top: 'bottom', right: 'right' } }}
          // icon={<MenuIcon />}
          // dropBackground='#252529'
          // items={[
          //   // TODO: make this use an anchor for each that has an href for SEO purposes
          //   // https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
          //   // (note that it might not matter that much because we have real links outside of the mobile experience that are the same)
          //   {
          //     label: <Box pad='small'>Portfolio</Box>,
          //     onClick: () => {
          //       Router.push('/portfolio');
          //     },
          //   },
          //   {
          //     label: <Box pad='small'>Services</Box>,
          //     onClick: () => {
          //       Router.push('/services');
          //     },
          //   },
          // ]}
          ></div>
        </div>
        <div className="flex flex-row justify-end gap-6">
          <Link className="text-lg text-orange-500" href="/portfolio">
            Portfolio
          </Link>
          <Link className="text-lg text-orange-500" href="/services">
            Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
