function executor(func) {
  const stack = [func]
  let res
  while (stack.length) {
    const node = stack[stack.length - 1]
    let result = node.next(res)
    if (result.done) {
      res = result.value
      stack.pop()
    } else {
      stack.push(result.value())
    }
  }
  return res
}

function *fic(n) {
  if (n  <= 1) return 1
  let before = yield () => fic(n - 1)
  // 1 2 3  4 5 6 7
  // 1 1 2  3 5 8 13
  return n * before
}

const res = executor(fic(7))
// console.log(res)
// const node = fic(4)
// console.log(node,  node.next())