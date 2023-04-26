// imports
import { useState, useEffect, ReactElement } from "react";
import { JsxElement } from "typescript";


const RateToppingsPage = (): JSX.Element => {

    const [topping1, setTopping1] = useState('')
    const [topping2, setTopping2] = useState('')

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

            {/* <RateToppingCard topping1={topping1} />

            <RateToppingCard topping2={topping2} /> */}
        </>


    )

}

//exports

export default RateToppingsPage