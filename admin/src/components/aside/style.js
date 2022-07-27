import styled, { css } from 'styled-components'

export const AsideContainer = styled.aside`
  width: max-content;
  background-image: linear-gradient(195deg,#42424a,#191919);
  color: white;
  margin-right:5%;
  height: 90vh;
  border-radius: 10px;
  
  & div{
    padding: 0 20px;
  }
  & hr{
    background-color: #ffffff94;
    opacity: 0.5;
    margin: 0;
    padding: 0;
    height: 1px;
    border: none;
  }
  
  & li {
    ${props => props.primary && css`background: #080c1f`}
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 6px 20px;
    margin: 2.5px 0;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;

    &:hover{
      background: #525256
    }

    & a {
      color: white;
      text-decoration: none;
      font-size: 14px;
      padding: 0 10px;
    }
  }

`
export const Logo = styled.div`
  display: flex;
  padding: 0 20px;
  & h3 {
    margin-left: 10px;
`