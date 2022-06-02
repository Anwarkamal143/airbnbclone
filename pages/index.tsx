import { Banner, LargeCard, MediumCard, SmallCard } from "@components"
import { useAppDispatch } from "@redux"
import Head from "next/head"
import { ComponentType, ReactElement, ReactNode, useEffect } from "react"
import { liveAway, nearBy } from "src/redux/slices/airbnb_locatons"
type DataType = {
    location: string
    img: string
    distance: string
}
type CarddataType = {
    title: string
    img: string
}
interface IProps {
    className?: string
    children?: ReactNode | ComponentType | ReactElement | HTMLElement
    destinations?: DataType[]
    data?: CarddataType[]
}
export default function Home(props: IProps) {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(nearBy(props.destinations))
        dispatch(liveAway(props.data))
    }, [])
    return (
        <div className="">
            <Head>
                <title>Airbnb Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Header */}
            {/* <Header /> */}

            {/* Banner */}
            <Banner />

            <main className="px-8 mx-auto max-w-7xl sm:px-16">
                <section className="pt-6 ">
                    <h2 className="pb-5 text-4xl font-semibold">
                        Explore Nearby
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                        {props.destinations?.map(item => (
                            <SmallCard {...item} key={item.img} />
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="py-8 text-4xl font-semibold">
                        Live Anywhere
                    </h2>
                    <div className="flex p-3 space-x-3 overflow-scroll scrollbar-hide">
                        {props.data?.map(item => (
                            <MediumCard {...item} key={item.img} />
                        ))}
                    </div>
                </section>
                <LargeCard
                    img="https://links.papareact.com/4cj"
                    title="The Greatest Outdoors"
                    description="Wishlists curated by Airbnb"
                    buttonText="Get Inspired"
                />
            </main>
            {/* <Footer /> */}
        </div>
    )
}

export const getServerSideProps = async () => {
    const exploreData = await fetch("https://links.papareact.com/pyp").then(
        res => {
            return res.json()
        }
    )
    const cardsData = await fetch("https://links.papareact.com/zp1").then(
        res => {
            return res.json()
        }
    )
    return {
        props: {
            destinations: exploreData,
            data: cardsData,
        },
    }
}
