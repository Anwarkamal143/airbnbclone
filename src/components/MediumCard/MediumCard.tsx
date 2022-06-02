import Image from "next/image"
import React, { ReactElement } from "react"

interface Props {
    title: string
    img: string
}

export default function MediumCard({ title, img }: Props): ReactElement {
    return (
        <div className="transition duration-300 ease-out transform cursor-pointer hover:scale-105">
            <div className="relative w-80 h-80">
                <Image
                    src={img}
                    layout="fill"
                    // objectFit="contain"
                    className="rounded-lg"
                />
            </div>

            <h3 className="font-semibold">{title}</h3>
        </div>
    )
}
