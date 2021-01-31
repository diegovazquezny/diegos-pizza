// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import menuList from './menuList';
const URL = 'postgres://wkpsdbwq:TVXZHPZ6RIVkh4dcMgOqGBR0vMXZQyXt@ziggy.db.elephantsql.com:5432/wkpsdbwq';

export default (req, res) => {
  res.statusCode = 200;
  res.json(menuList);
}
