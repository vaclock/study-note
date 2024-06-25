import React, { useState } from "react"

const App = () => {
    let [count, setCount] = useState(0);
    return <>
        <p>{count}</p>
        <div onClick={() => setCount(count => count + 1)}>add</div>
    </>
}

export default App;