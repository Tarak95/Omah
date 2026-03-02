import React from 'react'
import "./favorit.css"

const Favorit = () => {
  return (
    <section id='favorit'>
        <div className='container'>
            <div className='favorit_title'>
                <h4>Pilihan konsumen</h4>
                <h3>Residen Favorit</h3>
            </div>
            <div className='favorit_items'>
                <div className='favorit_left'>
                    <div className='f_one'>
                        <img src='images/favorit_one.png'/>
                    </div>
                    <div className='f_two'>
                        <img src='images/favorit_two.png'/>
                    </div>  
                </div>
                <div className='favorit_right'>
                    <div className='favorit_text'>
                        <h3>Bangunan yang dirancang oleh Aristektur Handal</h3>
                        <p>Tanpa diragukan, properti yang disediakan dalam webiste kami merupakan hasil kerjasama secara profesional dengan para Arsitektur ternama dan Developer yang terpercaya.</p>
                    </div>
                    <div className='favorit_btn'>
                        <button className='light_btn'><i class="fa-sharp fa-solid fa-phone"></i>Hubungi Kami</button>
                        <button>Explore lebih banyak</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Favorit