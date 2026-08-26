import { Product } from "@/types";
import { withBasePath } from "@/lib/utils";

export const products: Product[] = [
  {
    id: "1",
    name: "Calm",
    slug: "calm",
    price: 8.5,
    images: [
      withBasePath("/images/products/Calm/10.png"),
      withBasePath("/images/products/Calm/11.png"),
      withBasePath("/images/products/Calm/12.png"),
    ],
    description:
      "Calm is your moment of pause.\n\nThe soft, floral scent of lavender gently wraps around your senses, helping to slow down the mind and relax the nervous system. Known for its balancing and calming properties, lavender supports deep relaxation and makes this soap perfect for evening showers or moments when you want to unwind.\n\nCombined with the natural exfoliating power of recycled coffee grounds and nourishing plant oils, Calm leaves your skin smooth, cared for and your body gently grounded.\n\nA quiet ritual. A deep breath. A sense of ease.",
    inStock: true,
    ingredients: [
      "Olea Europaea Fruit Oil",
      "Cocos Nucifera Oil",
      "Aqua",
      "Sodium Hydroxide",
      "Butyrospermum Parkii Butter",
      "Ricinus Communis Seed Oil",
      "Coffea Arabica Seed Powder",
      "Lavandula Angustifolia (Lavendel) Oil",
      "Linalool",
      "Limonene",
    ],
  },
  {
    id: "2",
    name: "Sunny Sage",
    slug: "sunny-sage",
    price: 8.5,
    images: [
      withBasePath("/images/products/SunnySage/1.jpg"),
      withBasePath("/images/products/SunnySage/2.png"),
      withBasePath("/images/products/SunnySage/3.png"),
    ],
    description:
      "Sunny Sage is clarity with a smile.\n\nHerbal, earthy sage meets the bright, uplifting freshness of orange - a scent that feels both cleansing and energising. Sage is traditionally known for its purifying and clarifying qualities, while orange essential oil brings warmth, lightness and a natural mood boost.\n\nThis combination makes Sunny Sage the perfect companion for morning showers or moments when you want to reset, recharge and feel refreshed from head to toe.\n\nA subtle spark of sunshine on your skin.",
    inStock: false,
    ingredients: [
      "Olea Europaea Fruit Oil",
      "Cocos Nucifera Oil",
      "Aqua",
      "Sodium Hydroxide",
      "Butyrospermum Parkii Butter",
      "Ricinus Communis Seed Oil",
      "Coffea Arabica Seed Powder",
      "Citrus Aurantium Dulcis Peel Oil",
      "Salvia Sclarea Oil",
      "Limonene",
      "Linalool",
      "Geraniol",
      "Citral",
    ],
  },
  {
    id: "3",
    name: "Adama Bundle",
    slug: "adama-bundle",
    price: 19.99,
    ribbon: "Special Offer",
    images: [
      withBasePath("/images/products/EasterSet/EasterSet-1.png"),
      withBasePath("/images/products/EasterSet/EasterSet-2.png"),
    ],
    description:
      "Two bars. One tray. The whole ritual.\n\nThe Adama Bundle pairs both of our handmade coffee-scrub bars - Sunny Sage (orange + sage) and Calm (lavender) with a handcrafted wooden soap tray made to keep them dry between showers.\n\nBoth bars are cold-processed by hand here in Munich, made with coffee grounds we upcycle from local cafés. Vegan. Plastic-free. Nothing in here we wouldn't put on our own skin.\n\nFor yourself. Or for someone you'd give something real to.\n\nWhat's inside:\n- 1 × Sunny Sage soap (100g)\n- 1 × Calm soap (100g)\n- 1 × Handmade wooden soap tray\n\nFor the full ingredient lists, see the Sunny Sage and Calm product pages.\n\nAdama. Stay clean. Stay grounded.",
    inStock: true,
  },
];
