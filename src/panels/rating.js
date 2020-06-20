import React from 'react';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import View from '@vkontakte/vkui/dist/components/View/View';
//import Panel from '@vkontakte/vkui/dist/components/Input/Input';
//import View from '@vkontakte/vkui/dist/components/Input/Input';
// import View from '@vkontakte/vkui/dist/components/Input/Input';
// import View from '@vkontakte/vkui/dist/components/Input/Input';
import './rating.css'
import {Panel, PanelHeader, PanelHeaderButton,Tabs,TabsItem,PanelHeaderContext,List,Cell,Search,CellButton,PanelHeaderBack,Separator,Group,HorizontalScroll,Counter } from '@vkontakte/vkui';

export default class Rating extends React.Component {

    constructor (props) {
      super(props);

      this.state = {
        activePanel: 'panel1',
       contextOpened: false,
        mode: 'all',
        activeTab1: 'recomendations',
        activeTab3: 'news',
        
      };

      this.select = this.select.bind(this);
    }

    select(e) {
      const mode = e.currentTarget.dataset.mode;
      this.setState({ mode, contextOpened: false });
    }

    render () {

      return (
        <View activePanel={this.state.activePanel}>
          <Panel id="panel1">
            <PanelHeader>
              <Tabs>
                <TabsItem
                  onClick={() => {
                    if (this.state.activeTab1 === 'news') {
                      this.setState({ contextOpened: !this.state.contextOpened });
                    }
                    this.setState({ activeTab1: 'news' })
                  }}
                  selected={this.state.activeTab1 === 'news'}>
                  Общий
                </TabsItem>
                <TabsItem
                  onClick={() => {
                    this.setState({ activeTab1: 'recomendations', contextOpened: false })
                  }}
                  selected={this.state.activeTab1 === 'recomendations'}
                >
                  Друзья
                </TabsItem>
              </Tabs>
            </PanelHeader>
            <table className="table-ratings">
                 <thead>
                     <tr className="tr-table-rating">
                         <td>№</td>
                         <td>Фамилия Имя</td>
                         <td>Баллов</td>
                     </tr>
                 </thead>
             </table>
            </Panel>
           
            </View>
      )
    }
  }

  