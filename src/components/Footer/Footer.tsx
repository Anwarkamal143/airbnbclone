import React, { ReactElement } from "react"

interface Props {
    className?: string
}

export default function Footer({ className }: Props): ReactElement {
    return (
        <div
            className={`${className} grid grid-cols-2 px-10 sm:px-32 text-gray-600 bg-gray-100 gap-y-10 md:grid-cols-4 py-14`}>
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p>New Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Accessiblity</p>
                <p>This is not a real site</p>
                <p>Its a pretty awesome clone</p>
                <p>Referrals accepted</p>
                <p>Anwar</p>
            </div>
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p>Anwar</p>
                <p>Presents</p>
                <p>Zero to Full Stack Hero</p>
                <p>Hundreds of Students</p>
                <p>Join Now</p>
            </div>
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Help Center</p>
                <p>Trust & Safety</p>
                <p>Say Hi Youtube</p>
                <p>Easter Eggs</p>
                <p>For the Win</p>
            </div>
        </div>
    )
}
