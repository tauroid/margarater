import React, { useEffect, useState } from 'react'
import { Topping } from '../types'
import './TopTenToppingsPage.scss'

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
  }, [])

  return (
    <div className="topTenToppingsPage">
      {topTen && (
        <div className="topTenToppingsTable">
          <table cellSpacing="0">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Win Rate</th>
              </tr>
            </thead>
            <tbody>
              {topTen?.map(({name, category, winRatio}, index) => (
                <React.Fragment key={index}>
                  <tr className={category+"-row entry"}>
                    <td>{index+1}</td>
                    <td>{name}</td>
                    <td>{
                      winRatio === undefined
                      ? "No ratings"
                      : (winRatio*100).toFixed(0)+'%'
                    }</td>
                  </tr>
                  <tr><td></td></tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>)}
    </div>
  )
}
