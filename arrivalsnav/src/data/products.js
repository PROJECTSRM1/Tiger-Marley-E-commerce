const products = [
  {
    id: 1,
    name: "MIDAS FLOWER",
    price: 7500,
    mrp: 10000,
    discount:"SAVE 25%",
    soldOut: true,
    image: "/images/MIDAS FLOWER.webp",
  },
  {
    id: 2,
    name: "TIGRESS",
    price: 7500,
    mrp: 10000,
    discount:"SAVE 25%",
    soldOut: false,
    image: "/images/TIGRESS.webp",
  },
  {
    id: 3,
    name: "DUCHESS",
    price: 6000,
    mrp: 8000,
    discount:"SAVE 25%",
    soldOut: false,
    image: "/images/DUCHESS.webp",
  },
  {
    id: 4,
    name: "EMPRESS",
    price: 6000,
    mrp: 8000,
    discount:"SAVE 25%",
    soldOut: false,
    image: "/images/EMPRESS.webp",
  },
  {
    id: 5,
    name: "DUCHESS",
    price: 6000,
    mrp: 8000,
    discount:"SAVE 25%",
    soldOut: false,
    image: "/images/ddUCHESS.webp",
  },
  {
    id: 6,
    name: "MIDAS FLOWER",
    price: 7500,
    mrp: 10000,
    discount:"SAVE 25%",
    soldOut: false,
    image: "/images/MIDAS FLOWER2.webp",
  },
  {
    id: 7,
    name: "EMPRESS",
    price: 6000,
    mrp: 8000,
    discount:"SAVE 25%",
    soldOut: false,
    image: "/images/EMPRESS2.webp",
  },
  {
    id: 8,
    name: "EMPRESS",
    price: 6000,
    mrp: 8000,
    discount:"SAVE 25%",
    soldOut: false,
    image: "/images/EMPRESS3.webp",
  },
  {
    id: 9,
    name: "EMPRESS",
    price: 6000,
    mrp: 8000,
    discount:"SAVE 25%",
    soldOut: false,
    image: "/images/EMPRESS4.webp",
  },
  {
    id: 10,
    name: "MAGNOLIA",
    price: 6750,
    mrp: 9000,
    discount:"SAVE 25%",
    soldOut: false,
    image: "/images/MAGNOLIA.webp",
  },
  {
    id: 11,
    name: "MAGNOLIA",
    price: 6750,
    mrp: 9000,
    discount:"SAVE 25%",
    soldOut: false,
    image: "/images/MAGNOLIA2.webp",
  },
  {
    id: 12,
    name: "MAGNOLIA",
    price: 6750,
    mrp: 9000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/MAGNOLIA3.webp"
  },
  {
    id: 13,
    name: "MARIGOLD CHARM",
    price: 1125,
    mrp: 1500,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/MARIGOLD CHARM.webp"
  },
  {
    id: 14,
    name: "MUSTANG SADDLE FANNY",
    price: 5250,
    mrp: 7000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/MUSTANG SADDLE FANNY1.webp"
  },
  {
    id: 15,
    name: "DERBY PEARL",
    price: 6750,
    mrp: 9000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/DERBY PEARL1.webp"
  },
  {
    id: 16,
    name: "HALTER DUFFLE",
    price: 12000,
    soldOut: false,
    image:"/images/HALTER DUFFLE.webp"
  },
  {
    id: 17,
    name: "WRANGLER BACKPACK",
    price: 12000,
    soldOut: false,
    image:"/images/WRANGLER BACKPACK1.webp"
  },
  {
    id: 18,
    name: "GIRTH AMBER",
    price: 6750,
    mrp: 9000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/GIRTH AMBER1.webp"
  },
  {
    id: 19,
    name: "CANTLE RAVEN",
    price: 5250,
    mrp: 7000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/CANTLE RAVEN1.webp"
  },
   {
    id: 20,
    name: "BANDERA",
    price: 5250,
    mrp: 7000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/BANDERA.webp"
  },
   {
    id: 21,
    name: "LARIAT RAVEN MINI",
    price: 5250,
    mrp: 7000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/LARIAT RAVEN MINI1.webp"
  },
   {
    id: 22,
    name: "PALOMA SAGE",
    price: 4500,
     mrp: 6000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/PALOMA SAGE1.webp"
  },
   {
    id: 23,
    name: "CAVALIER BACKPACK",
    price: 9000,
     mrp: 12000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/CAVALIER BACKPACK2.webp"
  },
   {
    id: 24,
    name: "DERBY AMBER",
    price: 6750,
     mrp: 9000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/DERBY AMBER2.webp"
  },
   {
    id: 25,
    name:"DERBY RAVEN",
    price: 6750,
     mrp: 9000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/DERBY RAVEN2.webp"
  },
   {
    id: 26,
    name: "EQUINE STAR WALLET - RARE LEATHER",
    price: 15000,
    mrp: 20000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/EQUINE STAR.webp"
  },
  {
    id: 27,
    name: "GILDED STIRRUP PEARL",
    price: 6000,
    mrp: 8000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/GILDED STIRUP PEARL2.webp"
  },
  {
    id: 28,
    name: "GILDED STIRRUP SAGEE",
    price: 6000,
    mrp: 8000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/GILDED STIRRUP SAGE.webp"
  },
  {
    id: 29,
    name: "GIRTH COCOA",
    price: 6750,
    mrp: 9000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/GIRTH COCOA2.webp"
  },
  {
    id: 30,
    name: "GIRTH SAGE",
    price: 6750,
    mrp: 9000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/GIRTH SAGE1.webp"
  },
  {
    id: 31,
    name: "LARIAT CHERRY MINI",
    price: 5250,
    mrp: 7000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/LARIAT CHERRY MINI1.webp"
  },
  {
    id: 32,
    name: "LARIAT PEARL MINI",
    price: 5250,
    mrp: 7000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/LARIAT PEARL MINI1.webp"
  },
  {
    id: 33,
    name: "PALOMA BLUSH",
    price: 4500,
    mrp: 6000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/PALOMA BLUSH1.webp"
  },
  {
    id: 34,
    name: "PALOMA RAVEN",
    price: 4500,
    mrp: 6000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/PALOMA RAVEN1.webp"
  },
  {
    id: 35,
    name: "PASO FINO AMBER CHARM",
    price: 750,
     mrp: 1000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/PASO FINO AMBER CHARM1.webp"
  },
  {
    id: 36,
    name: "PASO FINO MOSS CHARM",
    price: 750,
    mrp: 1000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/PASO FINO MOSS CHARM1.webp"
  },
  {
    id: 37,
    name: "RANCHO WALLET",
    price: 3000,
    mrp: 4000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/RANCHO WALLET.webp"
  },
  {
    id: 38,
    name: "RANGER LAPTOP BAG",
    price: 10500,
    mrp: 14000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/RANGER LAPTOP BAG1.webp"
  },
  {
    id: 39,
    name: "REIN SADDLE CHERRY",
    price: 7000,
    mrp: 9000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/REIN SADDLE CHERRY.webp"
  },
  {
    id: 40,
    name: "REIN SADDLE SKY",
    price: 5250,
    mrp: 7000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/REIN SADDLE SKY1.webp"
  },
  
{
    id: 41,
    name: "SIENNA BLUSH",
    price: 6000,
    mrp: 8000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/SIENNA BLUSH.webp"
  },
  
  {
    id: 42,
    name: "SIENNA RAVEN",
    price: 6000,
    mrp: 8000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/SIENNA RAVEN1.webp"
  },
  
  {
    id: 43,
    name: "SIENNA SAGE",
    price: 6000,
    mrp: 8000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/SIENNA SAGE1.webp"
  },
  {
    id: 44,
    name: "THE COWGIRL CLUB",
    price: 3500,
    mrp: 7000,
    discount:"SAVE 25%",
    soldOut: false,
    image:"/images/THE COWGIRL CLUB.webp"
  },
];

export default products;
