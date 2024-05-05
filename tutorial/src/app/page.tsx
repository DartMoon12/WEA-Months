import React from 'react';
import Navbar from './Navbar/Navbar';


const App: React.FC = () => {
  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'HTML', link: '/HT' },
    { title: 'CSS', link: '/CS' },
    { title: 'Javascript', link: '/Javascript' }
  ];

  return (
    <div>
      <Navbar items={navItems} />
      {/* Other content of your application */}
    </div>
  );
};

export default App;
