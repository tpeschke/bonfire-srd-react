import { EquipmentTables } from "@srd/common/interfaces/chapterInterfaces/ChapterInterfaces";
import { EquipmentObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces";
import PriceByDistanceTable from "./PriceByDIstanceTable";
import PopulatedItemTable from "./PopulatedItemTable";

interface Props {
    table: EquipmentTables,
    info: EquipmentObject[]
}

export default function EquipmentTable({ table, info }: Props) {
    const { priceByDistance, animalLivestock, animalMounts, animalBarding, animalFeed, armorPrices, beverages, clothing, clothingAccessories, containersHeavy, containersPersonal } = info[0]

    switch (table) {
        case 'priceByDistance':
            return <PriceByDistanceTable priceByDistance={priceByDistance} />
        case 'animalLivestock':
            return <PopulatedItemTable table={animalLivestock} priceByDistance={priceByDistance} sizeScaling="H" />
        case 'animalMounts':
            return <PopulatedItemTable table={animalMounts} priceByDistance={priceByDistance} sizeScaling="H" />
        case 'animalBarding':
            return <PopulatedItemTable table={animalBarding} priceByDistance={priceByDistance} sizeScaling="H" />
        case 'animalFeed':
            return <PopulatedItemTable table={animalFeed} priceByDistance={priceByDistance} />
        case 'armorPrices':
            return <PopulatedItemTable table={armorPrices} priceByDistance={priceByDistance} />
        case 'beverages':
            return <PopulatedItemTable table={beverages} priceByDistance={priceByDistance} />
        case 'clothing':
            return <PopulatedItemTable table={clothing} priceByDistance={priceByDistance} />
        case 'clothingAccessories':
            return <PopulatedItemTable table={clothingAccessories} priceByDistance={priceByDistance} />
        case 'containersHeavy':
            return <PopulatedItemTable table={containersHeavy} priceByDistance={priceByDistance} />
        case 'containersPersonal':
            return <PopulatedItemTable table={containersPersonal} priceByDistance={priceByDistance} />
        default:
            return <p>SOMETHING WENT WRONG</p>
    }
}