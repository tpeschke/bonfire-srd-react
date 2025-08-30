import { EquipmentItem } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"

const animalFeed: EquipmentItem[] = [
    {
        item: 'Hay',
        size: 'H',
        complexity: 0,
        basePrice: 25
    },
    {
        item: 'Ration, Dog, Chow, Daily',
        size: 'S',
        complexity: 2,
        basePrice: 0.3
    },
    {
        item: 'Ration, Cow, Hay, Daily',
        size: 'L',
        complexity: 0,
        basePrice: 0.23
    },
    {
        item: 'Ration, Horse, Oats, Daily',
        size: 'L',
        complexity: 2,
        basePrice: 2
    },
    {
        item: 'Ration, Ox, Hay, Daily',
        size: 'L',
        complexity: 0,
        basePrice: 0.45
    },
    {
        item: 'Ration, Sow, Corn, Daily',
        size: 'M',
        complexity: 2,
        basePrice: 0.45
    },
    {
        item: 'Ration, Warhorse, Oats, Daily',
        size: 'L',
        complexity: 2,
        basePrice: 3
    }
]

export default animalFeed