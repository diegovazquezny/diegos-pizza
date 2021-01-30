// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import menuList from './menuList';

export default (req, res) => {
  res.statusCode = 200;
  res.json(menuList);
}
