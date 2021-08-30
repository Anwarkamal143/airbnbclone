import React, { ReactElement } from "react"

interface Props {
    className?: string
}

export default function Banner({ className }: Props): ReactElement {
    return <div className={`${className}`}>banner</div>
}
