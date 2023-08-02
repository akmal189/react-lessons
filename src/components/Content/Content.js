import React from 'react';
import classes from './Content.module.css';
import Post from '../Post/Post'

const Content = () => {
  return (
    <div>
      <h1>Content 1</h1>
      <div className={classes.item}>asdasd</div>
      <div className={`${classes.test} ${classes.active}`}>sdfsdfsd</div>
      <Post name="asdasdas"/>
      <Post name="123123123"/>
      <Post name="CHRISA"/>
      <Post name="qwerty"/>
    </div>
  );
}

export default Content;
