import { useState } from 'react'
import { Layout } from '@/components/Layout'
import style from '@/styles/samples/01/index.module.scss'

export default function Sample01() {

    const [state, setState] = useState<number>(0)

    return (
        <>
            <Layout>
                <div className={style.wrap}>
                    <h1>AddMinusButton</h1>
                    <div className={style.con}>
                        <p className={style.result}>{state}</p>
                        <div className={style.btnBox}>
                            <button
                                className={style.btn}
                                onClick={() => setState(state + 1)}
                            >PLUS</button>
                            <button
                                className={style.btn}
                                onClick={() => setState(state - 1)}
                            >MINUS</button>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}