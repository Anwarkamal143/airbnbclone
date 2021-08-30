// import "tailwindcss/tailwind.css"
import "@styles/index.scss"
import { AppProps } from "next/dist/shared/lib/router/router"

type IAppProps = AppProps & {
    Component: AppProps["Component"] & {
        pageLayout?: React.ComponentType
    }
}

function MyApp({ Component, pageProps }: IAppProps) {
    return (
        <>
            <div>
                {/* {Component.pageLayout ? (
                    <Component.pageLayout>
                        <Component {...pageProps} />
                    </Component.pageLayout>
                ) : ( */}
                <Component {...pageProps} />
                {/* )} */}
            </div>
        </>
    )
}

export default MyApp
