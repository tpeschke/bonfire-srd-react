import { EquipmentTables } from "@srd/common/interfaces/chapterInterfaces/ChapterInterfaces";
import { EquipmentObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces";
import PriceByDistanceTable from "./PriceByDistanceTable";
import PopulatedItemTable from "./PopulatedItemTable";

interface Props {
    table: EquipmentTables,
    info: EquipmentObject[]
}

export default function EquipmentTable({ table, info }: Props) {
    const { priceByDistance, animalLivestock, animalMounts, animalBarding, animalFeed, armorPrices, beverages, clothing, clothingAccessories, containersHeavy, containersPersonal,
        musicalInstruments, poisonsNToxins, rope, shields, toolsAdventuring, toolsGeneral, toolsTrade, weaponsAxes, weaponsPolearms, weaponsSidearms, weaponsSwords, weaponsTrauma,
        weaponsRanged, ammunition
    } = info[0]

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
        case 'musicalInstruments':
            return <PopulatedItemTable table={musicalInstruments} priceByDistance={priceByDistance} />
        case 'poisonsNToxins':
            return <PopulatedItemTable table={poisonsNToxins} priceByDistance={priceByDistance} />
        case 'rope':
            return <PopulatedItemTable table={rope} priceByDistance={priceByDistance} />
        case 'shields':
            return <PopulatedItemTable table={shields} priceByDistance={priceByDistance} />
        case 'toolsAdventuring':
            return <PopulatedItemTable table={toolsAdventuring} priceByDistance={priceByDistance} />
        case 'toolsGeneral':
            return <PopulatedItemTable table={toolsGeneral} priceByDistance={priceByDistance} />
        case 'toolsTrade':
            return <PopulatedItemTable table={toolsTrade} priceByDistance={priceByDistance} />
        case 'weaponsAxes':
            return <PopulatedItemTable table={weaponsAxes} priceByDistance={priceByDistance} />
        case 'weaponsPolearms':
            return <PopulatedItemTable table={weaponsPolearms} priceByDistance={priceByDistance} />
        case 'weaponsSidearms':
            return <PopulatedItemTable table={weaponsSidearms} priceByDistance={priceByDistance} />
        case 'weaponsSwords':
            return <PopulatedItemTable table={weaponsSwords} priceByDistance={priceByDistance} />
        case 'weaponsTrauma':
            return <PopulatedItemTable table={weaponsTrauma} priceByDistance={priceByDistance} />
        case 'weaponsRanged':
            return <PopulatedItemTable table={weaponsRanged} priceByDistance={priceByDistance} />
        case 'ammunition':
            return <PopulatedItemTable table={ammunition} priceByDistance={priceByDistance} />
        default:
            return <p>SOMETHING WENT WRONG</p>
    }
}