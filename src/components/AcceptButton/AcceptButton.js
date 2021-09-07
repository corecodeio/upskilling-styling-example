import classes from './AcceptButton.module.css';

const AcceptButton = (props) => {

  return <button className={classes.button}>{props.title}</button>;
}

export default AcceptButton;