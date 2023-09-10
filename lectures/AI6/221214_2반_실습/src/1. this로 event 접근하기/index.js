class Menu {
    // 지시사항을 참고하여 코드를 작성하세요.
    handleEvent(event) {
      let method = "on" + event.type[0].toUpperCase() + event.type.slice(1);
      this[method]();
      
    }
  
    onMousedown() {
        elem.innerHTML = "마우스 버튼을 눌렀습니다."
    }
  
    onMouseup() {
        elem.innerHTML ="마우스 버튼을 뗐습니다."
    }
  }
  
  let menu = new Menu();
  const elem = document.getElementById("elem");
  elem.addEventListener("mousedown", menu);
  elem.addEventListener("mouseup", menu);
  
//풀이2────────────────────────────────────────────────────────────────────────────────────────────────────
class Menu {
    // 지시사항을 참고하여 코드를 작성하세요.
    handleEvent(event) {
      let method = "on" + event.type[0].toUpperCase() + event.type.slice(1);
      if (method == "onMousedown")
          this.onMousedown();
  
      else if (method == "onMouseup")
          this.onMouseup();
      
    }
  
    onMousedown() {
        elem.innerHTML = "마우스 버튼을 눌렀습니다."
    }
  
    onMouseup() {
        elem.innerHTML ="마우스 버튼을 뗐습니다."
    }
  }
  
  let menu = new Menu();
  const elem = document.getElementById("elem");
  elem.addEventListener("mousedown", menu);
  elem.addEventListener("mouseup", menu);

//풀이3────────────────────────────────────────────────────────────────────────────────────────────────────
class Menu {
    // 지시사항을 참고하여 코드를 작성하세요.
    handleEvent(event) {
      let method = "on" + event.type[0].toUpperCase() + event.type.slice(1);    
    }
  
    onMousedown() {
        elem.innerHTML = "마우스 버튼을 눌렀습니다."
    }
  
    onMouseup() {
        elem.innerHTML ="마우스 버튼을 뗐습니다."
    }
  }
  
  let menu = new Menu();
  const elem = document.getElementById("elem");
  elem.addEventListener("mousedown", menu.onMousedown);
  elem.addEventListener("mouseup", menu.onMouseup);
  
  