import './ContentDisplay.css'
import { ChapterInfoBaseObject, ComponentContent } from "@srd/common/interfaces/chapterInterfaces/ChapterInterfaces";
import CharacteristicGenerator from "./inlineComponents/characteristicGenerator/CharacteristicGenerator";
import Kits from './inlineComponents/kits/Kits';
import Image from '../../../components/image/Image';
import OriginsShapesTraditions from './inlineComponents/rudimentTables/OriginsShapesTraditions';
import RudimentsByTradition from './inlineComponents/rudimentTables/RudimentsByTradition';
import BurdensNInjuriesDisplay from './inlineComponents/burdensNInjuries/BurdensNInjuries';
import EquipmentTable from './inlineComponents/equipmentTables/EquipmentTable';
import PopulatedItemTable from './inlineComponents/equipmentTables/PopulatedItemTable';

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
        default:
            return <div className="component-shell"><p>Something Went Wrong</p></div>
    }
}