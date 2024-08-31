import React from "react"
import { useState } from "react"
import { getRandomQuote } from "../../backend/server/controller.js"

function QuoteButton() {
  const [quote, setQuote] = useState(null)

  const handleButtonClick = () => {
    const newQuote = getRandomQuote()
    setQuote(newQuote)
  }

  return (
    <>
    <div>
      <table>
        <thead>
          <button onClick={handleButtonClick}>
            Get Random Quote
          </button>
        </thead>

      {quote && (
          <tbody>
                {quote.quote}
          </tbody>
      )}
      </table>
    </div>
    </>
  )
}

export default QuoteButton



