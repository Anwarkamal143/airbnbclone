import { SearchIcon } from "@heroicons/react/solid"
import { DetailedHTMLProps, InputHTMLAttributes, ReactElement } from "react"

// interface Props {
//     className?: string
// }
// type Iconvariants = "fas" | "far" | "fal" | "fad" | "fab"
export type InputFieldProps = Exclude<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "type"
> & {
    type?:
        | "button"
        | "checkbox"
        | "color"
        | "date"
        | "datetime-local"
        | "email"
        | "file"
        | "hidden"
        | "image"
        | "month"
        | "number"
        | "password"
        | "radio"
        | "range"
        | "reset"
        | "search"
        | "submit"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week"
    className?: string
    // ref?: MutableRefObject<HTMLInputElement>
    // parentClasses?: string
    // hasRightIcon?: boolean
    // hasLeftIcon?: boolean
    // leftIcon?: {
    //     icon: string | ReactNode
    //     variant?: Iconvariants
    //     ref?: MutableRefObject<HTMLInputElement>
    //     // eslint-disable-next-line
    //     [key: string]: any
    // }
    // rightIcon?: {
    //     icon?: string | ReactNode
    //     variant?: Iconvariants
    //     ref?: MutableRefObject<HTMLInputElement>
    //     // eslint-disable-next-line
    //     [key: string]: any
    // }
}
export default function Input({
    className,
    ...rest
}: InputFieldProps): ReactElement {
    return (
        <div
            className={`flex items-center py-2 rounded-full md:border-2 md:shadow-sm ${className}`}>
            <input
                type="text"
                placeholder={rest.placeholder || `Start your search...`}
                className="flex-grow pl-5 text-gray-600 placeholder-gray-400 bg-transparent outline-none"
                {...rest}
            />
            <SearchIcon className="hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:mx-2 md:inline-flex" />
        </div>
    )
}
