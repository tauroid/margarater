// imports
import { useState, useEffect, ReactElement } from "react";
import { JsxElement } from "typescript";
import './RateToppingsPage.scss'
import RateToppingCard from "../RateToppingCard/RateToppingCard";
import { Topping } from "../RateToppingCard/RateToppingCard"

const RateToppingsPage = (): JSX.Element => {

    const dummyTopping: Topping = {
        _id: '',
        name: '',
        category: '',
        img: '',
    }

    const [topping1, setTopping1] = useState<Topping>(dummyTopping)
    const [topping2, setTopping2] = useState<Topping>(dummyTopping)

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

    }

    return (

        <div className="page">

            <h2>Tell us your tastiest topping out of these two!</h2>

            <div className="cardsDisplay">
                <RateToppingCard
                    cardTopping={topping1}
                    get2RandomToppings={get2RandomToppings}
                    rateToppings={rateToppings} />
                <span>VS</span>
                <RateToppingCard
                    cardTopping={topping2}
                    get2RandomToppings={get2RandomToppings}
                    rateToppings={rateToppings} />
            </div>

        </div>


    )

}


export default RateToppingsPage