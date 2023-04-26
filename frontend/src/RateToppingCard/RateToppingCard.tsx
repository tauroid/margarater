import './RateToppingCard.scss'
import { ToppingsProps } from '../types'

const RateToppingCard = (props: ToppingsProps) : JSX.Element => {
    return (
        <div className={`RateToppingCard ${props.cardTopping.category}`}>
            <img src={props.cardTopping.img} alt={props.cardTopping.name}/>
            <button>{props.cardTopping.name}</button>
        </div>
    )
}

export default RateToppingCard
