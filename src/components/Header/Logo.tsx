import Image from "next/image"
import { ReactElement } from "react"

interface Props {
    src?: string
}

export default function Logo({ src }: Props): ReactElement {
    return (
        <div className="relative flex items-center h-10 my-auto cursor-pointer">
            <Image
                src={src || "https://links.papareact.com/qd3"}
                layout="fill"
                objectFit="contain"
                objectPosition="left"
            />
        </div>
    )
}
