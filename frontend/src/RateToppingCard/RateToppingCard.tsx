import './RateToppingCard.scss'

export interface Topping  {
    _id: string
    name: string
    category: string 
    img: string 
}


export interface ToppingsProps {
    cardTopping: Topping
    get2randomToppings: (exclude?: boolean) => void
    rateToppings: (winner: Topping) => void
}

const RateToppingCard = (props: ToppingsProps) : JSX.Element => {
    return (
        <div className={`RateToppingCard ${props.cardTopping.category}`}>
            <img src={props.cardTopping.img}/>
            <button>{props.cardTopping.name}</button>
        </div>
    )
}

export default RateToppingCard