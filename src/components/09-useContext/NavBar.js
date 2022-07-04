import React from "react";
import { NavLink, Link } from "react-router-dom";

export const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
			<div className='container-fluid'>
				<Link to='/' className='navbar-brand'>
					UseContext
				</Link>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<NavLink
								activeClassName='active'
								to='/'
								className='nav-link'
								aria-current='page'>
								Home
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink activeClassName='active' to='/about' className='nav-link'>
								About
							</NavLink>
						</li>
						<li className='nav-item'></li>
						<li className='nav-item'>
							<NavLink activeClassName='active' to='/login' className='nav-link'>
								Login
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
