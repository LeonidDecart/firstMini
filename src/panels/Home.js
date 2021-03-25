import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import together from '../img/together.png';
import sofiya from '../img/sofiya.png';
import leonid from '../img/leonid.png';

import './Photo.css';
const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Наше знакомство 🥰</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}		
		<Group header={<Header mode="primary">Photos</Header>}>
			<Cell>
				<span>
					<img className="Photo" src={sofiya} />   <img className="Photo" src={leonid}/> 
				<p>     Это Сонечка---------------------------------------------а тут я))</p>
				 </span>				
				
			</Cell>
			  <Cell>			  
				  Совместное фото
				  <img className="Photo" src={together}/>
			  </Cell>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;