export const carouselItems = [
  {
    title: 'Supreme Pizza',
    description: 'Fresh vegetables and pepperoni',
    img: '/carousel/supr.png',
    url: '/menu#pizza',
    id: 'vege'
  },
  {
    title: 'Meatzza Meatzza!',
    description: 'Packed with delicious protein',
    img: '/carousel/meat.png',
    url: '/menu#pizza',
    id: 'meat'
  },
  {
    title: 'Classic Pepperoni',
    description: 'So simple, so tasty',
    img: '/carousel/pepp.png',
    url: '/menu#pizza',
    id: 'pepp'
  },
  {
    title: `GrandMa's Pie`,
    description: 'A little slice of Italian home cooking',
    img: '/carousel/grma.png',
    url: '/menu#pizza',
    id: 'grma'
  },
  {
    title: 'Italian Margherita',
    description: 'Mouth watering elegance',
    img: '/carousel/marg.png',
    url: '/menu#pizza',
    id :'marg'
  },
  {
    title: `Chef's Delight`,
    description: 'Peppers, onions, jalepeños, & chicken',
    img: '/carousel/chef.png',
    url: '/menu#pizza',
    id: 'chef'
  }
];

export const menuList = [
  {
    category: 'Pizza',
    id: 'pizza',
    options: [
      {
        name: 'Cheese Pizza',
        price: 15.99,
        description: 'This is a generic description for pizza'
      },
      {
        name: 'Pepperoni Pizza',
        price: 17.99,
        description: 'This is a generic description for pizza'
      },
      {
        name: 'Meat Pizza',
        price: 18.99,
        description: 'This is a generic description for pizza'
      },
      {
        name: 'Supreme Pizza',
        price: 18.99,
        description: 'This is a generic description for pizza'
      },
      {
        name: `GrandMa's Pie`,
        price: 18.99,
        description: 'This is a generic description for pizza'
      },
      {
        name: `Chef's Delight Pizza`,
        price: 19.99,
        description: 'This is a generic description for pizza'
      },
      {
        name: `Italian Margherita`,
        price: 17.99,
        description: 'This is a generic description for pizza'
      },
      {
        name: `Buffalo Chicken Pizza`,
        price: 18.99,
        description: 'This is a generic description for pizza'
      },
    ]
  },
  {
    category: 'Heros',
    id: 'heros',
    options: [
      {
        name: 'Meatball Hero',
        price: 7.99,
        description: 'Fresh meatballs, mozzarella, and grilled onions'
      },
      {
        name: 'Sausage and Peppers Hero',
        price: 9.99,
        description: 'Italian sausage, green peppers, and onions'
      },
      {
        name: 'Grilled Chicken Hero',
        price: 8.99,
        description: 'Grilled chicken, red peppers, and onions'
      },
      {
        name: 'Philly Cheesesteak',
        price: 9.99,
        description: 'Sliced sirloin, provolone, green peppers, and onions'
      },
    ]
  },
  {
    category: 'Desserts',
    id: 'desserts',
    options: [
      {
        name: 'Chocolate Chip Cookies',
        price: 4.99,
        description: 'Three large freshly baked chocolate chip cookies'
      },
      {
        name: 'Brownie with Walnuts',
        price: 4.99,
        description: 'Freshly baked brownie with walnuts'
      },
      {
        name: 'Cannoli',
        price: 4.99,
        description: 'Classic Italian cannoli'
      },
      {
        name: 'Crepe with Banana and Nutella',
        price: 4.99,
        description: 'Homemade crepe with banana and Nutella'
      }
    ]
  },
  {
    category: 'Drinks',
    id: 'drinks',
    options: [
      {
        name: 'Soft Drink',
        price: 2.99,
        description: 'Two liter bottle of soft drink'
      },
      {
        name: 'Iced Coffee',
        price: 3.99,
        description: '16oz of freshly brewed iced coffee'
      },
      {
        name: 'Bottled Water',
        price: 1.99,
        description: '20oz bottle of water'
      },
      {
        name: 'Orange Juice',
        price: 3.99,
        description: '16oz of freshly squeezed orange juice'
      }
    ]
  }
];

export const articles = [
  {
    title: 'World Class Desserts',
    description: `
      Nothing is better than finishing off a few slices of pizza with a
      delicous dessert. Try our brownies or cannolis.
    `,
    img: './articles/brownies.png',
    url: '/menu#desserts',
    id: 'dess'
  },
  {
    title: 'Delicous Heros',
    description: `
      Not in the mood for pizza? We got you covered. Our diverse selection
      of heros will definitely hit the spot.
    `,
    img: './articles/sandwich.png',
    url: '/menu#heros',
    id: 'sand'
  },
  {
    title: 'Ice Cold Drinks',
    description: `Try our freshly brewed iced coffee, our amazing freshly squeezed orange juice,
      or a thirst quenching soft drink.`,
    img: './articles/icedcoffee.png',
    url: '/menu#drinks',
    id: 'drink'
  }
];