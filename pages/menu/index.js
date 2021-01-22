import Link from 'next/link';
import Header from '../../components/home/header';
import FullMenu from '../../components/menu/fullMenu';
import Footer from '../../components/home/footer';
import MenuBanner from '../../components/menu/menuBanner'; 

export default function Menu() {
  return (
    <>
      <Header/>
      <MenuBanner/>
      <FullMenu/>
      <Footer/>
    </>
  )
}