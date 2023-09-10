var myUl = document.querySelector("ul");

//1. for loop을 사용해서 index.html의 <ul></ul> 내에 li 태그 문장 20개를 createTextNode()와 appendChild()를 사용해서 추가합니다.
for (let i = 0; i <= 20; i++) {
    let myLi = document.createElement( 'li' );
    let liText = document.createTextNode(`${i}번째 문장`);
    myLi.appendChild(liText);
    myUl.appendChild(myLi);
}