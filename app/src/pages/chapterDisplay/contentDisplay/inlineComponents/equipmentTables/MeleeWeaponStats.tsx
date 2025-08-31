import { MeleeWeaponObject, MeleeWeaponStatObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"

interface Props {
    meleeWeaponStats: MeleeWeaponObject
}

export default function MeleeWeaponStats({ meleeWeaponStats }: Props) {
    const { axes, polearms, sidearms, swords, trauma } = meleeWeaponStats

    const headers = (
        <>
            <th>Size</th>
            <th>Damage</th>
            <th>Recovery</th>
            <th>Dam Type</th>
            <th>Parry</th>
            <th>Measure</th>
            <th>Bonus</th>
        </>
    )

    function populateBodyRows({ name, size, damage, recovery, damageType, parry, measure, bonus }: MeleeWeaponStatObject, index: number) {
        return (
            <tr key={index}>
                <td>{name}</td>
                <td>{size}</td>
                <td>{damage}</td>
                <td>{recovery}</td>
                <td>{damageType}</td>
                <td>{parry}</td>
                <td>{measure}</td>
                <td>{bonus ? 'Yes' : ''}</td>
            </tr>
        )
    }

    return (
        <div className="responsive-table">
            <table className='no-float justify-left center-not-first-column'>
                <thead>
                    <tr>
                        <th>Axes</th>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {axes.map(populateBodyRows)}
                </tbody>
                <thead>
                    <tr>
                        <th>Polearms</th>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {polearms.map(populateBodyRows)}
                </tbody>
                <thead>
                    <tr>
                        <th>Sidearms</th>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {sidearms.map(populateBodyRows)}
                </tbody>
                <thead>
                    <tr>
                        <th>Swords</th>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {swords.map(populateBodyRows)}
                </tbody>
                <thead>
                    <tr>
                        <th>Trauma</th>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {trauma.map(populateBodyRows)}
                </tbody>
            </table>
        </div>
    )
}