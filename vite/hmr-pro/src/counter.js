if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
      if (newModule) {
          console.log('updated: count is now ', newModule)
          newModule.setupCounter(document.getElementById('counter'))
      }
  })
}
export const setupCounter = (element) => {
  let counter = 0
  const setCount = (count) => {
      counter = count
      element.innerHTML = `Counter: ${counter}`
  }
  setCount(0)
  element.addEventListener('click', () => {setCount(counter + 2)})
}

