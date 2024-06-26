import React, { useState, lazy, Suspense } from "react"
import styles from '@/styles/index.module.scss';
import icon from '@/assets/rollup.png';
import Loading from "@/components/Loading";


const delayDemo = async (promise: Promise<any>, delay: number): Promise<any> => {
    await new Promise(res => {
        setTimeout(res, delay);
    });
    return await promise;
}

const About = lazy(() => delayDemo(import('@/components/About'), 2000));


const App = () => {
    let [count, setCount] = useState(0);
    let [visible, setVisible] = useState(false);
    return <>
        <h1 className={styles['text']}>{count}</h1>
        <div onClick={() => setCount(count => count + 1)}>add</div>

        <button onClick={() => setVisible(!visible)}>show</button>
        {
            visible && (
                <Suspense fallback={<Loading></Loading>}>
                    <About />
                </Suspense>
            )
        }
        <br></br>
        <img src={icon} />
    </>
}

export default App;