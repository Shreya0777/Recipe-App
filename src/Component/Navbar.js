import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const links = [
    {
      name: 'Home',
      path: '/',
      icon: faHome
    },
    {
      name: 'Recipes',
      path: '/recipes',
      icon: faList
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: faCog
    }
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          F<span>oo</span>diesHub
        </Link>
        <div className="nav-links">
          {links.map(link => (
            <Link to={link.path} key={link.name}>
              {link.name}
            </Link>
          ))}
        </div>
        {/* hamburger button */}
        <div onClick={() => setShowSidebar(true)} className={showSidebar ? 'sidebar-btn active' : 'sidebar-btn'}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {/* if showSidebar state is true then show the sidebar */}
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
};

export default Navbar;
