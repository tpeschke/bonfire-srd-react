import './ChapterName.css'
import { Books } from '@srd/common/interfaces/chapterInterfaces/ChapterInterfaces'

import player1 from '../../../assets/images/chapterHeadings/player1.png'
import player2 from '../../../assets/images/chapterHeadings/player2.png'
import player3 from '../../../assets/images/chapterHeadings/player3.png'
import player4 from '../../../assets/images/chapterHeadings/player4.png'
import player5 from '../../../assets/images/chapterHeadings/player5.png'
import player6 from '../../../assets/images/chapterHeadings/player6.png'
import player7 from '../../../assets/images/chapterHeadings/player7.png'
import player8 from '../../../assets/images/chapterHeadings/player8.png'
import player9 from '../../../assets/images/chapterHeadings/player9.png'
import player10 from '../../../assets/images/chapterHeadings/player10.png'

import rules1 from '../../../assets/images/chapterHeadings/rules1.png'
import rules2 from '../../../assets/images/chapterHeadings/rules2.png'
import rules3 from '../../../assets/images/chapterHeadings/rules3.png'
import rules4 from '../../../assets/images/chapterHeadings/rules4.png'
import rules5 from '../../../assets/images/chapterHeadings/rules5.png'
import rules6 from '../../../assets/images/chapterHeadings/rules6.png'
import rules7 from '../../../assets/images/chapterHeadings/rules7.png'

import defaultImage from '../../../assets/images/chapterHeadings/default.png'

interface Props {
    chapterName: string,
    chapterNumber?: number,
    book?: Books
}

export default function ChapterName({ chapterName, chapterNumber, book }: Props) {
    const imageDictionary = {
        players: [
            player1,
            player2,
            player3,
            player4,
            player5,
            player6,
            player7,
            player8,
            player9,
            player10
        ],
        rules: [
            rules1,
            rules2,
            rules3,
            rules4,
            rules5,
            rules6,
            rules7
        ]
    }

    const noBookOrImage = !book || !chapterNumber

    return (
        <div className='chapter-name-header-shell'>
            <h1>{chapterName}</h1>
            {book && chapterNumber && <img src={imageDictionary[book][chapterNumber - 1]} />}
            {noBookOrImage && <img src={defaultImage} /> }
        </div>
    )
}