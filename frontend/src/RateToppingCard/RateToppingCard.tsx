interface Topping  {
    id: number
    name: string
    category: string 
    img: string 
}



interface ToppingsProps {
    cardTopping: Topping
    get2randomToppings: Function
    rateToppings: Function
}

const RateToppingCard = (props: ToppingsProps) : JSX.Element => {
    return (
        <div className=`"RateToppingCard" {props.cardTopping.category}`>
            <img src={props.cardTopping.img}/>
            <button>{props.cardTopping.name}</button>
        </div>
    )
}