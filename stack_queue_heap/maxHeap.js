export class MaxHeap {
  constructor(heap) {
    this.heap = [];
    if (heap?.length) {
      heap.forEach((elem) => this.push(elem));
    }
  }
  
  push(elem) {
    this.heap.push(elem);
    this.bubbleUp();
  }
  
  pop() {
    if (this.heap.length === 0) return undefined;
    
    const max = this.heap[0];
    const end = this.heap.pop();
    
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    
    return max;
  }
  
  peek() {
    return this.heap[0];
  }
  
  bubbleUp() {
    let idx = this.heap.length - 1;
    let element = this.heap[idx];
    
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];
      if (parent >= element) break;
      this.heap[parentIdx] = element;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }
  
  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      
      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      
      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      
      if (swap === null) break;
      this.heap[idx] = this.heap[swap];
      this.heap[swap] = element;
      idx = swap;
    }
  }
}
