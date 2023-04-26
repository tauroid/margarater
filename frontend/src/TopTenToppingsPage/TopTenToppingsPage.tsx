import { useEffect, useState } from 'react'
import { Topping } from '../types'

export default function TopTenToppingsPage() {
    const [topTen, setTopTen] = useState<null|Topping[]>(null)

    function updateTopTen() {
        fetch('http://localhost:4000/topTenToppings')
            .then(res => res.json())
            .then((body: {message: string, data: Topping[]}) => {
                if (body.message.startsWith("Success")) {
                    setTopTen(body.data)
                }
            })
    }

    useEffect(() => {
        updateTopTen()
        setInterval(updateTopTen, 3000)
    }, [])

    return <div>Hello</div>
}
