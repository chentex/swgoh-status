import { flatten, forEach, map } from 'lodash'

import { tier4 } from './events'
import { tier5 } from './events'
import legends from './galactic-legends'
import fleets from './fleets'
import { FarmCategory } from '../things/farm-category'

export const categories = [
    legends,
    tier5,
    tier4,
    fleets,
]

export const flat_categories = [
    new FarmCategory(
        'Flat',
        flatten(map(categories, 'farms'))
    )
]

