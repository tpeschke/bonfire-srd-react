import { EquipmentItem } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"

const rope: EquipmentItem[] = [
    {
        item: 'Cord, Hemp, 1/2" (60#), 50 Ft, Wt.',
        size: 'S',
        complexity: 2,
        basePrice: 8
    },
    {
        item: 'Fabric, Cotton (sq.yard)',
        size: 'S',
        complexity: 3,
        basePrice: 4
    },
    {
        item: 'Rope, Cotton, 1/2" (150#), 50 Ft',
        size: 'M',
        complexity: 3,
        basePrice: 24
    },
    {
        item: 'Rope, Cotton, 1" (1200#), 50 Ft',
        size: 'M',
        complexity: 2,
        basePrice: 90
    },
    { item: 'Thread, Linen', size: 'S', complexity: 2, basePrice: 2.5 },
    { item: 'Yarn, Cotton', size: 'S', complexity: 2, basePrice: 8 }
]

export default rope