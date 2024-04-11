class MaxHeap {
  constructor() {
    this.heap = []
  }

  getParentIndex(i) {
    return Math.floor((i-1) / 2)
  }

  getLeftChildIndex(i) {
    return 2 * i + 1
  }

  getRightChildIndex(i) {
    return 2 * i + 2
  }

  insert(val) {
    this.heap.push(val)
    let index = this.heap.length - 1
    while(index > 0 && this.heap[this.getParentIndex(index)] < val) {
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

  // 将一个数组堆化
  heapify(index) {
    const left = this.getLeftChildIndex(index)
    const right = this.getLeftChildIndex(index)
    let largest = index
    if (largest < this.heap.length && this.heap[largest] < this.heap[left]) {
      largest = left
    }
    if (largest < this.heap.length && this.heap[largest] < this.heap[right]) {
      largest = right
    }

    if (largest !== index) {
      this.swap(largest, index)
      this.heapify(largest)
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }

  print() {
    console.log(this.heap)
  }
}

const heap = new MaxHeap()
/**
[ 10, 9, 3, 1, 5 ]

      10
    9   3
  1   5



 */

heap.insert(1)
heap.insert(9)
heap.insert(3)
heap.insert(5)
heap.insert(10)
heap.print()
heap.extract()
heap.print()
