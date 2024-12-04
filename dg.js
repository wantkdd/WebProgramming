let a = 1;
function fn() {
  let b = 2;
  console.log(a + b);
  function fn1() {
    let c = 3;
    console.log(a + b + c);
    function fn2() {
      let d = 4;
      console.log(a + b + c + d);
    }
    fn2();
  }
  fn1();
}
fn();
