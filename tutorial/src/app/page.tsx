import React from 'react';
import Container from './Container/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const Page: React.FC = () => {
  // Definujeme položky pro navigační panel
  const navbarItems = [
    { title: 'Domů', link: '/' },
    { title: 'HTML', link: '/HT' },
    { title: 'CSS', link: '/CS' },
    { title: 'Javascript', link: '/Javascript' }
  ];

  return (
    <Container navbarItems={navbarItems}>
      <div className="page-content">
        {/* Obsah stránky */}
        <h1>Vítej na našem webu!</h1>
        <p>Toto je obsah naší úvodní stránky.</p>
      </div>
    </Container>
  );
};

export default Page;
