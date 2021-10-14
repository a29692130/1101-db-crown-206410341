import React, { useState } from 'react';
import './Directory_41.scss';
import items from './menu-items-data';
import MenuItem_41 from './MenuItem_41';

const Directory_41 = () => {
  const [menuItems, setmenuItems] = useState(items);
  console.log('menuItems', menuItems);
  return (
    <div>
      <div className="directory-menu">
        {menuItems.map((item) => {
          const { id, name, remoteUrl, size } = item;
          return (
            <MenuItem_41
              id={id}
              name={name}
              remoteUrl={remoteUrl}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Directory_41;
