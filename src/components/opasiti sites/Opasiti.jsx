import React from 'react'
import style from './opasiti.module.css'
import tiktoklogo from '../../img/LogoLight.svg'
import fon from '../../img/fon_opasiti.jpg'
import pod from '../../img/podchetnost.png'
import ot from '../../img/otchety.png'
import nashi from '../../img/nashi__oba.png'

const Opasiti = () => {
  return (
    <div>
        <div className={style.Opasiti__navbar}>
            <img src={tiktoklogo} alt="" />
            <div className={style.navbar__left_content}>
            <li>Главная</li>
            <li>Наши обязательства</li>
            <li>Отчеты</li>
            <input type="text" placeholder='Поиск'/>
            </div>
        </div>
        <div className={style.opasiti}>
            <h2></h2>
            <div className={style.op__wrapper}>
                <h2>Центр прозрачности в TikTok</h2>
                <img src={fon} alt="" />
            </div>
            <div className={style.bloki}>
                <div className={style.bloki__content}>
                    <h2><small>Наши обязательства</small></h2>
                    <p>Наша миссия в TikTok – вдохновлять на творчество и приносить радость. Мы всегда стремимся заслужить доверие нашего сообщества и выстраивать наши отношения ответственным, справедливым и открытым образом.</p>
                    <button>Узнать больше</button>
                </div>
                <img src={nashi} alt="" />
            </div>
            <div className={style.bloki}>
                <div className={style.bloki__content}>
                    <h2><small>Отчеты</small></h2>
                    <p>TikTok регулярно публикует отчеты о прозрачности, чтобы поделиться информацией о том, как мы соблюдаем Правила сообщества и реагируем на запросы правоохранительных органов на предоставление информации, запросы со стороны органов власти об удалении контента и запросы об удалении контента, нарушающего права интеллектуальной собственности. Вы можете узнать больше о том, какие действия мы предпринимаем для того, чтобы TikTok оставался безопасным и увлекательным пространством.</p>
                    <button>Узнать больше</button>
                </div>
                <img src={ot} alt="" />
            </div>
            <div  className={style.bloki}>
                <div className={style.bloki__content}>
                <h2><small>Центры прозрачности и подотчетности</small></h2>
                <p>В глобальных центрах прозрачности и подотчетности TikTok приглашенные гости могут узнать, каким образом мы модерируем и рекомендуем контент, обеспечиваем безопасность нашей платформы и защищаем частную жизнь пользователей. Кроме того, посетители могут ознакомиться с исходным кодом и узнать, как работает алгоритм TikTok.</p>
                <button>Узнать больше</button>
                </div>
                <img src={pod} alt="" />
            </div>
            <div className={style.opasiti__txt_content}>
                <h2><strong>TikTok и ByteDance</strong></h2>
                <p className={style.txt_p}>TikTok – это флагманский продукт ByteDance Ltd., глобальной технологической компании, управляющей целым рядом контент-платформ, которые информируют, обучают, развлекают и вдохновляют людей, говорящих на разных языках и представляющих разные культуры и географические регионы. В компании работают 110 000 сотрудников, и ее офисы расположены в более чем 30 странах.</p>
                <p>TikTok была открыта в мае 2017 года и стала ведущей платформой для размещения короткометражных видео, снятых на мобильные телефоны. TikTok помогает найти сообщество, разделяющее общие интересы, и предоставляет пользователям пространство для творческого самовыражения, а также возможность открыть для себя окружающий мир. Как глобальная платформа TikTok охватывает большинство основных рынков, за исключением Китая, где ByteDance предлагает другое приложение для просмотра короткометражных видео под названием Douyin. Офисы TikTok работают по всему миру, в том числе в Лос-Анджелесе, Кремниевой долине, Нью-Йорке, Дублине, Лондоне, Париже, Берлине, Дубае, Сингапуре, Джакарте, Сеуле и Токио.</p>
                <p className={style.txt_content_p}>TikTok осуществляет свою деятельность через дочерние предприятия ByteDance Ltd. при поддержке глобальных институциональных инвесторов, включая Coatue, General Atlantic, KKR, Sequoia Capital, Susquehanna International и Softbank.</p>
            </div>
        </div>
    </div>
  )
}

export default Opasiti