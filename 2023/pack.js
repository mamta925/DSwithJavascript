let SEPARATOR = ':';

function countPacks(nums) {
    let packCounted = [];
    let prevPack;

    nums.forEach(function (curPack) {
        if (curPack !== prevPack) {
            packCounted.push(curPack + SEPARATOR + 1);
            prevPack = curPack;
        } else {
            let prevSplited = packCounted[packCounted.length - 1].split(SEPARATOR);

            packCounted[packCounted.length - 1] = prevSplited[0] + SEPARATOR + (parseInt(prevSplited[1], 10) + 1);
        }
    });

    return packCounted;
}

function formatList(countList) {

    return countList.map(function (curPack) {
        let elemSplited = curPack.split(SEPARATOR);

        if (elemSplited[1] === '1') {
            return parseInt(elemSplited[0], 10);
        }

        return curPack;
    });
}

function packNumbers(nums) {
    if (nums) {
        let countPack = countPacks(nums);

        return formatList(countPack);
    }

    return [];
}

console.log(packNumbers([5,5,5,7,7,3,4,7]))