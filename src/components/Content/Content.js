import React from 'react';
import classes from './Content.module.css';
import Post from '../Post/Post'

const Content = () => {
  let asd = {
    age: 123,
    name: 'asd',
    fn(){
      console.log(this.age)
    }
  }
  asd.fn()
  return (
    <div>
      <h1>Content 1</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/M3qgJirsz1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
