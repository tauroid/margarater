// imports
import { useState, useEffect, ReactElement } from "react";
import { JsxElement } from "typescript";


const RateToppingsPage = (): JSX.Element => {

    // props & hooks
    const [topping1, setTopping1] = useState('')
    const [topping2, setTopping2] = useState('')

    async function get2RandomToppings() {

        fetch('http://localhost:4000/twoRandomToppings?exclude=id')
            .then((response) => {
                return response.json()})
                .then((data) => {

                console.log(data)
                return data
            })

    }

    get2RandomToppings()


    return (

        // other html (h2 & VS!)

        // <>
        //     <RateToppingCard topping1={topping1} />

        //     <RateToppingCard topping2={topping2} />
        // </>
        <>
            <h2>Pizza!!</h2>

        </>

    )

}

//exports

export default RateToppingsPage