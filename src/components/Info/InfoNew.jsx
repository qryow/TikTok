import React, { useEffect, useState } from 'react';
import style from './InfoStyles/Info.module.css';
import post from '../../img/content-posting.png';
import post2 from '../../img/content-posting(2).png';
import post3 from '../../img/content-posting(3).png';

function AccordionItem({ title, content, isOpen, toggleAccordion }) {
  return (
    <div className={`${style.accordion__item} ${isOpen ? style.accordion__item_show : ''}`}>
      <div className={style.accordion__header} onClick={toggleAccordion}>
        {title}
      </div>
      <div className={style.accordion__body} id={title}>
        <div className={style.accordion__content}>
          {content}
        </div>
      </div>
    </div>
  );
}

function InfoNew() {
  const [accordions, setAccordions] = useState([
    { title: 'Introducing our Content Posting API', content: 'Our new Content Posting API offers new ways to share videos from your web and cloud apps to TikTok. Create a seamless experience for content creators by posting directly to their TikTok account or by uploading video drafts for further editing.', isOpen: true, image: post },
    { title: 'TikTok\'s OpenSDK is now on GitHub', content: 'Our OpenSDK is now hosted on GitHub. Explore the source code or integrate with the SDK to build mobile authentication and sharing experiences for iOS and Android.', isOpen: false, image: post2 },
    { title: 'Collaborating with organizations', content: 'Smoothly collaborate on developer projects with our latest feature. Register your apps under organizations to obtain shared access for enhanced teamwork.', isOpen: false, image: post3 },
  ]);

  const toggleAccordion = (index) => {
    setAccordions((prevAccordions) => {
      const updatedAccordions = prevAccordions.map((accordion, i) => ({
        ...accordion,
        isOpen: i === index ? true : false, // Установите isOpen в true для выбранной кнопки, чтобы её нельзя было закрыть
      }));
      return updatedAccordions;
    });
  };

  return (
    <div className={style.InfoNew}>
      <h1>What's new?</h1>
      <div className={style.accord}>
        <div id={style.accordion} className={style.accordion} style={{ maxWidth: '30rem', margin: '1rem auto' }}>
          {accordions.map((accordion, index) => (
            <AccordionItem
              key={index}
              title={accordion.title}
              content={accordion.content}
              isOpen={accordion.isOpen}
              toggleAccordion={() => toggleAccordion(index)}
              image={accordion.image}
            />
          ))}
        </div>

        <div className={style.infoImg}>
          {accordions.map((accordion, index) => (
            <img
              key={index}
              src={accordion.image}
              alt={`Image for ${accordion.title}`}
              style={{ display: accordion.isOpen ? 'block' : 'none' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoNew;