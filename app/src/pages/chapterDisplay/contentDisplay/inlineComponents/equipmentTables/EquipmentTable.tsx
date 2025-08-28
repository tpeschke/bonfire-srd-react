import { EquipmentTables } from "@srd/common/interfaces/chapterInterfaces/ChapterInterfaces";
import { EquipmentObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces";
import PriceByDistanceTable from "./PriceByDIstanceTable";
import PopulatedItemTable from "./PopulatedItemTable";

interface Props {
    table: EquipmentTables,
    info: EquipmentObject[]
}

export default function EquipmentTable({ table, info }: Props) {
    const { priceByDistance, animalLivestock, animalMounts } = info[0]

    switch (table) {
        case 'priceByDistance':
            return <PriceByDistanceTable priceByDistance={priceByDistance} />
        case 'animalLivestock':
            return <PopulatedItemTable table={animalLivestock} priceByDistance={priceByDistance} sizeScaling="H"/>
        case 'animalMounts':
            return <PopulatedItemTable table={animalMounts} priceByDistance={priceByDistance} sizeScaling="H"/>
        default:
            return <p>SOMETHING WENT WRONG</p>
    }
}