import React from "react";
import "../styles/globals.css";
import Image from "next/image";

const Aboutus = () => {
  return (
    <>
      <div className="about-us">
        <h2>Něco Málo o Nás</h2>
        <div className="karta">
          <p>
            Vítejte na našem webu! Jsme firma TuCode, váš průvodce digitálním
            světem vzdělávání. Od svého založení jsme se zaměřili na poskytování
            kvalitních a relevantních tutoriálů, které pomáhají našim uživatelům
            dosahovat svých cílů a rozvíjet své dovednosti. Naše týmová práce
            spočívá v tom, že vytváříme prostředí, kde každý jednotlivec může
            růst a prosperovat. S vášní a oddaností se snažíme o to, aby naše
            platforma nabízela nejlepší vzdělávací zkušenosti pro všechny naše
            uživatele. Připojte se k nám a začněte svou cestu k úspěchu ještě
            dnes!
          </p>

          <Image
            src="/images/kys.png"
            alt="logo"
            layout="responsive"
            width={400}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default Aboutus;
