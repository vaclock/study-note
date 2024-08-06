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
  constructor(repository) {
    this.repository = repository
  }

  server() {
    console.log('this is service')
    return this.repository.readData()
  }
}

class Controller {
  constructor(service) {
    this.service = service
  }

  execute() {
    console.log(this.service.server())
  }
}

class IoCContainer {
  constructor() {
    this.services = {}
  }

  register(name, dependencies, implementation) {
   this.services[name] = {
     dependencies,
     implementation
   }
  }

  resolve(name) {
    const target = this.services[name]
    if (!target) throw new Error(name + ' is not registered')
    const {dependencies, implementation} = target
    const args = dependencies.map(dep => this.resolve(dep))
    return new implementation(...args)
  }
}

const container = new IoCContainer()
container.register('repository', [], Repository)
container.register('service', ['repository'], Service)
container.register('controller', ['service'], Controller)

container.resolve('controller').execute()
container.resolve('service').server()