'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Fishing_Spots', [
        {
            user_id: 1,
            description: 'This is a description of a Fishing Hole',
            name: 'Golden Ponds',
            city: 'Longmont',
            state: 'CO',
            country: 'USA',
            lat: 40.17012,
            lng: -105.13876
        },
        {
            user_id: 1,
            description: 'A Beautiful lake with plenty of fishing. Lots of good spots and nice views!',
            name: 'Union Reservoir',
            city: 'Longmont',
            state: 'CO',
            country: 'USA',
            lat: 40.18269324371436,
            lng: -105.0397492725014
        },
        {
            user_id: 2,
            description: 'Not a conventional fishing lake, but lots to be caught here.',
            name: 'Utah Lake',
            city: 'Orem',
            state: 'UT',
            country: 'USA',
            lat: 40.23586219266547,
            lng: -111.80505065640834
        },
        {
            user_id: 3,
            description: 'A nice lake with lots of shore fishing and plenty of room for a good boat',
            name: 'Camanche Reservoir',
            city: 'Wallace',
            state: 'CA',
            country: 'USA',
            lat: 38.22176564455729,
            lng: -120.97618061472154
        },
        {
            user_id: 1,
            description: 'A fishing spot to put on your list. Lots of fishing here.',
            name: 'Lake Tahoe',
            city: 'Homewood',
            state: 'CA',
            country: 'USA',
            lat: 39.12121449452623,
            lng: -120.11550728622802
        },
        {
            user_id: 4,
            description: 'A quaint lake. Lots of different species, and plenty of bites',
            name: 'Folsom Lake',
            city: 'Granite Bay',
            state: 'CA',
            country: 'USA',
            lat: 38.72692595646756,
            lng: -121.14501189045514
        },
        {
            user_id: 3,
            description: 'A fishing spot to put on your list. Lots of fishing here.',
            name: 'San Pablo Bay',
            city: 'Vallejo',
            state: 'CA',
            country: 'USA',
            lat: 38.083984590828365,
            lng: -122.36704281589016
        },
        {
            user_id: 3,
            description: 'A nice bay with plenty of sun and fish',
            name: 'Monterey Bay',
            city: 'Moss Landing',
            state: 'CA',
            country: 'USA',
            lat: 36.81664010794504,
            lng: -121.89454074047734
        },
        {
            user_id: 3,
            description: 'Not a conventional fishing lake, but lots to be caught here.',
            name: 'Lake Mead',
            city: 'Henderson',
            state: 'NV',
            country: 'USA',
            lat: 36.159255255300856,
            lng: -114.41918221398993
        },
        {
            user_id: 3,
            description: 'A nice lake with lots of shore fishing and plenty of room for a good boat',
            name: 'Lake Pleasant',
            city: 'New River',
            state: 'AZ',
            country: 'USA',
            lat: 33.88323654086223,
            lng: -112.28195102801666
        },
        {
            user_id: 3,
            description: 'Not a conventional fishing lake, but lots to be caught here.',
            name: 'McPhee Reservoir',
            city: 'Dolores',
            state: 'CO',
            country: 'USA',
            lat: 37.51363731677932,
            lng: -108.5472529343338
        },
        {
            user_id: 5,
            description: 'A fishing spot to put on your list. Lots of fishing here.',
            name: 'Lake Tawakoni',
            city: 'Point',
            state: 'TX',
            country: 'USA',
            lat: 32.85289990677116,
            lng: -95.9514930132209
        },
        {
            user_id: 6,
            description: 'A quaint lake. Lots of different species, and plenty of bites',
            name: 'Lavon Lake',
            city: 'Copeville',
            state: 'TX',
            country: 'USA',
            lat: 33.103506310982624,
            lng: -96.46308137847633
        },
        {
            user_id: 5,
            description: 'Not a conventional fishing lake, but lots to be caught here.',
            name: 'Lake Walter E. Long',
            city: 'Austin',
            state: 'TX',
            country: 'USA',
            lat: 30.298944143822617,
            lng: -97.59897152711831
        },
        {
            user_id: 6,
            description: 'Not a conventional fishing lake, but lots to be caught here.',
            name: 'Eufaula Lake',
            city: 'Eufaula',
            state: 'OK',
            country: 'USA',
            lat: 35.30186601520205,
            lng: -95.56310189329831
        },
        {
            user_id: 4,
            description: 'A fishing spot to put on your list. Lots of fishing here.',
            name: 'Wilson Lake',
            city: 'Dorrance',
            state: 'KS',
            country: 'USA',
            lat: 38.94476142569378,
            lng: -98.56108073520551
        },
        {
            user_id: 4,
            description: 'A Beautiful lake with plenty of fishing. Lots of good spots and nice views!',
            name: 'Clinton Lake',
            city: 'Lawrence',
            state: 'KS',
            country: 'USA',
            lat: 38.923254119951146,
            lng: -95.37600663447807
        },
        {
            user_id: 4,
            description: 'A fishing spot to put on your list. Lots of fishing here.',
            name: 'Lake McConaughy',
            city: 'Lemoyne',
            state: 'NE',
            country: 'USA',
            lat: 41.24551612017057,
            lng: -101.79502899026313
        },
        {
            user_id: 4,
            description: 'A Beautiful lake with plenty of fishing. Lots of good spots and nice views!',
            name: 'Lewis Lake',
            city: 'Moran',
            state: 'WY',
            country: 'USA',
            lat: 44.304797136108235,
            lng: -110.62670552180937
        },
        {
            user_id: 4,
            description: 'A nice lake with lots of shore fishing and plenty of room for a good boat',
            name: 'Klamath Lake',
            city: 'Klamath Falls',
            state: 'OR',
            country: 'USA',
            lat: 42.414963211147935,
            lng: -121.91774721260165
        },
        {
            user_id: 10,
            description: 'A fishing spot to put on your list. Lots of fishing here.',
            name: 'Lake Pend Oreille',
            city: 'Hope',
            state: 'ID',
            country: 'USA',
            lat: 48.15461616637111,
            lng: -116.31607121894551
        },
        {
            user_id: 9,
            description: 'A Beautiful lake with plenty of fishing. Lots of good spots and nice views!',
            name: 'Kachess Lake',
            city: 'Easton',
            state: 'WA',
            country: 'USA',
            lat: 47.30341030586451,
            lng: -121.22660784967252
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Fishing_Spots', null, {});
  }
};
