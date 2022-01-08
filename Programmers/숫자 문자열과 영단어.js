function solution(s) {
  let answer = '';

  const words = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let tmp = '';
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      answer += s[i];
    } else {
      tmp += s[i];
      if (tmp in words) {
        answer += words[tmp];
        tmp = '';
      }
    }
  }

  return Number(answer);
}

// 입출력 예
// s	                result
// "one4seveneight"	    1478
// "23four5six7"	    234567
// "2three45sixseven"	234567
// "123"	            123
s = 'one4seveneight';
console.log(solution(s));
