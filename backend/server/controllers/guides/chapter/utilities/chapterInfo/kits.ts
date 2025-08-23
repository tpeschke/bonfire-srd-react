import { KitInfo } from '@srd/common/interfaces/chapterInterfaces/KitInterfaces'

const kitInfo: KitInfo = {
    type: 'kits',
    info: [
        {
            title: "Adventurer's Kit",
            items: [
                { item: "Sheathe, Small, Leather x3*", size: "n/a", sellBack: "7.5 sc" },
                { item: "2 S Melee Weapons*", size: "n/a", sellBack: "30 sc" },
                { item: "3 Thrown Ranged Weapons*", size: "n/a", sellBack: "15 sc per" },
                { item: "Belt, Leather*", size: "n/a", sellBack: "1 sc" },
                { item: "Breeches*", size: "n/a", sellBack: "12 sc" },
                { item: "Shirt*", size: "n/a", sellBack: "13 sc" },
                { item: "Boots, Leather*", size: "n/a", sellBack: "10 sc" },
                { item: "Backpack, Large*", size: "+1L", sellBack: "15 sc" },
                { item: "Rations, Person, Day x7", size: "7S", sellBack: "17.5 sc" },
                { item: "Beeswax", size: "S", sellBack: "0.3 sc" },
                { item: "Fabric, Cotton (sq.yard)", size: "S", sellBack: "4 sc" },
                { item: "Rope, Cotton, 1/2\" (150#), 50 Ft x2", size: "2M", sellBack: "26 sc" },
                { item: "Auger", size: "M", sellBack: "15 sc" },
                { item: "Chalk, 4\", Box of 20", size: "S", sellBack: "0.1 sc" },
                { item: "Grapnel Hook", size: "S", sellBack: "16 sc" },
                { item: "Mallet, Wood", size: "S", sellBack: "1 sc" },
                { item: "Spike, 12\"", size: "S", sellBack: "1.2 sc" },
                { item: "Torch x5", size: "5S", sellBack: "2 sc" }
            ],
            weight: "1L 2M",
            extraCash: "4d20! sc"
        },
        {
            title: "Merchant's Kit",
            items: [
                { item: "Sheathe, Small, Leather*", size: "n/a", sellBack: "2.5 sc" },
                { item: "1 S Melee Weapon*", size: "n/a", sellBack: "15 sc" },
                { item: "Belt, Leather*", size: "n/a", sellBack: "1 sc" },
                { item: "Breeches*", size: "n/a", sellBack: "12 sc" },
                { item: "Shirt*", size: "n/a", sellBack: "13 sc" },
                { item: "Boots, Leather*", size: "n/a", sellBack: "10 sc" },
                { item: "Mule", size: "n/a", sellBack: "90 sc" },
                { item: "Rations, Person, Day x7", size: "7S", sellBack: "17.5 sc" },
                { item: "Canteen (Quart)", size: "S", sellBack: "12 sc" },
                { item: "Bag, Small", size: "S", sellBack: "5 sc" },
                { item: "Rations, Dairy Cow, Hay, Daily x7", size: "7M", sellBack: "1.6 sc" }
            ],
            weight: "n/a (1L 1S on mule)",
            extraCash: "7d20! s"
        },
        {
            title: "Traveler's Kit",
            items: [
                { item: "Buff Coat*", size: "*", sellBack: "130 sc" },
                { item: "Sheathe, Small, Leather*", size: "n/a", sellBack: "2.5 sc" },
                { item: "1 S Melee Weapons*", size: "n/a", sellBack: "15 sc" },
                { item: "Belt, Leather*", size: "n/a", sellBack: "1 sc" },
                { item: "Breeches*", size: "n/a", sellBack: "12 sc" },
                { item: "Shirt*", size: "n/a", sellBack: "13 sc" },
                { item: "Boots, Leather*", size: "n/a", sellBack: "10 sc" },
                { item: "Coat, Leather*", size: "S", sellBack: "45 sc" },
                { item: "Hat*", size: "n/a", sellBack: "4 sc" },
                { item: "Rations, Person, Day x3", size: "3S", sellBack: "7.5 sc" }
            ],
            weight: "1M 1S",
            extraCash: "2d10! sc"
        },
        {
            title: "Thief's Kit",
            items: [
                { item: "Sheathe, Small, Leather x2*", size: "n/a", sellBack: "5 sc" },
                { item: "2 S Melee Weapons*", size: "n/a", sellBack: "30 sc" },
                { item: "Belt, Leather*", size: "n/a", sellBack: "1 sc" },
                { item: "Breeches*", size: "n/a", sellBack: "12 sc" },
                { item: "Shirt*", size: "n/a", sellBack: "13 sc" },
                { item: "Boots, Leather*", size: "n/a", sellBack: "10 sc" },
                { item: "Backpack, Large*", size: "#ERROR!", sellBack: "15 sc" },
                { item: "Rations, Person, Day x1", size: "S", sellBack: "2.5 sc" },
                { item: "Beeswax", size: "S", sellBack: "0.3 sc" },
                { item: "Rope, Cotton, 1/2\" (150#), 50 ft x3", size: "1L", sellBack: "72 sc" },
                { item: "Chalk, 4\", Box of 20", size: "S", sellBack: "0.1 sc" },
                { item: "Grapnel Hook", size: "S", sellBack: "16 sc" },
                { item: "Spike, Iron, 12\"", size: "S", sellBack: "1.2 sc" },
                { item: "Bag, Medium x3", size: "3S", sellBack: "19.5 sc" },
                { item: "Lock Picks", size: "S", sellBack: "12 sc" }
            ],
            weight: "1L",
            extraCash: "5d20! sc"
        },
        {
            title: "Basic Fighter's Kit",
            items: [
                { item: "Gambeson*", size: "n/a", sellBack: "90 sc" },
                { item: "Sheathe (M or H, depending on what weapon is chosen)*", size: "n/a", sellBack: "5 sc" },
                { item: "1 L Melee Weapon or 1 M Melee Weapon & 3 Thrown Ranged Weapons*", size: "M or n/a", sellBack: "100 sc" },
                { item: "Sheathe, Small*", size: "n/a", sellBack: "2.5 sc" },
                { item: "1 S Weapon*", size: "n/a", sellBack: "15 sc" },
                { item: "Belt, Leather*", size: "n/a", sellBack: "1 sc" },
                { item: "Breeches*", size: "n/a", sellBack: "12 sc" },
                { item: "Shirt*", size: "n/a", sellBack: "13 sc" },
                { item: "Boots, Leather*", size: "n/a", sellBack: "10 sc" },
                { item: "Rations, Person, Day x3", size: "3S", sellBack: "7.5 sc" }
            ],
            weight: "1M or 2M",
            extraCash: "1d10! sc"
        },
        {
            title: "Armor Fighter's Kit",
            items: [
                { item: "Coat of Plates*", size: "S", sellBack: "190 sc" },
                { item: "Sheathe (M)*", size: "n/a", sellBack: "5 sc" },
                { item: "1 M Melee Weapon*", size: "S", sellBack: "50 sc" },
                { item: "Belt, Leather*", size: "n/a", sellBack: "1 sc" },
                { item: "Breeches*", size: "n/a", sellBack: "12 sc" },
                { item: "Shirt*", size: "n/a", sellBack: "13 sc" },
                { item: "Sandals*", size: "n/a", sellBack: "10 sc" }
            ],
            weight: "2S",
            extraCash: "1d4! sc"
        },
        {
            title: "Shield Fighter's Kit",
            items: [
                { item: "1 M Shield", size: "M", sellBack: "60 sc" },
                { item: "Buff Coat*", size: "n/a", sellBack: "100 sc" },
                { item: "Sheathe (M)*", size: "n/a", sellBack: "5 sc" },
                { item: "1 M Melee Weapon*", size: "S", sellBack: "50 sc" },
                { item: "Belt, Leather*", size: "n/a", sellBack: "1 sc" },
                { item: "Breeches*", size: "n/a", sellBack: "12 sc" },
                { item: "Shirt*", size: "n/a", sellBack: "13 sc" },
                { item: "Boots, Leather*", size: "n/a", sellBack: "10 sc" },
                { item: "Rations, Person, Day x3", size: "3S", sellBack: "7.5 sc" }
            ],
            weight: "2M 1S",
            extraCash: "1d4! sc"
        },
        {
            title: "Long Range Fighter's Kit",
            items: [
                { item: "Gambeson*", size: "n/a", sellBack: "90 sc" },
                { item: "Sheathe (M)*", size: "n/a", sellBack: "5 sc" },
                { item: "1 M or S Ranged Weapon*", size: "S", sellBack: "50 sc" },
                { item: "Sheathe (S)*", size: "n/a", sellBack: "2.5 sc" },
                { item: "1 S Melee Weapon*", size: "n/a", sellBack: "15 sc" },
                { item: "Quiver, 12 Cap*", size: "n/a", sellBack: "1 sc" },
                { item: "Ranged Ammunition x12*", size: "n/a", sellBack: "10 sc" },
                { item: "Belt, Leather*", size: "n/a", sellBack: "1 sc" },
                { item: "Breeches*", size: "n/a", sellBack: "12 sc" },
                { item: "Shirt*", size: "n/a", sellBack: "13 sc" },
                { item: "Boots, Leather*", size: "n/a", sellBack: "10 sc" },
                { item: "Rations, Person, Day x3", size: "3S", sellBack: "7.5 sc" }
            ],
            weight: "1M 1S or 1M",
            extraCash: "5d20! sc"
        }
    ]
}

export default kitInfo