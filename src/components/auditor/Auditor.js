import React from 'react'
import "./auditor.css"

const Auditor = () => {
  return (
    <section id='auditor'>
        <div className='container'>
            <div className='auditor_title'>
                <h4>Pilihan Auditor</h4>
                <h3>Residen Berbagai Kota</h3>
            </div>
            <div className='auditor_items'>
                <div className='auditor_item'>
                    <div className='auditor_item_img'>
                        <img src='images/auditor_one.png'/>
                    </div>
                    <div className='auditor_item_text'>
                        <h4>Magnolia Surabaya</h4>
                        <p>Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136</p>
                    </div>  
                </div>
                <div className='auditor_item'>
                    <div className='auditor_item_img'>
                        <img src='images/auditor_two.png'/>
                    </div>
                    <div className='auditor_item_text'>
                        <h4>Pinang Residences</h4>
                        <p>Jl. Deplu Raya No.16 RT.5, RW.003 Bintaro, Pesanggrahan, Jakarta Selatan 12330</p>
                    </div>  
                </div>
                <div className='auditor_item'>
                    <div className='auditor_item_img'>
                        <img src='images/auditor_three.png'/>
                    </div>
                    <div className='auditor_item_text'>
                        <h4>South Grove</h4>
                        <p>1 No.1, RT.1/RW.1, Lb. Bulus, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440</p>
                    </div>  
                </div>
            </div>
        </div>
    </section>
  )
}

export default Auditor