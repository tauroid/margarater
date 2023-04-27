import './RateToppingCard.scss'
import { ToppingsProps } from '../types'


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
