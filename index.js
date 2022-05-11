function sanitizeData(collection){
    // if (collection instanceof Array) {
    //     return [...collection]
    // } else {
    //     return Object.values(collection)
    // }
    return (collection instanceof Array) ? [...collection] : Object.values(collection)
}

function myEach(collection, callBack) {
    let newArray = sanitizeData(collection)
    for(let item of newArray) {
        callBack(item)
    }
    return collection
}

function myMap(collection, callBack) {
    let newArray = sanitizeData(collection)
    let newerArray = []
    for(let item of newArray){ 
        newerArray.push(callBack(item))
    }
    return newerArray
}


function myReduce(collection, callBack, acc){
    let newArray = sanitizeData(collection)
        if (!acc) {
        acc = newArray[0];
        newArray = newArray.slice(1);
        }
        for (let i = 0; i < newArray.length; i++) {
        acc = callBack(acc, newArray[i], newArray);
        } 
    return acc;
}


function myFind(collection, predicate) {
    let newArray = sanitizeData(collection)
    for (let i = 0; i < newArray.length; i++) {
        if(predicate(newArray[i]))
        return newArray[i];
    }
        return undefined
}

function myFilter(collection, predicate){
    let newArray = sanitizeData(collection)
    let newerArray = []
    for (let i = 0; i < newArray.length; i++) {
        if(predicate(newArray[i]))
        newerArray.push(newArray[i]) 
    }
        return newerArray
}

function mySize(collection){
    let newArray = sanitizeData(collection)
    return newArray.length
}

// So if n is undefined or 0 you 
// just want to return the first element in the 
// array but if it is something else you want to 
// return that slice.

function myFirst(array, n) {
    const firstElement = array.slice(0, n);
    if (n === undefined){
        return array[0]
    } else { 
    return firstElement
    }
}

function myLast(array, n) {
    const lastElement = array.slice(-n);
    if (n === undefined){
        return array[array.length - 1]
    } else { 
    return lastElement
    }
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}