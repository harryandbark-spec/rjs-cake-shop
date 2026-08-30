export const products = [
  {
    id: "1",
    name: "Three-Tier Monogram Wedding Cake",
    price: "$350",
    image: "/cakes/wedding-sh.jpg",
    collection: "Wedding",
    description:
      "A three-tier cream wedding cake with gold monogram, fresh florals, and classic piped borders — made to order for your day.",
  },
  {
    id: "2",
    name: "Mocha Cupcake Box",
    price: "$45",
    image: "/cakes/cupcakes-mocha.jpg",
    collection: "Cupcakes",
    description:
      "A dozen chocolate cupcakes finished with mocha buttercream rosettes, packed in a bakery box.",
  },
  {
    id: "3",
    name: "Nursing Graduation Cake",
    price: "$95",
    image: "/cakes/graduation-nursing.jpg",
    collection: "Celebration",
    description:
      "A custom graduation cake with fondant lettering, mortarboard, diploma, and gold pearl details.",
  },
  {
    id: "4",
    name: "Red Rosette Signature Cake",
    price: "$85",
    image: "/cakes/red-rosettes.jpg",
    collection: "Signature",
    description:
      "Hand-piped crimson rosettes with gold pearls. A buttercream showpiece.",
  },
  {
    id: "5",
    name: "Sweet Sixteen Lambeth Cakes",
    price: "$120",
    image: "/cakes/sweet-16.jpg",
    collection: "Celebration",
    description:
      "Ornate pink Lambeth cakes with ribbons and script — designed for Sweet 16 celebrations.",
  },
  {
    id: "6",
    name: "Graduation Cupcake Box",
    price: "$48",
    image: "/cakes/cupcakes-graduation.jpg",
    collection: "Cupcakes",
    description:
      "Cream-frosted cupcakes with graduation toppers, gold pearls, and Congrats GRAD discs.",
  },
  {
    id: "7",
    name: "Heart 30th Birthday Cake",
    price: "$90",
    image: "/cakes/heart-30.jpg",
    collection: "Signature",
    description:
      "A burgundy heart cake with hand-piped details, satin ribbons, and a custom message.",
  },
  {
    id: "8",
    name: "Strawberry Event Cake",
    price: "$160",
    image: "/cakes/event-strawberry.jpg",
    collection: "Wedding",
    description:
      "A large cream celebration cake topped with fresh strawberries and scalloped piping.",
  },
  {
    id: "9",
    name: "Fruit Sheet Cake",
    price: "$110",
    image: "/cakes/vintage-fruit-sheet.jpg",
    collection: "Signature",
    description:
      "A rectangular cake with Lambeth piping, grapes, kiwi, and fresh florals.",
  },
  {
    id: "10",
    name: "Baby's Breath Ruffle Cake",
    price: "$88",
    image: "/cakes/ruffled-babys-breath.jpg",
    collection: "Signature",
    description:
      "Tall cream ruffles, baby's breath, and hand-lettered happy birthday script.",
  },
  {
    id: "11",
    name: "Father's Day Mocha Cake",
    price: "$75",
    image: "/cakes/fathers-day-mocha.jpg",
    collection: "Celebration",
    description:
      "Mocha frosting, dark chocolate drip, and piped rosettes — a seasonal favourite.",
  },
  {
    id: "12",
    name: "Themed Superhero Birthday Cake",
    price: "$130",
    image: "/cakes/batman-25.jpg",
    collection: "Celebration",
    description:
      "A fully custom two-tier themed cake with gold accents and coordinated party details.",
  },
];

export const collections = ["All", "Wedding", "Signature", "Celebration", "Cupcakes"];

export function getProductById(id) {
  return products.find((p) => String(p.id) === String(id));
}
