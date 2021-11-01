const compareNums = (a, b, c) => Number((b > a && b > c) || (b < a && b < c)) 

const reduceShit = (list) => { 
    return list.reduce((acc, value, index) => {
        if(index + 2 >= list.length) return acc; 
        const currentResult = compareNums(value, list[index + 1], list[index +2]); 
        return [...acc, currentResult]; 
    },[]) 
    }
reduceShit([1, 3, 5, 4, 5, 7])