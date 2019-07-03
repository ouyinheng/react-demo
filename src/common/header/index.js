import React from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addtion,
  Button,
  SearchGroup
} from './style.js';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import * as actionCreates from './store/actionCreates'
const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo href="/"/>
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载APP</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right iconfont icon-Aa"></NavItem>
        <SearchGroup>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              className={ props.focused ? 'focused' : ''}
              onFocus={ props.handleInputFocus }
              onBlur = { props.handleInputBlur }
            ></NavSearch>
          </CSSTransition>
          <i className={ props.focused ? 'focused iconfont icon-soushuo' : 'iconfont icon-soushuo'}></i>
        </SearchGroup>
      </Nav>
      <Addtion >
        <Button className="writting">
          <span className="iconfont icon-feather-blur-light-b"></span>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addtion>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreates.searchFocus)
    },
    handleInputBlur() {
      dispatch(actionCreates.searchBlur)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);