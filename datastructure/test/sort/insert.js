const assert = require('assert');

// 你的代码
// import insertsort from '../../insert/sort.js'
const {insertsort} = require('../../insert/sort.js')
// 测试用例
describe('Insertion Sort', function() {
    it('should sort an array in ascending order', function() {
        const unsortedArray = [4, 2, 1, 3];
        const sortedArray = insertsort(unsortedArray);
        assert.deepStrictEqual(sortedArray, [1, 2, 3, 4]);
    });

    it('should handle arrays with duplicates', function() {
        const unsortedArray = [4, 2, 2, 1, 3, 3];
        const sortedArray = insertsort(unsortedArray);
        assert.deepStrictEqual(sortedArray, [1, 2, 2, 3, 3, 4]);
    });

    it('should handle arrays with negative numbers', function() {
        const unsortedArray = [-4, 2, 1, -3];
        const sortedArray = insertsort(unsortedArray);
        assert.deepStrictEqual(sortedArray, [-4, -3, 1, 2]);
    });

    it('should handle empty array', function() {
        const unsortedArray = [];
        const sortedArray = insertsort(unsortedArray);
        assert.deepStrictEqual(sortedArray, []);
    });

    it('should handle arrays with single element', function() {
        const unsortedArray = [4];
        const sortedArray = insertsort(unsortedArray);
        assert.deepStrictEqual(sortedArray, [4]);
    });

    it('should handle arrays with already sorted elements', function() {
        const unsortedArray = [1, 2, 3, 4];
        const sortedArray = insertsort(unsortedArray);
        assert.deepStrictEqual(sortedArray, [1, 2, 3, 4]);
    });

    // 可以添加更多测试用例来覆盖不同的边界条件和输入
});