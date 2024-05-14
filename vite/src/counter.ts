export const setupCounter = (element) => {
    let counter = 0
    const setCount = (count) => {
        counter = count
        element.innerHTML = `${counter}`
    }
    setCount(0)
    element.addEventListener('click', () => {setCount(counter + 1)})
}

