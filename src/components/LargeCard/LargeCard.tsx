import Image from "next/image"
import React, { ReactElement } from "react"

interface Props {
    img: string
    title: string
    description: string
    buttonText: string
}

export default function LargeCard({
    img,
    title,
    description,
    buttonText,
}: Props): ReactElement {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="w-64 mb-3 text-4xl font-semibold">{title}</h3>
                <p>{description}</p>
                <button className="px-4 py-3 mt-5 text-sm text-white bg-gray-900 rounded-lg">
                    {buttonText}
                </button>
            </div>
        </section>
    )
}
