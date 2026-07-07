const categories = [
  {
    id: "pizza",
    label: "Pizza",
    image: "/pizza.png",
    count: 48,
    dishes: [
      { id: "p1", name: "Margherita", price: 12.99, description: "Classic tomato, mozzarella & basil", image: "/Margherita.png" },
      { id: "p2", name: "Pepperoni", price: 14.99, description: "Loaded with spicy pepperoni slices", image: "/images/pepperoni.jpg" },
      { id: "p3", name: "BBQ Chicken", price: 15.99, description: "Smoky BBQ sauce with grilled chicken", image: "/images/bbq-chicken.jpg" },
      { id: "p4", name: "Veggie Supreme", price: 13.99, description: "Seasonal veggies on garlic base", image: "/images/veggie.jpg" },
    ],
  },
  {
    id: "burger",
    label: "Burgers",
    image:"/burgers.png",
    count: 62,
     dishes: [
      { id: "b1", name: "Classic Smash", price: 10.99, description: "Double smash patty, American cheese", image: "/images/smash.jpg" },
      { id: "b2", name: "Spicy Crispy", price: 11.99, description: "Crispy fried chicken, sriracha mayo", image: "/images/spicy.jpg" },
      { id: "b3", name: "Mushroom Swiss", price: 12.49, description: "Sautéed mushrooms, Swiss cheese", image: "/images/mushroom.jpg" },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    image: "/pasta.png",
    count: 35,
    dishes: [
      { id: "p1", name: "Spaghetti", price: 10.99, description: "Long, thin, cylindrical strands. The classic twirl with a fork pasta", image: "/Spaghetti.png" },
      { id: "p2", name: "Penne", price: 14.99, description: "Loaded with spicy pepperoni slices", image: "/Penne.png" },
      { id: "p3", name: "Fettuccine", price: 15.99, description: "Smoky BBQ sauce with grilled chicken", image: "/Fettuccine.png" },
      { id: "p4", name: "Fusilli", price: 13.99, description: "Seasonal veggies on garlic base", image: "/Fusilli.png" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    image: "/dessert.png",
    count: 41,
    dishes: [
      { id: "p1", name: "Tiramisu", price: 17.99, description: "Italian classic, Layers of coffe-soaked biscuits + creamy cheese", image: "/images/margherita.jpg" },
      { id: "p2", name: "Churros with Chocolate", price: 14.99, description: "Fried dough sticks, crispy outside + soft inside, rolled in cinnamon suger", image: "/images/pepperoni.jpg" },
      { id: "p3", name: "Pavlova", price: 15.99, description: "Meringue base that's crips on the outside, marshmallowy soft inside", image: "/images/bbq-chicken.jpg" },
      { id: "p4", name: "Baklava", price: 13.99, description: "Layers of thin phyllo paystry with chopped nuts + honey syrup", image: "/images/veggie.jpg" },
    ],
  },
  {
    id: "seafood",
    label: "Seafood",
    image: "/seafood.png",
    count: 27,
    dishes: [
      { id: "p1", name: "Salmon", price: 12.99, description: "Grilled salmon with lemon butter sauce", image: "/images/margherita.jpg" },
      { id: "p2", name: "Shrimp/Prawns", price: 14.99, description: "small crustaceans with a sweet, mild taste and firm bite", image: "/images/pepperoni.jpg" },
      { id: "p3", name: "Tuna", price: 15.99, description: "Meaty, steak-like fish with a rich, distinctive flavor", image: "/images/bbq-chicken.jpg" },
      { id: "p4", name: "Scallops", price: 13.99, description: "Round, tender shellfish with a sweet, delicate taste ", image: "/images/veggie.jpg" },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    image: "/drinks.png",
    count: 88,
    dishes: [
      { id: "p1", name: "Milkshake", price: 12.99, description: "Creamy blended drink with milk and flavoring", image: "/images/margherita.jpg" },
      { id: "p2", name: "iced coffee", price: 14.99, description: "Coffee brewed strong, cooled down, poured over ice", image: "/images/pepperoni.jpg" },
      { id: "p3", name: "smoothie", price: 15.99, description: "Blended drink with fruits and yogurt/milk", image: "/images/bbq-chicken.jpg" },
      { id: "p4", name: "Chapman", price: 13.99, description: "Nigerias favorite cocktail/mocktail", image: "/images/veggie.jpg" },
    ],
  },
  {
    id: "african",
    label: "African",
    image: "/african.png",
    count: 24,
    dishes: [
      { id: "p1", name: "Jasmine Rice", price: 12.99, description: "Long-grain of rice from Thiland with a delicate aroma", image: "/images/margherita.jpg" },
      { id: "p2", name: "Basmatic Rice", price: 14.99, description: "Long, slender grain from india/pakistain", image: "/images/pepperoni.jpg" },
      { id: "p3", name: "Fried Rice", price: 15.99, description: "loving rice dish with vegetables and chicken", image: "/images/bbq-chicken.jpg" },
      { id: "p4", name: "Jollof Rice", price: 13.99, description: "Seasonal veggies on garlic base", image: "/images/veggie.jpg" },
    ],
  },
  {
    id: "chef specials",
    label: "Chef Specials",
    image: "/chef-specials.png",
    count: 16,
    dishes: [
      { id: "p1", name: "Surf & Turf", price: 12.99, description: "Premium cut of rear steak and fresh seafood", image: "/surf.png" },
      { id: "p2", name: "Chefs Seafood Paella", price: 14.99, description: "Spanish-style rice dish with assorted seafood", image: "/paella.png" },
      { id: "p3", name: "Wagyu Beef Tenderloin", price: 15.99, description: "Premium cut of beef with a rich, buttery flavor", image: "/images/bbq-chicken.jpg" },
      { id: "p4", name: "Deconstructed Chocolate lava Cake", price: 13.99, description: "Modern take on the classic chocolate lava cake", image: "/images/veggie.jpg" },
    ],
  },
]

export default categories