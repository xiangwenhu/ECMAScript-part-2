var obj = {
  count: 0,
  [Symbol.iterator]() {
    let ctx = this;
    return {
      next: function () {
        if (ctx.count < 3) {
          return { value: ctx.count++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let v of obj) {
  console.log("v:", v);
}
