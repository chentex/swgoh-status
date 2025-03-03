import { Farm } from '../things/farm'
import { FarmUnit, spacer } from '../things/farm-unit'
import { FarmCategory } from '../things/farm-category'

var tier4 =  new FarmCategory(
    'Tier IV',
    [
        new Farm(
            'Doctor Aphra',
            'event',
            'neutral',
            [
                new FarmUnit('Hondo Ohnaka', 7, 13, 5),
                new FarmUnit('0-0-0', 7, 13, 5),
                new FarmUnit('BT-1', 7,13, 5),
                new FarmUnit('Sana Starros', 7, 13, 5),
            ],
            [],
        ),
        new Farm(
            'Grand Inquisitor',
            'event',
            'dark',
            [
                new FarmUnit('Second Sister', 7, 13, 5),
                new FarmUnit('Ninth Sister', 7, 13, 5),
                new FarmUnit('Seventh Sister', 7, 13, 5),
                new FarmUnit('Eighth Brother', 7, 13, 5),
                new FarmUnit('Fifth Brother', 7, 13, 5),
            ],
            [],
        ),
        new Farm(
            'Starkiller',
            'event',
            'dark',
            [
                new FarmUnit('Darth Talon', 7, 13, 5),
                new FarmUnit('Dash Rendar', 7, 13, 5),
                new FarmUnit('Kyle Katarn', 7, 13, 5),
                new FarmUnit('Mara Jade, The Emperor\'s Hand', 7, 13, 5),
            ],
            [],
        ),
        new Farm(
            'Jedi Knight Revan',
            'event',
            'light',
            [
                new FarmUnit('Bastila Shan', 7, 9),
                new FarmUnit('Jolee Bindo', 7, 9),
                new FarmUnit('Zaalbar', 7, 9),
                new FarmUnit('T3-M4', 7, 9),
                new FarmUnit('Mission Vao', 7, 9),
            ],
            [],
        ),
        new Farm(
            'Darth Revan',
            'event',
            'dark',
            [
                new FarmUnit('Bastila Shan (Fallen)', 7, 10),
                new FarmUnit('Canderous Ordo', 7, 10),
                new FarmUnit('HK-47', 7, 10),
                new FarmUnit('Juhani', 7, 10),
                new FarmUnit('Carth Onasi', 7, 10),
            ],
            [],
        ),
        new Farm(
            'Chewbacca',
            'event',
            'light',
            [
                new FarmUnit('Aurra Sing', 7, 12),
                new FarmUnit('Boba Fett', 7, 12),
                new FarmUnit('Boba Fett, Scion of Jango', 7, 12),
                new FarmUnit('Bossk', 7, 12),
                new FarmUnit('Boushh (Leia Organa)', 7, 12),
                new FarmUnit('Cad Bane', 7, 12),
                new FarmUnit('Dengar', 7, 12),
                new FarmUnit('Embo', 7, 12),
                new FarmUnit('Fennec Shand', 7, 12),
                new FarmUnit('Greedo', 7, 12),
                new FarmUnit('Greef Karga', 7, 12),
                new FarmUnit('IG-88', 7, 12),
                new FarmUnit('Jabba the Hutt', 7, 12),
                new FarmUnit('Jango Fett', 7, 12),
                new FarmUnit('Krrsantan', 7, 12),
                new FarmUnit('The Mandalorian', 7, 12),
                new FarmUnit('Zam Wesell', 7, 12),
            ],
            [],
        ),
        new Farm(
            'C-3PO',
            'event',
            'light',
            [
                new FarmUnit('Ewok Elder', 7, 11),
                new FarmUnit('Ewok Scout', 7, 11),
                new FarmUnit('Chief Chirpa', 7, 11),
                new FarmUnit('Logray', 7, 11),
                new FarmUnit('Paploo', 7, 11),
                new FarmUnit('Teebo', 7, 11),
                new FarmUnit('Wicket', 7, 11),
            ],
            [],
        ),
        new Farm(
            'Han\'s Millenium Falcon',
            'event',
            'light',
            [],
            [
                new FarmUnit('Razor Crest', 7),
                new FarmUnit('Slave I', 7),
                new FarmUnit('IG-2000', 7),
                new FarmUnit('Hound\'s Tooth', 7),
                new FarmUnit('Xanadu Blood', 7),

            ],
        ),
    ]
);

var tier5 = new FarmCategory(
    'Tier V',
    [
        new Farm(
            'Jedi Knight Luke Skywalker',
            'event',
            'light',
            [
                new FarmUnit('C-3PO', 7, 13, 3),
                new FarmUnit('Captain Han Solo', 7, 13, 3),
                new FarmUnit('Chewbacca', 7, 13, 3),
                new FarmUnit('Commander Luke Skywalker', 7, 13, 3),
                new FarmUnit('Darth Vader', 7, 13, 3),
                new FarmUnit('Hermit Yoda', 7, 13, 3),
                new FarmUnit('Lando Calrissian', 7, 13, 3),
                new FarmUnit('Rebel Officer Leia Organa', 7, 13, 3),
                new FarmUnit('Wampa', 7, 13, 3),
            ],
            [
                new FarmUnit('Han\'s Millennium Falcon', 7),
                new FarmUnit('Wedge Antilles\'s X-wing', 7),
            ],
        ),
        new Farm(
            'General Skywalker',
            'event',
            'light',
            [
                new FarmUnit('Ahsoka Tano', 7, 12),
                new FarmUnit('C-3PO', 7, 12),
                new FarmUnit('General Kenobi', 7, 12),
                new FarmUnit('Padmé Amidala', 7, 12),
                new FarmUnit('Shaak Ti', 7, 12),
                spacer,
                new FarmUnit('Asajj Ventress', 7, 12),
                new FarmUnit('B1 Battle Droid', 7, 12),
                new FarmUnit('B2 Super Battle Droid', 7, 12),
                new FarmUnit('Droideka', 7, 12),
                new FarmUnit('IG-100 MagnaGuard', 7, 12),
            ],
            [
                new FarmUnit('Anakin\'s Eta-2 Starfighter', 7),
            ],
        ),
        new Farm(
            'Darth Malak',
            'event',
            'dark',
            [
                new FarmUnit('Bastila Shan', 7),
                new FarmUnit('Jolee Bindo', 7),
                new FarmUnit('Mission Vao', 7),
                new FarmUnit('T3-M4', 7),
                new FarmUnit('Zaalbar', 7),
                new FarmUnit('Jedi Knight Revan', 7),
                spacer,
                new FarmUnit('Bastila Shan (Fallen)', 7),
                new FarmUnit('Carth Onasi', 7),
                new FarmUnit('Canderous Ordo', 7),
                new FarmUnit('HK-47', 7),
                new FarmUnit('Juhani', 7),
                new FarmUnit('Darth Revan', 7),
            ],
            [],
        ),
    ]
)


export {tier4, tier5}