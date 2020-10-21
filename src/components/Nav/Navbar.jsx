import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background-color:blue;
  color:white;
  font-weight:bold;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
  a{
    color:white;
    text-decoration:none;
  }
`
const Rightbar = styled.ul `
      display:inline-flex;
      padding:18px;
`
const RightbarItems = styled(Link)`
    list-style-type:none;
    padding-left:10px;
`
const Navbar = () => {
  return (
    <Nav>
      <Rightbar>
      <RightbarItems to="/products">Products</RightbarItems>
      <RightbarItems to="/brands">Brands</RightbarItems>
      <RightbarItems to="/deals">Deals</RightbarItems>
      <RightbarItems to="/services">Services</RightbarItems>
      </Rightbar>
      <Burger />
    </Nav>
  )
}

export default Navbar
