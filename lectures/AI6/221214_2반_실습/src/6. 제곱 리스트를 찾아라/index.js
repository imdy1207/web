//배열의 모든 요소가 square number(정수의 제곱)인지 확인하는 함수를 작성하십시오.
const isSquare = (array) => {
    if (array.length < 1)
        return undefined;

    for (let i of array)
        if (!Number.isInteger(Math.sqrt(i)))
            return false;

    return true;
}

console.log(isSquare([1, 4, 9, 81, 36, 1024]));

module.exports = { isSquare };
