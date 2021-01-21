import Link from 'next/link';
import Header from '../../components/home/header';

export default function Menu() {
  return (
    <div>
      <Header/>
      <Link href='/'>
        <a>
          Home
        </a>
      </Link>
    </div>
  )
}