import React from 'react'
import style from './accessibility.module.css'
import fon from '../../img/fon__pensioner.jpg'
import logo from '../../img/LogoLight.svg'

const Accessibility = () => {
  return (
    <div>
        <div className={style.navbar}>
            <img src={logo} alt="" />
        </div>
        <div className={style.accessibility}>
            <div className={style.fon_txt}>
                <div>
                <h2 align='center'>Accessibility</h2>
                <h2 className={style.txt_content_top} align='center'>inspiring creativity and joy for all</h2>
                </div>
                <img src={fon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Accessibility