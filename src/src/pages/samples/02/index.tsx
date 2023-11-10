import { useState } from 'react'
import { Layout } from '@/components/Layout'
import style from '@/styles/samples/02/inex.module.scss'

type State = {
    value1: string,
    value2: string,
    result: number,
    error: string
}

export default function Sample02() {

    const [state, setState] = useState<State>({
        value1: '',
        value2: '',
        result: 0,
        error: '計算できません。数字を入力してください。'
    })

    return (
        <>
            <Layout>
                <div className={style.wrap}>
                    <h1 className={style.title}>Calc</h1>
                    <div className={style.con}>
                        <p className={style.result}>
                            {state.result !== state.result ? state.error : state.result}
                        </p>
                        <div className={style.inputBox}>
                            <input type="text" value={state.value1}
                                className={style.input}
                                onChange={(e) => setState({
                                    ...state,
                                    value1: e.target.value
                                })}
                            />
                            <p>+</p>
                            <input type="text" value={state.value2}
                                className={style.input}
                                onChange={(e) => setState({
                                    ...state,
                                    value2: e.target.value
                                })}
                            />
                        </div>
                        <button
                            className={style.btn}
                            onClick={() => {
                                let num1 = Number(state.value1)
                                let num2 = Number(state.value2)

                                setState({
                                    ...state,
                                    result: num1 + num2
                                })
                            }}
                        >計算</button>
                    </div>
                </div>
            </Layout>
        </>
    )
}