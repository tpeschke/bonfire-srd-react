import './ContentDisplay.css'
import { ComponentContent } from "@srd/common/interfaces/ChapterInterfaces";
import CharacteristicGenerator from "./inlineComponents/CharacteristicGenerator";

interface Props {
    componentInfo: ComponentContent
}

export default function InlineDisplay({ componentInfo }: Props) {
    switch (componentInfo.component) {
        case 'characteristicGenerator':
            return <div className="component-shell"><CharacteristicGenerator /></div>
        default:
            return <div className="component-shell"><p>Something Went Wrong</p></div>
    }
}