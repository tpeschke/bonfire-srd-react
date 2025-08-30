import { EquipmentInfo } from '@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces'
import priceByDistance from './priceByDistance'
import animalLivestock from './animalLivestock'
import animalMounts from './animalMounts'
import animalBarding from './animalBarding'
import animalFeed from './animalFeed'
import armorPrices from './armorPrices'
import armorStats from './armorStats'
import beverages from './beverages'
import clothing from './clothing'
import clothingAccessories from './clothingAccessories'
import containersHeavy from './containersHeavy'
import containersPersonal from './containersPersonal'
import musicalInstruments from './musicalInstruments'
import poisonsNToxins from './poisonsNToxins'
import rope from './rope'
import shields from './shields'
import shieldStats from './shieldStats'
import toolsAdventuring from './toolsAdventuring'
import toolsGeneral from './toolsGeneral'
import toolsTrade from './toolsTrade'
import weaponsAxes from './weaponsAxes'
import weaponsPolearms from './weaponsPolearms'
import weaponsSidearms from './weaponsSidearms'
import weaponsSwords from './weaponsSwords'
import weaponsTrauma from './weaponsTrauma'
import weaponsRanged from './weaponsRanged'
import ammunition from './ammunition'

const equipmentInfo: EquipmentInfo = {
    type: 'equipment',
    info: [
        {
            priceByDistance,
            animalLivestock,
            animalMounts,
            animalBarding,
            animalFeed,
            armorPrices,
            armorStats,
            beverages,
            clothing,
            clothingAccessories,
            containersHeavy,
            containersPersonal,
            musicalInstruments,
            poisonsNToxins,
            rope,
            shields,
            shieldStats,
            toolsAdventuring,
            toolsGeneral,
            toolsTrade,
            weaponsAxes,
            weaponsPolearms,
            weaponsSidearms,
            weaponsSwords,
            weaponsTrauma,
            weaponsRanged,
            ammunition
        }
    ]
}

export default equipmentInfo