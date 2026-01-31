import { Product } from "@/types";
import { withBasePath } from "@/lib/utils";

export const products: Product[] = [
  {
    id: "1",
    name: "Calm",
    slug: "calm",
    price: 8.5,
    images: [
      withBasePath(
        "/images/products/Calm/Whisk_ab556fd70c14b5e942b46e79b621f67edr.png",
      ),
      withBasePath(
        "/images/products/Calm/Whisk_ef9b4054a8760cc8736453a83293b209dr.png",
      ),
      withBasePath("/images/products/Calm/Calm.png"),
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
      withBasePath(
        "/images/products/SunnySage/Whisk_75ea0189cf0145da5a14ddb2722e623beg.png",
      ),
      withBasePath(
        "/images/products/SunnySage/Whisk_85e3f10feaed6c99eae4d5c8b1c83db3eg.png",
      ),
    ],
    description:
      "Sunny Sage is clarity with a smile.\n\nHerbal, earthy sage meets the bright, uplifting freshness of orange — a scent that feels both cleansing and energising. Sage is traditionally known for its purifying and clarifying qualities, while orange essential oil brings warmth, lightness and a natural mood boost.\n\nThis combination makes Sunny Sage the perfect companion for morning showers or moments when you want to reset, recharge and feel refreshed from head to toe.\n\nA subtle spark of sunshine on your skin.",
    inStock: true,
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
];
