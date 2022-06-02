// import "tailwindcss/tailwind.css"
import ProgressBar from "@badrap/bar-of-progress"
import { Footer, Header } from "@components"
import { store } from "@redux"
import "@styles/index.scss"
import { AppProps } from "next/dist/shared/lib/router/router"
import Router from "next/router"
import { Provider } from "react-redux"

const progress = new ProgressBar({
    size: 4,
    color: "#FE595e",
    className: "z-50",
    delay: 100,
})

Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete", progress.finish)
Router.events.on("routeChangeError", progress.finish)

type IAppProps = AppProps & {
    Component: AppProps["Component"] & {
        pageLayout?: React.ComponentType
    }
}

function MyApp({ Component, pageProps }: IAppProps) {
    return (
        <>
            <Provider store={store}>
                <div className="flex flex-col h-full">
                    {/* {Component.pageLayout ? (
                    <Component.pageLayout>
                        <Component {...pageProps} />
                    </Component.pageLayout>
                ) : ( */}
                    <Header />
                    <div className="flex-grow">
                        <Component {...pageProps} />
                    </div>
                    <Footer />
                    {/* )} */}
                </div>
            </Provider>
        </>
    )
}

export default MyApp
