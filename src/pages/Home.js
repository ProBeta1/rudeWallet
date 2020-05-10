import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import img from '../assets/img/4-safes-bg.svg'

const HomeStyles = styled.div`

  display: flex;
  width: 70vw;
  height: 50vh;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
  margin-bottom: auto;

  .title-wrapper {

    display: flex;
    width: 65%;
    margin-right: 35px;
    flex-flow: column;
    
    .heading {
      display: inline;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 2.5rem;
      font-weight: 400;
    }
    
    .subtitle-dark {
      color: #494949;
    }
    
    .title-blue {
      color: #499ef8;
    }
    
    .cta-btn {
      border-radius: 5px;
      background-color: #499ef8;
      -webkit-transition: all 300ms ease;
      transition: all 300ms ease;
      color: #fff;
      font-size: 1rem;
    }
    
    .cta-btn:hover {
      background-color: #7de79e;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
      transform: scale(1.05);
      color: #474747;
    }

    .title {
      margin-bottom: 20px;
      align-self: flex-start;
    }
    
    .subtitle {
      margin-bottom: 25px;
      align-self: flex-start;
      color: #6d6d6d;
      font-size: 1.1rem;
      line-height: 1.2;
    }
    
    .w-button {
    display: inline-block;
    padding: 9px 15px;
    background-color: #3898EC;
    color: white;
    border: 0;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0;
    }
  }

  .photo-wrapper {
    display: flex;
    width: 35%;
    max-width: 500px;
    margin-left: 35px;
    align-items: center;
  }

  .image {
    width: 100%;
  }

`;

const Home = () => (
       <HomeStyles>
        <div className="title-wrapper">
          <div className="title">
          <h1 className="heading">Budget your variable expenses, With some <span className="title-blue">common sense</span>.</h1>
        </div>
        <div className="subtitle">
          <p className="subtitle">Having trouble keeping your variable expenses under control? I bet you are, but no worries <span className="dark subtitle-dark">RudeWallet</span> is here to help keep those spending habits of yours in check.</p>
          </div>
      <div className="btn-wrapper">
        <Link to="/budget">
         <a className="cta-btn w-button">Get Started &gt;</a>
        </Link>
      </div>
        </div>
        <div className="photo-wrapper">
          <img src={img} width="337" className="image" />
        </div>
      </HomeStyles>
)

export default Home