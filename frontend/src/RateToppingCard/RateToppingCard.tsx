import './RateToppingCard.scss'

export interface Topping {
    _id: string
    name: string
    category: string
    img: string
}


export interface ToppingsProps {
    cardTopping: Topping
    get2RandomToppings: (exclude?: boolean) => void
    rateToppings: (winner: Topping) => void
}


const RateToppingCard = (props: ToppingsProps): JSX.Element => {

    const handleVote = () => {
        props.rateToppings(props.cardTopping)
        props.get2RandomToppings()
    }

    return (

        <div className={`RateToppingCard ${props.cardTopping.category}`}>
            {props.cardTopping.img ?
                <>
                    <img src={props.cardTopping.img} alt={props.cardTopping.name} />
                    <button onClick={handleVote}>{props.cardTopping.name}</button>
                </> :
                <p>Prepping ingredients...</p>
            }
        </div>

    )
}


export default RateToppingCard