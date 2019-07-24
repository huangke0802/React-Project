import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
	HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList
} from './style';

import { CSSTransition } from 'react-transition-group';

const getListArea = (show) => {
	if (show) {
		return (
			<SearchInfo>
				<SearchInfoTitle>
					热门搜索
							<SearchInfoSwitch>换一批</SearchInfoSwitch>
				</SearchInfoTitle>
				<SearchInfoList>
					<SearchInfoItem>教育</SearchInfoItem>
					<SearchInfoItem>教育</SearchInfoItem>
					<SearchInfoItem>教育</SearchInfoItem>
					<SearchInfoItem>教育</SearchInfoItem>
					<SearchInfoItem>教育</SearchInfoItem>
					<SearchInfoItem>教育</SearchInfoItem>
					<SearchInfoItem>教育</SearchInfoItem>
					<SearchInfoItem>教育</SearchInfoItem>
					<SearchInfoItem>教育</SearchInfoItem>
				</SearchInfoList>
			</SearchInfo>
		)
	} else {
		return null;
	}
}

const Header = (props) => (
	<HeaderWrapper>
		<Logo />
		<Nav>
			<NavItem className='left active'>首页</NavItem>
			<NavItem className='left'>下载APP</NavItem>
			<NavItem className='right'>登录</NavItem>
			<NavItem className='right'>
				<i className="iconfont">&#xe636;</i>
			</NavItem>
			<SearchWrapper>
				<CSSTransition
					in={ props.focused }
					timeout={ 2000 }
					classNames="slide"
				>
					<NavSearch
						className={ props.focused ? "focused" : "" }
						onFocus={ props.handleInputFocus }
						onBlur={ props.handleInputBlur }></NavSearch>
				</CSSTransition>
				<i
					className={ props.focused ? "focused iconfont" : "iconfont" }
				>&#xe63d;</i>
				{
					getListArea(props.focused)
				}
			</SearchWrapper>
		</Nav>
		<Addition>
			<Button className="writting">
				<i className="iconfont">&#xe602;</i>
				写文章</Button>
			<Button className="reg">注册</Button>
		</Addition>

	</HeaderWrapper>
)

const mapStateToProps = (state) => {
	return {
		// focused: state.get('header').get('focused')
		focused: state.getIn(['header', 'focused'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur())
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);