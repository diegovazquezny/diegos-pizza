import Link from 'next/link';
import Header from '../../components/home/header';

export default function Specials() {
  return (
    <div>
      <Header/>
      <Link href='/'>
        <a>
          Back Home
        </a>
      </Link>
    </div>
  )
}