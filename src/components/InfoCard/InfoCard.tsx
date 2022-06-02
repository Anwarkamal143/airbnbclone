import { HeartIcon, StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import React, { ReactElement } from "react"

interface Props {
    className?: string
    img?: string
    title?: string
    description?: string
    location?: string
    star: number
    price: number
    total: number
    id?: string
}

export default function InfoCard({
    id,
    img,
    title,
    description,
    location,
    star,
    price,
    total,
}: Props): ReactElement {
    return (
        <div
            id={id}
            className="flex flex-col px-2 pr-4 transition duration-200 ease-out transform border-b cursor-pointer sm:flex-row first:border-t py-7 hover:opacity-80 hover:shadow-lg">
            <div className="relative flex-shrink-0 w-full h-36 md:h-52 md:w-80">
                <Image
                    src={img || ""}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>
            <div className="flex flex-col flex-grow pt-3 sm:pt-0 sm:pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="cursor-pointer h-7" />
                </div>
                <h4 className="text-xl font-semibold">{title}</h4>
                <div className="w-10 pt-2 border-b" />
                <p className="flex-grow pt-2 text-sm text-gray-500">
                    {description}
                </p>
                <div className="flex items-end justify-between pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>
                    <div>
                        <p className="pb-2 text-lg font-semibold lg:text-2xl">
                            {price}
                        </p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
