import './RudimentTable.css'
import { RudimentsObject } from '@srd/common/interfaces/chapterInterfaces/WeirdInterfaces'
import RudimentTableDisplay from './RudimentTableDisplay'

interface Props {
    info: RudimentsObject[]
}

export default function RudimentsByTradition({ info }: Props) {
    const { animism, calling, charm, glamour, hexing, investiture, occultism, sortilege } = info[0]

    return (
        <div className='rudiment-tables-shell'>
            <RudimentTableDisplay table={animism}  title='Animism'/>
            <RudimentTableDisplay table={calling}  title='Calling'/>
            <RudimentTableDisplay table={charm}  title='Charm'/>
            <RudimentTableDisplay table={glamour}  title='Glamour'/>
            <RudimentTableDisplay table={hexing}  title='Hexing'/>
            <RudimentTableDisplay table={investiture}  title='Investiture'/>
            <RudimentTableDisplay table={occultism}  title='Occultism'/>
            <RudimentTableDisplay table={sortilege}  title='Sortilege'/>
        </div>
    )
}