import React from 'react';
import Image from 'next/image';


export default function Registration() {
    return (

        <div className="container mt-5"> 
          <div className="tabs">
            <div className="row justify-content-center m-5">
            <div className="col-md-6 col-sm-12 card-content">
                <h1 className='text-center m-5'>Registrace</h1>
                <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                    </label>
                    <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword1" className="form-label">
                    Heslo
                    </label>
                    <input
                    type="password"
                    className="form-control"
                    id="InputPassword1"
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                    type="checkbox"
                    className="form-check-input"
                    id="Check1"
                    />
                    <label className="form-check-label" htmlFor="Check1">
                    Souhlasím s podmínkami
                    </label>
                </div>
                <button type="submit" className="btn btn-warning">
                    Registrovat
                </button>
                </form>
            </div>
            <div className="col-md-6 col-sm-12">
                <Image src='/images/registr.jpg' width={500} height={500} alt='registrace' />
            </div>
            </div>
          </div>
        </div>
    )
    }