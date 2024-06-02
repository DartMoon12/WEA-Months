
import "../styles/globals.css";


export default function Contacts() {
  return (
    <div className="container">
      <h2>Kontakty</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card-info">
            <h3>Adresa</h3>
            <p>Ulice: U Tučného Dědka</p>
            <p>Město: Kouzelný město Praha aha</p>
            <p>PSČ: 52525</p>
          </div>
          <div className="card-info">
            <h3>Telefon</h3>
            <p>Telefon: +420 132 465 798</p>
          </div>
          <div className="card-info">
            <h3>Email</h3>
            <p>Email: TuCode@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}