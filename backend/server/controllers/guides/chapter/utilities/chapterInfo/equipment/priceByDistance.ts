import { PriceObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"

const priceByDistance: PriceObject = {
    'F': {
        fullName: 'Fine (F)',
        modifiers: [
            1,
            1.1,
            1.1,
            1.1,
            1.1
        ]
    },
    'D': {
        fullName: 'Diminutive (D)',
        modifiers: [
            1,
            1.1,
            1.1,
            1.1,
            1.25
        ]
    },
    'T': {
        fullName: 'Tiny (T)',
        modifiers: [
            1,
            1.1,
            1.1,
            1.25,
            1.5
        ]
    },
    'S': {
        fullName: 'Small (S)',
        modifiers: [
            1,
            1.1,
            1.25,
            1.5,
            2
        ]
    },
    'M': {
        fullName: 'Medium (M)',
        modifiers: [
            1,
            1.25,
            1.5,
            2,
            3
        ]
    },
    'L': {
        fullName: 'Large (L)',
        modifiers: [
            1,
            1.5,
            2,
            3,
            5
        ]
    },
    'H': {
        fullName: 'Huge (H)',
        modifiers: [
            1,
            2,
            3,
            5,
            10
        ]
    },
    'G': {
        fullName: 'Giant (G)',
        modifiers: [
            1,
            3,
            5,
            10,
            15
        ]
    },
    'E': {
        fullName: 'Enormous (E)',
        modifiers: [
            1,
            5,
            10,
            15,
            20
        ]
    },
    'C': {
        fullName: 'Colossal (C)',
        modifiers: [
            1,
            10,
            15,
            20,
            25
        ]
    }
}

export default priceByDistance