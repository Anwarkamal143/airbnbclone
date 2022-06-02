import Image from "next/image"
import React, { ReactElement } from "react"

interface Props {
    location: string
    img: string
    distance: string
}

export default function SmallCard({
    location,
    distance,
    img,
}: Props): ReactElement {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 transition duration-200 ease-out transform cursor-pointer rounded-xl hover:scale-105 hover:bg-gray-100">
            <div className="relative w-16 h-16">
                <Image
                    src={img}
                    layout="fill"
                    // objectFit="contain"
                    className="rounded-lg"
                />
            </div>
            <div>
                <h2 className="font-semibold">{location}</h2>
                <h3 className="text-gray-500">{distance}</h3>
            </div>
        </div>
    )
}
