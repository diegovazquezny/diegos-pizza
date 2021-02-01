// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/* TODO:  warning => API resolved without sending a response for /api/menu, 
          this may result in stalled requests.
*/
import db from './model';

export default (req, res) => {
  const query = `
    SELECT * 
    FROM products   
  `;

  db.query(query)
    .then(response => {
      res.statusCode = 200;
      return res.json(parseData(response.rows));
    })
    .catch(err => {
      console.log('ERR start session-->', err);
      res.statusCode = 500;
      return res.json({message: 'DB Error'});
    })
}

function parseData(array) {
  const menuList = [];
  for (let i = 0; i < array.length; i += 1) {
    let foundCategory = false;
    for (let j = 0; j < menuList.length; j += 1) {
      // loop through menuList and look for category object
      if (menuList[j].category === array[i].product_type) {
        foundCategory = true;
        menuList[j].options.push({
          name: array[i].product_name,
          price: Number(array[i].price),
          description: array[i].description
        })
      }
    }
    if (!foundCategory) {
      // build a new category object and push into options
      // then push new category object into menuList
      const newCategory = {
        category: array[i].product_type,
        id: array[i].product_type,
        options: []   
      };
      newCategory.options.push({
        name: array[i].product_name,
        price: Number(array[i].price),
        description: array[i].description
      });
      menuList.push(newCategory);
    }
  }
  return menuList;
}