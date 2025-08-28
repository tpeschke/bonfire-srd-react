import { EquipmentItem, PriceObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces";

interface Props {
    table: EquipmentItem[],
    priceByDistance: PriceObject,
    sizeScaling?: string
}

export default function PopulatedItemTable({ table, priceByDistance, sizeScaling = 'M' }: Props) {
    const hasItemSpecificScaling = table[0].size

    return (
        <table className='no-float justify-left'>
            <thead>
                <tr>
                    <td>Item</td>
                    <td className='center-row'>Complex</td>
                    {hasItemSpecificScaling && <td className='center-row'>Size</td>}
                    <td className='center-row'>Source</td>
                    <td className='center-row'>Local</td>
                    <td className='center-row'>Nearby</td>
                    <td className='center-row'>Regional</td>
                    <td className='center-row'>Distant</td>
                </tr>
            </thead>
            <tbody>
                {table.map(({item, complexity, size, basePrice}, index) => {
                    const sizeToScaleBy = size ? size : sizeScaling

                    const localPrice = Math.round(basePrice * priceByDistance[sizeToScaleBy].modifiers[1] * 100) / 100
                    const nearbyPrice = Math.round(basePrice * priceByDistance[sizeToScaleBy].modifiers[2] * 100) / 100
                    const regionalPrice = Math.round(basePrice * priceByDistance[sizeToScaleBy].modifiers[3] * 100) / 100
                    const distantPrice = Math.round(basePrice * priceByDistance[sizeToScaleBy].modifiers[4] * 100) / 100
                    
                    return (
                        <tr key={index}>
                            <td>{item}</td>
                            <td className='center-row'>{complexity}</td>
                            {hasItemSpecificScaling && <td className='center-row'>{size}</td>}
                            <td className='center-row'>{basePrice}</td>
                            <td className='center-row'>{localPrice}</td>
                            <td className='center-row'>{nearbyPrice}</td>
                            <td className='center-row'>{regionalPrice}</td>
                            <td className='center-row'>{distantPrice}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}