import React from 'react';

interface NavItem {
  title: string;
  link: string;
}

interface NavbarProps {
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="text-white hover:text-gray-300">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
