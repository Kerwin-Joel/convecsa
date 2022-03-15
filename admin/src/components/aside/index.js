import React from 'react'
import { Link } from "react-router-dom";

import { AsideContainer,Logo } from './style';
import { Node } from '../../resources/svgs/Node';

export const Aside = () => {
  return (
    <AsideContainer>
      <Logo>
        <Node width={30}/>
        <h3>Convecsa</h3>
      </Logo>
      <hr />
      <div>
        <ul>
          <li primary={true}>
            <Node width={20}/>
            <Link to="/">Section 1</Link>
          </li>
          <li>
            <Node width={20}/>
            <Link to="/sectionTwo">Section 2</Link>
          </li>
          <li>
            <Node width={20}/>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Node width={20}/>
            <a href="google.com">Section 4</a>
          </li>
          <li>
            <Node width={20}/>
            <a href="google.com">Section 5</a>
          </li>
          <li>
            <Node width={20}/>
            <a href="google.com">Section 6</a>
          </li>
          <li>
            <Node width={20}/>
            <a href="google.com">Section 7</a>
          </li>
          <li>
            <Node width={20}/>
            <a href="google.com">Section 8</a>
          </li>
        </ul>
      </div>
    </AsideContainer>
  )
}
