import './ContentDisplay.css'
import { ChapterInfoBaseObject, ComponentContent } from "@srd/common/interfaces/chapterInterfaces/ChapterInterfaces";
import CharacteristicGenerator from "./inlineComponents/CharacteristicGenerator";
import Kits from './inlineComponents/kits/Kits';
import Image from '../../../components/image/Image';
import OriginsShapesTraditions from './inlineComponents/rudimentTables/OriginsShapesTraditions';
import RudimentsByTradition from './inlineComponents/rudimentTables/RudimentsByTradition';
import BurdensNInjuriesDisplay from './inlineComponents/burdensNInjuries/BurdensNInjuries';

interface Props {
    componentInfo: ComponentContent,
    chapterInfo: ChapterInfoBaseObject
}

export default function InlineDisplay({ componentInfo, chapterInfo }: Props) {
    switch (componentInfo.component) {
        case 'characteristicGenerator':
            return <div className="component-shell"><CharacteristicGenerator /></div>
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
        case 'kits':
            return <Kits info={chapterInfo.info} />
        case 'originsShapesTraditions':
            return <OriginsShapesTraditions info={chapterInfo.info} />
        case 'rudimentsByTradition':
            return <RudimentsByTradition info={chapterInfo.info}/>
        case 'burdensNInjuries':
            return <BurdensNInjuriesDisplay info={chapterInfo.info}/>
        default:
            return <div className="component-shell"><p>Something Went Wrong</p></div>
    }
}