
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
      if (newModule) {
          console.log('updated: count is now ', newModule)
          newModule.countdown()
      }
  })
}

let count = 0
export function countdown() {
    setInterval(() => {
        const countdown = document.getElementById('countdown');
        countdown.innerHTML = `
            current: ${count++}s;
        `
    }, 1000)
}