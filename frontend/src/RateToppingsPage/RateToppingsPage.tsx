// imports
import { useState, useEffect, ReactElement } from "react";
import { JsxElement } from "typescript";

import RateToppingCard from "../RateToppingCard/RateToppingCard";
import { Topping } from "../RateToppingCard/RateToppingCard"

const RateToppingsPage = (): JSX.Element => {
    
    const dummyTopping: Topping  = {
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

    return (

        <>
            <h2>Tell us your tastiest topping out of these two!</h2>

            <RateToppingCard cardTopping={topping1} get2RandomToppings={get2RandomToppings} />

            <RateToppingCard cardTopping={topping2} get2RandomToppings={get2RandomToppings}/>
        </>


    )

}


export default RateToppingsPage