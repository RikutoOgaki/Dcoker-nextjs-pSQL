import { useState, useEffect, ReactNode } from 'react'
import { SiNextdotjs, SiDocker } from 'react-icons/si'
import { motion } from 'framer-motion'
import Link from 'next/link'
import style from '@/styles/components/layout.module.scss'

type Props = {
    children: ReactNode
}

export function Layout({ children }: Props) {

    const [flg, setFlg] = useState<string>('/')

    return (
        <>
            <div className={style.layoutWrap}>
                <header className={style.head}>
                    <p className={style.iconBox}>
                        <SiNextdotjs className={style.icon} /> + <SiDocker className={style.icon} />
                    </p>
                    <h1 className={style.title}>next.js + Docker</h1>
                </header>
                <motion.main
                    initial={{ opacity: 0, transform: "translateX(0)" }} //初期状態
                    animate={{ opacity: 1, transform: "translateX(0)" }} //マウント
                    exit={{ opacity: 0, transform: "translateX(0)" }} //アンマウント
                >
                    {children}
                </motion.main>

                {flg !== '/' ?
                    null
                    :
                    <footer className={style.foot}>
                        <Link href={flg} className={style.back}>戻る</Link>
                    </footer>
                }
            </div>
        </>
    )
}