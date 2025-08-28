import { EquipmentInfo } from '@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces'
import priceByDistance from './priceByDistance'
import animalLivestock from './animalLivestock'
import animalMounts from './animalMounts'

const equipmentInfo: EquipmentInfo = {
    type: 'equipment',
    info: [
        {
            priceByDistance,
            animalLivestock,
            animalMounts
        }
    ]
}

export default equipmentInfo