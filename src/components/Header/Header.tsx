import { ReactElement } from "react"
import Logo from "./Logo"
import MiddleHeaderSection from "./MiddleSearch"
import RightHeaderSection from "./RightHeaderSection"

interface Props {
    className?: string
}

export default function Header({ className }: Props): ReactElement {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">
            {/* Left section */}
            <Logo />
            {/* Middle  section*/}
            <MiddleHeaderSection />
            {/* Right section  */}
            <RightHeaderSection />
        </header>
    )
}
