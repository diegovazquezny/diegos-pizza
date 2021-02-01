// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { menuList } from './data';
import db from './model';

export default (req, res) => {
  const query = `
    SELECT * 
    FROM products   
  `;
  db.query(query)
    .then(response => {
      console.log(response.rows);
      res.statusCode = 200;
      res.json(response.rows);
    })
    .catch(err => {
      console.log('ERR start session-->', err);
      res.statusCode = 500;
      res.json({message: 'DB Error'});
    })
}
