export interface Topping  {
    _id: string
    name: string
    category: string
    img: string
    winRatio?: number
}

export interface ToppingsProps {
    cardTopping: Topping
    get2randomToppings: (exclude?: boolean) => void
    rateToppings: (winner: Topping) => void
}
