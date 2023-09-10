window.onload = function () {
    var el = document.getElementById("change_heading");
    el.innerText = "카 레이싱 대회";
  
    //2. `<section>`내에 있는 색 팔레트에 마우스 커서를 갖다댈 때 `index.html`에 `<span class="selected">`태그에 None!을 해당하는 색깔로 대체하는 코드를 작성하세요.

    var section = document.querySelector("section");
  
    var newDiv = document.createElement("div");
    newDiv.className = "purple";
    section.appendChild(newDiv);
    
    //1. 선택된 색상이 출력될 요소 선택
    var selected = document.getElementsByClassName('selected')[0];
    
    //2. 색상의 부모인 section에 마우스 리스너 추가
    section.addEventListener("mouseover", (event) => {
        selected.innerText = event.target.className;
    });
    
  
    section.addEventListener("mouseout",(event)=>{
        selected.innerText = event.currentTarget.className + "None!";
    });
  
    var button = document.querySelector("button");
    var car1 = document.querySelector(".car1");
    var car2 = document.querySelector(".car2");
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;
    
    //자동차의 위치를 출발선으로 초기화
    //자동차 marginLeft 0, 버튼 비활성화 끄기
    function reset(car1, car2) {
      clearTimeout(car1.timer);
      clearTimeout(car2.timer);
      car1.style.marginLeft = 0;
      car2.style.marginLeft = 0;
      button.disabled = false;
    }
  
    //3.`button.addEventListener()` 함수 내에 경주 시작 버튼을 클릭할 때 car1과 car 2를 좌에서 우로 움직이는 코드를 작성하세요.
    //4.car1이 오른쪽 사이드에 먼저 도착했을 경우 Car 1 승이라는 alert를 띄우세요. car2도 동일하게 alert 메시지를 띄우는 코드를 작성하세요.
    button.addEventListener("click", function (event) {
      button.disabled = true;
      let time = setInterval(() => {
        car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 10 + 'px';

        car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 10 + 'px';
        
        if (parseInt(car1.style.marginLeft) > window.innerWidth) {
            window.alert("Car 1 wins!");
            reset(car1, car2);
            clearInterval(time);
        }       
        else if (parseInt(car2.style.marginLeft) > window.innerWidth){
            window.alert("Car 2 wins!");
            reset(car1, car2);
            clearInterval(time);
        }

      }, 200);
    });
  };
  