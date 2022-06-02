import { GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid"
import { ReactElement } from "react"

interface Props {
    className?: string
}

export default function RightHeaderSection({ className }: Props): ReactElement {
    return (
        <div
            className={`flex items-center justify-end space-x-4 text-gray-500 ${className}`}>
            <p className="hidden cursor-pointer md:inline">Become a host</p>
            <GlobeAltIcon className="h-6 cursor-pointer" />
            <div className="flex items-center space-x-2 border-2 rounded-full">
                <MenuIcon className="h-6" />
                <UserCircleIcon className="h-6" />
            </div>
        </div>
    )
}
