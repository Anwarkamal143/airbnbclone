import { InfoCard, Map } from "@components"
import {
    selectSearchFilters,
    setSearchFilters,
    setSearchResults,
    useAppDispatch,
    useAppSelector,
} from "@redux"
import { format } from "date-fns"
import { useRouter } from "next/dist/client/router"
import {
    ComponentType,
    ReactElement,
    ReactNode,
    useEffect,
    useState,
} from "react"

interface IProps {
    className?: string
    children?: ReactNode | ComponentType | ReactElement | HTMLElement
    searchResults?: []
}
export default function Search(props: IProps) {
    const router = useRouter()
    const [query, setQuery] = useState<Record<string, any>>({
        location: "",
        noGuests: 1,
        startDate: null,
        endDate: null,
    })
    const dispatch = useAppDispatch()
    const searchFilters = useAppSelector(selectSearchFilters)
    useEffect(() => {
        const {
            startDate = format(new Date(), "dd MMMM yyyy"),
            endDate = format(new Date(), "dd MMMM yyyy"),
            ...rest
        } = router.query
        dispatch(setSearchResults(props.searchResults || []))
        if (!searchFilters.location && rest.location) {
            dispatch(
                setSearchFilters({
                    endDate: endDate as string,
                    startDate: startDate as string,
                    noGuests: rest.noGuests as string,
                    location: rest.location as string,
                })
            )
        }
    }, [])
    useEffect(() => {
        const {
            startDate = new Date(),
            endDate = new Date(),
            ...rest
        } = router.query

        const newSDate = formatedDate(startDate as string)
        const newEDate = formatedDate(endDate as string)

        setQuery({ startDate: newSDate, endDate: newEDate, ...rest })
    }, [router.query])
    const formatedDate = (date: string | Date) => {
        const formatedDate = format(
            // typeof date === "string" ? new Date(date) : new Date(date),
            new Date(date),
            "dd MMMM yyyy"
        )
        console.log(formatedDate)
        return formatedDate
    }
    return (
        <div className="mb-10">
            <main className="flex flex-col lg:flex-row">
                <section className="flex-grow px-6 pt-14">
                    <p className="text-xs">
                        300+ Stays{" "}
                        <strong>
                            {query.startDate} - {query.endDate}
                        </strong>{" "}
                        for {query.noGuests} number of guests
                    </p>
                    <h1 className="mt-2 mb-6 text-3xl font-semibold">
                        Stays in {query.location}
                    </h1>
                    <div className="hidden mb-5 space-x-3 font-semibold text-gray-800 lg:inline-flex whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>
                    </div>
                    <div className="flex flex-col">
                        {props.searchResults
                            ?.map((i: Record<string, string>, index) => ({
                                ...i,
                                id: i.title + index,
                            }))
                            .map((item: any) => (
                                <InfoCard key={item?.title} {...item} />
                            ))}
                    </div>
                </section>
                <div className="w-full h-[300px] lg:h-auto  xl:w-[600px]">
                    <Map
                        className="w-full"
                        searchResults={
                            props.searchResults?.map(
                                (i: Record<string, any>, index) => ({
                                    ...i,
                                    id: i.title + index,
                                })
                            ) || []
                        }
                    />
                </div>
            </main>
        </div>
    )
}

export const getServerSideProps = async () => {
    const searchResults = await fetch("https://links.papareact.com/isz").then(
        res => {
            return res.json()
        }
    )

    return {
        props: {
            searchResults,
        },
    }
}
