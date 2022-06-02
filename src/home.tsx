import { ReactElement } from "react"

interface Props {
    className?: string
}

export default function home({ className }: Props): ReactElement {
    return <div>Hello</div>
}
