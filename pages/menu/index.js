import Link from 'next/link';
import Header from '../../components/home/header';
import MenuCategory from '../../components/menu/menuCategory';

const name = 'Pepperoni Pizza';
const price = 12.99;
const description = 'Large pepperoni pizza (toppings cost extra)';

export default function Menu() {
  return (
    <div>
      <Header/>
      <Link href='/'>
        <a>
          Back Home
        </a>
      </Link>
      <MenuCategory/>
    </div>
  )
}