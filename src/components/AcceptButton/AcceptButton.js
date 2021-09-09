//import classes from './AcceptButton.module.css';
import styled from 'styled-components';

const AcceptButton = (props) => {
  
  const MyButton = styled.button`
    background-color: #FFFF;
    color: ${ props.changeColor ? 'green' : '#26a69a' };
    text-align: center;
    cursor: pointer;
    border: 1px solid #26a69a ;
    padding: 10px 25px;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    &:hover {
      background-color: #009688;
      color: ${ props.changeColor ? 'black' : 'white' };
    }
  `;
  return <MyButton>{props.title}</MyButton>
  //return <button className={classes.button}>{props.title}</button>;
}

export default AcceptButton;