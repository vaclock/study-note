
let count = 0
export function countdown() {
    setInterval(() => {
        const countdown = document.getElementById('countdown') as HTMLDivElement;
        countdown.innerHTML = `
            current: ${count++}s;
        `
    }, 1000)
}