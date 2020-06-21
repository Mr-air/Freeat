import React from 'react';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import './priv.css'
import people from '../img/people.png';
import brain from '../img/brain.png';

const Priv = () => {
    return(
        <div className="wpapper-priv">
        <div className="wrapper-quote"> 
        <h3>«Каждый ваш успех или поражение целиком и полностью определяются образом жизни и устоявшимися привычками»</h3>   
        </div>
    
        <div className="wrapper-priv-eat">
            <div>
            <h5>ЧТО ТЕБЕ ХОЧЕТСЯ СЪЕСТЬ?</h5>
            <select className="select-css">
                <option>Шоколад</option>
                <option>Чипсы</option>
            </select>
            </div>
            <img className="People_img" src={people} alt="personage"/>
        </div>
        <Button className="button-priv">Я сдержусь</Button>
        </div>
    
);
    }

export default Priv