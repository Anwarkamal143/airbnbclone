import { useRouter } from "next/dist/client/router"
import Image from "next/image"
import { ReactElement } from "react"

interface Props {
    src?: string
}

export default function Logo({ src }: Props): ReactElement {
    const router = useRouter()
    const handleClick = () => {
        router.push("/")
    }
    return (
        <div
            className="relative flex items-center h-10 my-auto cursor-pointer"
            role="link"
            tabIndex={0}>
            <Image
                onClick={handleClick}
                src={src || "https://links.papareact.com/qd3"}
                layout="fill"
                objectFit="contain"
                objectPosition="left"
            />
        </div>
    )
}
