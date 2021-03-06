import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { logout } from '../store/actions';

const NavBar = ({ auth, logout }) => (
    <div className='navbar'>
        <div className="container">
            <ul className='navbar-container'>
                <li>
                    <Link className='navbar-brand navbar-item' to='/'>Home</Link>
                </li>
                { !auth.isAuthenticated &&
                    <Fragment>
                        <li>
                            <Link className='navbar-item' to='/register'>Register</Link>
                        </li>
                        <li>
                            <Link className='navbar-item' to='/login'>Login</Link>
                        </li>
                    </Fragment>
                }
                { auth.isAuthenticated &&
                    <Fragment>
                        <li>
                            <Link className='navbar-item' to='/poll/new'>New poll</Link>
                        </li>
                        <li>
                            <span className='navbar-item' onClick={logout}>Logout</span>
                        </li>
                    </Fragment>
                }
            </ul>
            {auth.isAuthenticated && (<p className='navbar-user'>Logged in as {auth.user.username}</p>)}
        </div>
    </div>
);

export default connect(
    store => ({auth: store.auth}),
    {logout}
)(NavBar);