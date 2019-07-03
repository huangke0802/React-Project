import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div `
	width : 100%;
	height:58px;
	border-bottom : 1px solid #f0f0f0;
	position:relative;
	`

export const Logo = styled.a.attrs({
  href: '/'
})
`
		position:absolute;
		top:0;
		left:0;
		display:block;
		height:56px;
		width:100px;
		background:url(${logoPic});
		background-size:contain;
	`;

export const Nav = styled.div `
	width:960px;
	padding-right:70px;
	box-sizing;border-box;
	height:100%; 
	margin:0 auto;
	`;

export const NavItem = styled.div `
		line-height:56px;
		padding:0 15px;
		font-size:17px;
		color:#333;
		&.left{
			float:left;
		}
		&.right{
			float:right;
			color:#969696;
		}
		&.active{
			color:#ea6f5a;
		}
	`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})
`	width:160px;
		height:38px;
		margin-top:9px;
		padding:0 20px;
		border:1px solid #eee;
		outline:none;
		border-radius:40px;
		background:#eee;
		font-size:14px;
		box-sizing: border-box;
		&::placeholder{
			color:#999;
		}
	`

export const Addition = styled.div `
		position:absolute;
		right:0;
		top:0;
		height:56px;
	`

export const Button = styled.button `
		float:right;
		line-height:38px;
		margin-top:9px;
		padding:0 20px;
		border:1px solid #ec6149;
		border-radius:19px;
		outline:none;
		margin-right:20px;
		background:#fff;
		font-size:14px;
		&.reg{
			color:#ec6149;
		}
		&.writting{
			color:#fff;
			background:#ec6149;
		}
	`;