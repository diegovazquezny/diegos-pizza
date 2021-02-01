import { carouselItems, articles } from './data';

export default (req, res) => {
  res.statusCode = 200;
  res.json(menuList);
}
