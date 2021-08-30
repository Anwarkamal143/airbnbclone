import { SearchIcon } from "@heroicons/react/solid"
import { ReactElement } from "react"

interface Props {
    className?: string
}

export default function MiddleHeaderSection({
    className,
}: Props): ReactElement {
    return (
        <div
            className={`flex items-center py-2 rounded-full md:border-2 md:shadow-sm ${className}`}>
            <input
                type="text"
                placeholder="Start your search..."
                className="flex-grow pl-5 text-gray-600 placeholder-gray-400 bg-transparent outline-none"
            />
            <SearchIcon className="hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:mx-2 md:inline-flex" />
        </div>
    )
}
