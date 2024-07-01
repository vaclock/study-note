// @ts-ignore
if (import.meta.hot) {
    // @ts-ignore
    import.meta.hot.accept((newModule) => {
        if (newModule) {
            // newModule is undefined when SyntaxError happened
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
    element.addEventListener('click', () => {setCount(counter + 0.5)})
}

