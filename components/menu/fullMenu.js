import React from 'react';
import MenuItem from './menuItem';
import styles from '../../styles/FullMenu.module.css';
import { Paper } from '@material-ui/core';
import menuList from './menuList';
import MenuNav from '../../components/menu/menuNav';

export default function FullMenu() {
  return (
    <Paper className={styles.root}>
      <MenuNav/>
      {
        menuList.map((type, i) => {
          return (
            <div className={styles.categoryContainer} key={`t${i}`} id={type.id}>
              <div className={styles.menuItemsContainer}>
                <h3 className={styles.categoryName}>{type.category}</h3>
                <div className={styles.menuItemsWrapper}>
                  {type.options.map((option, i) => {
                    return (
                      <MenuItem
                        name={option.name}
                        price={'$' + option.price}
                        description={option.description}
                        key={`o${i}`}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })
      }
    </Paper>
  )
}
