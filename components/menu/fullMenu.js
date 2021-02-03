import React, {useEffect, useState} from 'react';
import styles from '../../styles/FullMenu.module.css';
import { Paper } from '@material-ui/core';
import MenuNav from '../../components/menu/menuNav';
import MenuItemsList from './menuItemsList';

export default function FullMenu() {
  const [fetchedMenu, setFetchedMenu] = useState(false);
  const [menuList, setMenuList] = useState([]);
  
  useEffect(() => {
    if (!fetchedMenu) {
      fetch('/api/menu')
        .then(res => res.json())
        .then(data => {
          setMenuList(data);
          setFetchedMenu(true);
        })
        .catch(err => console.log(err));
    }
  })

  return (
    <>
      { fetchedMenu 
        ?
        <Paper className={styles.root}>
          <MenuNav/>
          {
            menuList.map((type, i) => {
              return (
                <div className={styles.categoryContainer} key={`t${i}`} id={type.id}>
                  <div className={styles.menuItemsContainer}>
                    <h3 className={styles.categoryName}>{type.category}</h3>
                    <div className={styles.menuItemsWrapper}>
                      {<MenuItemsList menuItems={type.options}/>}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Paper>
        : <div className={styles.loading}/>
      }
    </>
  )
}
