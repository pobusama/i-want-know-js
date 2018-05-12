
/**
 * @param array: 未排序数组
 * @returns: 排序后的数组
 */
const quickSort = array => {
    const left = 0, right = array.length - 1;
    quick(array, left, right);
}

const quick = (array, left, right) => {
    let pivotIndex;

    // 设置递归终止条件
    if (array.length > 1) {

        // 整理 array，并找到分治的拆分下标
        pivotIndex = partition(array, left, right);

        // 分治
        if (left < pivotIndex - 1) {
            quick(array, left, pivotIndex - 1);
        }
        if (pivotIndex + 1 < right) {
            quick(array, pivotIndex, right);
        }
    }
}

const partition = (array, left, right) => {

    // 设中间点为支点
    const pivot = array[Math.floor((left + right) / 2)];
    let i = left, j = right;

    // 以支点数值为界，把小于该数值的元素放左边，否则放右边
    while (i < j) {
        while(array[i] < pivot) {
            i++;
        }
        while(array[j] > pivot) {
            j--;
        }
        if (i < j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}

// 数组元素换位
const swap = (array, a, b) => {
    [array[a], array[b]] = [array[b], array[a]];
}