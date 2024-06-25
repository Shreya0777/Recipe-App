import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = ({ links, close }) => {
  return (
    <div className="sidebar">
      <button onClick={close} className="close-btn">X</button>
      {links.map(link => (
        <Link to={link.path} className="sidebar-link" key={link.name} onClick={close}>
        <FontAwesomeIcon icon={link.icon} />
        {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
