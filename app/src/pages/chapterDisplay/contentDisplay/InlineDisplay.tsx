import { ComponentContent } from "@srd/common/interfaces/ChapterInterfaces";
import CharacteristicGenerator from "../../../components/inlineComponents/CharacteristicGenerator";

interface Props {
    componentInfo: ComponentContent
}

export default function InlineDisplay({ componentInfo }: Props) {
    switch (componentInfo.component) {
        case 'characteristicGenerator':
            return <CharacteristicGenerator />
        default:
            return <p>Something Went Wrong</p>
    }
}