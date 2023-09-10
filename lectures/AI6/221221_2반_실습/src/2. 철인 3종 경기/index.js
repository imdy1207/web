const btn = document.getElementById("btn");
const mes = document.getElementById("message");

async function triathlon() {
  mes.innerText = '';
  let swimEnd = await exercise(0, "swim");
  let bicycleEnd = await exercise(swimEnd, "bicycle");
  let runEnd = await exercise(bicycleEnd, "run");

  return runEnd;
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function exercise(startTime, name) {
  const exerciseInput = document.getElementById(name);
  // 1. 완주에 걸리는 시간을 구하세요.
  let exerciseTime = parseInt(exerciseInput.value);

  // 2. setTimeout 대신 delay 함수를 사용해 비동기처리를 하세요.
  await delay(exerciseTime);
  mes.innerText+= `${name} finished at ${startTime+exerciseTime} \n`

  // 3. 완주한 후의 시간을 반환하세요.
  return startTime+exerciseTime;
}

btn.addEventListener("click", () => {
  triathlon().then((param) => {
    mes.innerText += `total time : ${param}`;
  });
});
