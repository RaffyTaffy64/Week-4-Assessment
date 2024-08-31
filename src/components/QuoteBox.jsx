import React from 'react'
import QuoteButton from './QuoteButton'
import TableHeader2 from './TableHeader2'

function QuoteBox() {
    return (
        <div>
            <table>
                <thead>
                    <TableHeader2 />
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="2">
                            <QuoteButton />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default QuoteBox
