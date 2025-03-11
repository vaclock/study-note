const r1 = require('readline').createInterface({ input: process.stdin });
// 创建readline接口
let iter = r1[Symbol.asyncIterator]();
// 创建异步迭代器
const readline = async () => (await iter.next()).value;

let graph;
let N, M;

// 收集符合条件的路径
let result = [];
// 1节点到终点的路径
let path = [];

// 创建邻接表，初始化邻接表
async function initGraph() {
    let line;
    line = await readline();
    [N, M] = line.split(' ').map(i => parseInt(i))
    graph = new Array(N + 1).fill(0).map(() => new Array(M + 1).fill(0))
    console.log(graph, 'graph')

    while (line = await readline()) {
        const strArr = line.split(' ').map(i => parseInt(i))
        // strArr ? graph[strArr[0]].push(strArr[1]) : null
        strArr ? (graph[strArr[0]][strArr[1]] = 1) : null
    }
    console.log(graph, 'graph==')
};

// 深度搜索
async function dfs(graph, x, n) {
    // 当前遍历节点为x， 到达节点为n
    if (x == n) {
        result.push([...path])
        return
    }

    // graph[x].forEach(i => {
    //     path.push(i)
    //     dfs(graph, i, n)
    //     path.pop(i)
    // })
    for (let i = 1; i <= N; i++) {
      if (graph[x][i] === 1) {  // 如果存在从x到i的边
          path.push(i)
          dfs(graph, i, n)
          path.pop()
      }
    }
};

(async function () {
    // 创建邻接表，初始化邻接表
    await initGraph();

    // 从节点1开始深度搜索
    path.push(1);

    // 深度搜索
    dfs(graph, 1, N);

    // 输出
    if (result.length > 0) {
        result.forEach(i => {
          console.log(i.join(' '))
        })
    } else {
        console.log(-1)
    }
})();
/**************************************************************
    Problem: 1170
    User: odCYZ6nf-R4RSdbhiKzcJQa3vBWs [kamaCoder32550]
    Language: JavaScript
    Result: 正确
    Time:1012 ms
    Memory:13744 kb
****************************************************************/