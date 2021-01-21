import React from 'react';
import MenuItem from './menuItem';
import styles from '../../styles/MenuCategory.module.css';
import { Paper } from '@material-ui/core';
import menuList from './menuList';

export default function MenuCategory() {
  return (
    <Paper className={styles.root}>
    {
      menuList.map((type, i) => {
        return (
          <Paper className={styles.categoryContainer} key={`t${i}`}>
            <h3 className={styles.categoryName}>{type.category}</h3>
            <div className={styles.menuItemsContainer}>
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
          </Paper>
        )
      })
    }
    </Paper>
  )
}
