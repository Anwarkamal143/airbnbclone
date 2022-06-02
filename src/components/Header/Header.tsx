import { UsersIcon } from "@heroicons/react/solid"
import {
    selectSearchFilters,
    setSearchFilters,
    useAppDispatch,
    useAppSelector,
} from "@redux"
import { format } from "date-fns"
import { useRouter } from "next/dist/client/router"
import { ReactElement, useEffect, useState } from "react"
import { DateRangePicker } from "react-date-range"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file
// import { useSelector } from "react-redux"
import Input from "./Input"
import Logo from "./Logo"
import RightHeaderSection from "./RightHeaderSection"

export default function Header(): ReactElement {
    const [searchInput, setSearchInput] = useState("")
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [guests, setGuests] = useState(1)
    const [placeholder, setPlaceholder] = useState("Start your search here...")
    const searchFilters = useAppSelector(selectSearchFilters)
    const dispatch = useAppDispatch()
    const router = useRouter()
    useEffect(() => {
        if (searchFilters.location && router.query.location) {
            setPlaceholder(
                `${router.query.location} | ${format(
                    // typeof date === "string" ? new Date(date) : new Date(date),
                    new Date(router.query.startDate as string),
                    "dd MMMM yyyy"
                )} | ${format(
                    new Date(router.query.endDate as string),
                    "dd MMMM yyyy"
                )} | ${router.query.noGuests} guests`
            )
        } else {
            setPlaceholder("Start your search here...")
        }
    }, [router.query, searchFilters])

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }
    const handleSelect = (ranges: Record<string, any>) => {
        const { selection } = ranges
        setStartDate(selection.startDate)
        setEndDate(selection.endDate)
    }
    const resetInput = () => {
        setSearchInput("")
        setStartDate(new Date())
        setEndDate(new Date())
    }

    const handleSearch = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: format(startDate, "yyyy-MM-dd"),
                endDate: format(endDate, "yyyy-MM-dd"),
                noGuests: guests,
            },
        })
        dispatch(
            setSearchFilters({
                endDate: format(endDate, "yyyy-MM-dd"),
                startDate: format(startDate, "yyyy-MM-dd"),
                noGuests: guests,
                location: searchInput,
            })
        )
        resetInput()
    }
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">
            {/* Left section */}
            <Logo />
            {/* Middle  section*/}
            <Input
                // className="absolute sm:static top-full"
                placeholder={placeholder}
                value={searchInput}
                onChange={e => {
                    if (e.target.value.trim() === "") resetInput()

                    console.log(e.target.value.trim() === "")

                    setSearchInput(e.target.value)
                }}
            />
            {/* Right section  */}
            <RightHeaderSection />

            {searchInput.trim() && (
                <div className="flex flex-col col-span-3 mx-auto transition duration-150 transform">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center mb-4 border-b">
                        <h2 className="flex-grow text-2xl font-semibold">
                            Number of Guests
                        </h2>
                        <UsersIcon className="h-5" />
                        <input
                            value={guests}
                            onChange={e => {
                                setGuests(parseInt(e.target.value))
                            }}
                            min={1}
                            type="number"
                            className="w-12 pl-2 text-lg text-red-400 outline-none"
                        />
                    </div>
                    <div className="flex flex-grow">
                        <button
                            onClick={resetInput}
                            className="flex-grow text-gray-500">
                            Cancel
                        </button>
                        <button
                            className="flex-grow text-red-400"
                            onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}
