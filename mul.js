onmessage = function (e) {
  let sum = 0;
  let op1 = parseInt(e.data.op1);
  let op2 = parseInt(e.data.op2);
  sum = op1 * op2;
  this.postMessage(sum);
};
