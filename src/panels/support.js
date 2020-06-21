//import React from 'react';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Button from '@vkontakte/vkui/dist/components/Button/Button';


import React, { Component } from 'react';
import './support.css'
export default class Hello extends Component {
  state = {
    first_name: "Иванов",
    last_name: "Иван",
    leevel: "1",
    height: "170",
    weight: "65",
  }

  componentDidMount() {
    fetch(`http://api.vk.com/method/users.get?user_ids=210700286&fields=bdate&access_token=533bacf01e11f55b536a565b57531ac114461ae8736d6506a3&v=5.110`)
      .then(function (response) {
        return response.json();
      })
      .then(
      (result) => {
        let { first_name, last_name, leevel, weight, height } = result.main
        this.setState({
          first_name,
          last_name,
          leevel,
          weight,
          height,
        });
      })
      .catch(function (error) {
        console.log('Request failed', error)
      });
  }
  render() {
    return  (
        <>
        <div className="top__block--level">
            <span>уровень: {this.state.leevel}</span>
        </div>
        <div className="middle__block--users">
        <Avatar className="users-avatar"></Avatar>
        <span>{this.state.first_name}</span>
        <span>{this.state.last_name}</span>
        </div>
        <div className="users__parametr">
            <div>
            <span>Рост:</span><span>{this.state.height}</span>
            </div>
            <div>
            <span>Вес:</span><span>{this.state.weight}</span>
            </div>
            <progress className="progress-users" max="30" value="12"></progress> <span>12/30</span>
        </div>
        <div className="bottom__block--buttons">
            
                <a href="https://vk.com/dietalegko.online"><Button>Помощь диетолога</Button></a>
            
            
                <a href="https://neurolex-center.ru"><Button> Помощь психолога</Button></a>
           
            
                <a href="https://docviewer.yandex.ru/view/243740326/?*=6SLRDQRKZQQJVzzwiEQeg5LHGUV7InVybCI6Imh0dHA6Ly93d3cucHNldWRvbG9neS5vcmcvaGVhbHRoL0luZ2VybGVpYl9Qb2xueXlfc3ByYXZvY2huaWtfYW5hbGl6b3YyLnBkZiIsInRpdGxlIjoiSW5nZXJsZWliX1BvbG55eV9zcHJhdm9jaG5pa19hbmFsaXpvdjIucGRmIiwibm9pZnJhbWUiOnRydWUsInVpZCI6IjI0Mzc0MDMyNiIsInRzIjoxNTkyNzAzODQzNTYwLCJ5dSI6IjMwNjkyNzY5NjE1NTQ4MDM4NDMiLCJzZXJwUGFyYW1zIjoibGFuZz1ydSZ0bT0xNTkyNzAzODM3JnRsZD1ydSZuYW1lPUluZ2VybGVpYl9Qb2xueXlfc3ByYXZvY2huaWtfYW5hbGl6b3YyLnBkZiZ0ZXh0PSVEMCVCMCVEMCVCRCVEMCVCMCVEMCVCQiVEMCVCOCVEMCVCNyVEMSU4QislRDAlQkYlRDAlQjQlRDElODQmdXJsPWh0dHAlM0EvL3d3dy5wc2V1ZG9sb2d5Lm9yZy9oZWFsdGgvSW5nZXJsZWliX1BvbG55eV9zcHJhdm9jaG5pa19hbmFsaXpvdjIucGRmJmxyPTExMDA4Jm1pbWU9cGRmJmwxMG49cnUmc2lnbj01MTQyNWI3M2E3M2ZmMTM0ZmFkY2I4MTZiMzZlNTgxMSZrZXlubz0wIn0%3D&lang=ru">
                <Button> Результаты Анализа </Button> 
                </a>
            
        </div>
        </>
    );
  }
}