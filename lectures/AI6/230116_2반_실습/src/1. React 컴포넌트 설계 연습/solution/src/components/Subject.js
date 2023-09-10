import React, { Component } from 'react';
class Subject extends Component {
    render(){
      console.log('Subject render');
      return (
        <header>
            {/*
            해설9 : 어떤 props를 받는지 확인 
            해설10 : h1태그의 onClick에서 핸들러 함수로 this.props.onChangePage()를 받는다.
            해설11 : a태그에서 this.props.title를 받는다.
            해설12 : header태그에서 this.props.sub를 받는다.
            -> App.js
            */}
            <h1><a href="/" onClick={function(e){
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}>{this.props.title}</a></h1>
            {this.props.sub}
        </header>  
      );
    }
  }

export default Subject;