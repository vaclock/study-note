// 生成器函数模版
/**
  function* generatorFunc() {
    // 生成器函数体
    while(true) {
      const param = yield 'some value';
      console.log(param, 'param==')
    }
  }

  // 1. 未知调用次数(不知道应该调用几次结束, 比如一个异步队列执行 或者 红绿灯)
  function runGenerator() {
    const generator = generatorFunc();
    function run(generator) {
      if (generator.done) return;
      const next = generator.next();
      run(generator);
    }
    run(generator);
  }

  runGenerator();

  // 2. 已知调用次数 比如斐波那契数列 求4
  function* fibonacci() {
    let [prev, curr] = [0, 1];
    while(true) {
      yield curr;
      [prev, curr] = [curr, prev + curr];
    }
  }
  const generator = fibonacci();
  console.log(generator.next().value, 'generator==')
  console.log(generator.next().value, 'generator==')
  console.log(generator.next().value, 'generator==')
  console.log(generator.next().value, 'generator==')
 */

// 实现状态机(红绿灯)
function* light() {
  let count = 0;
  while(true) {
    count++;
    if (count === 3) {
      break;
    }
    console.log("🚦 红灯 (RED) - 停止");
    yield new Promise(resolve => setTimeout(resolve, 3000));
    console.log("🚦 绿灯 (GREEN) - 通行");
    yield new Promise(resolve => setTimeout(resolve, 2000));
    console.log("🚦 黄灯 (YELLOW) - 准备");
    yield new Promise(resolve => setTimeout(resolve, 1000));
  }
}

const lightGenerator = light();
function runLight() {
  const result = lightGenerator.next();
  if (result.done) return;
  result.value.then(() => runLight());
}

runLight();