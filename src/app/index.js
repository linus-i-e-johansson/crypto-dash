import React,{Component} from 'react';
import './App.css';
import styled,{css} from "styled-components";
import AppLayout from "./AppLayout";
import WelcomeMessage from "./WelcomeMessage";
import AppBar from "./AppBar";

class Index extends Component{
  render(){
    return (
        <AppLayout>
          <AppBar />
          <WelcomeMessage />
        </AppLayout>

    );
  }
}

export default Index;
