import React, { Component } from 'react';
import './App.css';
import anime from 'animejs';
import styled from 'styled-components';

import instagrampic from './instagrampic.png'
import githubpic from './githubpic.png'
import facebookpic from './facebookpic.png'

const titles = [
  'Lamp',
  'About me',
  'Notice',
  "I'm sorry",
]

const socialLinks = [
  {
    name: instagrampic,
    link: "https://www.instagram.com/thomas_giezen/",
  },
  {
    name: githubpic,
    link: "https://github.com/thomasgiezen",
  },
  {
    name: facebookpic,
    link: "https://www.facebook.com/people/Thomas-Giezen/",
  },
];
const Linkbox = styled.div`
  
`;

const StyledContactImage = styled.img`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 10px;
`;

const StyledContact = ({href, src, id}) => (
  <a href={href} target="_blank">
    <StyledContactImage src={src} id={id}/>
  </a>
);

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="Top">
          <h1 id="title">Lamp</h1>
        </div>
        <div className="Info">
          <h2 id="subtab1">About me</h2>
            <p id="intro">I'm Thomas, I am fifteen years old</p>
        </div>
        <div className="Content">
          <h2 id="subtab2">Notice</h2>
            <p id="notice">Notice me senpai</p>
        </div>
        <div className="Sorry">
          <h2 id="titlesorry">I'm sorry</h2>
            <p id="sorry">Dear conceptcreators,<br /> I'm terribly sorry for taking so (f*cking) long with building this website.<br />
            I am quite busy with school lately and due to tiredness (and a bit lazyness) I wasn't able to finish the build of this website.<br />
            <br />Quinty and Ruben, I'm sorry </p>
        </div>
        <div className="Promo">
          <footer id="Footer">
            <p>Made by: Thomas Giezen</p>
          </footer>
        </div>
          <Linkbox>
          {socialLinks.map((item, i) => {
            return <StyledContact href={item.link} src={item.name} id={'img' + i} key={i}/>
        })}
        </Linkbox>
      </div>
    );
  }
}

export default App;
