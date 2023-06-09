export const initialRecipes = [
    {
      flag: 'es',
      name: 'Spanish Paella',
      difficulty: 'medium',
      description: 'Spanish paella is a traditional rice dish that originated in the Valencia region of Spain. It was originally made with ingredients such as saffron, rabbit, and snails, which were common in the area.',
      details: [
        { name: "Seafood",  value: "Seafood" },
        { name: "Produce",  value: [
          { ingredient: "Onion", color: "#2BF1E5" },
          { ingredient: "Tomato", color: "#ff0000" }
        ]},
        { name: "Spices", value: "Baby Leaf / Saffron" },
        { name: "Volume/Weight", value: "4" },
        { name: "Authenticy", value: "Unverified" },
        { name: "Stock", value: "Chicken" },
      ],
    },
    {
      flag: 'it',
      name: 'Pizza Napoletana',
      difficulty: 'hard',
      description: 'Pizza Napoletana is a type of pizza that originated in Naples, Italy. It is characterized by its thin, soft and chewy crust, with toppings that respect the traditional Neapolitan pizza making.',
      details: [
        { name: "Produce", value: [
          { ingredient: "Tomato", color: "#ff0000" },
          { ingredient: "Basil", color: "#2BF1E5" }
        ]},
        { name: "Dairy", value: "Mozzarella" },
        { name: "Spices", value: "Olive Oil" },
        { name: "Volume/Weight", value: "6" },
        { name: "Authenticity", value: "Verified" },
        { name: "Baking", value: "Wood-fired oven" },
      ],
    },
    {
      flag: 'jp',
      name: 'Sushi',
      difficulty: 'medium',
      description: 'Sushi is a traditional Japanese dish that consists of vinegared rice, usually topped with other ingredients such as fish or seafood.',
      details: [
        { name: "Seafood", value: [
          { ingredient: "Salmon", color: "#ff0000" },
          { ingredient: "Tuna", color: "#ff0000" }
        ]},
        { name: "Produce", value: [
          { ingredient: "Avocado", color: "#2BF1E5" },
          { ingredient: "Rice", color: "#ff0000" }
        ]},
        { name: "Spices", value: "Soy Sauce" },
        { name: "Volume/Weight", value: "1" },
        { name: "Authenticity", value: "Verified" },
        { name: "Technique", value: "Hand-rolled" },
      ],
    },
];