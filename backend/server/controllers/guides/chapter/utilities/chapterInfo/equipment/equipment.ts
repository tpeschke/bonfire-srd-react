import { EquipmentInfo } from '@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces'
import priceByDistance from './priceByDistance'
import animalLivestock from './animals/animalLivestock'
import animalMounts from './animals/animalMounts'
import animalBarding from './animals/animalBarding'
import animalFeed from './animals/animalFeed'
import armorPrices from './armor/armorPrices'
import armorStats from './armor/armorStats'
import beverages from './beverages'
import clothing from './clothing/clothing'
import clothingAccessories from './clothing/clothingAccessories'
import containersHeavy from './containers/containersHeavy'
import containersPersonal from './containers/containersPersonal'
import musicalInstruments from './musicalInstruments'
import poisonsNToxins from './poisonsNToxins'
import rope from './rope'
import shields from './shields/shields'
import shieldStats from './shields/shieldStats'
import toolsAdventuring from './tools/toolsAdventuring'
import toolsGeneral from './tools/toolsGeneral'
import toolsTrade from './tools/toolsTrade'
import weaponsAxes from './weapons/weaponsAxes'
import weaponsPolearms from './weapons/weaponsPolearms'
import weaponsSidearms from './weapons/weaponsSidearms'
import weaponsSwords from './weapons/weaponsSwords'
import weaponsTrauma from './weapons/weaponsTrauma'
import weaponsRanged from './weapons/weaponsRanged'
import ammunition from './weapons/ammunition'

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