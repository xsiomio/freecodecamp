function rangeOfNumbers(startNum, endNum) {
    if (endNum === startNum) {
        return [startNum];
    } else {
        let countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum);
        return countArray;
    }
}
;
