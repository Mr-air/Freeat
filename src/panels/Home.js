import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Epic from '@vkontakte/vkui/dist/components/Epic/Epic';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import View from '@vkontakte/vkui/dist/components/View/View';
//import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import './Home.css'
//import profile from './panels/profile';



class Home extends React.Component {
	constructor (props) {
	  super(props);
  
	  this.state = {
		activeStory: 'more'
	  };
	  this.onStoryChange = this.onStoryChange.bind(this);
	}
  
	onStoryChange (e) {
	  this.setState({ activeStory: e.currentTarget.dataset.story })
	}
  
	render () {
		console.log(this.props.id)
	  return (
		<Epic id={this.props.id} className="epichome" activeStory={this.state.activeStory} tabbar={
		  <Tabbar className="epichome">
			<TabbarItem className="epichome"
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'feed'}
			  data-story="feed"
			  text="Новости"
			></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'discover'}
			  data-story="discover"
			  text="Поиск"
			></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'messages'}
			  data-story="messages"
			  text="Сообщения"
			></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'notifications'}
			  data-story="notifications"
			  text="Уведомлен."
			></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'more'}
			  data-story="more"
			  text="Ещё"
			></TabbarItem>
		  </Tabbar>
		}>
		  <View id="feed" activePanel="feed">
			<Panel id="feed">  
			  <PanelHeader>Аватар</PanelHeader> 
			  <input></input>
			</Panel>
		  </View>
		  <View id="discover" activePanel="discover">
			<Panel id="discover">
			  <PanelHeader className="epichome">Привычка</PanelHeader>
			</Panel>
		  </View>
		  <View id="messages" activePanel="messages">
			<Panel id="messages">
			  <PanelHeader className="epichome">Сообщения</PanelHeader>
			</Panel>
		  </View>
		  <View id="notifications" activePanel="notifications">
			<Panel id="notifications">
			  <PanelHeader className="epichome">Уведомления</PanelHeader>
			</Panel>
		  </View>
		  <View id="more" activePanel="more">
			<Panel id="more">
			  <PanelHeader className="epichome">Ещё</PanelHeader>
			</Panel>
		  </View>
		</Epic>
	  )
	}
  }


export default Home;
