// imports
import { useState, useEffect, useContext } from "react";
import './RateToppingsPage.scss'
import RateToppingCard from "../RateToppingCard/RateToppingCard";
import { Topping } from "../types"
import WindowSizeContext from "../WindowSizeContext";

const RateToppingsPage = (): JSX.Element => {

    const initialEmptyTopping: Topping = {
        _id: '',
        name: '',
        category: '',
        img: '',
    }

    const [topping1, setTopping1] = useState<Topping>(initialEmptyTopping)
    const [topping2, setTopping2] = useState<Topping>(initialEmptyTopping)

    function get2RandomToppings() {

        fetch('http://localhost:4000/twoRandomToppings')
            .then((response) => {
                return response.json()
            })
            .then((responseBody) => {
                setTopping1(responseBody.data[0])
                setTopping2(responseBody.data[1])
            })

    }

    useEffect(() => {
        get2RandomToppings()
    }, [])

    const [counter, setCounter] = useState(-7)

    function rateToppings(cardTopping: Topping) {

        let winningToppingId: string = ''
        let losingToppingId: string = ''

        if (cardTopping === topping1) {
            winningToppingId = topping1._id
            losingToppingId = topping2._id
        } else {
            winningToppingId = topping2._id
            losingToppingId = topping1._id
        }

        const updateToppingsBody = {
            winningToppingId: winningToppingId,
            losingToppingId: losingToppingId
        }

        const jsonUpdateToppingsBody = JSON.stringify(updateToppingsBody)

        fetch('http://localhost:4000/rateToppings', {
            method: 'POST',
            body: jsonUpdateToppingsBody,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        setCounter(Math.min(counter+1,38))
    }

    const windowSize = useContext(WindowSizeContext)

    return (

        <div className="page">

            <h2>What's the tastiest topping out of these two?</h2>

            <div className="cardsDisplay">
                <RateToppingCard
                    cardTopping={topping1}
                    get2RandomToppings={get2RandomToppings}
                    rateToppings={rateToppings} />
                {windowSize.width > 423 && <span>VS</span>}
                <RateToppingCard
                    cardTopping={topping2}
                    get2RandomToppings={get2RandomToppings}
                    rateToppings={rateToppings} />
            </div>

            {windowSize.width <= 423 && <span>VS</span>}

            <img className="surprisePizza" alt="pizza" src="images/pizza.png"
                 style={{bottom: 'calc(-100% + '+(Math.max(counter,0)+35)+'%)'}}
            />
        </div>


    )

}


export default RateToppingsPage
