import './ContentDisplay.css'
import { ChapterInfoBaseObject, ComponentContent } from "@srd/common/interfaces/chapterInterfaces/ChapterInterfaces";
import CharacteristicGenerator from "./inlineComponents/characteristicGenerator/CharacteristicGenerator";
import Kits from './inlineComponents/kits/Kits';
import Image from '../../../components/image/Image';
import OriginsShapesTraditions from './inlineComponents/rudimentTables/OriginsShapesTraditions';
import RudimentsByTradition from './inlineComponents/rudimentTables/RudimentsByTradition';
import BurdensNInjuriesDisplay from './inlineComponents/burdensNInjuries/BurdensNInjuries';
import EquipmentTable from './inlineComponents/equipmentTables/EquipmentTable';
import ArmorStatsTable from './inlineComponents/equipmentTables/ArmorStatsTable';
import ShieldStatsTable from './inlineComponents/equipmentTables/ShieldStatsTable';
import MeleeWeaponStats from './inlineComponents/equipmentTables/MeleeWeaponStats';
import RangedWeaponStats from './inlineComponents/equipmentTables/RangedWeaponStats';

interface Props {
    componentInfo: ComponentContent,
    chapterInfo: ChapterInfoBaseObject | null
}

export default function InlineDisplay({ componentInfo, chapterInfo }: Props) {
    switch (componentInfo.component) {
        case 'characteristicGenerator':
            return <CharacteristicGenerator />
        case 'dwarfImage':
            return <Image src='ancestries/dwarf.png' />
        case 'elfImage':
            return <Image src='ancestries/elf.png' />
        case 'humanImage':
            return <Image src='ancestries/human.png' />
        case 'orcImage':
            return <Image src='ancestries/orc.png' />
        case 'pechImage':
            return <Image src='ancestries/pech.png' />
        case 'ratfolkImage':
            return <Image src='ancestries/ratfolk.png' />
        case 'gauntImage':
            return <Image src='ancestries/gaunt.png' />
        case 'starCursedImage':
            return <Image src='ancestries/starCursed.png' />
        case 'expertImage':
            return <Image isClass={true} src='classes/expert.png' />
        case 'fighterImage':
            return <Image isClass={true} src='classes/fighter.png' />
        case 'servantImage':
            return <Image isClass={true} src='classes/servant.png' />
        case 'socialiteImage':
            return <Image isClass={true} src='classes/socialite.png' />
        case 'weirdAdeptImage':
            return <Image isClass={true} src='classes/weirdAdept.png' />
        case 'kits':
            return <Kits info={chapterInfo ? chapterInfo.info : []} />
        case 'originsShapesTraditions':
            return <OriginsShapesTraditions info={chapterInfo ? chapterInfo.info : []} />
        case 'rudimentsByTradition':
            return <RudimentsByTradition info={chapterInfo ? chapterInfo.info : []} />
        case 'burdensNInjuries':
            return <BurdensNInjuriesDisplay info={chapterInfo ? chapterInfo.info : []} />
        case 'priceByDistance':
            return <EquipmentTable table='priceByDistance' info={chapterInfo ? chapterInfo.info : []} />
        case 'animalLivestock':
            return <EquipmentTable table='animalLivestock' info={chapterInfo ? chapterInfo.info : []} />
        case 'animalMounts':
            return <EquipmentTable table='animalMounts' info={chapterInfo ? chapterInfo.info : []} />
        case 'animalBarding':
            return <EquipmentTable table='animalBarding' info={chapterInfo ? chapterInfo.info : []} />
        case 'animalFeed':
            return <EquipmentTable table='animalFeed' info={chapterInfo ? chapterInfo.info : []} />
        case 'armorPrices':
            return <EquipmentTable table='armorPrices' info={chapterInfo ? chapterInfo.info : []} />
        case 'armorStats':
            return <ArmorStatsTable armorStats={chapterInfo ? chapterInfo.info[0].armorStats : []} />
        case 'beverages':
            return <EquipmentTable table='beverages' info={chapterInfo ? chapterInfo.info : []} />
        case 'clothing':
            return <EquipmentTable table='clothing' info={chapterInfo ? chapterInfo.info : []} />
        case 'clothingAccessories':
            return <EquipmentTable table='clothingAccessories' info={chapterInfo ? chapterInfo.info : []} />
        case 'containersHeavy':
            return <EquipmentTable table='containersHeavy' info={chapterInfo ? chapterInfo.info : []} />
        case 'containersPersonal':
            return <EquipmentTable table='containersPersonal' info={chapterInfo ? chapterInfo.info : []} />
        case 'musicalInstruments':
            return <EquipmentTable table='musicalInstruments' info={chapterInfo ? chapterInfo.info : []} />
        case 'poisonsNToxins':
            return <EquipmentTable table='poisonsNToxins' info={chapterInfo ? chapterInfo.info : []} />
        case 'rope':
            return <EquipmentTable table='rope' info={chapterInfo ? chapterInfo.info : []} />
        case 'shields':
            return <EquipmentTable table='shields' info={chapterInfo ? chapterInfo.info : []} />
        case 'shieldStats':
            return <ShieldStatsTable shieldStats={chapterInfo ? chapterInfo.info[0].shieldStats : []} />
        case 'toolsAdventuring':
            return <EquipmentTable table='toolsAdventuring' info={chapterInfo ? chapterInfo.info : []} />
        case 'toolsGeneral':
            return <EquipmentTable table='toolsGeneral' info={chapterInfo ? chapterInfo.info : []} />
        case 'toolsTrade':
            return <EquipmentTable table='toolsTrade' info={chapterInfo ? chapterInfo.info : []} />
        case 'weaponsAxes':
            return <EquipmentTable table='weaponsAxes' info={chapterInfo ? chapterInfo.info : []} />
        case 'weaponsPolearms':
            return <EquipmentTable table='weaponsPolearms' info={chapterInfo ? chapterInfo.info : []} />
        case 'weaponsSidearms':
            return <EquipmentTable table='weaponsSidearms' info={chapterInfo ? chapterInfo.info : []} />
        case 'weaponsSwords':
            return <EquipmentTable table='weaponsSwords' info={chapterInfo ? chapterInfo.info : []} />
        case 'weaponsTrauma':
            return <EquipmentTable table='weaponsTrauma' info={chapterInfo ? chapterInfo.info : []} />
        case 'weaponsRanged':
            return <EquipmentTable table='weaponsRanged' info={chapterInfo ? chapterInfo.info : []} />
        case 'ammunition':
            return <EquipmentTable table='ammunition' info={chapterInfo ? chapterInfo.info : []} />
        case 'meleeWeaponStats':
            return <MeleeWeaponStats meleeWeaponStats={chapterInfo ? chapterInfo.info[0].meleeWeaponStats : []} />
        case 'rangedWeaponStats':
            return <RangedWeaponStats rangedWeaponStats={chapterInfo ? chapterInfo.info[0].rangedWeaponStats : []} />
        default:
            return <div className="component-shell"><p>Something Went Wrong</p></div>
    }
}