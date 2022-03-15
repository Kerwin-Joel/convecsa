import styled, { css } from 'styled-components'


export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #214A9A;
  display: flex;
  flex-direction: column;
  background-image: url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80);
  background-size: cover;
  background-position: 50%;
  overflow: hidden;

  & main {
    text-align: center;
    background: white;
    width: 45%;
    margin: auto;
    position: relative;
    border-radius: 15px;

  }
  & p{
    margin:0
  }
`
export const Mask = styled.span`
  position: absolute;
  background-position: 50%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .6;
  background-image: linear-gradient(195deg,#42424a,#191919);
  background-size: cover;
`

export const FloatContainer = styled.div`
  background:#888EBA;
  color:white;
  font-weight: bold;
  background-image: linear-gradient(195deg,#888EBA,#214A9A);
  box-shadow: 0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgb(33, 74, 154,.4);
  position: relative;
  margin: 25px;
  margin-bottom: 0;
  padding: 15px 10px;
  top: -25%;
  border-radius:10px;


  & p{
    padding-bottom: 10px;
  }
`
export const Label = styled.label`
  position:absolute;
  left: 5%;
  color: #7b809a;
  padding:1px 5px;
  transition: all .3s ease-in-out;
  ${'' /* transform: ${props => props.fillText ? 'translateY(-20px)' : 'translateY(0)'}; */}
  ${
    props => props.fillText && css`
      transition: all .3s ease-in-out;
      transform: translateY(-20px);
      color:#d2d6da;
      background: white;
      font-size: .8em;
    `
  }
`
export const Button = styled.div`
  background: #214A9A;
  padding: 10px 8px;
  border-radius: 5px;
`

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  padding: 0 5%;
  transition: all .3s ease-in-out;

  & > a{
    width: 100%;
    transition: all .3s ease-in-out;

    &:hover{
      transform: translateY(-3px);
      box-shadow: 0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgb(33, 74, 154,.4);
    }
  }

  & div{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    position:relative;
    justify-content: center;
    transition: all .3s ease-in-out;
  }
    
  & input{
    transition: all .3s ease-in-out;
    width: 99%;
    padding: 10px 0;
    margin: 10px 0;
    padding-left: 5%;
    border-radius:5px;
    border: 1px solid #d2d6da;
    line-height: 1.3;
    transition: all .3s ease-in-out;

  }
  
  & input:focus ~ label{
    transition: all .3s ease-in-out;
    transform: translateY(-20px);
    color:#d2d6da;
    background: white;
    font-size: .8em;
  }

  & span{
    color: #7b809a;
    font-size: .8em;
    margin-top: 10px;
    padding: 25px;

    & a{
      color: #d2d6da;
      transition: all .3s ease-in-out;
      display: block;
      &:hover{
        color: #4f5153;
        transform: translateY(-3px);
      }
    }

  }
`

