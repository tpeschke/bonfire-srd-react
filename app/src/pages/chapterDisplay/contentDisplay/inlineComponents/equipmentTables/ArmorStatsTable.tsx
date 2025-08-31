import { ArmorStatObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"

interface Props {
    armorStats: ArmorStatObject[]
}

export default function ArmorStatsTable({ armorStats }: Props) {
    return (
        <div className="responsive-table">
            <table className='no-float justify-left center-not-first-column'>
                <thead>
                    <tr>
                        <th>Armor</th>
                        <th>DR</th>
                        <th>Def Mod</th>
                        <th>Init Mod</th>
                        <th>Rec Mod</th>
                        <th>Fatigue</th>
                        <th>Skill Adj</th>
                    </tr>
                </thead>
                <tbody>
                    {armorStats.map(({ name, dr, defenseMod, initMod, recMod, fatigue, skillAdj }, index) => {
                        return (
                            <tr key={index}>
                                <td>{name}</td>
                                <td>{dr}</td>
                                <td>{defenseMod}</td>
                                <td>{initMod}</td>
                                <td>{recMod}</td>
                                <td>{fatigue}</td>
                                <td>{skillAdj}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}