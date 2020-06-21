import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Epic from '@vkontakte/vkui/dist/components/Epic/Epic';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import View from '@vkontakte/vkui/dist/components/View/View';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import './Home.css'



import Profile from './profile';
import Priv from './priv';
import Main from './main';
import Rating from './rating';
import Support from './support';

class Home extends React.Component {
	constructor (props) {
	  super(props);
  
	  this.state = {
		activeStory: 'main'
	  };
	  this.onStoryChange = this.onStoryChange.bind(this);
	}
  
	onStoryChange (e) {
	  this.setState({ activeStory: e.currentTarget.dataset.story })
	}
  
	render () {
	  return (
		<Epic id={this.props.id}  activeStory={this.state.activeStory} tabbar={
		  <Tabbar className="epichome">
			<TabbarItem className="epichome"
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'feed'}
			  data-story="feed"
			  text="Профиль"
			></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'discover'}
			  data-story="discover"
			  text="Привычка"
			></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'main'}
			  data-story="main"
			  text="Главная"
			></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'notifications'}
			  data-story="notifications"
			  text="Рейтинг"
			></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'more'}
			  data-story="more"
			  text="Поддержка"
			></TabbarItem>
		  </Tabbar>
		}>
		  <View className="epic" id="feed" activePanel="feed">
			  
			<Panel id="feed">  
			
			  
			  <Profile/>
			</Panel>
		  </View>
		  <View id="discover" activePanel="discover">
			<Panel id="discover">
			  <Priv/>
			</Panel>
		  </View>
		  <View id="main" activePanel="main">
			<Panel id="main">
			  <Main/>
			</Panel>
		  </View>
		  <View id="notifications" activePanel="notifications">
			<Panel id="notifications">
               <Rating/>
			</Panel>
		  </View>
		  <View id="more" activePanel="more">
			<Panel id="more">
              <Support/>
			</Panel>
		  </View>
		</Epic>
	  )
	}
  }


export default Home;
