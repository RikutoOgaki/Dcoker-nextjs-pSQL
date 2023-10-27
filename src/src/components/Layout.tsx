import { useState, useEffect, ReactNode } from 'react'

type Props = {

}

export function Layout(children: ReactNode) {
    return (
        <>
            <div>
                {children}
            </div>
        </>
    )
}