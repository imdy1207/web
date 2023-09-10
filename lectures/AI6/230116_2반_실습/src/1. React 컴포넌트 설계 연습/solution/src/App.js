import React, { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import './App.css';

//설명이 불친절한 문제
//설명이 부족해서 문제를 푸는데 많은 시간이 소요됨
//onChangePage 함수에 대한 안내가 필요
class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
      selected_content_id: 2,
      subject: { title: 'React', sub: 'React Concept!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contents: [
        {
          id: 1,
          title: 'Component',
          desc: 'React is Component based development',
        },
        {
          id: 2,
          title: 'Virtual DOM',
          desc: 'React creates a tree of custom objects representing a part of the DOM.',
        },
        {
          id: 3,
          title: 'SSR(Server Side Rendering)',
          desc: 'React server returns a ready to render HTML page and the JS scripts required to make the page interactive',
        },
      ],
    };
  }

  //해설4 : getContent()실행 시 mode가 'read'일 경우
  getReadContent() {
    var i = 0;
    //해설5 : state에 들어있는 contents 값들을 순회하면서 조회
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      //해설6 : 순회 중 선택된 값과 같을 경우 해당 content 데이터를 반환
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }

  //1. state값으로 넣어준 컴포넌트를 `getContent()`함수에서 가져옵니다.
  // article에 해당하는 코드를 모두 대체하세요.
  getContent() {
    var _title,
      _desc,
      _article = null;
    //해설1 : 현재 모드가 'welcome'일 경우
    if (this.state.mode === 'welcome') {
      //state.welcome 값을 출력
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
      //해설2 : 현재 모드가 'read'일 경우
    } else if (this.state.mode === 'read') {
      //해설3 : getReadContent() 메서드를 통해 (선택된)값을 가져옴
      var _content = this.getReadContent();
      //해설7 : 선택된 content 데이터의 값들을 요소에 전달
      _article = (
        <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      );
    }
    return _article;
  }

  //2. 태그들을 컴포넌트화 시켜서 이를 렌더링을 위해 render() 함수 내에 코드를 작성합니다.
  render() {
    console.log('App render');
    return (
      <div className="App">
        {/*해설8 : 'Subject' 컴포넌트가 그려진다 -> src/components/Subject.js*/}
        <Subject
            //해설13 : props로 onChangePage(), title, sub를 넘겨준다. 
            //해설14 : setState를 통해 과목의 제목을 클릭했을 때는 mode를 'welcome'으로 설정
            onChangePage={function(){
                this.setState({mode:'welcome'});
            }.bind(this)}
            //해설15 : 출력 내용의 title은 state.subject.title, sub는 state.subject.sub으로 설정
            title={this.state.subject.title} 
            sub={this.state.subject.sub}
        ></Subject>
        {/*해설16 : 'TOC' 컴포넌트가 그려진다 -> src/components/TOC.js*/}
        <TOC
        //해설20 : data로 this.state.contents를 설정.
        data = {this.state.contents}
        //해설21 : setState를 통해 과목의 제목을 클릭했을 때는 mode를 'read'로 설정
        //해설22 : (이부분이 도출해내기 어려웠음, TOC에서 onChangePage의 파라미터로 이벤트가 발생한(클릭된) 대상의 id를 받는다.) 클릭된 요소의 id를 selected_content_id(선택된 대상)의 값에 넣어준다.
        onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
        }.bind(this)}
        ></TOC>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
