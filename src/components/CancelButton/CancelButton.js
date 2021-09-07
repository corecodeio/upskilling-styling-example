import classes from './CancelButton.module.css';

const CancelButton = (props) => {

  const style = {color: 'green', backgroundColor: '#FFFF;' }

  let myClasses = [classes.button, classes['my-text-button']];

  return <button className={myClasses.join(' ')}>{props.title}</button>;
}

export default CancelButton;