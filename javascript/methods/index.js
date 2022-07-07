
//reduce
export function reduce(array) {
    return array.reduce((accumulator, value) => accumulator + value, 0);
}

export function reducePositive(array) {
    return array.reduce((accumulator, value) => { return value > 0 ? accumulator + value : accumulator }, 0);
}

export function flat2dArray(array) {
    return array.reduce((accumulator, value) => accumulator.concat(value), []);
}

//reduce duplication
export function reducedDuplication(array) {

    return array.reduce((acc, item) => {
        if (!acc[item]) acc[item] = 0;
        acc[item]++;
        return acc;
    }, {});
}

//map
export function map(array) {
    return array.map((value) => value + 1);
}

export function map2dArray(array) {
    return array.map((value) => parseInt("" + value[0] + (value[1])))
}

export function reducedArray(array) {
    return array.map((value) => value.reduce((acc, item) => acc + item, []))
}

export function reducedArrayWithSum(array) {
    return array.map((value) => value.reduce((acc, item) => +acc + item, []))
}

//filter

export function filterZeros(array) {
    return array.filter(value => value !== 0);
}

//foreach

export function forEach(array) {
    return array.forEach(value => console.log(value));
}

//every

export function noZeros(array) {
    return array.every(value => value !== 0);
}

//some
export function anyZeros(array) {
    return array.some(value => value === 0);
}

//check objects level 1 equal 
export function shallowEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
}

//check for objects of objects
export function deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = object1[key];
        const val2 = object2[key];
        const areObjects = isObject(val1) && isObject(val2);
        if (
            areObjects && !deepEqual(val1, val2) ||
            !areObjects && val1 !== val2
        ) {
            return false;
        }
    }
    return true;

    function isObject(object) {
        return object != null && typeof object === 'object';
    }

}

//slice

export function sliceArray([arr, slice]) {
    const chunked = [];
    for (var i = 0; i < arr.length; i += slice) {
        chunked.push(arr.slice(i, i + slice))
    }
    return chunked;
}

