import React, { useState, useEffect } from 'react';
import style from './InfoStyles/Info.module.css';
import caret from '../../img/Caretop.svg';

const InfoTop = () => {
const words = ['researchers', 'communities', 'creators'];
const [wordIndex, setWordIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const [text, setText] = useState('');

useEffect(() => {
    let timer;

    const type = () => {
        const currentWord = words[wordIndex];

        if (isDeleting) {
        if (charIndex > 0) {
            setText(currentWord.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
        } else {
            setIsDeleting(false);
            setWordIndex((wordIndex + 1) % words.length);
            timer = setTimeout(() => {
                setIsDeleting(true);
                timer = setTimeout(type, 1000);
            }, 1000);
            }
        } else {
            if (charIndex < currentWord.length) {
            setText(currentWord.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
        } else {
            timer = setTimeout(() => {
            setIsDeleting(true);
            timer = setTimeout(type, 1000);
            }, 1000);
            }
        }
    };

    timer = setTimeout(type, 100);

    return () => {
        clearTimeout(timer);
        };
    }, [wordIndex, charIndex, isDeleting]);

return (
        <div className={style.InfoTop}>
            <div className={style.backtop}>
                <img src={caret} alt="" /><h1>Develop for <span>{text}<span>_</span></span></h1>
            </div>
        </div>
    );
};

export default InfoTop;
