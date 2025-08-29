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
            containersPersonal
        }
    ]
}

export default equipmentInfo