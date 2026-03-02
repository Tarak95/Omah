import React from 'react'
import "./footertop.css"

const Footertop = () => {
  return (
    <section id='footertop'>
    <div className='container'>
        <div className='footertop_item'>
            <div className='footertop_left'>
                <div className='footertop_title'>
                    <h3>Hubungi Kami</h3>
                </div>
                <div className='footertop_left_item'>
                    <div className='item_one'>
                        <div className='item_row'>
                            <div className='item_icon'>
                                <i class="fa-sharp fa-solid fa-phone"></i>
                            </div>
                            <div className='item_info'>
                                    <h4>Call</h4>
                                    <h4>+6281232936733</h4>
                            </div>
                        </div>
                        <div className='item_left_btn'>
                            <button>Call Now</button>
                        </div>
                    </div>
                    <div className='item_two'>
                        <div className='item_row'>
                            <div className='item_icon'>
                            <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div className='item_info'>
                                    <h4>email</h4>
                                    <h4>omahindev@gmail.com</h4>
                            </div>
                        </div>
                        <div className='item_left_btn'>
                            <button>Call Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footertop_right'>
                <div className='footertop_title'>
                    <h3><span className='ml'>Penghargaan</span></h3>
                </div>
                <div className='footertop_right_item'>
                    <div>
                        <img src='images/footer_top_one.png'/>
                    </div>
                    <div className='ml'>
                        <img src='images/footer_top_two.png'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Footertop