// 服务对象(被依赖的对象)
class Service {
  execute() {
    throw new Error('this method should be override');
  }
}

class ServiceImp extends Service {
  execute() {
    console.log('service imp execute');
  }
}


class Client {
  // DI
  constructor(service) {
    this.service = service;
  }
  doSomething() {
    console.log('client execute');
    this.service.execute();
  }
}

const client = new Client(new ServiceImp());
console.log(client.doSomething())