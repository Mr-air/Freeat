import React from 'react';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import './profile.css'

const Profile = () => {
    return(
        <div className="wrapper-profile"> 
        <h2>Расскажите о себе </h2>
        
            <div className="wrapper-input">
        <span className="icon-caption">Введите Рост</span>
        <Input></Input>
        </div>
        <div className="wrapper-input">
        <span className="icon-caption">Введите Вес</span>
        <Input></Input>
        </div>
        <span className="icon-caption">Имеются ли противопоказания</span>
        <input type="checkbox" className="checkbox"></input>
        <Input className="protiv"></Input>
        <div className="wrapper-button">
        <Button className="profile-button">Сохранить</Button>
        </div>

        
    </div>
    
);
    }

export default Profile