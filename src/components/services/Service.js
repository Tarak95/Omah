import React from 'react'
import "./service.css"

const Service = () => {
  return (
    <section id='service'>
        <div className='container'>
            <div className='service_title'>
                <h3>Tahapan Pembelian Properti yang Mudah dan Cepat</h3>
            </div>
            <div className='service_itemss'>
                <div className='service_item'>
                    <div>
                    <div className='service_item_title'>
                        <h3><span id='bl'>Pilih Properti</span></h3>
                        <h3><span id='plus'>01</span></h3>
                    </div>
                    <p>Cari properti yang diinginkan sesuai dengan kriteria anda dan keluarga. Cara memilih properti yang bijak dapat anda baca lebih lanjut di sini</p>
                    </div>
                    <div><a href='#'>Baca lebih Lanjut<i class="fa-solid fa-arrow-right"></i></a></div>
                </div>
                <div className='service_item'>
                    <div>
                    <div className='service_item_title'>
                        <h3><span id='bl'>Proses Booking</span></h3>
                        <h3><span id='plus'>02</span></h3>
                    </div>
                    <p>Pembayaran dalam bentuk sejumlah uang sebagai komitmen memesan unit properti tertentu.</p>
                    </div>
                    <div><a href='#'>Baca lebih Lanjut<i class="fa-solid fa-arrow-right"></i></a></div>
                </div>
                <div className='service_item'>
                    <div>
                    <div className='service_item_title'>
                        <h3><span id='bl'>KPR dan Sertifikasi</span></h3>
                        <h3><span id='plus'>03</span></h3>
                    </div>
                    <p>Pembiayaan KPR untuk pembeli rumah dengan skema pembiayaan jika diperlukan dan dilanjutkan proses sertifkasi HGB.</p>
                    </div>
                    <div><a href='#'>Baca lebih Lanjut<i class="fa-solid fa-arrow-right"></i></a></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service