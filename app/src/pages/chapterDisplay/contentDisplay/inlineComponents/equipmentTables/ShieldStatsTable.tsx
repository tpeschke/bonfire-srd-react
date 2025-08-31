import { ShieldStatObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"

interface Props {
    shieldStats: ShieldStatObject[]
}

export default function ShieldStatsTable({ shieldStats }: Props) {
    return (
        <div className="responsive-table">
            <table className='no-float justify-left center-not-first-column'>
                <thead>
                    <tr>
                        <th>Shield</th>
                        <th>DR</th>
                        <th>Def</th>
                        <th>Parry</th>
                        <th>Cover</th>
                        <th>Flanks</th>
                        <th>Fatigue</th>
                        <th>Bonus</th>
                    </tr>
                </thead>
                <tbody>
                    {shieldStats.map(({ name, dr, def, parry, cover, fatigue, flanks, bonus }, index) => {
                        return (
                            <tr key={index}>
                                <td>{name}</td>
                                <td>{dr}</td>
                                <td>{def}</td>
                                <td>{parry}</td>
                                <td>{cover}</td>
                                <td>{flanks}</td>
                                <td>{fatigue}</td>
                                <td>{bonus ? 'Yes' : ''}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}