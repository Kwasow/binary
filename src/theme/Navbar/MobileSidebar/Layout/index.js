import React from 'react';
import clsx from 'clsx';

export default function NavbarMobileSidebarLayout({ header, secondaryMenu }) {
  return (
    <div className="navbar-sidebar">
      {header}
      <div className={clsx('navbar-sidebar__items')}>
        <div className="navbar-sidebar__item menu">
          {secondaryMenu}
        </div>
      </div>
    </div>
  );
}
