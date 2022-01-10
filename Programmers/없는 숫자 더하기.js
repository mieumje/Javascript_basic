function checkingNums(numbers) {
  const nums = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  for (let i = 0; i < numbers.length; i++) {
    nums[numbers[i]] = 1;
  }
  return nums;
}
function sumZeroNums(nums) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    if (nums[i] === 0) {
      sum += i;
    }
  }
  return sum;
}

function solution(numbers) {
  let answer = -1;
  const nums = checkingNums(numbers);
  answer = sumZeroNums(nums);
  return answer;
}

// 입출력 예
// numbers	            result
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]	    6

numbers = [1, 2, 3, 4, 6, 7, 8, 0];
console.log(solution(numbers));
