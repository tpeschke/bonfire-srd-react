import './BurdensNInjuries.css'
import { BurdenNInjuryTable, BurdensNInjuriesObject } from '@srd/common/interfaces/chapterInterfaces/BurdensNInjuriesInterfaces'
import BurdensTableDisplay from './BurdenTable'
import { useState } from 'react'

interface Props {
    info: BurdensNInjuriesObject[]
}

export default function BurdensNInjuriesDisplay({ info }: Props) {
    const { burdens, injuries } = info[0]

    const [burden, setBurden] = useState<string | null>(null)

    function getBurden() {
        if (Math.floor(Math.random() * 2) + 1 % 2 === 1) {
            getBurdenFromTable(burdens)
        } else {
            getBurdenFromTable(injuries)
        }
    }

    function getBurdenFromTable(burdens: BurdenNInjuryTable[]) {
        let d100Roll = Math.floor(Math.random() * 100) + 1
        let index = 0

        while (d100Roll > 0) {
            const numberToCheck = getNumberToCheck(burdens[index].number)

            if (numberToCheck >= d100Roll) {
                setBurden(burdens[index].burdenNInjury)
                d100Roll = 0
            } else {
                index++
                d100Roll -= numberToCheck
            }
        }
    }

    function getNumberToCheck(numberToCheck = 1): number {
        return numberToCheck
    }

    return (
        <>
            <h3>Random Roller</h3>
            <p>If you don't have dice at the ready, you can always get a random Injury or Burden by pushing the button below:</p>

            <div className='generate-button'>
                <button onClick={getBurden}>Give Me A Random Burden Or Injury</button>

                <p>{burden}</p>
            </div>

            <div className='burdens-table-shell'>
                <BurdensTableDisplay table={burdens} title='Burdens' />
                <BurdensTableDisplay table={injuries} title='Injuries' />
            </div>
        </>
    )
}