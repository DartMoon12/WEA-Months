import React from 'react'
import './aboutus.css'

const Aboutus = () => {
    
  return (
    
      <div className="card">
        <img src="../public/images/" alt="" />
        <div className="card-body text-center">
          <h2 className="card-title">Něco málo o nás</h2>
          <p className="card-text">Vítejte na našem webu! Jsme firma TuCode, váš průvodce digitálním světem vzdělávání.
                                   Od svého založení jsme se zaměřili na poskytování kvalitních a relevantních tutoriálů, které pomáhají našim uživatelům dosahovat svých cílů a rozvíjet své dovednosti.
                                   Naše týmová práce spočívá v tom, že vytváříme prostředí, kde každý jednotlivec může růst a prosperovat. S vášní a oddaností se snažíme o to, aby naše platforma nabízela nejlepší vzdělávací zkušenosti pro všechny naše uživatele.
                                   Připojte se k nám a začněte svou cestu k úspěchu ještě dnes!
          </p>
          <a href="#" className="btn btn-primary">Zpět</a>
        </div>
      </div>
  
    
    

  );
  
}

export default Aboutus