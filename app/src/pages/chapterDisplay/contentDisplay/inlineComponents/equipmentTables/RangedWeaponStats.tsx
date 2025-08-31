import { RangedWeaponObject, RangedWeaponStatObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"

interface Props {
    rangedWeaponStats: RangedWeaponObject
}

export default function RangedWeaponStats({ rangedWeaponStats }: Props) {
    const { thrown, mechanical, firearms } = rangedWeaponStats

    const headers = (
        <>
            <th>Size</th>
            <th>RI</th>
            <th>Damage</th>
            <th>Recovery</th>
            <th>Dam Type</th>
            <th>Min Rec</th>
            <th>Bonus</th>
        </>
    )

    function populateBodyRows({ name, size, damage, recovery, damageType, minRecovery, ri, bonus }: RangedWeaponStatObject, index: number) {
        return (
            <tr key={index}>
                <td>{name}</td>
                <td>{size}</td>
                <td>{ri}</td>
                <td>{damage}</td>
                <td>{recovery}</td>
                <td>{damageType}</td>
                <td>{minRecovery}</td>
                <td>{bonus ? 'Yes' : ''}</td>
            </tr>
        )
    }

    return (
        <div className="responsive-table">
            <table className='no-float justify-left center-not-first-column'>
                <thead>
                    <tr>
                        <th>Thrown</th>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {thrown.map(populateBodyRows)}
                </tbody>
                <thead>
                    <tr>
                        <th>Mechanical</th>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {mechanical.map(populateBodyRows)}
                </tbody>
                {firearms.length > 0 && (
                    <>
                        <thead>
                            <tr>
                                <th>Firearms</th>
                                {headers}
                            </tr>
                        </thead>
                        <tbody>
                            {firearms.map(populateBodyRows)}
                        </tbody>
                    </>
                )}
            </table>
        </div>
    )
}