import { shallowEqual } from "../methods/index.js";

//problems
export function FizzBuzz(array) {
    //if number % 3 ==0  print fizz
    //if number % 5 ==0  print buzz
    // if both print fizzBuzz
    return array.map(element =>
        element % 3 == 0 && element % 5 == 0 ? "fizzBuzz" :
            element % 3 == 0 ? "fizz" :
                element % 5 == 0 ? "buzz" : element
    );

}

export function Palindrome(number) {
    //if first section of number == second section of number but reversed
    let array = ("" + number).split("");
    return array.every((element, index, temp) => {
        return element === temp[temp.length - index - 1]
    })

}

export function PalindromeStr(str) {
    //just another implementation you can also use same (every)method
    let reversed = [...str].reverse().join("");
    return str.toLowerCase() === reversed.toLowerCase();

}

export function PalindromeReduce(str) {
    //another solution
    let reversed = [...str].reduce(function (acc, cur) {
        return cur + acc;
    });
    return str.toLowerCase() === reversed.toLowerCase();
}

export function FindMissingNumbers(array) {
    array.sort((a, b) => b - a);
    let index = 0;
    let result = [];
    while (index < array.length) {
        let gap = array[index] - array[index + 1];
        if (gap > 1) {
            for (let i = 1; i < gap; i++) {
                result.push(array[index] - i)
            }
        }
        index++;

    }
    return result;
}


export function FindMissingNumbers2(arr) {
    let missingNums = []
    let subtractResult
    arr.sort((a, b) => a - b)
    for (let x = 0; x < arr.length; x++) {
        subtractResult = arr[x + 1] - arr[x]
        if (subtractResult > 1) {
            for (let y = 1; y < subtractResult; y++) {
                missingNums.push(arr[x] + y)
            }
        }
    }
    return missingNums
}

export function FindMissingNumbers3(arr) {
    //iteration by values not indices
    let missingNums = []
    arr.sort((a, b) => a - b)
    for (let x = arr[0]; x <= arr[arr.length - 1]; x++) {
        if (!arr.find(num => num === x)) {
            missingNums.push(x);
        }
    }
    return missingNums
}

export function FirstDuplicate(array) {
    //find first duplicate in array
    array.sort((a, b) => b - a);
    let duplicate = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) { duplicate = array[i]; break; };
    }

    return duplicate;
}

export function Anagram([str1, str2]) {
    //Example: anagram('Ab bc', 'cbab'); // return true
    //Example: anagram('abbc', 'cba'); // return false
    //Example: anagram('abbc?!', 'cbab'); // return true

    return cleanStr(str1) === cleanStr(str2);
    function cleanStr(str) {
        return str
            .replace(/[^\w]|_/g, "")
            .toLowerCase()
            .split("")
            .sort()
            .join("");
    }
}

export function AnagramByReduce([str1, str2]) {
    //Example: anagram('Ab bc', 'cbab'); // return true
    //Example: anagram('abbc', 'cba'); // return false
    //Example: anagram('abbc?!', 'cbab'); // return true

    
    return shallowEqual(cleanStr(str1) , cleanStr(str2));
    
    function cleanStr(str) {
        return str
            .replace(/[^\w]|_/g, "")
            .toLowerCase()
            .split("")
            .sort()
            .reduce((acc, item) => {
                if(!acc[item]) acc[item]=0;
                acc[item]++;
                return acc;
            },{})
    }
}



export function Pyramid(n) {
    const midPoint = Math.floor((2 * n - 1) / 2);
    for (let row = 0; row < n; row++) {
      let level = "";
      for (let col = 0; col < 2 * n - 1; col++) {
        if (col + row >= midPoint && col - row <= midPoint) {
          level += "#";
        } else {
          level += " ";
        }
      }
      console.log(level);
    }
  }