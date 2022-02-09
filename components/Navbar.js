import React from 'react';
import Burger from './Burger';
import CornerLogo from './CornerLogo';
import SideNavigation from './SideNavigation';
import HorizontalNavigation from './HorizontalNavigation';
export default function Navbar() {
  const [active, setActive] = React.useState(false);
  return (
    <div
      className={
        'h-12 fixed top-0 left-0 backdrop-blur-md drop-shadow-md w-full z-30'
      }>
      <div
        className={
          'h-12 p-2 px-6 fixed top-0 left-0 right-0 flex flex-row justify-between backdrop-blur-md drop-shadow-md z-30 w-full max-w-4xl mx-auto'
        }>
        <CornerLogo active={active} />
        <Burger toggler={setActive} active={active} />
        <SideNavigation active={active} fn={setActive} />
        <HorizontalNavigation></HorizontalNavigation>
      </div>
    </div>
  );
}
