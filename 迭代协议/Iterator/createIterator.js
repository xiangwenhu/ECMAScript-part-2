function createIterator() {
    let count = 0;
    return {
      next: function() {
        if (count < 3) {
          return { value: count++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
  
  const iterator = createIterator();
  
  // 正常迭代
  console.log(iterator.next()); // { value: 0, done: false }
  console.log(iterator.next()); // { value: 1, done: false }
  console.log(iterator.next()); // { value: 2, done: false }
  console.log(iterator.next()); // { done: true }

