import { Banner, Header } from "@components"
import Head from "next/head"
import { ComponentType, ReactElement, ReactNode } from "react"

interface IProps {
    className?: string
    children?: ReactNode | ComponentType | ReactElement | HTMLElement
}
export default function Home(props: IProps) {
    return (
        <div className="">
            <Head>
                <title>Airbnb Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Header */}
            <Header />

            {/* Banner */}
            <Banner />
        </div>
    )
}
