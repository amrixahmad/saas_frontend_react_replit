import React, { useState } from 'react';
import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';
import { Sliders, User, MessageSquare, Book, Square, 
        CheckSquare, Grid, AlignLeft, Coffee, Map,
       BookOpen, Calendar} from 'react-feather';

const AdminSideBar = () => {

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav id="sidebar" className={`sidebar js-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <div className="sidebar-content js-simplebar">
          <Link className="sidebar-brand" to="/admin">
            <span className="align-middle">AdminKit</span>
          </Link>

          <ul className="sidebar-nav">
            <li className="sidebar-header">Pages</li>

            <li className="sidebar-item active">
              <Link className="sidebar-link" to="/admin">
                <Sliders className="align-middle" /> <span className="align-middle">Dashboard</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/admin/profile">
                <User className="align-middle" /> <span className="align-middle">Profile</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/admin/forex-chat">
                <MessageSquare className="align-middle" /> <span className="align-middle">Forex Chat</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/admin/trading-journal">
                <BookOpen className="align-middle" /> <span className="align-middle">Trading Journal</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/admin/trading-calendar">
                <Calendar className="align-middle" /> <span className="align-middle">Trading Calendar</span>
              </Link>
            </li>

            <li className="sidebar-header">Tools & Components</li>

            <li className="sidebar-item">
              <a className="sidebar-link" href="ui-buttons.html">
                <Square className="align-middle" /> <span className="align-middle">Buttons</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link" href="ui-forms.html">
                <CheckSquare className="align-middle" /> <span className="align-middle">Forms</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link" href="ui-cards.html">
                <Grid className="align-middle" /> <span className="align-middle">Cards</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link" href="ui-typography.html">
                <AlignLeft className="align-middle" /> <span className="align-middle">Typography</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link" href="icons-feather.html">
                <Coffee className="align-middle" /> <span className="align-middle">Icons</span>
              </a>
            </li>

            <li className="sidebar-header">Plugins & Addons</li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/admin/chart-page">
                <Book className="align-middle" /> <span className="align-middle">Chart Page</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link" href="maps-google.html">
                <Map className="align-middle" /> <span className="align-middle">Maps</span>
              </a>
            </li>
          </ul>

          {/* <div className="sidebar-cta">
            <div className="sidebar-cta-content">
              <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
              <div className="mb-3 text-sm">
                Are you looking for more components? Check out our premium version.
              </div>
              <div className="d-grid">
                <a href="upgrade-to-pro.html" className="btn btn-primary">Upgrade to Pro</a>
              </div>
            </div>
          </div> */}
        </div>
      </SimpleBar>
      {/* <button className="sidebar-toggle js-sidebar-toggle" onClick={toggleSidebar}>
        <i className="hamburger align-self-center"></i>
      </button> */}
    </nav>

  )
}

export default AdminSideBar