import React from 'react';
import Navbar from './Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

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
