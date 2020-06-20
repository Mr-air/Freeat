import React from 'react';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import './main.css'
import people from '../img/people.png';

const Main = () => {
    return(
        <div className="wpapper-priv">
            <div className="wrapper-quote"> 
              <h3>Супер ты продержался уже <span>2</span> дня. Не сдавайся</h3> 
            </div>
    
           <div className="wrapperm-level">
               <div className="wrapper-progress-level">
              
                   <h5 className="level-up">2</h5>
                   <progress className="progress__level" max="100" value="50"></progress>
                   <h5 className="level-now">1</h5>
                    
                </div>
                  <img className="People_img" src={people} alt="personage"/>
            </div>
           <Button className="button-priv">Я сдержусь</Button>
        </div>
    
);
    }

export default Main