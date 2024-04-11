/**
 * 数组表示
 * [1, 2, 3, 4, 5, 6, 7]
 * 树图         1   2   4   8   16  32  64 2^7
 *              1                       0
 *          2       3                 1    2
 *       4    5   6    7             3 4  5 6  i    2n + 1 = i  1 2 
 */
class MinHeap {
  constructor() {
    this.heap = []
  }

  getParentIndex(i) {
    return (i-1)>>1
  }

  getLeftChildIndex(index) {
    return 2 * index + 1
  }

  getRightChildIndex(index) {
    return 2 * index + 2
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }

  insert(val) {
    this.heap.push(val)
    // 最后一位需要不断的向上遍历 知道父节点没有比当前元素小的
    let index = this.heap.length - 1
    while(index > 0 && this.heap[this.getParentIndex(index)] > val) {
      this.swap(index, this.getParentIndex(index))
      index = this.getParentIndex(index)
    }
  }

  // 删除堆顶元素
  extract() {
    if (this.heap.length === 0) return
    if (this.heap.length === 1) return this.heap.pop()
    this.heap[0] = this.heap.pop()
    this.heapify(0)
  }

  heapify(index) {
    let left = this.getLeftChildIndex(index)
    let right = this.getRightChildIndex(index)
    let min = index
    if (left < this.heap.length && this.heap[left] < this.heap[min]) {
      min = left
    }
    if (right < this.heap.length && this.heap[right] < this.heap[min]) {
      min = right
    }
    if (index !== min) {
      this.swap(index, min)
      this.heapify(min)
    }
  }

  print() {
    console.log(this.heap)
  }
}

const heap = new MinHeap()
/**
[ 1, 5, 3, 9, 10 ]

      1
    5   3
  9  10


  [ 5, 9, 3, 10 ]
      5
    9   3
  10
 */

heap.insert(1)
heap.insert(9)
heap.insert(3)
heap.insert(5)
heap.insert(10)
heap.print()
heap.extract()
heap.print()
