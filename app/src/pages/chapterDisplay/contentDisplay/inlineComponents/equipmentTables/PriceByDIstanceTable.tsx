import { PriceObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces";

interface Props {
    priceByDistance: PriceObject
}

export default function PriceByDistanceTable({ priceByDistance }: Props) {
    const priceKeys= Object.keys(priceByDistance) as (keyof PriceObject)[]

    return (
        <div className="responsive-table">
            <table className='no-float justify-left'>
                <thead>
                    <tr>
                        <th>Size</th>
                        <th>Source</th>
                        <th>Local</th>
                        <th>Nearby</th>
                        <th>Regional</th>
                        <th>Distant</th>
                    </tr>
                </thead>
                <tbody>
                    {priceKeys.map((key, index) => {
                        return (
                            <tr key={index}>
                                <td>{priceByDistance[key].fullName}</td>
                                {priceByDistance[key].modifiers.map((element, index) => <td key={index} className='center-row'>{element}</td>)}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}