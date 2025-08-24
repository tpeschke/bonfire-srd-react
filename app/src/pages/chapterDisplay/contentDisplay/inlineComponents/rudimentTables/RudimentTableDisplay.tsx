import './RudimentTable.css'
import { RudimentTable } from "@srd/common/interfaces/chapterInterfaces/WeirdInterfaces";

interface Prop {
    table: RudimentTable[],
    title: string
}

export default function RudimentTableDisplay({ table, title }: Prop) {
    let currentNumber = 0;

    return (
        <table className="no-float">
            <thead>
                <tr>
                    <th className='title-heading' colSpan={2}>{title} Rudiments</th>
                </tr>
                <tr>
                    <th>Roll</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                {table.map(({ rudiment, number = 1 }) => {
                    const oldNumber = number > 1 ? currentNumber + 1 : null
                    currentNumber += number

                    return (
                        <tr>
                            <td>{oldNumber ? `${oldNumber} - ${currentNumber}` : currentNumber}</td>
                            <td>{rudiment}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}