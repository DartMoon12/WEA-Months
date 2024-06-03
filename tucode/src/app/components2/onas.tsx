import React from 'react';

export default function Onas() {
  return (
    <div className="onas-section">
      <div className="container">
        <h2 className="onas-heading p-5">O Nás</h2>
        <article className="onas-article">
          <div className="onas-text">
           
            <h3 className="onas-story-heading">Příběh za našim úspěchem</h3>
            <p className="onas-description">
              Vítejte na našem webu! Jsme firma TuCode, váš průvodce digitálním světem vzdělávání.
              Od roku 2015 poskytujeme kvalitní tutoriály, které pomáhají našim uživatelům rozvíjet své dovednosti v programování.
              Naše platforma využívá moderní technologie jako HTML5, CSS3, JavaScript, Node.js a Python.
              Nabízíme kurzy pro všechny úrovně, od začátečníků po pokročilé vývojáře.
              Připojte se k nám a začněte svou cestu k úspěchu ještě dnes!
              S TuCode získáte kvalitní vzdělání a podporu na každém kroku své kariéry.
            </p>
            <h4 className="onas-partners-heading">Partneři kteří se podíleli na vzniku našeho projektu:</h4>
            <ul className="onas-partners-list">
              <li className="onas-partner">SPSUL Resllova 5</li>
              <li className="onas-partner">Starej fotr</li>
              <li className="onas-partner">Šimon Lavička</li>
            </ul>
          </div>
          <div className="onas-image-wrapper">
            <img
              src="/images/city.jpg"
              alt="Downtown of a big city"
              className="onas-image"
            />
          </div>
        </article>
      </div>
    </div>
  );
}
