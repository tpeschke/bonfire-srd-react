import './Kits.css'
import { Kit } from '@srd/common/interfaces/chapterInterfaces/KitInterfaces'

interface Props {
    info: Kit[]
}

export default function Kits({ info }: Props) {
    return (
        <div className='kits-display-shell'>
            {info.map(({ title, items, weight, extraCash }, index) => {
                return (
                    <div key={index}>
                        <h3>{title}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Size</th>
                                    <th>Sell Back</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(({ item, size, sellBack }, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item}</td>
                                            <td>{size}</td>
                                            <td>{sellBack}</td>
                                        </tr>
                                    )
                                })}

                                <tr>
                                    <th>Extra Cash: {extraCash}</th>
                                    <th colSpan={2}>Weight: {weight}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}
