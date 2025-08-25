import { BurdenNInjuryTable } from '@srd/common/interfaces/chapterInterfaces/BurdensNInjuriesInterfaces'

interface Prop {
    table: BurdenNInjuryTable[],
    title: string
}

export default function BurdensTableDisplay({ table, title }: Prop) {
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
                {table.map(({ burdenNInjury, number = 1 }, index) => {
                    const oldNumber = number > 1 ? currentNumber + 1 : null
                    currentNumber += number

                    return (
                        <tr key={index}>
                            <td>{oldNumber ? `${oldNumber} - ${currentNumber}` : currentNumber}</td>
                            <td>{burdenNInjury}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}