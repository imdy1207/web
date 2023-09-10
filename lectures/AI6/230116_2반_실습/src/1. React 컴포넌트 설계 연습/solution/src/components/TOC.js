import React, { Component } from 'react';

class TOC extends Component{
    //해설17 : 어떤 props를 받는지 확인 
    render(){
      console.log('TOC render');
      var lists = [];
      //해설18 : data 값으로 this.props.data를 받는다.
      var data = this.props.data;
      var i = 0;
      //data의 길이만큼 반복 -> 우리가 받을 데이터가 App.js의 state.contents라는 것을 알 수 있음.
      while(i < data.length){
        //lists에 data의 항목들을 추가하여 컴포넌트에서 그림
        lists.push(
          <li key={data[i].id}>
            <a 
              href={"/content/"+data[i].id}
              data-id={data[i].id}
              onClick={function(e){
                e.preventDefault();
                //해설19 : a태그의 onClick에서 핸들러 함수로 this.props.onChangePage()를 받는다.
                //이벤트가 발생하는(클릭되는) 대상의 id를 받는다.
                this.props.onChangePage(e.target.dataset.id);
              }.bind(this)}
            >{data[i].title}</a>
          </li>);
        i = i + 1;
      }
      return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
      );
    }
  }
  //-> App.js

export default TOC;