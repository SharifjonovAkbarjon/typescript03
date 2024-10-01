import { FC } from "react"

interface Props {
    title: string,
    price: number,
    children: JSX.Element
}

const Hero: FC<Props> = ({ title, price, children }) => {
    return (
        <>
            <div>
                <p>{title}</p>
                <p>{price}</p>
                {children}
            </div>
        </>
    )
}

export default Hero