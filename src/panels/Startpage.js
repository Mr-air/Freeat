import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import './startpage.css';
const Startpage = ({id, go}) => {
    return (
    <Panel  id={id} onClick={go} data-to="home">
        <Div className="Wraper--span_startpage">
    <span className="span_startpage" >Готов к победе</span>
    </Div>
    </Panel> 
    );
}
export default Startpage;