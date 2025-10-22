const products = [
  {
    id: 1,
    name: "AMAZONA COCOA",
    price: 5625,
    soldOut: true,
    onSale: true,
    discount: "25% OFF",
    mrp: 7500,
    image: "/images/amazon cocoa.jpg",
  },
  {
    id: 2,
    name: "AMAZONA MOSS",
    price: 5625,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 7500,
    image: "/images/AMAZONA MOSS.webp",
  },
  {
    id: 3,
    name: "AMOZONA PEARL",
    price: 5625,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 7500,
    image: "/images/AMOZONA PEARL.webp",
  },
  {
    id: 4,
    name: "WRANGLER BACKPACK",
    price: 12000,
    soldOut: false,
    onSale: true,
    discount: "20% OFF",
    mrp: 15000,
    image: "/images/WRANGLER BACKPACK.webp",
  },
  {
    id: 5,
    name: "ARMOUR BELT",
    price: 2625,

    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 3500,
    image: "/images/BELT.webp",
  },
  {
    id: 6,
    name: "PALOMA BLUSH",
    price: 4500,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
    mrp: 6000,
    image: "/images/PALOMA BLUSH.webp",
  },
  {
    id: 7,
    name: "PALOMA RAVEN",
    price: 4500,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
    mrp: 6000,
    image: "/images/PALOMA RAVEN.webp",
  },
  {
    id: 8,
    name: "PALOMA SAGE",
    price: 4500,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
    mrp: 6000,
    image: "/images/PALOMA SAGE.webp",
  },
  {
    id: 9,
    name: "BRONCO LAPTOP SLEEVE",
    price: 3375,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 4500,
    image: "/images/BRONCO LAPTOP SLEEVE.webp",
  },
  {
    id: 10,
    name: "CANTLE RAVEN",
    price: 5250,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
    mrp: 7500,
    image: "/images/CANTLE RAVEN.webp",
  },
  {
    id: 11,
    name: "CANTLE SAGE",
    price: 5250,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
    mrp: 7500,
    image: "/images/CANTLE SAGE.webp",
  },
  {
    id: 12,
    name: "CANTLE SKY",
    price: 5250,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
    mrp: 7500,
    image:"/images/CANTLE SKY.webp"
  },
  {
    id: 13,
    name: "CAVALIER BACKPACK",
    price: 9000,
    soldOut: false,
    onSale: true,
    discount: "40% OFF",
    mrp: 15000,
    image:"/images/CAVALIER BACKPACK.webp"
  },
  {
    id: 14,
    name: "DERBY AMBER",
    price: 6750,
    soldOut: false,
    onSale: true, 
    discount: "25% OFF",
    mrp: 7500,
    image:"/images/DERBY AMBER.webp"
  },
  {
    id: 15,
    name: "DERBY PEARL",
    price: 6750,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 7500,
    image:"/images/DERBY PEARL.webp"
  },
  {
    id: 16,
    name: "DERBY RAVEN",
    price: 6750,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 7500,
    image:"/images/DERBY RAVEN.webp"
  },
  {
    id: 17,
    name: "GILDED STIRRUP PEARL",
    price: 6000,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 7500,
    image:"/images/GILDED STIRUP PEARL.webp"
  },
  {
    id: 18,
    name: "GILDED STIRRUP SAGE",
    price: 6000,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 7500,
    image:"/images/GILDED STIRUP SAGE.webp"
  },
  {
    id: 19,
    name: "GIRTH AMBER",
    price: 6750,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 7500,
    image:"/images/GIRTH AMBER.webp"
  },
   {
    id: 20,
    name: "GIRTH COCOA",
    price: 6750,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 7500,
    image:"/images/GIRTH COCOA.webp"
  },
   {
    id: 21,
    name: "GIRTH SAGE",
    price: 6750,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 7500,
    image:"/images/GIRTH SAGE.webp"
  },
   {
    id: 22,
    name: "MUSTANG SADDLE FANNY",
    price: 5250,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 7500,
    image:"/images/MUSTANG SADDLE FANNY.webp"
  },
   {
    id: 23,
    name: "PASO FINO AMBER CHARM",
    price: 750,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
        mrp: 1500,
    image:"/images/PASO FINO AMBER CHARM.webp"
  },
   {
    id: 24,
    name: "PASO FINO MOSS CHARM",
    price: 750,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
        mrp: 1500,
    image:"/images/PASO FINO MOSS CHARM.webp"
  },
   {
    id: 25,
    name:"RANGER LAPTOP BAG",
    price: 10500,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
        mrp: 15000,
    image:"/images/RANGER LAPTOP BAG.webp"
  },
   {
    id: 26,
    name: "REIN SADDLE SKY",
    price: 5250,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 7500,
    image:"/images/REIN SADDLE SKY.webp"
  },
  {
    id: 27,
    name: "SIENNA BLUSH",
    price: 6000,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 7500,
    image:"/images/SEINA BLUSH.webp"
  },
  {
    id: 28,
    name: "SIENNA RAVEN",
    price: 6000,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 7500,
    image:"/images/SIENNA RAVEN - Copy.webp"
  },
  {
    id: 29,
    name: "SIENNA SAGE",
    price: 6000,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 7500,
    image:"/images/SIENNA SAGE.webp"
  },
  {
    id: 30,
    name: "LARIAT CHERRY MINI",
    price: 5250,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
        mrp: 7500,
    image:"/images/LARIAT CHERRY MINI.webp"
  },
  {
    id: 31,
    name: "LARIAT PEARL MINI",
    price: 5250,
    soldOut: false,

    onSale: true,
    discount: "25% OFF",
    mrp: 7500,
        
    image:"/images/LARIAT PEARL MINI.webp"
  },
  {
    id: 32,
    name: "LARIAT RAVEN MINI",
    price: 5250,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
        mrp: 7500,
    image:"/images/LARIAT RAVEN MINI.webp"
  },
  {
    id: 33,
    name: "NETWORKING",
    price: 4900,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 6500,
    image: "/images/NETWORKING.webp"
  },
  {
    id: 34,
    name: "AEONIUM",
    price: 5600,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 7500,
    image:"/images/AEONIUM.webp"
  },
  {
    id: 35,
    name: "BE EASY",
    price: 4900,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
    mrp: 7000,
    image:"/images/BE EASY.webp"
  },
  {
    id: 36,
    name: "BOUNTY",
    price: 4550,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
    mrp: 6500,
    image:"/images/BOUNTY.webp"
  },
  {
    id: 37,
    name: "LOVE FOR RAINBOW",
    price: 3850,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
    mrp: 5500,
    image:"/images/LOVE FOR RAINBOW.webp"
  },
  {
    id: 38,
    name: "URBAN MAVERICK",
    price: 1400,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
    mrp: 2000,
    image:"/images/URBAN MAVERICK.webp"
  },
  {
    id: 39,
    name: "BELOW THE BELT",
    price: 2450,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
    mrp: 3500,
    image:"/images/bELOW THE BELT.webp"
  },
  {
    id: 40,
    name: "BIJOUX",
    price: 4900,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 6500,
    image:"/images/BIJOUX.webp"
  },
  
{
    id: 41,
    name: "BIJOUX",
    price: 4900,
    soldOut: false,
    onSale: true,
    discount: "25% OFF",
    mrp: 6500,
    image:"/images/bIJOUXx.webp"
  },
  
  {
    id: 42,
    name: "CLASSY AF",
    price: 10850,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
    mrp: 15500,
    image:"/images/CLASSY AF.webp"
  },
  
  {
    id: 43,
    name: "DOWN TO BUSINESS",
    price: 8750,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
    mrp: 12500,
    image:"/images/DOWN TO BUSINESS.webp"
  },
  {
    id: 44,
    name: "FOREST TIGER MAMA",
    price: 9800,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
    mrp: 14000,
    image:"/images/FOREST TIGER MAMA.webp"
  },
  {
    id: 45,
    name: "LADIES LOVE IT",
    price: 9800,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
    mrp: 14000,
    image:"/images/LADIES LOVE IT.webp"
  },
  {
    id: 46,
    name: "LADIES LOVE IT",
    price: 9800,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
    mrp: 14000,
    image:"/images/LADIES LOVE IT2.webp"
  },
  {
    id: 47,
    name: "MID NIGHT CUB",
    price: 5600,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
    mrp: 8000,
    image:"/images/MID NIGHT CUB.webp"
  },
  {
    id: 48,
    name: "MID NIGHT MAMA",
    price: 9800,
    soldOut: false,
    onSale: true,
    discount: "30% OFF",
    mrp: 14000,
    image:"/images/MID NIGHT MAMA.webp"
  },
  
  
  


];


export default products;

