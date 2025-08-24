import './RudimentTable.css'
import { RudimentsObject } from '@srd/common/interfaces/chapterInterfaces/WeirdInterfaces'
import RudimentTableDisplay from './RudimentTableDisplay'

interface Props {
    info: RudimentsObject[]
}

export default function OriginsShapesTraditions({ info }: Props) {
    const { shapes, origins, traditions } = info[0]

    return (
        <div className='rudiment-tables-shell'>
            <RudimentTableDisplay table={shapes} title='Shapes' />
            <RudimentTableDisplay table={origins} title='Origins' />
            <RudimentTableDisplay table={traditions} title='Traditions' />
        </div>
    )
}