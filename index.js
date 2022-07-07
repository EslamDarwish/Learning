import { Anagram, AnagramByReduce, FindMissingNumbers, FindMissingNumbers2, FirstDuplicate, FizzBuzz, Palindrome, PalindromeReduce, PalindromeStr, Pyramid } from "./javascript/codingProblems/index.js";
import { anyZeros, filterZeros, flat2dArray, forEach, map, map2dArray, noZeros, reduce, reducedArray, reducedArrayWithSum, reducedDuplication, reducePositive, sliceArray } from "./javascript/methods/index.js";


function customLog(func, data) {
    console.log("#".repeat(10))
    console.log(func, data);
    console.log("Output:", func(data));
    console.log("#".repeat(10))
}

function index() {


    // customLog(reduce, [1, 2, 3, 4, 5, 6, 7]);

    // customLog(flat2dArray, [[1, 2], [3, 4]]);

    // customLog(reducedDuplication, ['cat', 'car', 'cat', 'cat']);

    // customLog(map, [1, 2, 3, 4]);

    // customLog(map2dArray, [[1, 2], [3, 4]]);

    // customLog(reducedArray, [[1, 2], [3, 4, 5, 9, 10]]);

    // customLog(reducedArrayWithSum, [[1, 2], [3, 4, 5, 9, 10]]);

    // customLog(reducedDuplication, ['cat', 'car', 'car']);

    // customLog(filterZeros,[0,1,0,2,0,3]);

    // //return undefined always
    // customLog(forEach,[1,2,3,4]);

    // //stops the iterations if one element violated the condition
    // //return true or false
    //  customLog(noZeros,[1,0,2,3,4]);

    // //stops the iterations if one element met the condition
    // //return true or false
    //   customLog(anyZeros,[1,0,2,3,4]);

    // //problems
    // customLog(FizzBuzz,[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15]);

    //customLog(Palindrome,123456789987654321);
    // customLog(PalindromeStr,"123456789987654321");
    // customLog(PalindromeReduce,"123456789987654321");
    // customLog(FindMissingNumbers,[1,4]);
    //customLog(FindMissingNumbers2,[1,4,2,3]);
    // customLog(FirstDuplicate,[1,2,3,4,1]);
    // customLog(Anagram,['test','test']);
    // customLog(AnagramByReduce,['test','tset ']);
    // customLog(Pyramid,4)
    // customLog(sliceArray,[[1,2,3,4,5,6],2])
    customLog(reducePositive, [1, -4, 7, 12])

}

function runCheckPerformance() {
    var startTime = performance.now()
    index();
    var endTime = performance.now()
    console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
}


runCheckPerformance();