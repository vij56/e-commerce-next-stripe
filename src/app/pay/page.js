"use client"
import { checkout } from "../../../utils/checkout"

export default function Pay() {
  return (
    <div>
      <button onClick={() => {
        checkout({
          lineItems: [
            {
              price: "price_1NsQOQSHhVqEBIL0SE8EMaT8",
              quantity: 1
            }
          ]
        })
      }}>PAY NOW</button>
    </div>
  )
}
