// imports
import { useState, useEffect } from "react";
import { JsxElement } from "typescript";
import './RateToppingsPage.scss'
import RateToppingCard from "../RateToppingCard/RateToppingCard";
import { Topping } from "../RateToppingCard/RateToppingCard"

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

    return (

        <div className="page">

            <h2>Tell us your tastiest topping out of these two!</h2>

            <div className="cardsDisplay">
                <RateToppingCard cardTopping={topping1} get2RandomToppings={get2RandomToppings} />
                <span>VS</span>
                <RateToppingCard cardTopping={topping2} get2RandomToppings={get2RandomToppings} />
            </div>
            
        </div>


    )

}


export default RateToppingsPage