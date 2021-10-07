const data = {
    categories: [ // The Menu Categories include: Starters, Entrees, Side Orders, Beverages
        {
            name: 'Starters', 
            image: '/images/starters.jpg'
        },
        {
            name: 'Entrees', 
            image: '/images/entrees.jpg'
        },
        {
            name: 'Side Orders', 
            image: '/images/side_orders.jpg'
        },
        {
            name: 'Beverages', 
            image: '/images/beverages.jpg'
        },
    ],
    products: [ // Menu Items are listed here
        
        // STARTERS ITEMS
        {
            category: 'Starters',
            name: 'Fam\'s Salad',
            price: 8,
            calorie: 120,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 5,
            inStock: true,
            image:'/images/fam_salad.jpg',
        },
        {
            category: 'Starters',
            name: 'Spicy Shrim \& Pork Wonton',
            price: 10,
            calorie: 120,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 5,
            inStock: true,
            image:'/images/wonton.jpg',
        },
        {
            category: 'Starters',
            name: 'Popcorn Chicken',
            price: 7,
            calorie: 120,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 5,
            inStock: true,
            image:'/images/popcorn_chicken.jpg',
        },
        {
            category: 'Starters',
            name: 'Skinny Crispy Fries',
            price: 7,
            calorie: 120,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 5,
            inStock: true,
            image:'/images/fries.jpg',
        },
        {
            category: 'Starters',
            name: 'Chicken Wings',
            price: 11,
            calorie: 120,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 5,
            inStock: true,
            image:'/images/chicken_wings.jpg',
        },
        {
            category: 'Starters',
            name: 'Corn Cheese',
            price: 7.5,
            calorie: 120,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 5,
            inStock: true,
            image:'/images/corn_cheese.jpg',
        },
        {
            category: 'Starters',
            name: 'Spicy Noodle',
            price: 6,
            calorie: 120,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 5,
            inStock: true,
            image:'/images/spicy_noodle.jpg',
        },
        
        // ENTREES ITEMS
        {
            category: 'Entrees',
            name: 'Fam Combo',
            calorie: 120,
            price: 15,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 5,
            inStock: true,
            image: '/images/fam_combo.jpg',
        },
        {
            category: 'Entrees',
            name: 'Fried Rice',
            calorie: 120,
            price: 14,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 5,
            inStock: true,
            image: '/images/fried_rice.jpg',
        },
        {
            category: 'Entrees',
            name: 'House Garlic Noodles',
            calorie: 120,
            price: 15,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 5,
            inStock: true,
            image: '/images/house_garlic_noodles.jpg',
        },
        {
            category: 'Entrees',
            name: 'Stone Bowl Soup',
            calorie: 120,
            price: 15,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 5,
            inStock: true,
            image: '/images/stone_bowl_soup.jpg',
        },
        {
            category: 'Entrees',
            name: 'Saltado Shaken Fries',
            calorie: 120,
            price: 18,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 5,
            inStock: true,
            image: '/images/saltado_shaken_fries.jpg',
        },
        
        // SIDE ORDERS
        {
            category: 'Side Orders',
            name: 'Steam rice',
            calorie: 120,
            price: 1.5,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 5,
            inStock: true,
            image: '/images/steam_rice.jpg',
        },        
        {
            category: 'Side Orders',
            name: 'Beef broth',
            calorie: 120,
            price: 1.5,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 1,
            inStock: true,
            image: '/images/beef_broth.jpg',
        },
        {
            category: 'Side Orders',
            name: 'Fried egg',
            calorie: 120,
            price: 1.5,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 7,
            inStock: true,
            image: '/images/fried_egg.jpg',
        },        
        {
            category: 'Side Orders',
            name: 'Fried rice',
            calorie: 120,
            price: 3,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 15,
            inStock: true,
            image: '/images/fried_rice.jpg',
        },        
        {
            category: 'Side Orders',
            name: 'Fried tofu',
            calorie: 120,
            price: 3,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 15,
            inStock: true,
            image: '/images/fried_tofu.jpg',
        },        
        {
            category: 'Side Orders',
            name: 'Spring Mix',
            calorie: 120,
            price: 3,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 5,
            inStock: true,
            image: '/images/spring_mix.jpg',
        },        
        {
            category: 'Side Orders',
            name: 'Mushroom',
            calorie: 120,
            price: 4,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 7,
            inStock: true,
            image: '/images/mushroom.jpg',
        },        
        {
            category: 'Side Orders',
            name: 'Prawn',
            calorie: 120,
            price: 4,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 10,
            inStock: true,
            image: '/images/prawn.jpg',
        },        
        {
            category: 'Side Orders',
            name: 'Bone-in short rib',
            calorie: 120,
            price: 4,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 20,
            inStock: true,
            image: '/images/bone-in_short_rib.jpg',
        },        
        {
            category: 'Side Orders',
            name: 'Garlic Noodle',
            calorie: 120,
            price: 7,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 25,
            inStock: true,
            image: '/images/garlic_noodle.jpg',
        },        
        
        // BEVERAGES
        {
            category: 'Beverages',
            name: 'Vietnamese Coffee',
            calorie: 120,
            price: 4,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 1,
            inStock: true,
            image: '/images/coffee.jpg',
        },
        {
            category: 'Beverages',
            name: 'Lychee Sweet Tea',
            calorie: 100,
            price: 4,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 1,
            inStock: true,
            image: '/images/tea.jpg',
        },
        {
            category: 'Beverages',
            name: 'Thai Tea',
            calorie: 100,
            price: 4,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 1,
            inStock: true,
            image: '/images/thaitea.jpg',
        },
        {
            category: 'Beverages',
            name: 'Passion Fruit',
            calorie: 100,
            price: 4,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 1,
            inStock: true,
            image: '/images/passionfruit.jpg',
        },
        {
            category: 'Beverages',
            name: 'Strawberry Lemonade',
            calorie: 110,
            price: 4,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 1,
            inStock: true,
            image: '/images/strawberrylemonade.jpg',
        },
        {
            category: 'Beverages',
            name: 'Hot Tea',
            calorie: 0,
            price: 2,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 1,
            inStock: true,
            image: '/images/hottea.jpg',
        },
        {
            category: 'Beverages',
            name: 'Ice Tea',
            calorie: 0,
            price: 2,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 1,
            inStock: true,
            image: '/images/icetea.jpg',
        },
        {
            category: 'Beverages',
            name: 'Soft Drink: Coke',
            calorie: 130,
            price: 1,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 1,
            inStock: true,
            image: '/images/coke.jpg',
        },
        {
            category: 'Beverages',
            name: 'Soft Drink: Diet Coke',
            calorie: 0,
            price: 1,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 1,
            inStock: true,
            image: '/images/dietcoke.jpg',
        },
        {
            category: 'Beverages',
            name: 'Soft Drink: Sprite',
            calorie: 130,
            price: 1,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 1,
            inStock: true,
            image: '/images/sprite.jpg',
        },
        {
            category: 'Beverages',
            name: 'Soft Drink: Dr. Pepper',
            calorie: 130,
            price: 1,
            ingredient: 'N/A',
            healthNotes: 'N/A',
            prepTime: 1,
            inStock: true,
            image: '/images/drpepper.jpg',
        }, 
    ]
};

module.exports = data;
