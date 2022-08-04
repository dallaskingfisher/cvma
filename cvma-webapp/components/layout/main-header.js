import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {useState } from 'react';
import classes from './main-header.module.css';
import { useSession,signOut } from 'next-auth/client';

function MainHeader() {
  const [ session, loading] = useSession();
  const [menuOpen, setMenuOpen ] = useState(false);
  const router = useRouter();

  function logoutHandler(){
    router.push('/')
    signOut();
    
  }

  function menuHandler(event) {
    event.preventDefault();
  
    setMenuOpen(!menuOpen)
  }

  const menuList = <span> 
    <li className={classes.linkItems}>
      <Link href="/"><a className={classes.aItems}>Home</a></Link>
      </li>
    <li className={classes.linkItems} >
    <a href="https://www.combatvet.us" className={classes.aItems}>National</a>
  </li>
  <li className={classes.linkItems}>
    <a href="http://cvma18.cvma182.org" className={classes.aItems}>State</a>
  </li>
  {!session && !loading && (
     <li className={classes.linkItems}>
     <Link href="/login"><a className={classes.aItems}>Login</a></Link>
   </li>
  )}
  {session && (
  <li className={classes.linkItems}>
    <Link href="/members" ><a className={classes.aItems}>Members</a></Link> 
    </li>
    )}
      {session && (
        <li className={classes.linkItems}>
        <span><a className={classes.aItems} onClick={logoutHandler}>Logout</a></span></li>
      )}
    
  </span>

 
  return (
    <header className={classes.header}>
      <div className={classes.image}>

      <Image
         
         src={'/images/Skully.png'}
         alt="Skully 18-2"
         width="75"
         height="75"
       />
      </div>
      
      <nav className={classes.links}>
        <ul className={classes.ulItems}>
          <li className={classes.linkItems}>
          <a className={classes.menuButton} onClick={menuHandler}>{menuOpen ? 'Close' : 'Menu'}</a>
          </li>
          {menuOpen ? menuList : ''}
        </ul>
      </nav>
    </header>
  );






 
}

export default MainHeader;
