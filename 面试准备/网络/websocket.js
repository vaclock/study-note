const ws = new WebSocket('xxx')
ws.open = function(e) {
    console.log(e)
}
ws.onmessage = function(e) {
    console.log(e)
}
ws.onclose = function(e) {
    console.log(e)
}