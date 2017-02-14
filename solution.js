module.exports = {
    solution1,
    solution2,
    solution3,
}


function solution1(A) {
    let amount = 0;

    for (let i = 1; i < A.length - 1; i++) {
        for (let j = 1; j < A[i].length - 1; j++) {
            if (isSaddlePoint(i, j)) {
                amount++;
            }
        }
    }

    return amount;

    function isSaddlePoint(p, q) {
        let
            cur = A[p][q];

        return (
            cur < A[p][q - 1]
         && cur < A[p][q + 1]
         && cur > A[p - 1][q]
         && cur > A[p + 1][q]
         || cur > A[p][q - 1]
         && cur > A[p][q + 1]
         && cur < A[p - 1][q]
         && cur < A[p + 1][q]
        );
    }
}

function solution2(A) {
    let
        maxSize = 1,
        maxPos = 0,
        curPos = 0;

    for (let i = 1; i < A.length; i++) {
        if (A[i] <= A[i - 1]) {
            curPos = i;
        }

        let
            curSize = i - curPos + 1;

        if (curSize > maxSize) {
            maxSize = curSize;
            maxPos = curPos;
        }
    }

    return maxPos;
}

function solution3(A) {
    let minDistance = -2;

    A.sort((a, b) => {
        let dist = Math.abs(a - b);

        if (dist < minDistance || minDistance == -2) {
            minDistance = dist;
        }

        return a - b;
    });

    if (minDistance > 1e8) {
        return -1;
    }

    return minDistance;
}



function solution3_(A) {
    let
        adjacent = [],
        minDistance = -2;

    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (isAdjacent(A[i], A[j])) {
                adjacent.push([i, j]);
            }
        }
    }

    if (adjacent.length) {
        adjacent = adjacent.map(i => Math.abs(A[i[0]] - A[i[1]]));
        minDistance = Math.min(...adjacent);
    }

    if (minDistance > 1e8) {
        return -1;
    }

    return minDistance;

    function isAdjacent(a, b) {
        if (a > b) {
            let temp = b;

            b = a;
            a = temp;
        }

        for (let i = 0; i < A.length; i++) {
            if (i > a && i < b) {
                return false;
            }
        }

        return true;
    }
}
