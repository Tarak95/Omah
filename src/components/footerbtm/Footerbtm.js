import React from 'react'
import "./footerbtm.css"

const Footerbtm = () => {
  return (
    <footer>
        <div className='container'>
            <div className='footer_btm_item'>
                <div className='wlogo'>
                    <img src='images/wlogo.png'/>
                </div>
                <div className='footerbtm_icon'>
                    <ul>
                        <li><a href='#'><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href='#'><i class="fa-brands fa-facebook"></i></a></li>
                        <li><a href='#'><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href='#'><i class="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footerbtm