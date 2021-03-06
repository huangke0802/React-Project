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
`position:absolute;
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

export const SearchWrapper = styled.div `
		float :left;
		position:relative;
		.zoom{
			&.focused{
				color:#fff;
				background:#777;
			}
			position: absolute;
    right: 10px;
    bottom: 6px;
    color: #999;
    padding: 5px;
    border-radius: 50%;
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
		padding: 0 35px 0 20px;
		color:#666;
		&::placeholder{
			color:#999;
		}
		&.focused{
			width : 250px;
		}
		&.slide-enter{
			transition:all .2s ease-out;
		}
		&.slide-enter-active{
			width:240px;
		}
		&.slide-exit{
			transition:all .2s ease-out;
		}
		&.slide-exit-active{
			width:160px;
		}
	`

export const SearchInfo = styled.div `
	position:absolute;
	left:0;
	top:56px;
	width:240px;
	padding:0 20px;
	box-shadow:0 0 8px rgba(0,0,0,.2);
	z-index:99;
	`

export const SearchInfoTitle = styled.div `
margin-top:20px;
margin-bottom:15px;
line-height:20px;
font-size:14px;
color:#969696;
	`
export const SearchInfoSwitch = styled.div `
float:right;
font-size:13px;
.spin{
	display:block;
	float:left
		font-size:12px;
		margin-right:2px;
		transition:all .2s ease-in;
		transform;rotate(0deg);
		transform-origin:center center;
}
	`
export const SearchInfoItem = styled.a `
padding:0 5px;
line-height:20px; 
font-size:12px;
border:1px solid #ddd;
color:#787878;
border-radius:3px;
display:block;
float:left;
margin-right:10px;
margin-bottom:15px;
	`
export const SearchInfoList = styled.div `
overflow:hidden;
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