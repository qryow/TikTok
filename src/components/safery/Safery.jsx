import React from 'react'
import style from './safery.module.css'
import logo from '../../img/LogoLight.svg'
import fon from '../../img/fon_jaloba.jpg'
import rk1 from '../../img/руководвство_1.png'
import rk2 from '../../img/руководвство_2.jpeg'
import rk3 from '../../img/руководвство_3.png'
import rk4 from '../../img/руководвство_4.png'
import foto from '../../img/Nissan skyline r34.png'
import logoa from '../../img/screenshot.png'

const Safery = () => {
  return (
    <div className={style.safary}>
        <div className={style.safary__navbar}>
            <img src={logo} alt="" />
            <div className={style.safary__navbar_left}>
                <li>Главная</li>
                <li className={style.a}>Темы</li>
                <li className={style.v}>Руководства</li>
                <input type="text" placeholder='Поиск'className={style.as}/>
            </div>
        </div>
        <div className={style.safary}>
            <div className={style.safary__top_content}>
                <h2>Центр Безопасности</h2>
                <img src={fon} alt="" />
            </div>
        </div>
        <div className={style.scroll__platform}>
            <button className={style.btn_1}>Забота о животных</button>
            <button className={style.btn_2}>Что нужно знать о психоактивных веществах</button>
            <button className={style.btn_3}>Борьба с ненавистью в TikTok</button>
            <button className={style.btn_4}>Мошенничество</button>
            <button className={style.btn_5}>Нарушение пищевого поведения</button>
            <button className={style.btn_6}>TikTok против сексуальной эксплуатации несовершеннолетних</button>
            <button className={style.btn_7}>Ресурсы для поддержки жертв сексуального насилия</button>
            <button className={style.btn_8}>Предупреждение травли</button>
            <button className={style.btn_9}>COVID-19</button>
            <button className={style.btn_10}>Выборы</button>
        </div>
        <div className={style.safary__dop_infa}>
            <h2>Руководства</h2>
            <p>TikTok - это платформа для творчества и самовыражения, и мы предлагаем ряд инструментов и настроек, которые помогут вам управлять вашим взаимодействием с ней. Мы рекомендуем ознакомиться с приведенными ниже руководствами, которые помогут вам узнать больше о нашем подходе к безопасности, конфиденциальности и защите на TikTok. Вы также найдете полезную информацию для родителей, опекунов и новых пользователей.</p>
        </div>
        <div className={style.management__block}>
            <button>Реклама и ваши данные <img src={rk1} alt="" /></button>
            <button>Руководство по благополучию<img src={rk2} alt="" /></button>
            <button>Руководство для новых пользователей<img src={rk3} alt="" /></button>
            <button>Руководство для ответственных за воспитание несовершеннолет... <img src={rk4} alt="" /></button>
        </div>
        <div className={style.video__content}>
            <div className={style.video__left_content}>
                <h2>Установки безопасности и конфиденциальности</h2>
                <p>Создание благоприятной среды, в которой каждый чувствует себя безопасно и комфортно, является нашим главным приоритетом. Установки нашего приложения помогают вам управлять своим аккаунтом, контентом и настройками конфиденциальности, в том числе определять, кто может просматривать видео, ставить под ними лайки или комментарии. Узнайте больше о настройках, которые позволяют вам контролировать ваше взаимодействие с TikTok. Эти настройки могут отличаться в зависимости от вашего региона и версии приложения.</p>
                <button>См. настройки</button>
            </div>
            <div className={style.video}>
                {/* здесь видео поставьте назывется чо то там расия*/}
                <img src={foto} alt="" className={style.video_content}/>
            </div>
        </div>
        <div className={style.news}>
            <h2></h2>
            <div className={style.news__blok}>
                <button>
                    <img src={logoa} alt="" />
                    <div className={style.button_txt_content}>
                    <h2>#ТикТокдляСемьи: TikTok совместно с популярными</h2>
                    <span>2/16/2022</span>
                    </div>
                </button>
                <button>
                    <img src={logoa} alt="" />
                    <div className={style.button_txt_content}>
                    <h2>TikTok обновляет Правила сообщества для обеспечения</h2>
                    <span>2/9/2022</span>
                    </div>
                </button>
                <button>
                    <img src={logoa} alt="" />
                    <div className={style.button_txt_content}>
                    <h2>TikTok запустил Центр прозрачности</h2>
                    <span>12/8/2021</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
  ) 
}

export default Safery