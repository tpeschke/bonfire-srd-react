import './ContentDisplay.css'
import { ComponentContent } from "@srd/common/interfaces/ChapterInterfaces";
import CharacteristicGenerator from "./inlineComponents/CharacteristicGenerator";
import Kits from './inlineComponents/kits/Kits';
import Image from '../../../components/image/Image';

interface Props {
    componentInfo: ComponentContent
}

export default function InlineDisplay({ componentInfo }: Props) {
    switch (componentInfo.component) {
        case 'characteristicGenerator':
            return <div className="component-shell"><CharacteristicGenerator /></div>
        case 'kits':
            return <Kits />
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
        default:
            return <div className="component-shell"><p>Something Went Wrong</p></div>
    }
}