import React from 'react';
import MenuItem from './menuItem';

export default function MenuItemsList({menuItems}) {
  return (
    <>
      { 
        menuItems.map((product, i) => {
          return (
            <MenuItem
              product={product}
              key={`o${i}`}
            />
          )
        })
      }
    </>
  );
}
