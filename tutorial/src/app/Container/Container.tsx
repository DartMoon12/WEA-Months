// pages/Container.tsx

import React from 'react';
import Link from 'next/link';

interface NavItem {
  title: string;
  link: string;
}

interface NavbarProps {
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Tutorial</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {items.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={item.link}>
                  {item.title}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <Link href="/login">
                <a className="nav-link">Přihlásit se</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/register">
                <a className="nav-link">Registrovat</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

interface ContainerProps {
  children: React.ReactNode;
  navbarItems: NavItem[];
}

const Container: React.FC<ContainerProps> = ({ children, navbarItems }) => {
  return (
    <>
      <Navbar items={navbarItems} />
      <div className="container">
        {children}
      </div>
    </>
  );
};

export default Container;
