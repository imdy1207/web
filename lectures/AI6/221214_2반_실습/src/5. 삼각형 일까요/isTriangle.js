// 지시사항에 따라 코드를 작성합니다.
const isTriangle= (x, y, z) => {
    let arr = [x, y, z];
    arr = arr.sort(function (a, b) {
        return a - b;
    });

    return ((arr[0] + arr[1]) > arr[2]);
}








// 숫자 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
const inputA = 15
const inputB = 7
const inputC = 7

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA, inputB, inputC], func: isTriangle }
