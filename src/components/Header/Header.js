import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Header = () => {
  return (
    <header>
      <nav className="nav-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Nosotros</Link></li>
          <li><Link to="/">Servicios</Link></li>
          <li><Link to="/">Nuevos pacientes</Link></li>
          <li><Link to="/">Contacto</Link></li>
        </ul>
        <div className="search-icon-container">
          <IconButton aria-label="search" className="search-icon">
            <SearchIcon style={{ color: '#016b65' }} />
          </IconButton>
          <IconButton aria-label="dark mode" className="dark-mode-icon">
            <DarkModeOutlinedIcon style={{ color: '#016b65' }} />
          </IconButton>
        </div>
      </nav>
    </header>
  );
}

export default Header;
