// serviceloader也是管理模块间依赖的一种方式，但是js没有内置的service-loader概念
// 所以模拟了一下这样的实现，但其实并没有这么拙劣
class Repository {
  readData() {
    const data = {
      title: 'from repository',
      num: 111
    }
    return data
  }
}

class Service {
  constructor() {
    this.repository = new Repository()
  }

  server() {
    console.log('this is service')
    return this.repository.readData()
  }
}

class Controller {
  constructor() {
    this.service = new Service()
  }

  execute() {
    console.log(this.service.server())
  }
}