import business from "../assets/business.jpeg"
import wedding from "../assets/wedding.jpeg"
import adv from "../assets/advertising.jpeg"
import school from "../assets/school.jpeg"
import gift from "../assets/goft.jpeg"


// import ironman from "../assets/postermockup/ironman.webp"
// import spidey from "../assets/postermockup/spidey.webp"
// import porsche from "../assets/postermockup/porsche.webp"
// import batman from "../assets/postermockup/batman.webp"
// import bmw from "../assets/postermockup/bmw.webp"
// import breaking from "../assets/postermockup/breaking.webp"
// import cars from "../assets/postermockup/cars.webp"
// import deadpool from "../assets/postermockup/deadpool.webp"
// import fnf from "../assets/postermockup/fnf.webp"
// import friends from "../assets/postermockup/friends.webp"
// import godfather from "../assets/postermockup/godfather.webp"
// import godofwar from "../assets/postermockup/godofwar.webp"
// import got from "../assets/postermockup/got.webp"
// import hp from "../assets/postermockup/hp.webp"
// import interstellar from "../assets/postermockup/interstellar.webp"
// import krishna from "../assets/postermockup/krishna.webp"
// import messi from "../assets/postermockup/messi.webp"
// import potc from "../assets/postermockup/potc.webp"
// import ronaldo from "../assets/postermockup/ronaldo.webp"
// import srt from "../assets/postermockup/srt.webp"
// import st from "../assets/postermockup/st.webp"
// import superman from "../assets/postermockup/superman.webp"
// import thor from "../assets/postermockup/thor.webp"
// import toystory from "../assets/postermockup/toystory.webp"
// import weeknd from "../assets/postermockup/weeknd.webp"
// import virat from "../assets/postermockup/virat.webp"
// import hanuman from "../assets/postermockup/hanuman.webp"
import notebook from "../assets/notebooks.png"
import journal from "../assets/journal.png"




export const PRODUCTS = [
  {
    id: "prd-marvel-ironman-001",
    name: "Iron Man Minimalist Wall Poster",
    slug: "iron-man-minimalist-wall-poster",
    sku: "PST-MAR-IM-001",


    category: "Posters",

    collections: {
      franchise: "Marvel",
      series: "Iron Man",
      universe: "MCU",
      character: "Iron Man"
    },

    themes: [
      "Superhero",
      "Action",
      "Cinematic",
      "Pop Culture",
      "Minimalist"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",


    shortDescription:
      "Bold minimalist Iron Man wall poster inspired by the Marvel Cinematic Universe.",

    description:
      "A premium minimalist Iron Man wall poster featuring iconic armor artwork and cinematic color tones. Designed for Marvel fans, movie lovers, and modern interiors. Perfect for bedrooms, gaming rooms, offices, and entertainment spaces.",

    highlights: [
      "High-resolution digital artwork",
      "Fade-resistant premium inks",
      "Sharp color contrast & detailing",
      "Perfect gift for Marvel fans",
      "Modern minimalist aesthetic"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true,

    },


    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      {
        variantId: "IM-A4",
        size: "A4",

        price: 99,
        stock: 40
      },
      {
        variantId: "IM-A3",
        size: "A3",

        price: 179,
        stock: 60
      },
      {
        variantId: "IM-A5",
        size: "A5",

        price: 69,
        stock: 60
      }
    ],

    inventory: {
      totalStock: 100,
      stockStatus: "in_stock",
      lowStockThreshold: 10,

    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168180/ironman_atnoxs.webp",

      images: [
        "ironman_1.jpg",
        "ironman_2.jpg"
      ],

    },

    tags: [
      "iron man poster",
      "iron man wall art",
      "marvel poster",
      "MCU",
      "marvel wall art",
      "iron man artwork",

    ],

    seo: {
      metaTitle: "Iron Man Wall Poster | Marvel Superhero Wall Art",
      metaDescription:
        "Buy Iron Man minimalist wall poster inspired by the Marvel Cinematic Universe. Premium quality wall art for Marvel and superhero fans.",
      keywords: [
        "iron man poster",
        "marvel wall art",
        "superhero poster",
        "mcu iron man"
      ]
    },



    productionTime: "2–3 business days",


    shipping: {
      weight: 0.25,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube",
    },

    rating: 4.8,
    reviewsCount: 214,


    copyrightNote:
      "Fan-made artwork. Not official Marvel merchandise.",


    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: false,

  },
  {
    id: "prd-marvel-spiderman-001",
    name: "Spider-Man Multiverse Wall Poster",
    slug: "spider-man-multiverse-wall-poster",
    sku: "PST-MAR-SM-001",

    category: "Posters",

    collections: {
      franchise: "Marvel",
      series: "Spider-Man",
      universe: "Spider-Verse",
      character: "Spider-Man"
    },

    themes: [
      "Superhero",
      "Action",
      "Comic Art",
      "Pop Culture",
      "Vibrant",
      "Modern"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    shortDescription:
      "Vibrant Spider-Man multiverse wall poster featuring iconic mask variations in a bold comic style.",

    description:
      "A dynamic Spider-Man multiverse wall poster inspired by different Spider-Verse identities. Designed with bold colors, sharp contrasts, and comic-style detailing, this artwork is perfect for Marvel fans, gamers, and modern interiors.",

    highlights: [
      "High-resolution comic-style artwork",
      "Vibrant colors with sharp detailing",
      "Fade-resistant premium inks",
      "Perfect for gaming rooms & bedrooms",
      "Great gift for Spider-Man fans"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "SM-A4", size: "A4", price: 99, stock: 40 },
      { variantId: "SM-A3", size: "A3", price: 179, stock: 30 },
      { variantId: "SM-A5", size: "A5", price: 69, stock: 20 }
    ],

    inventory: {
      totalStock: 90,
      stockStatus: "in_stock",
      lowStockThreshold: 10
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769082564/products/awokzb1qoviwydmxymzr.webp",
      images: [
        "spiderman_multiverse_1.jpg",
        "spiderman_multiverse_2.jpg"
      ]
    },

    tags: [
      "spider man poster",
      "spiderman wall art",
      "spider verse poster",
      "marvel spiderman poster",
      "spiderman comic art",
      "superhero wall art"
    ],

    seo: {
      metaTitle: "Spider-Man Multiverse Poster | Marvel Comic Wall Art",
      metaDescription:
        "Buy Spider-Man multiverse wall poster with bold comic-style artwork. Premium Marvel wall art for Spider-Man fans.",
      keywords: [
        "spider man poster",
        "spider verse wall art",
        "marvel spiderman poster",
        "comic style spiderman"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.3,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 4.9,
    reviewsCount: 187,

    copyrightNote:
      "Fan-made artwork inspired by Spider-Man. Not official Marvel merchandise.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },


  {
    id: "prd-music-weeknd-001",
    name: "The Weeknd Blinding Lights Wall Poster",
    slug: "the-weeknd-blinding-lights-wall-poster",
    sku: "PST-MUS-WKD-001",

    productType: "posters",
    category: "Posters",

    collections: {
      franchise: "Music",
      series: "The Weeknd",
      album: "After Hours",
      artist: "The Weeknd"
    },

    themes: [
      "Music",
      "Pop",
      "Synthwave",
      "Retro",
      "Neon",
      "Aesthetic",
      "Modern"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    shortDescription:
      "Stylish The Weeknd wall poster inspired by the iconic Blinding Lights era.",

    description:
      "A premium wall poster inspired by The Weeknd’s legendary Blinding Lights and After Hours era. Featuring a bold retro aesthetic with warm neon tones.",

    highlights: [
      "High-resolution music artwork",
      "Retro neon & synthwave vibe",
      "Fade-resistant premium inks",
      "Perfect for bedrooms & studios",
      "Great gift for The Weeknd fans"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "WKD-A4", size: "A4", price: 99, stock: 30 },
      { variantId: "WKD-A3", size: "A3", price: 179, stock: 30 },
      { variantId: "WKD-A5", size: "A5", price: 69, stock: 20 }
    ],

    inventory: {
      totalStock: 80,
      stockStatus: "in_stock",
      lowStockThreshold: 8
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769078711/weeknd_knfdzx.webp",
      images: [
        "weeknd_blinding_lights_1.jpg",
        "weeknd_blinding_lights_2.jpg"
      ]
    },

    tags: [
      "the weeknd poster",
      "blinding lights poster",
      "music wall art",
      "retro neon poster",
      "album inspired wall art"
    ],

    seo: {
      metaTitle: "The Weeknd Blinding Lights Poster | Music Wall Art",
      metaDescription:
        "Buy The Weeknd Blinding Lights wall poster inspired by the After Hours era.",
      keywords: [
        "the weeknd poster",
        "blinding lights wall art",
        "after hours poster"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.28,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 4.9,
    reviewsCount: 162,

    copyrightNote:
      "Fan-made artwork inspired by The Weeknd. Not official merchandise.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },


  {
    id: "prd-marvel-deadpool-001",
    name: "Deadpool Action Wall Poster",
    slug: "deadpool-action-wall-poster",
    sku: "PST-MAR-DP-001",

    category: "Posters",

    collections: {
      franchise: "Marvel",
      series: "Deadpool",
      universe: "Marvel",
      character: "Deadpool"
    },

    themes: [
      "Superhero",
      "Anti-Hero",
      "Action",
      "Dark Humor",
      "Pop Culture",
      "Edgy",
      "Comic Art"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    shortDescription:
      "Bold Deadpool wall poster featuring an intense action pose with signature red-and-black aesthetics.",

    description:
      "A striking Deadpool wall poster inspired by Marvel’s most iconic anti-hero with gritty comic-style artwork.",

    highlights: [
      "High-resolution comic-style artwork",
      "Bold red & black color palette",
      "Fade-resistant premium inks",
      "Perfect for gaming rooms",
      "Must-have for Deadpool fans"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "DP-A4", size: "A4", price: 99, stock: 35 },
      { variantId: "DP-A3", size: "A3", price: 179, stock: 55 },
      { variantId: "DP-A5", size: "A5", price: 69, stock: 55 }
    ],

    inventory: {
      totalStock: 90,
      stockStatus: "in_stock",
      lowStockThreshold: 10
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168177/deadpool_fceoaa.webp",
      images: [
        "deadpool_action_1.jpg",
        "deadpool_action_2.jpg"
      ]
    },

    tags: [
      "deadpool poster",
      "marvel anti hero poster",
      "comic style wall art",
      "gaming room poster"
    ],

    seo: {
      metaTitle: "Deadpool Wall Poster | Marvel Anti-Hero Wall Art",
      metaDescription:
        "Buy Deadpool action wall poster with bold comic-style artwork.",
      keywords: [
        "deadpool poster",
        "marvel deadpool wall art"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.3,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 4.8,
    reviewsCount: 143,

    copyrightNote:
      "Fan-made artwork inspired by Deadpool. Not official Marvel merchandise.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: false
  },

  {
    id: "prd-dc-batman-001",
    name: "Batman Dark Knight Wall Poster",
    slug: "batman-dark-knight-wall-poster",
    sku: "PST-DC-BAT-001",

    category: "Posters",

    collections: {
      franchise: "DC",
      series: "Batman",
      universe: "DCU",
      character: "Batman"
    },

    themes: [
      "Superhero",
      "Dark",
      "Gritty",
      "Cinematic",
      "Minimalist",
      "Pop Culture",
      "Comic Noir"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    shortDescription:
      "Dark and gritty Batman wall poster inspired by Detective Comics and the iconic Dark Knight persona.",

    description:
      "A powerful Batman wall poster inspired by Detective Comics and the Dark Knight era. Featuring a dramatic black, red, and monochrome palette with bold typography.",

    highlights: [
      "High-contrast dark comic artwork",
      "Iconic Dark Knight aesthetic",
      "Fade-resistant premium inks",
      "Perfect for offices & man caves",
      "Must-have for Batman fans"
    ],

    pricing: {
      basePrice: 1099,
      salePrice: 899,
      discountPercentage: 18,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "BAT-A4", size: "A4", price: 99, stock: 40 },
      { variantId: "BAT-A3", size: "A3", price: 179, stock: 40 },
      { variantId: "BAT-A5", size: "A5", price: 69, stock: 50 }
    ],

    inventory: {
      totalStock: 90,
      stockStatus: "in_stock",
      lowStockThreshold: 10
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168178/batman_g3hw1m.webp",
      images: [
        "batman_dark_knight_1.jpg",
        "batman_dark_knight_2.jpg"
      ]
    },

    tags: [
      "batman poster",
      "dark knight poster",
      "dc batman wall art",
      "gritty superhero poster",
      "comic noir wall art"
    ],

    seo: {
      metaTitle: "Batman Dark Knight Poster | DC Comics Wall Art",
      metaDescription:
        "Buy Batman Dark Knight wall poster inspired by Detective Comics. Premium DC wall art with a dark cinematic aesthetic.",
      keywords: [
        "batman poster",
        "dark knight wall art",
        "dc batman poster"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.3,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 4.9,
    reviewsCount: 176,

    copyrightNote:
      "Fan-made artwork inspired by Batman. Not official DC Comics merchandise.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: false
  },


  {
    id: "prd-dc-superman-001",
    name: "Superman Minimalist Hope Wall Poster",
    slug: "superman-minimalist-hope-wall-poster",
    sku: "PST-DC-SUP-001",

    category: "Posters",

    collections: {
      franchise: "DC",
      series: "Superman",
      universe: "DCU",
      character: "Superman"
    },

    themes: [
      "Superhero",
      "Minimalist",
      "Hope",
      "Cinematic",
      "Modern",
      "Inspirational",
      "Clean Aesthetic"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    shortDescription:
      "Minimalist Superman wall poster symbolizing hope, strength, and solitude.",

    description:
      "A powerful minimalist Superman wall poster capturing the quiet strength and emotional depth of the Man of Steel with a clean red-and-white composition.",

    highlights: [
      "Elegant minimalist superhero artwork",
      "Strong emotional & cinematic tone",
      "Fade-resistant premium inks",
      "Perfect for modern interiors",
      "Ideal for Superman fans"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "SUP-A4", size: "A4", price: 99, stock: 30 },
      { variantId: "SUP-A5", size: "A4", price: 69, stock: 30 },
      { variantId: "SUP-A3", size: "A3", price: 179, stock: 45 }
    ],

    inventory: {
      totalStock: 75,
      stockStatus: "in_stock",
      lowStockThreshold: 8
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168184/superman_yrn6p2.webp",
      images: [
        "superman_minimalist_1.jpg",
        "superman_minimalist_2.jpg"
      ]
    },

    tags: [
      "superman poster",
      "minimalist superhero poster",
      "dc superman wall art",
      "hope wall art",
      "clean aesthetic poster"
    ],

    seo: {
      metaTitle: "Superman Minimalist Poster | DC Hope Wall Art",
      metaDescription:
        "Buy Superman minimalist wall poster inspired by the Man of Steel.",
      keywords: [
        "superman poster",
        "minimalist superman wall art"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.28,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 4.9,
    reviewsCount: 121,

    copyrightNote:
      "Fan-made artwork inspired by Superman. Not official DC Comics merchandise.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },

  {
    id: "prd-series-strangerthings-001",
    name: "Stranger Things Steve Harrington Wall Poster",
    slug: "stranger-things-steve-harrington-wall-poster",
    sku: "PST-SER-ST-001",

    category: "Posters",

    collections: {
      franchise: "Series",
      series: "Stranger Things",
      platform: "Netflix",
      character: "Steve Harrington"
    },

    themes: [
      "TV Series",
      "Retro",
      "Horror",
      "Mystery",
      "Cinematic",
      "Nostalgia",
      "Pop Culture",
      "Dark Aesthetic"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    shortDescription:
      "Cinematic Stranger Things wall poster featuring Steve Harrington.",

    description:
      "A premium Stranger Things wall poster inspired by the iconic Netflix series, featuring Steve Harrington in a dramatic retro horror aesthetic.",

    highlights: [
      "High-resolution cinematic artwork",
      "Retro horror & 80s aesthetic",
      "Fade-resistant premium inks",
      "Perfect for bedrooms & entertainment rooms",
      "Must-have for Stranger Things fans"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "ST-A4", size: "A4", price: 99, stock: 35 },
      { variantId: "ST-A5", size: "A5", price: 69, stock: 35 },
      { variantId: "ST-A3", size: "A3", price: 179, stock: 50 }
    ],

    inventory: {
      totalStock: 85,
      stockStatus: "in_stock",
      lowStockThreshold: 8
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168183/st_s6xxzf.webp",
      images: [
        "stranger_things_steve_1.jpg",
        "stranger_things_steve_2.jpg"
      ]
    },

    tags: [
      "stranger things poster",
      "steve harrington wall art",
      "netflix series poster",
      "retro horror wall art"
    ],

    seo: {
      metaTitle: "Stranger Things Poster | Steve Harrington Wall Art",
      metaDescription:
        "Buy Stranger Things wall poster featuring Steve Harrington.",
      keywords: [
        "stranger things poster",
        "steve harrington wall art"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.3,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 4.9,
    reviewsCount: 189,

    copyrightNote:
      "Fan-made artwork inspired by Stranger Things. Not official Netflix merchandise.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: false
  },


  {
    id: "prd-movie-cars-001",
    name: "Lightning McQueen Racing Wall Poster",
    slug: "lightning-mcqueen-racing-wall-poster",
    sku: "PST-MOV-CARS-001",

    category: "Posters",

    collections: {
      franchise: "Movies",
      series: "Cars",
      studio: "Pixar",
      character: "Lightning McQueen"
    },

    themes: [
      "Animation",
      "Racing",
      "Speed",
      "Motorsport",
      "Action",
      "Kids",
      "Nostalgia",
      "Cinematic"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    shortDescription:
      "High-energy Lightning McQueen racing wall poster inspired by Pixar’s Cars.",

    description:
      "A dynamic Lightning McQueen wall poster capturing speed and competition, perfect for kids’ rooms and racing fans.",

    highlights: [
      "High-resolution racing artwork",
      "Dynamic speed & motion effect",
      "Fade-resistant premium inks",
      "Perfect for kids rooms",
      "Great gift for Cars fans"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "CARS-A4", size: "A4", price: 99, stock: 45 },
      { variantId: "CARS-A5", size: "A5", price: 69, stock: 45 },
      { variantId: "CARS-A3", size: "A3", price: 179, stock: 60 }
    ],

    inventory: {
      totalStock: 105,
      stockStatus: "in_stock",
      lowStockThreshold: 12
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769085902/products/rvzrdxafrfrxdeuumudi.webp",
      images: [
        "lightning_mcqueen_racing_1.jpg",
        "lightning_mcqueen_racing_2.jpg"
      ]
    },

    tags: [
      "lightning mcqueen poster",
      "pixar cars wall art",
      "kids racing poster",
      "animation wall art"
    ],

    seo: {
      metaTitle: "Lightning McQueen Poster | Pixar Cars Racing Wall Art",
      metaDescription:
        "Buy Lightning McQueen racing wall poster inspired by Pixar’s Cars.",
      keywords: [
        "lightning mcqueen poster",
        "pixar cars wall art"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.28,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 4.8,
    reviewsCount: 134,

    copyrightNote:
      "Fan-made artwork inspired by Pixar’s Cars. Not official Disney or Pixar merchandise.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },

  {
    id: "prd-series-got-001",
    name: "Game of Thrones Battle of Kings Wall Poster",
    slug: "game-of-thrones-battle-of-kings-wall-poster",
    sku: "PST-SER-GOT-001",

    category: "Posters",

    collections: {
      franchise: "Game of Thrones",
      series: "Game of Thrones",
      platform: "HBO",
      themeArc: "The War for the Iron Throne"
    },

    themes: [
      "TV Series",
      "Fantasy",
      "Dark",
      "Epic",
      "War",
      "Medieval",
      "Cinematic",
      "Minimalist Noir"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    shortDescription:
      "Dark and cinematic Game of Thrones wall poster symbolizing war, sacrifice, and the Iron Throne.",

    description:
      "A powerful Game of Thrones wall poster inspired by the epic battles of Westeros, featuring a monochrome battlefield aesthetic.",

    highlights: [
      "High-contrast cinematic artwork",
      "Dark medieval fantasy aesthetic",
      "Fade-resistant premium inks",
      "Perfect for offices & study rooms",
      "Must-have for Game of Thrones fans"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "GOT-A4", size: "A4", price: 99, stock: 30 },
      { variantId: "GOT-A5", size: "A5", price: 69, stock: 30 },
      { variantId: "GOT-A3", size: "A3", price: 179, stock: 45 }
    ],

    inventory: {
      totalStock: 75,
      stockStatus: "in_stock",
      lowStockThreshold: 8
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168177/got_qubowh.webp",
      images: [
        "game_of_thrones_battle_1.jpg",
        "game_of_thrones_battle_2.jpg"
      ]
    },

    tags: [
      "game of thrones poster",
      "got wall art",
      "hbo series poster",
      "fantasy wall art",
      "dark medieval poster"
    ],

    seo: {
      metaTitle: "Game of Thrones Poster | Epic Fantasy Wall Art",
      metaDescription:
        "Buy Game of Thrones wall poster inspired by the war for the Iron Throne.",
      keywords: [
        "game of thrones poster",
        "got wall art",
        "fantasy series wall decor"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.32,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 4.9,
    reviewsCount: 201,

    copyrightNote:
      "Fan-made artwork inspired by Game of Thrones. Not official HBO merchandise.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: false
  },


  {
    id: "prd-series-breakingbad-001",
    name: "Breaking Bad Sunset Silhouette Wall Poster",
    slug: "breaking-bad-sunset-silhouette-wall-poster",
    sku: "PST-SER-BB-001",

    category: "Posters",

    collections: {
      franchise: "Series",
      series: "Breaking Bad",
      platform: "AMC",
      themeArc: "Heisenberg Era"
    },

    themes: [
      "TV Series",
      "Crime",
      "Drama",
      "Dark",
      "Minimalist",
      "Cinematic",
      "Cult Classic",
      "Moody Aesthetic"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    shortDescription:
      "Minimalist Breaking Bad wall poster featuring a cinematic sunset silhouette.",

    description:
      "A premium Breaking Bad wall poster inspired by the iconic Heisenberg era with a minimalist sunset silhouette aesthetic.",

    highlights: [
      "Minimalist cinematic artwork",
      "Iconic Breaking Bad symbolism",
      "Warm sunset color palette",
      "Fade-resistant premium inks",
      "Perfect for offices & study rooms"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "BB-A4", size: "A4", price: 99, stock: 30 },
      { variantId: "BB-A5", size: "A5", price: 69, stock: 30 },
      { variantId: "BB-A3", size: "A3", price: 179, stock: 45 }
    ],

    inventory: {
      totalStock: 75,
      stockStatus: "in_stock",
      lowStockThreshold: 8
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168177/breaking_sbzduc.webp",
      images: [
        "breaking_bad_sunset_1.jpg",
        "breaking_bad_sunset_2.jpg"
      ]
    },

    tags: [
      "breaking bad poster",
      "heisenberg wall art",
      "minimalist tv poster",
      "crime drama wall art"
    ],

    seo: {
      metaTitle: "Breaking Bad Poster | Sunset Silhouette Wall Art",
      metaDescription:
        "Buy Breaking Bad sunset silhouette wall poster inspired by the Heisenberg era.",
      keywords: [
        "breaking bad poster",
        "heisenberg wall art"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.32,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 5.0,
    reviewsCount: 248,

    copyrightNote:
      "Fan-made artwork inspired by Breaking Bad. Not official AMC merchandise.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: false
  },


  {
    id: "prd-movie-godfather-001",
    name: "The Godfather Classic Mafia Wall Poster",
    slug: "the-godfather-classic-mafia-wall-poster",
    sku: "PST-MOV-GF-001",

    category: "Posters",

    collections: {
      franchise: "Movies",
      series: "The Godfather",
      director: "Francis Ford Coppola",
      era: "Classic Cinema"
    },

    themes: [
      "Classic Cinema",
      "Crime",
      "Mafia",
      "Drama",
      "Power",
      "Dark",
      "Vintage",
      "Cinematic",
      "Minimalist Noir"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    shortDescription:
      "Iconic The Godfather wall poster capturing power, legacy, and classic mafia cinema.",

    description:
      "A legendary The Godfather wall poster inspired by one of the greatest films in cinema history.",

    highlights: [
      "Timeless classic cinema artwork",
      "Iconic mafia symbolism",
      "Dark premium aesthetic",
      "Fade-resistant archival-quality inks",
      "Perfect for framed displays"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "GF-A4", size: "A4", price: 99, stock: 25 },
      { variantId: "GF-A5", size: "A5", price: 69, stock: 25 },
      { variantId: "GF-A3", size: "A3", price: 179, stock: 40 }
    ],

    inventory: {
      totalStock: 65,
      stockStatus: "in_stock",
      lowStockThreshold: 6
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168179/godfather_ihn0rb.webp",
      images: [
        "the_godfather_classic_1.jpg",
        "the_godfather_classic_2.jpg"
      ]
    },

    tags: [
      "the godfather poster",
      "mafia movie wall art",
      "classic cinema poster",
      "dark noir wall art"
    ],

    seo: {
      metaTitle: "The Godfather Poster | Classic Mafia Wall Art",
      metaDescription:
        "Buy The Godfather classic wall poster inspired by Don Vito Corleone.",
      keywords: [
        "the godfather poster",
        "mafia movie wall art"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.35,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 5.0,
    reviewsCount: 312,

    copyrightNote:
      "Fan-made artwork inspired by The Godfather. Not official Paramount merchandise.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: false
  },


  {
    id: "prd-sports-cricket-001",
    name: "Indian Cricket Legend Motivation Wall Poster",
    slug: "indian-cricket-legend-motivation-wall-poster",
    sku: "PST-SPT-CRIC-001",

    category: "Posters",

    collections: {
      franchise: "Sports",
      sport: "Cricket",
      team: "India",
      themeArc: "Mindset & Determination"
    },

    themes: [
      "Sports",
      "Motivation",
      "Discipline",
      "Focus",
      "Mental Strength",
      "Inspirational",
      "Cinematic",
      "Minimalist"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    shortDescription:
      "Powerful Indian cricket motivation wall poster symbolizing belief and elite mindset.",

    description:
      "A cinematic Indian cricket motivation wall poster inspired by elite athletes and mental toughness.",

    highlights: [
      "High-impact motivational sports artwork",
      "Quote-driven cinematic design",
      "Fade-resistant premium inks",
      "Perfect for gyms & study rooms",
      "Ideal for sports lovers"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "CRIC-A4", size: "A4", price: 99, stock: 35 },
      { variantId: "CRIC-A5", size: "A5", price: 69, stock: 35 },
      { variantId: "CRIC-A3", size: "A3", price: 179, stock: 50 }
    ],

    inventory: {
      totalStock: 85,
      stockStatus: "in_stock",
      lowStockThreshold: 8
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168183/virat_doczfh.webp",
      images: [
        "indian_cricket_motivation_1.jpg",
        "indian_cricket_motivation_2.jpg"
      ]
    },

    tags: [
      "cricket motivation poster",
      "sports mindset wall art",
      "gym motivational poster",
      "discipline mindset decor"
    ],

    seo: {
      metaTitle: "Indian Cricket Motivation Poster | Sports Mindset Wall Art",
      metaDescription:
        "Buy Indian cricket motivation wall poster inspired by elite athlete mindset.",
      keywords: [
        "cricket motivation poster",
        "sports mindset wall art"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.33,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 5.0,
    reviewsCount: 267,

    copyrightNote:
      "Fan-made artwork inspired by Indian cricket culture.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },

  {
    id: "prd-sports-football-001",
    name: "Legendary Football GOAT Wall Poster",
    slug: "legendary-football-goat-wall-poster",
    sku: "PST-SPT-FTB-001",

    category: "Posters",

    collections: {
      franchise: "Sports",
      sport: "Football",
      leagueEra: "European Club Football",
      themeArc: "GOAT Mindset"
    },

    themes: [
      "Sports",
      "Football",
      "GOAT",
      "Confidence",
      "Leadership",
      "Discipline",
      "Motivation",
      "Cinematic",
      "Power Aesthetic"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    shortDescription:
      "High-impact football GOAT wall poster symbolizing confidence and elite mindset.",

    description:
      "A bold football wall poster inspired by legendary goal scorers and elite mentality.",

    highlights: [
      "Bold GOAT-themed football artwork",
      "High-contrast power aesthetic",
      "Elite mindset symbolism",
      "Fade-resistant premium inks",
      "Perfect for gyms & football fans"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "FTB-A4", size: "A4", price: 99, stock: 40 },
      { variantId: "FTB-A5", size: "A5", price: 69, stock: 40 },
      { variantId: "FTB-A3", size: "A3", price: 179, stock: 55 }
    ],

    inventory: {
      totalStock: 95,
      stockStatus: "in_stock",
      lowStockThreshold: 10
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168183/ronaldo_qfudic.webp",
      images: [
        "football_goat_1.jpg",
        "football_goat_2.jpg"
      ]
    },

    tags: [
      "football goat poster",
      "sports motivation wall art",
      "gym football poster",
      "elite athlete mindset"
    ],

    seo: {
      metaTitle: "Football GOAT Poster | Legendary Sports Wall Art",
      metaDescription:
        "Buy legendary football GOAT wall poster inspired by elite goal-scoring mindset.",
      keywords: [
        "football goat poster",
        "sports motivation wall art"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.34,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 5.0,
    reviewsCount: 301,

    copyrightNote:
      "Fan-made artwork inspired by football culture and legendary athletes.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },


  {
    id: "prd-spiritual-hanuman-001",
    name: "Lord Hanuman Strength & Bhakti Wall Poster",
    slug: "lord-hanuman-strength-bhakti-wall-poster",
    sku: "PST-SPR-HAN-001",

    category: "Posters",

    collections: {
      franchise: "Spiritual",
      deity: "Hanuman",
      tradition: "Hinduism",
      themeArc: "Strength, Bhakti & Protection"
    },

    themes: [
      "Spiritual",
      "Devotional",
      "Strength",
      "Faith",
      "Protection",
      "Courage",
      "Discipline",
      "Positive Energy",
      "Indian Art"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "original_artwork",

    shortDescription:
      "Powerful Lord Hanuman wall poster symbolizing strength, devotion, courage, and protection.",

    description:
      "A vibrant Lord Hanuman wall poster inspired by traditional Indian spiritual art.",

    highlights: [
      "Powerful Lord Hanuman illustration",
      "Symbol of strength & devotion",
      "Auspicious orange palette",
      "Fade-resistant premium inks",
      "Ideal for home & temple"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "HAN-A4", size: "A4", price: 99, stock: 50 },
      { variantId: "HAN-A5", size: "A5", price: 69, stock: 50 },
      { variantId: "HAN-A3", size: "A3", price: 179, stock: 65 }
    ],

    inventory: {
      totalStock: 115,
      stockStatus: "in_stock",
      lowStockThreshold: 12
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168179/hanuman_ozsd5l.webp",
      images: [
        "lord_hanuman_strength_1.jpg",
        "lord_hanuman_strength_2.jpg"
      ]
    },

    tags: [
      "lord hanuman poster",
      "hanuman wall art",
      "devotional wall poster",
      "spiritual strength poster"
    ],

    seo: {
      metaTitle: "Lord Hanuman Poster | Strength & Bhakti Wall Art",
      metaDescription:
        "Buy Lord Hanuman wall poster symbolizing strength, courage, and devotion.",
      keywords: [
        "lord hanuman poster",
        "hanuman wall art"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.3,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 5.0,
    reviewsCount: 418,

    copyrightNote:
      "Original devotional artwork inspired by Lord Hanuman.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },

  {
    id: "prd-sports-football-002",
    name: "Legendary No.10 Football Maestro Wall Poster",
    slug: "legendary-no10-football-maestro-wall-poster",
    sku: "PST-SPT-FTB-002",

    category: "Posters",

    collections: {
      franchise: "Sports",
      sport: "Football",
      clubEra: "European Club Football",
      themeArc: "Maestro & Playmaker Legacy"
    },

    themes: [
      "Sports",
      "Football",
      "Playmaker",
      "Maestro",
      "Legacy",
      "Creativity",
      "GOAT Debate",
      "Cinematic",
      "Vintage Modern"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    shortDescription:
      "Iconic No.10 football wall poster celebrating creativity, legacy, and maestro-level greatness.",

    description:
      "A premium football wall poster inspired by the legendary No.10 playmaker era.",

    highlights: [
      "Legendary No.10 playmaker theme",
      "Classic club color palette",
      "High-impact celebration artwork",
      "Fade-resistant premium inks",
      "Perfect for football lovers"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "FTB2-A4", size: "A4", price: 99, stock: 35 },
      { variantId: "FTB2-A5", size: "A5", price: 69, stock: 35 },
      { variantId: "FTB2-A3", size: "A3", price: 179, stock: 50 }
    ],

    inventory: {
      totalStock: 85,
      stockStatus: "in_stock",
      lowStockThreshold: 8
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168181/messi_n6sdei.webp",
      images: [
        "football_no10_maestro_1.jpg",
        "football_no10_maestro_2.jpg"
      ]
    },

    tags: [
      "no 10 football poster",
      "football maestro wall art",
      "playmaker legacy poster",
      "football creativity poster"
    ],

    seo: {
      metaTitle: "Legendary No.10 Football Poster | Maestro Wall Art",
      metaDescription:
        "Buy legendary No.10 football maestro wall poster inspired by elite playmaker legacy.",
      keywords: [
        "no 10 football poster",
        "football maestro wall art"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.34,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 5.0,
    reviewsCount: 342,

    copyrightNote:
      "Fan-made artwork inspired by football culture and legendary playmakers.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },


  {
    id: "prd-spiritual-krishna-001",
    name: "Lord Krishna Divine Flute Art Wall Poster",
    slug: "lord-krishna-divine-flute-art-wall-poster",
    sku: "PST-SPR-KRS-001",

    category: "Posters",

    collections: {
      franchise: "Spiritual",
      deity: "Krishna",
      tradition: "Hinduism",
      themeArc: "Divine Leela, Peace & Harmony"
    },

    themes: [
      "Spiritual",
      "Devotional",
      "Divine Love",
      "Peace",
      "Harmony",
      "Artistic",
      "Calming",
      "Indian Mythology"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "original_artwork",

    shortDescription:
      "Premium Lord Krishna wall poster symbolizing peace, love, and divine harmony.",

    description:
      "An exquisite Lord Krishna wall poster inspired by classical Indian art and divine symbolism.",

    highlights: [
      "Gallery-grade Krishna illustration",
      "Symbol of peace & harmony",
      "Premium color palette",
      "Fade-resistant archival inks",
      "Perfect for meditation spaces"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "KRS-A4", size: "A4", price: 99, stock: 40 },
      { variantId: "KRS-A5", size: "A5", price: 69, stock: 40 },
      { variantId: "KRS-A3", size: "A3", price: 179, stock: 55 }
    ],

    inventory: {
      totalStock: 95,
      stockStatus: "in_stock",
      lowStockThreshold: 10
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168181/krishna_eis7yw.webp",
      images: [
        "lord_krishna_divine_flute_1.jpg",
        "lord_krishna_divine_flute_2.jpg"
      ]
    },

    tags: [
      "lord krishna poster",
      "krishna flute wall art",
      "spiritual krishna painting",
      "devotional wall decor"
    ],

    seo: {
      metaTitle: "Lord Krishna Poster | Divine Flute Spiritual Wall Art",
      metaDescription:
        "Buy premium Lord Krishna wall poster symbolizing peace, love, and harmony.",
      keywords: [
        "lord krishna poster",
        "krishna flute wall art"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.34,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 5.0,
    reviewsCount: 389,

    copyrightNote:
      "Original devotional artwork inspired by Lord Krishna.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },


  {
    id: "prd-auto-bmw-001",
    name: "BMW M Motorsport Racing Wall Poster",
    slug: "bmw-m-motorsport-racing-wall-poster",
    sku: "PST-AUTO-BMW-001",

    category: "Posters",

    collections: {
      franchise: "Automotive",
      brand: "BMW",
      subBrand: "BMW M",
      motorsport: "GT / Racing",
      series: "M Performance"
    },

    themes: [
      "Automotive",
      "Motorsport",
      "Racing",
      "Luxury Cars",
      "Performance",
      "Speed",
      "German Engineering",
      "Car Enthusiast",
      "Garage Decor"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art_inspired",

    shortDescription:
      "High-performance BMW M Motorsport wall poster featuring a bold racing design inspired by track dominance and precision engineering.",

    description:
      "A striking BMW M Motorsport wall poster inspired by high-speed racing culture and German performance engineering.",

    highlights: [
      "Iconic BMW M racing stripes design",
      "Aggressive motorsport front profile",
      "Premium automotive wall decor",
      "Fade-resistant HD printing",
      "Perfect for garages & gaming rooms"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "BMW-A4", size: "A4", price: 99, stock: 35 },
      { variantId: "BMW-A5", size: "A5", price: 69, stock: 35 },
      { variantId: "BMW-A3", size: "A3", price: 179, stock: 50 }
    ],

    inventory: {
      totalStock: 85,
      stockStatus: "In Stock",
      lowStockThreshold: 10
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168177/bmw_cu8n7e.webp",
      images: [
        "bmw_m_motorsport_1.jpg",
        "bmw_m_motorsport_2.jpg"
      ]
    },

    tags: [
      "bmw poster",
      "bmw m poster",
      "bmw motorsport wall art",
      "luxury car wall decor"
    ],

    seo: {
      metaTitle: "BMW M Motorsport Poster | Racing Car Wall Art",
      metaDescription:
        "Buy premium BMW M Motorsport wall poster inspired by high-performance racing.",
      keywords: ["bmw m poster", "bmw racing wall art"]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.36,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 4.9,
    reviewsCount: 212,

    copyrightNote:
      "Fan-art inspired automotive artwork. BMW trademarks belong to their respective owners.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: false
  },


  {
    id: "prd-auto-porsche-001",
    name: "Porsche 911 GT3 RS Motorsport Wall Poster",
    slug: "porsche-911-gt3-rs-motorsport-wall-poster",
    sku: "PST-AUTO-POR-911RS-001",

    category: "Posters",

    collections: {
      franchise: "Automotive",
      brand: "Porsche",
      model: "911",
      variant: "GT3 RS",
      segment: "Track-Focused Supercar",
      series: "Motorsport Collection"
    },

    themes: [
      "Automotive",
      "Motorsport",
      "Track Performance",
      "Luxury Cars",
      "Precision Engineering",
      "German Engineering",
      "Supercar"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art_inspired",

    shortDescription:
      "Minimal motorsport-inspired Porsche 911 GT3 RS wall poster showcasing track-focused performance.",

    description:
      "A premium Porsche 911 GT3 RS wall poster inspired by motorsport discipline and precision engineering.",

    highlights: [
      "Iconic Porsche GT3 RS profile",
      "Motorsport-inspired minimal design",
      "Premium automotive aesthetic",
      "Fade-resistant HD printing",
      "Perfect for luxury garages"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "POR-911RS-A4", size: "A4", price: 99, stock: 30 },
      { variantId: "POR-911RS-A5", size: "A5", price: 69, stock: 30 },
      { variantId: "POR-911RS-A3", size: "A3", price: 179, stock: 45 }
    ],

    inventory: {
      totalStock: 75,
      stockStatus: "In Stock",
      lowStockThreshold: 8
    },

    media: {
      thumbnail: 'https://res.cloudinary.com/dal56whd6/image/upload/v1769168181/porsche_yj96c4.webp',
      images: [
        "porsche_911_gt3_rs_1.jpg",
        "porsche_911_gt3_rs_2.jpg"
      ]
    },

    tags: [
      "porsche gt3 rs poster",
      "porsche motorsport wall art",
      "supercar poster"
    ],

    seo: {
      metaTitle: "Porsche 911 GT3 RS Poster | Motorsport Wall Art",
      metaDescription:
        "Premium Porsche 911 GT3 RS motorsport wall poster for car enthusiasts.",
      keywords: ["porsche gt3 rs poster"]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.38,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 4.9,
    reviewsCount: 164,

    copyrightNote:
      "Fan-art inspired automotive artwork. Porsche trademarks belong to their respective owners.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: false
  },



  {
    id: "prd-auto-dodge-001",
    name: "Dodge Challenger SRT American Muscle Wall Poster",
    slug: "dodge-challenger-srt-american-muscle-wall-poster",
    sku: "PST-AUTO-DOD-SRT-001",

    category: "Posters",

    collections: {
      franchise: "Automotive",
      brand: "Dodge",
      model: "Challenger",
      variant: "SRT",
      segment: "American Muscle"
    },

    themes: [
      "Automotive",
      "American Muscle",
      "Power",
      "Performance",
      "V8 Culture",
      "Street Racing"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art_inspired",

    shortDescription:
      "Bold Dodge Challenger SRT wall poster showcasing raw American muscle and power.",

    description:
      "A high-impact Dodge Challenger SRT wall poster inspired by raw American muscle culture.",

    highlights: [
      "Aggressive muscle stance",
      "Dark American muscle aesthetic",
      "Premium automotive wall decor",
      "Fade-resistant HD print",
      "Perfect for garages"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "DOD-SRT-A4", size: "A4", price: 99, stock: 40 },
      { variantId: "DOD-SRT-A5", size: "A5", price: 69, stock: 40 },
      { variantId: "DOD-SRT-A3", size: "A3", price: 179, stock: 60 }
    ],

    inventory: {
      totalStock: 100,
      stockStatus: "In Stock",
      lowStockThreshold: 12
    },

    media: {
      thumbnail: 'https://res.cloudinary.com/dal56whd6/image/upload/v1769168181/srt_gtocqh.webp',
      images: [
        "dodge_challenger_srt_1.jpg",
        "dodge_challenger_srt_2.jpg"
      ]
    },

    tags: [
      "dodge challenger poster",
      "american muscle wall art",
      "v8 muscle poster"
    ],

    seo: {
      metaTitle: "Dodge Challenger SRT Poster | American Muscle Wall Art",
      metaDescription:
        "Buy premium Dodge Challenger SRT wall poster inspired by American muscle.",
      keywords: ["dodge challenger srt poster"]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.4,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 4.8,
    reviewsCount: 143,

    copyrightNote:
      "Fan-art inspired automotive artwork. Dodge trademarks belong to their respective owners.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: false
  },


  {
    id: "prd-superhero-thor-001",
    name: "Thor God of Thunder Cinematic Wall Poster",
    slug: "thor-god-of-thunder-cinematic-wall-poster",
    sku: "PST-MAR-THR-001",

    category: "Posters",

    collections: {
      franchise: "Marvel",
      character: "Thor",
      universe: "MCU"
    },

    themes: [
      "Superhero",
      "Marvel",
      "Cinematic",
      "Mythology",
      "Power",
      "Dark Aesthetic"
    ],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art_inspired",

    shortDescription:
      "Cinematic Thor wall poster capturing the God of Thunder in a powerful moment.",

    description:
      "A premium cinematic Thor wall poster inspired by Norse mythology and MCU visuals.",

    highlights: [
      "Cinematic Thor artwork",
      "Dark premium Marvel aesthetic",
      "Inspired by MCU visuals",
      "Fade-resistant HD print",
      "Perfect for gaming rooms"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "THR-A4", size: "A4", price: 99, stock: 45 },
      { variantId: "THR-A5", size: "A5", price: 69, stock: 45 },
      { variantId: "THR-A3", size: "A3", price: 179, stock: 65 }
    ],

    inventory: {
      totalStock: 110,
      stockStatus: "In Stock",
      lowStockThreshold: 12
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168182/thor_wgzxg5.webp",
      images: [
        "thor_cinematic_1.jpg",
        "thor_cinematic_2.jpg"
      ]
    },

    tags: [
      "thor poster",
      "god of thunder wall art",
      "marvel cinematic poster"
    ],

    seo: {
      metaTitle: "Thor Poster | God of Thunder Cinematic Wall Art",
      metaDescription:
        "Buy premium Thor cinematic wall poster inspired by MCU.",
      keywords: ["thor poster", "marvel thor wall art"]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.35,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 4.9,
    reviewsCount: 276,

    copyrightNote:
      "Fan-art inspired superhero artwork. Marvel trademarks belong to their respective owners.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: false
  },


  {
    id: "prd-series-friends-001",
    name: "FRIENDS Iconic Sitcom Cast Wall Poster",
    slug: "friends-iconic-sitcom-cast-wall-poster",
    sku: "PST-SER-FRD-001",

    category: "Posters",

    collections: {
      franchise: "Series",
      series: "Friends",
      genre: "Sitcom",
      era: "90s Classics"
    },

    themes: [
      "TV Series",
      "Nostalgia",
      "Friendship",
      "Pop Culture",
      "Comfort Shows"
    ],

    brand: "pragyaprint",
    artistName: "Curated Pop Culture Collection",
    licenseType: "fan_art_inspired",

    shortDescription:
      "Classic FRIENDS sitcom wall poster celebrating friendship and nostalgia.",

    description:
      "A timeless FRIENDS wall poster featuring the iconic sitcom cast.",

    highlights: [
      "Iconic FRIENDS cast imagery",
      "Warm nostalgic vibe",
      "Perfect comfort-show decor",
      "Fade-resistant HD print",
      "Ideal for bedrooms & cafés"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "FRD-A4", size: "A4", price: 99, stock: 70 },
      { variantId: "FRD-A5", size: "A5", price: 69, stock: 70 },
      { variantId: "FRD-A3", size: "A3", price: 179, stock: 90 }
    ],

    inventory: {
      totalStock: 160,
      stockStatus: "In Stock",
      lowStockThreshold: 15
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168180/friends_c8ro4d.webp",
      images: [
        "friends_cast_1.jpg",
        "friends_cast_2.jpg"
      ]
    },

    tags: [
      "friends poster",
      "friends sitcom wall art",
      "nostalgia tv poster"
    ],

    seo: {
      metaTitle: "FRIENDS Poster | Iconic Sitcom Wall Art",
      metaDescription:
        "Buy classic FRIENDS wall poster featuring the iconic sitcom cast.",
      keywords: ["friends poster", "friends tv show wall art"]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.33,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 4.9,
    reviewsCount: 412,

    copyrightNote:
      "Fan-art inspired TV series artwork. FRIENDS trademarks belong to their owners.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: false
  },


  {
    id: "prd-gaming-kratos-001",
    name: "Kratos God of War Dark Legend Wall Poster",
    slug: "kratos-god-of-war-dark-legend-wall-poster",
    sku: "PST-GAM-GOW-KRT-001",

    category: "Posters",

    collections: {
      franchise: "Gaming",
      game: "God of War",
      character: "Kratos",
      mythology: "Norse / Greek"
    },

    themes: [
      "Gaming",
      "Warrior",
      "Rage",
      "Redemption",
      "Dark Aesthetic",
      "Motivational"
    ],

    brand: "pragyaprint",
    artistName: "Curated Gaming Legends",
    licenseType: "fan_art_inspired",

    shortDescription:
      "Dark, powerful Kratos wall poster inspired by the God of War legacy.",

    description:
      "A fierce Kratos wall poster capturing rage, discipline, and unbreakable will from the God of War series.",

    highlights: [
      "Iconic Kratos portrait design",
      "Legendary God of War quote",
      "Dark warrior aesthetic",
      "Fade-resistant HD print",
      "Perfect for gaming rooms"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Glossy"]
    },

    variants: [
      { variantId: "KRT-A4", size: "A4", price: 99, stock: 50 },
      { variantId: "KRT-A5", size: "A5", price: 69, stock: 50 },
      { variantId: "KRT-A3", size: "A3", price: 179, stock: 70 }
    ],

    inventory: {
      totalStock: 120,
      stockStatus: "In Stock",
      lowStockThreshold: 12
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168178/godofwar_pnqkk7.webp",
      images: [
        "kratos_god_of_war_1.jpg",
        "kratos_god_of_war_2.jpg"
      ]
    },

    tags: [
      "kratos poster",
      "god of war wall art",
      "gaming room poster",
      "dark warrior poster"
    ],

    seo: {
      metaTitle: "Kratos Poster | God of War Dark Wall Art",
      metaDescription:
        "Buy Kratos God of War wall poster with dark warrior aesthetics.",
      keywords: ["kratos poster", "god of war wall art"]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.36,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 5.0,
    reviewsCount: 331,

    copyrightNote:
      "Fan-art inspired gaming artwork. God of War trademarks belong to their owners.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: false
  },


  {
    id: "prd-movie-interstellar-stay-001",
    name: "STAY – Interstellar Inspired Minimal Wall Poster",
    slug: "stay-interstellar-minimal-wall-poster",
    sku: "PST-MOV-INT-STAY-001",

    category: "Posters",

    collections: {
      franchise: "Movies",
      genre: "Science Fiction",
      style: "Minimal",
      inspiration: "Interstellar"
    },

    themes: [
      "Space",
      "Time",
      "Minimalism",
      "Emotional",
      "Cinematic"
    ],

    brand: "pragyaprint",
    artistName: "Cinematic Minimal Series",
    licenseType: "fan_art_inspired",

    shortDescription:
      "Minimal Interstellar-inspired poster featuring the iconic word ‘STAY’.",

    description:
      "A calm, emotionally powerful wall poster inspired by Interstellar and the concept of love transcending time.",

    highlights: [
      "Minimal cinematic typography",
      "Subtle sci-fi symbolism",
      "Calming aesthetic",
      "Perfect for study rooms",
      "Non-distracting wall decor"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte"]
    },

    variants: [
      { variantId: "STAY-A4", size: "A4", price: 99, stock: 40 },
      { variantId: "STAY-A5", size: "A5", price: 69, stock: 40 },
      { variantId: "STAY-A3", size: "A3", price: 179, stock: 60 }
    ],

    inventory: {
      totalStock: 100,
      stockStatus: "In Stock",
      lowStockThreshold: 10
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168179/interstellar_qv3d1i.webp",
      images: [
        "stay_interstellar_1.jpg",
        "stay_interstellar_2.jpg"
      ]
    },

    tags: [
      "interstellar poster",
      "stay poster",
      "minimal sci fi wall art",
      "aesthetic movie poster"
    ],

    seo: {
      metaTitle: "STAY Interstellar Poster | Minimal Sci-Fi Wall Art",
      metaDescription:
        "Buy minimalist Interstellar-inspired STAY wall poster.",
      keywords: ["stay interstellar poster", "minimal sci fi poster"]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.25,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 4.8,
    reviewsCount: 92,

    copyrightNote:
      "Fan-art inspired cinematic artwork. Interstellar trademarks belong to their owners.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },


  {
    id: "prd-hp-silhouette-001",
    name: "Harry Potter Silhouette – Philosopher’s Stone Wall Poster",
    slug: "harry-potter-silhouette-philosophers-stone-poster",
    sku: "PST-HP-SIL-001",

    category: "Posters",

    collections: {
      franchise: "Harry Potter",
      universe: "Wizarding World",
      series: "Philosopher’s Stone"
    },

    themes: [
      "Fantasy",
      "Magic",
      "Nostalgia",
      "Cinematic",
      "Dark Academia"
    ],

    brand: "pragyaprint",
    artistName: "Wizarding Silhouette Collection",
    licenseType: "fan_art_inspired",

    shortDescription:
      "Cinematic Harry Potter silhouette poster featuring Hogwarts.",

    description:
      "A minimalist Harry Potter wall poster capturing the magic and nostalgia of the wizarding world.",

    highlights: [
      "Iconic Harry Potter silhouette",
      "Hogwarts night scene",
      "Magical cinematic vibe",
      "Perfect for study rooms",
      "Loved by Potterheads"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Matte", "Premium Matte"]
    },

    variants: [
      { variantId: "HP-A4", size: "A4", price: 99, stock: 40 },
      { variantId: "HP-A5", size: "A5", price: 69, stock: 40 },
      { variantId: "HP-A3", size: "A3", price: 179, stock: 50 }
    ],

    inventory: {
      totalStock: 120,
      stockStatus: "In Stock",
      lowStockThreshold: 10
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168179/hp_rpbani.webp",
      images: [
        "harry_potter_silhouette_1.jpg",
        "harry_potter_silhouette_2.jpg"
      ]
    },

    tags: [
      "harry potter poster",
      "hogwarts wall art",
      "wizarding world poster"
    ],

    seo: {
      metaTitle: "Harry Potter Silhouette Poster | Hogwarts Wall Art",
      metaDescription:
        "Buy Harry Potter silhouette wall poster featuring Hogwarts.",
      keywords: ["harry potter silhouette poster"]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.3,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 4.9,
    reviewsCount: 156,

    copyrightNote:
      "Fan-art inspired artwork. Harry Potter trademarks belong to their owners.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: false
  },


  {
    id: "prd-potc-black-pearl-001",
    name: "Pirates of the Caribbean – Curse of the Black Pearl Wall Poster",
    slug: "pirates-of-the-caribbean-curse-of-the-black-pearl-poster",
    sku: "PST-POTC-BP-001",

    category: "Posters",

    collections: {
      franchise: "Movies",
      series: "Pirates of the Caribbean"
    },

    themes: [
      "Adventure",
      "Pirates",
      "Dark",
      "Cinematic"
    ],

    brand: "pragyaprint",
    artistName: "Cinematic Legends Collection",
    licenseType: "fan_art_inspired",

    shortDescription:
      "Classic cinematic Pirates of the Caribbean wall poster.",

    description:
      "A dark, adventurous wall poster inspired by Curse of the Black Pearl.",

    highlights: [
      "Iconic Jack Sparrow artwork",
      "Classic pirate cinema vibe",
      "Dark adventure aesthetic",
      "Perfect for movie rooms",
      "Hollywood classic"
    ],

    pricing: {
      basePrice: 159,
      salePrice: 99,
      discountPercentage: 38,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Glossy", "Premium Matte"]
    },

    variants: [
      { variantId: "POTC-A4", size: "A4", price: 99, stock: 35 },
      { variantId: "POTC-A5", size: "A5", price: 69, stock: 35 },
      { variantId: "POTC-A3", size: "A3", price: 179, stock: 45 }
    ],

    inventory: {
      totalStock: 120,
      stockStatus: "In Stock",
      lowStockThreshold: 10
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168181/potc_hlihxn.webp",
      images: [
        "pirates_black_pearl_1.jpg",
        "pirates_black_pearl_2.jpg"
      ]
    },

    tags: [
      "pirates of the caribbean poster",
      "jack sparrow wall art",
      "pirate movie poster"
    ],

    seo: {
      metaTitle: "Pirates of the Caribbean Poster | Black Pearl Wall Art",
      metaDescription:
        "Buy Pirates of the Caribbean wall poster inspired by Black Pearl.",
      keywords: ["pirates of the caribbean poster"]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.35,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 4.8,
    reviewsCount: 142,

    copyrightNote:
      "Fan-art inspired artwork. Pirates of the Caribbean trademarks belong to their owners.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: false
  },


  {
    id: "prd-fast-furious-7-001",
    name: "Fast & Furious 7 Cinematic Wall Poster",
    slug: "fast-and-furious-7-cinematic-poster",
    sku: "PST-FF7-001",

    category: "Posters",

    collections: {
      franchise: "Movies",
      universe: "Fast Saga",
      genre: "Action",
      series: "Fast & Furious 7"
    },

    themes: [
      "Action",
      "Speed",
      "Brotherhood",
      "Emotional",
      "Cinematic"
    ],

    brand: "pragyaprint",
    artistName: "Action Legends Collection",
    licenseType: "fan_art_inspired",

    shortDescription:
      "A cinematic Fast & Furious 7 wall poster capturing the power, unity, and emotion of the Fast Saga.",

    description:
      "This Fast & Furious 7 poster showcases the legendary crew standing together — a symbol of speed, loyalty, and brotherhood. Perfect for car lovers, action movie fans, and man-cave setups.",

    highlights: [
      "Fast & Furious 7 cinematic artwork",
      "Symbol of brotherhood & loyalty",
      "Minimal Hollywood action aesthetic",
      "Perfect for car lovers & action fans",
      "Ideal for gaming rooms & man caves"
    ],

    pricing: {
      basePrice: 159,
      salePrice: 99,
      discountPercentage: 38,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Glossy", "Premium Matte"]
    },

    variants: [
      { variantId: "FF7-A4", size: "A4", price: 99, stock: 40 },
      { variantId: "FF7-A3", size: "A3", price: 179, stock: 45 },
      { variantId: "FF7-A5", size: "A5", price: 69, stock: 50 }
    ],

    inventory: {
      totalStock: 135,
      stockStatus: "In Stock",
      lowStockThreshold: 10
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168178/fnf_yrybn0.webp",
      images: [
        "fast_furious_7_1.jpg",
        "fast_furious_7_2.jpg"
      ]
    },

    tags: [
      "fast and furious poster",
      "fast and furious 7 wall art",
      "fast saga poster",
      "paul walker tribute poster",
      "vin diesel poster",
      "action movie wall decor",
      "car movie poster",
      "man cave wall art"
    ],

    seo: {
      metaTitle: "Fast & Furious 7 Poster | Fast Saga Wall Art",
      metaDescription:
        "Buy Fast & Furious 7 cinematic wall poster inspired by the legendary Fast Saga.",
      keywords: [
        "fast and furious poster",
        "fast saga wall art",
        "fast and furious 7 poster"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.35,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 4.9,
    reviewsCount: 168,

    copyrightNote:
      "Fan-art inspired artwork. Fast & Furious trademarks belong to their respective owners.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: false
  },


  {
    id: "prd-toy-story-3-001",
    name: "Toy Story 3 Pixar Animated Wall Poster",
    slug: "toy-story-3-pixar-animated-poster",
    sku: "PST-TS3-001",

    category: "Posters",

    collections: {
      franchise: "Movies",
      universe: "Pixar",
      genre: "Animation",
      series: "Toy Story 3"
    },

    themes: [
      "Family",
      "Nostalgia",
      "Joyful",
      "Colorful",
      "Wholesome"
    ],

    brand: "pragyaprint",
    artistName: "Pixar Classics Collection",
    licenseType: "fan_art_inspired",

    shortDescription:
      "A vibrant Toy Story 3 wall poster featuring Woody, Buzz Lightyear, and the iconic Pixar gang.",

    description:
      "This Toy Story 3 poster captures the heart and humor of Pixar’s beloved classic. Perfect for kids’ rooms, family spaces, and nostalgic Pixar fans of all ages.",

    highlights: [
      "Toy Story 3 inspired artwork",
      "Bright, colorful Pixar animation style",
      "Perfect for kids’ bedrooms & play areas",
      "Nostalgic Pixar classic",
      "Great gift for Disney & animation fans"
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33,
      currency: "INR",
      isTaxable: true
    },

    options: {
      size: ["A4", "A5", "A3"],
      paperType: ["Glossy", "Premium Matte"]
    },

    variants: [
      { variantId: "TS3-A4", size: "A4", price: 99, stock: 50 },
      { variantId: "TS3-A5", size: "A5", price: 69, stock: 55 },
      { variantId: "TS3-A3", size: "A3", price: 179, stock: 60 }
    ],

    inventory: {
      totalStock: 165,
      stockStatus: "In Stock",
      lowStockThreshold: 15
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769168185/toystory_ts1dvn.webp",
      images: [
        "toy_story_3_1.jpg",
        "toy_story_3_2.jpg"
      ]
    },

    tags: [
      "toy story poster",
      "toy story 3 wall art",
      "pixar animation poster",
      "kids room wall decor",
      "disney pixar wall art",
      "animated movie poster"
    ],

    seo: {
      metaTitle: "Toy Story 3 Poster | Pixar Animated Wall Art",
      metaDescription:
        "Buy Toy Story 3 Pixar animated wall poster featuring Woody & Buzz.",
      keywords: [
        "toy story poster",
        "toy story 3 wall art",
        "pixar animated poster"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.3,
      dimensions: { width: 18, height: 24, depth: 0.1 },
      shippingClass: "small_tube"
    },

    rating: 4.9,
    reviewsCount: 210,

    copyrightNote:
      "Fan-art inspired artwork. Toy Story and Pixar characters are trademarks of their respective owners.",

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: false
  },


];


export const NOTEBOOKS = [
  {
    id: "nb-mat-001",
    name: "Mathematics Study Notebook",
    slug: "mathematics-study-notebook",
    sku: "NB-MAT-001",

    productType: "notebook",
    category: "Notebooks",
    subCategory: "Single",
    collections: {
      franchise: "Minimal",
    },

    subjectTheme: "Mathematics",
    designTheme: "Minimal Academic",

    brand: "pragyaprint",
    series: "Science Series",

    shortDescription:
      "A4 mathematics notebook with a clean academic design for problem solving and practice.",

    description:
      "An A4  notebook designed for mathematics students. The cover features calculator icons, geometric diagrams, formulas, and a modern academic layout, making it ideal for daily problem solving, rough work, and structured note-taking for school and competitive exams.",

    highlights: [
      "Subject-specific Mathematics cover design",
      "Clean academic blue theme",
      "Large A4 size for step-by-step solutions",
      "Smooth pages for calculations and graphs",
      "Strong  binding for durability"
    ],

    options: {
      pages: [120, 160, 200, 240, 300, 400],
      rulingType: ["Ruled", "Unruled"]
    },

    variants: [
      { variantId: "NB-MAT-120", pages: 120, price: 99, stock: 150 },
      { variantId: "NB-MAT-160", pages: 160, price: 109, stock: 150 },
      { variantId: "NB-MAT-200", pages: 200, price: 119, stock: 120 },
      { variantId: "NB-MAT-240", pages: 240, price: 139, stock: 120 },
      { variantId: "NB-MAT-300", pages: 300, price: 149, stock: 120 },
      { variantId: "NB-MAT-400", pages: 400, price: 179, stock: 120 }
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      size: "A4",
      paperGSM: 60,
      bindingType: "",
      coverFinish: "Matte",
      orientation: "portrait"
    },

    relatedCombos: ["pcm-combo-01"],

    inventory: {
      totalStock: 270,
      stockStatus: "in_stock",
      lowStockThreshold: 30
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1771594055/matematica--notebook-math-themed-stationery_fybt8o.webp",
      back: "notebook-back.webp",
      images: [
        "mathematics-notebook-inside.webp",
        "mathematics-notebook-binding.webp"
      ]
    },

    tags: [
      "mathematics notebook",
      "math notebook",
      "A4 notebook",
      "student notebook",
      "problem solving notebook"
    ],

    seo: {
      metaTitle: "Mathematics A4 Study Notebook for Students",
      metaDescription:
        "High-quality A4 mathematics notebook designed for calculations, formulas, and problem solving.",
      keywords: [
        "math notebook",
        "mathematics notebook",
        "A4 notebook",
        "student math notebook"
      ]
    },

    productionTime: "1–2 business days",

    shipping: {
      weight: 0.55,
      dimensions: {
        width: 21,
        height: 29.7,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.7,
    reviewsCount: 84,

    status: "active",
    visibility: "public",
    isFeatured: false,
    isNewArrival: true
  },
  {
    id: "nb-che-001",
    name: "Chemistry Study Notebook",
    slug: "chemistry-study-notebook",
    sku: "NB-CHE-001",

    productType: "notebook",
    category: "Notebooks",
    subCategory: "Single",
    collections: {
      franchise: "Minimal",
    },

    subjectTheme: "Chemistry",
    designTheme: "Floral Science",

    brand: "pragyaprint",
    series: "Science Series",

    shortDescription:
      "A4 chemistry notebook featuring a decorative science-themed cover for organized note-taking.",

    description:
      "An A4  notebook designed specifically for chemistry students. The cover combines laboratory illustrations, molecular structures, and subtle floral elements, making it both functional and visually appealing for daily study, practical notes, and exam preparation.",

    highlights: [
      "Subject-specific Chemistry cover design",
      "Attractive science illustrations with floral accents",
      "Large A4 size for formulas and reactions",
      "Smooth pages for comfortable writing",
      "Strong  binding for durability"
    ],

    options: {
      pages: [120, 160, 200, 240, 300, 400],
      rulingType: ["Ruled", "Unruled"]
    },

    variants: [
      { variantId: "NB-CHE-120", pages: 120, price: 99, stock: 150 },
      { variantId: "NB-CHE-160", pages: 160, price: 109, stock: 150 },
      { variantId: "NB-CHE-200", pages: 200, price: 119, stock: 120 },
      { variantId: "NB-CHE-240", pages: 240, price: 139, stock: 120 },
      { variantId: "NB-CHE-300", pages: 300, price: 149, stock: 120 },
      { variantId: "NB-CHE-400", pages: 400, price: 179, stock: 120 }
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      size: "A4",
      paperGSM: 60,
      bindingType: "",
      coverFinish: "Matte",
      orientation: "portrait"
    },

    relatedCombos: ["pcm-combo-01"],

    inventory: {
      totalStock: 270,
      stockStatus: "in_stock",
      lowStockThreshold: 30
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1771594052/chemistry-themed--notebook-desk-layout_i9xczf.webp",
      back: "notebook-back.webp",
      images: [
        "chemistry-notebook-inside.webp",
        "chemistry-notebook-binding.webp"
      ]
    },

    tags: [
      "chemistry notebook",
      "science notebook",
      "A4 notebook",
      "student notebook",
      "lab notebook"
    ],

    seo: {
      metaTitle: "Chemistry A4 Study Notebook for Students",
      metaDescription:
        "High-quality A4 chemistry notebook with science-themed cover. Ideal for school and college students.",
      keywords: [
        "chemistry notebook",
        "A4 science notebook",
        "student chemistry notebook",
        "lab notebook"
      ]
    },

    productionTime: "1–2 business days",

    shipping: {
      weight: 0.55,
      dimensions: {
        width: 21,
        height: 29.7,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.7,
    reviewsCount: 84,

    status: "active",
    visibility: "public",
    isFeatured: false,
    isNewArrival: true
  },
  {
    id: "nb-phy-001",
    name: "Physics Study Notebook",
    slug: "physics-study-notebook",
    sku: "NB-PHY-001",

    productType: "notebook",
    category: "Notebooks",
    subCategory: "Single",
    collections: {
      franchise: "Minimal",
    },

    subjectTheme: "Physics",
    designTheme: "Minimal",

    brand: "pragyaprint",
    series: "Science Series",

    shortDescription:
      "Durable A4 notebook designed for physics notes, formulas, and problem solving.",

    description:
      "Stay organized and focused with this A4 physics notebook crafted for clear note-taking, derivations, and numerical problem practice. Ideal for school and college students preparing for exams and daily coursework.",

    highlights: [
      "Large A4 size for comfortable writing",
      "Smooth high-quality pages",
      "Strong  binding",
      "Minimal distraction-free cover design",
      "Perfect for school & college use"
    ],

    options: {
      pages: [120, 160, 200, 240, 300, 400],
      rulingType: ["Ruled", "Unruled"]
    },

    variants: [
      { variantId: "NB-PHY-120", pages: 120, price: 99, stock: 150 },
      { variantId: "NB-PHY-160", pages: 160, price: 109, stock: 150 },
      { variantId: "NB-PHY-200", pages: 200, price: 119, stock: 120 },
      { variantId: "NB-PHY-240", pages: 240, price: 139, stock: 120 },
      { variantId: "NB-PHY-300", pages: 300, price: 149, stock: 120 },
      { variantId: "NB-PHY-400", pages: 400, price: 179, stock: 120 }
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      size: "A4",
      paperGSM: 60,
      bindingType: "",
      coverFinish: "Matte",
      orientation: "portrait"
    },

    relatedCombos: ["pcm-combo-01"],

    inventory: {
      totalStock: 270,
      stockStatus: "in_stock",
      lowStockThreshold: 30
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1771594057/physics-themed--notebook-on-desk_b8zfot.webp",
      back: "notebook-back.webp",
      images: [
        "physics-notebook-inside.webp",
        "physics-notebook-binding.webp"
      ]
    },

    tags: [
      "physics notebook",
      "student notebook",
      "A4 notebook",
      "science notebook",
      "study notebook"
    ],

    seo: {
      metaTitle: "Physics A4 Study Notebook for Students",
      metaDescription:
        "High-quality A4 physics notebook designed for clear notes and problem solving.",
      keywords: [
        "physics notebook",
        "A4 notebook",
        "science notebook",
        "student notebook"
      ]
    },

    productionTime: "1–2 business days",

    shipping: {
      weight: 0.55,
      dimensions: {
        width: 21,
        height: 29.7,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.7,
    reviewsCount: 84,

    status: "active",
    visibility: "public",
    isFeatured: false,
    isNewArrival: true
  },
  {
    id: "nb-gen-001",
    name: "Abstract Doodle Study Notebook",
    slug: "abstract-doodle-study-notebook",
    sku: "NB-GEN-001",

    productType: "notebook",
    category: "Notebooks",
    subCategory: "Single",
    collections: {
      franchise: "Minimal",
    },

    subjectTheme: "General",
    designTheme: "Abstract Doodle",

    brand: "pragyaprint",
    series: "Creative Series",

    shortDescription:
      "A4 notebook with a vibrant abstract doodle cover for everyday writing and notes.",

    description:
      "A versatile A4  notebook featuring a modern abstract doodle design. Perfect for school, college, office work, journaling, rough notes, or creative writing. The neutral theme makes it suitable for any subject or purpose.",

    highlights: [
      "Modern abstract cover design",
      "Suitable for all subjects",
      "Large A4 size for comfortable writing",
      "Smooth high-quality pages",
      "Durable  binding"
    ],

    options: {
      pages: [120, 160, 200, 240, 300, 400],
      rulingType: ["Ruled", "Unruled"]
    },

    variants: [
      { variantId: "NB-GEN-120", pages: 120, price: 99, stock: 150 },
      { variantId: "NB-GEN-160", pages: 160, price: 109, stock: 150 },
      { variantId: "NB-GEN-200", pages: 200, price: 119, stock: 120 },
      { variantId: "NB-GEN-240", pages: 240, price: 139, stock: 120 },
      { variantId: "NB-GEN-300", pages: 300, price: 149, stock: 120 },
      { variantId: "NB-GEN-400", pages: 400, price: 179, stock: 120 }
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      size: "A4",
      paperGSM: 60,
      bindingType: "",
      coverFinish: "Matte",
      orientation: "portrait"
    },

    relatedCombos: [],

    inventory: {
      totalStock: 270,
      stockStatus: "in_stock",
      lowStockThreshold: 30
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1771594051/abstract-doodle--notebook-desk-flatlay_udvrau.webp",
      back: "notebook-back.webp",
      images: [
        "abstract-notebook-inside.webp",
        "abstract-notebook-binding.webp"
      ]
    },

    tags: [
      "general notebook",
      "A4 notebook",
      "abstract notebook",
      "student notebook",
      "plain study notebook",
      "creative notebook"
    ],

    seo: {
      metaTitle: "Abstract A4 Study Notebook for Students",
      metaDescription:
        "Stylish A4 notebook with abstract cover design. Perfect for school, college, and everyday use.",
      keywords: [
        "abstract notebook",
        "A4 notebook",
        "student notebook",
        "general notebook"
      ]
    },

    productionTime: "1–2 business days",

    shipping: {
      weight: 0.55,
      dimensions: {
        width: 21,
        height: 29.7,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.7,
    reviewsCount: 84,

    status: "active",
    visibility: "public",
    isFeatured: false,
    isNewArrival: true
  },
  {
    id: "nb-mot-001",
    name: "Evolve or Repeat Motivational Notebook",
    slug: "evolve-or-repeat-motivational-notebook",
    sku: "NB-MOT-001",

    productType: "notebook",
    category: "Notebooks",
    subCategory: "Single",
    collections: {
      franchise: "Minimal",
    },

    subjectTheme: "Motivational",
    designTheme: "Modern Typography",

    brand: "pragyaprint",
    series: "Modern Inspiration Series",

    shortDescription:
      "Eye-catching A4 notebook with bold motivational typography and modern minimal design.",

    description:
      "A premium A4  notebook featuring a striking modern cover with bold typography that inspires productivity and growth. Designed for students, creators, and professionals who want a stylish notebook that stands out while staying functional for everyday use.",

    highlights: [
      "Bold motivational quote cover",
      "Minimal modern aesthetic",
      "Eye-catching premium design",
      "Large A4 size for comfortable writing",
      "Strong  binding for durability"
    ],

    options: {
      pages: [120, 160, 200, 240, 300, 400],
      rulingType: ["Ruled", "Unruled"]
    },

    variants: [
      { variantId: "NB-MOT-001-120", pages: 120, price: 99, stock: 150 },
      { variantId: "NB-MOT-001-160", pages: 160, price: 109, stock: 150 },
      { variantId: "NB-MOT-001-200", pages: 200, price: 119, stock: 120 },
      { variantId: "NB-MOT-001-240", pages: 240, price: 139, stock: 120 },
      { variantId: "NB-MOT-001-300", pages: 300, price: 149, stock: 120 },
      { variantId: "NB-MOT-001-400", pages: 400, price: 179, stock: 120 }
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      size: "A4",
      paperGSM: 60,
      bindingType: "",
      coverFinish: "Matte",
      orientation: "portrait"
    },

    relatedCombos: [],

    inventory: {
      totalStock: 270,
      stockStatus: "in_stock",
      lowStockThreshold: 30
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1771594052/evolve-or-repeat-green--notebook-flatlay_laq8vh.webp",
      back: "notebook-back.webp",
      images: [
        "evolve-repeat-notebook-inside.webp",
        "evolve-repeat-notebook-binding.webp"
      ]
    },

    tags: [
      "motivational notebook",
      "modern notebook",
      "typography notebook",
      "A4 notebook",
      "cool notebook",
      "premium notebook"
    ],

    seo: {
      metaTitle: "Motivational A4 Notebook — Evolve or Repeat Design",
      metaDescription:
        "Premium A4 notebook with bold motivational typography. Stylish, modern, and perfect for everyday use.",
      keywords: [
        "motivational notebook",
        "modern notebook",
        "cool notebook",
        "A4 notebook",
        "typography notebook"
      ]
    },

    productionTime: "1–2 business days",

    shipping: {
      weight: 0.55,
      dimensions: {
        width: 21,
        height: 29.7,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.7,
    reviewsCount: 84,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "nb-fan-001",
    name: "Wizard Castle Fantasy Notebook",
    slug: "wizard-castle-fantasy-notebook",
    sku: "NB-FAN-001",

    productType: "notebook",
    category: "Notebooks",
    subCategory: "Single",
    collections: {
      franchise: "Minimal",
    },

    subjectTheme: "Fantasy",
    designTheme: "Wizard World",

    brand: "pragyaprint",
    series: "Pop Culture Fantasy Series",

    shortDescription:
      "A magical A4 notebook featuring a detailed wizard castle fantasy design.",

    description:
      "A premium A4  notebook with an enchanting fantasy-themed cover inspired by magical worlds, wizard schools, and mythical adventures. Perfect for fans of fantasy stories, creative writing, journaling, and everyday study with a touch of magic.",

    highlights: [
      "Highly detailed fantasy artwork",
      "Wizard world inspired design",
      "Eye-catching premium cover",
      "Perfect for fans of magical themes",
      "Large A4 size for comfortable writing",
      "Durable  binding"
    ],

    options: {
      pages: [120, 160, 200, 240, 300, 400],
      rulingType: ["Ruled", "Unruled"]
    },

    variants: [
      { variantId: "NB-FAN-001-120", pages: 120, price: 99, stock: 150 },
      { variantId: "NB-FAN-001-160", pages: 160, price: 109, stock: 150 },
      { variantId: "NB-FAN-001-200", pages: 200, price: 119, stock: 120 },
      { variantId: "NB-FAN-001-240", pages: 240, price: 139, stock: 120 },
      { variantId: "NB-FAN-001-300", pages: 300, price: 149, stock: 120 },
      { variantId: "NB-FAN-001-400", pages: 400, price: 179, stock: 120 }
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      size: "A4",
      paperGSM: 60,
      bindingType: "",
      coverFinish: "Matte",
      orientation: "portrait"
    },

    relatedCombos: [],

    inventory: {
      totalStock: 270,
      stockStatus: "in_stock",
      lowStockThreshold: 30
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1771594052/harry-potter-the-magic-is-real--notebook-hogwarts-illustrations_pan1hz.webp",
      back: "notebook-back.webp",
      images: [
        "wizard-fantasy-notebook-inside.webp",
        "wizard-fantasy-notebook-binding.webp"
      ]
    },

    tags: [
      "fantasy notebook",
      "wizard notebook",
      "magic notebook",
      "A4 notebook",
      "cool notebook",
      "pop culture notebook",
      "premium notebook"
    ],

    seo: {
      metaTitle: "Fantasy Wizard A4 Notebook — Magical Design",
      metaDescription:
        "Premium A4 notebook with a stunning wizard fantasy design. Perfect for fans of magical worlds.",
      keywords: [
        "fantasy notebook",
        "wizard notebook",
        "magic notebook",
        "A4 notebook",
        "cool notebook"
      ]
    },

    productionTime: "1–2 business days",

    shipping: {
      weight: 0.55,
      dimensions: {
        width: 21,
        height: 29.7,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.7,
    reviewsCount: 84,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "nb-pop-001",
    name: "Victory Racer Cartoon Notebook",
    slug: "victory-racer-cartoon-notebook",
    sku: "NB-POP-001",

    productType: "notebook",
    category: "Notebooks",
    subCategory: "Single",
    collections: {
      franchise: "Minimal",
    },

    subjectTheme: "Pop Cartoon",
    designTheme: "Racing Victory",

    brand: "pragyaprint",
    series: "Fun Pop Series",

    shortDescription:
      "High-energy A4 notebook with a bold cartoon racer design and vibrant colors.",

    description:
      "A premium A4  notebook featuring a dynamic cartoon racing character celebrating victory. The explosive background and bold colors make this notebook perfect for kids, teens, gamers, and anyone who loves fun, energetic designs that instantly grab attention.",

    highlights: [
      "Bright high-energy racing theme",
      "Bold cartoon character design",
      "Eye-catching vibrant cover",
      "Perfect for kids, teens, and gamers",
      "Large A4 size for comfortable writing",
      "Strong  binding"
    ],

    options: {
      pages: [120, 160, 200, 240, 300, 400],
      rulingType: ["Ruled", "Unruled"]
    },

    variants: [
      { variantId: "NB-POP-001-120", pages: 120, price: 99, stock: 150 },
      { variantId: "NB-POP-001-160", pages: 160, price: 109, stock: 150 },
      { variantId: "NB-POP-001-200", pages: 200, price: 119, stock: 120 },
      { variantId: "NB-POP-001-240", pages: 240, price: 139, stock: 120 },
      { variantId: "NB-POP-001-300", pages: 300, price: 149, stock: 120 },
      { variantId: "NB-POP-001-400", pages: 400, price: 179, stock: 120 }
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      size: "A4",
      paperGSM: 60,
      bindingType: "",
      coverFinish: "Matte",
      orientation: "portrait"
    },

    relatedCombos: [],

    inventory: {
      totalStock: 270,
      stockStatus: "in_stock",
      lowStockThreshold: 30
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1771594053/kick-buttowski--notebook-desk-flatlay_c2ia7y.webp",
      back: "notebook-back.webp",
      images: [
        "victory-racer-notebook-inside.webp",
        "victory-racer-notebook-binding.webp"
      ]
    },

    tags: [
      "cartoon notebook",
      "racing notebook",
      "fun notebook",
      "kids notebook",
      "A4 notebook",
      "cool notebook",
      "vibrant notebook"
    ],

    seo: {
      metaTitle: "Cartoon Racing A4 Notebook — Fun Victory Design",
      metaDescription:
        "Vibrant A4 notebook with a bold cartoon racing design. Perfect for kids, teens, and fun-loving students.",
      keywords: [
        "cartoon notebook",
        "kids notebook",
        "racing notebook",
        "A4 notebook",
        "fun notebook"
      ]
    },

    productionTime: "1–2 business days",

    shipping: {
      weight: 0.55,
      dimensions: {
        width: 21,
        height: 29.7,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.7,
    reviewsCount: 84,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "nb-shr-001",
    name: "Action Heroes Comic Notebook",
    slug: "action-heroes-comic-notebook",
    sku: "NB-SHR-001",

    productType: "notebook",
    category: "Notebooks",
    subCategory: "Single",
    collections: {
      franchise: "Minimal",
    },

    subjectTheme: "Superhero",
    designTheme: "Comic Action",

    brand: "pragyaprint",
    series: "Pop Culture Action Series",

    shortDescription:
      "Bold A4 notebook featuring a dynamic superhero comic-style design.",

    description:
      "A premium A4  notebook showcasing a powerful comic-inspired superhero design with vivid colors and action aesthetics. Perfect for fans of action stories, comics, gaming culture, and anyone who wants a notebook that makes a strong visual statement.",

    highlights: [
      "Dynamic comic-style artwork",
      "High-impact action theme",
      "Vibrant premium cover",
      "Perfect for teens, fans, and gamers",
      "Large A4 size for comfortable writing",
      "Durable  binding"
    ],

    options: {
      pages: [120, 160, 200, 240, 300, 400],
      rulingType: ["Ruled", "Unruled"]
    },

    variants: [
      { variantId: "NB-SHR-001-120", pages: 120, price: 99, stock: 150 },
      { variantId: "NB-SHR-001-160", pages: 160, price: 109, stock: 150 },
      { variantId: "NB-SHR-001-200", pages: 200, price: 119, stock: 120 },
      { variantId: "NB-SHR-001-240", pages: 240, price: 139, stock: 120 },
      { variantId: "NB-SHR-001-300", pages: 300, price: 149, stock: 120 },
      { variantId: "NB-SHR-001-400", pages: 400, price: 179, stock: 120 }
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      size: "A4",
      paperGSM: 60,
      bindingType: "",
      coverFinish: "Matte",
      orientation: "portrait"
    },

    relatedCombos: [],

    inventory: {
      totalStock: 270,
      stockStatus: "in_stock",
      lowStockThreshold: 30
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1771594054/marvel-superhero--notebook-mockup_yxpjnj.webp",
      back: "notebook-back.webp",
      images: [
        "superhero-comic-notebook-inside.webp",
        "superhero-comic-notebook-binding.webp"
      ]
    },

    tags: [
      "superhero notebook",
      "comic notebook",
      "action notebook",
      "A4 notebook",
      "pop culture notebook",
      "cool notebook",
      "premium notebook"
    ],

    seo: {
      metaTitle: "Superhero Comic A4 Notebook — Action Design",
      metaDescription:
        "Premium A4 notebook with bold comic-style superhero artwork. Perfect for fans of action and pop culture.",
      keywords: [
        "superhero notebook",
        "comic notebook",
        "action notebook",
        "A4 notebook",
        "cool notebook"
      ]
    },

    productionTime: "1–2 business days",

    shipping: {
      weight: 0.55,
      dimensions: {
        width: 21,
        height: 29.7,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.7,
    reviewsCount: 84,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "nb-edg-001",
    name: "Comfort Zone Breaker Notebook",
    slug: "comfort-zone-breaker-notebook",
    sku: "NB-EDG-001",

    productType: "notebook",
    category: "Notebooks",
    subCategory: "Single",
    collections: {
      franchise: "Minimal",
    },

    subjectTheme: "Edgy Motivation",
    designTheme: "Art Collage",

    brand: "pragyaprint",
    series: "Bold Expression Series",

    shortDescription:
      "A striking A4 notebook with rebellious motivational typography and collage-style artwork.",

    description:
      "A premium A4  notebook featuring bold street-art-inspired collage visuals and a powerful motivational message. Designed for creative thinkers, artists, and students who want a notebook that reflects individuality and pushes beyond the ordinary.",

    highlights: [
      "Bold rebellious motivational quote",
      "Modern collage-style artwork",
      "Artistic indie aesthetic",
      "Eye-catching premium design",
      "Ideal for journaling and creative writing",
      "Large A4 size for comfortable writing",
      "Strong  binding"
    ],

    options: {
      pages: [120, 160, 200, 240, 300, 400],
      rulingType: ["Ruled", "Unruled"]
    },

    variants: [
      { variantId: "NB-EDG-001-120", pages: 120, price: 99, stock: 150 },
      { variantId: "NB-EDG-001-160", pages: 160, price: 109, stock: 150 },
      { variantId: "NB-EDG-001-200", pages: 200, price: 119, stock: 120 },
      { variantId: "NB-EDG-001-240", pages: 240, price: 139, stock: 120 },
      { variantId: "NB-EDG-001-300", pages: 300, price: 149, stock: 120 },
      { variantId: "NB-EDG-001-400", pages: 400, price: 179, stock: 120 }
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      size: "A4",
      paperGSM: 60,
      bindingType: "",
      coverFinish: "Matte",
      orientation: "portrait"
    },

    relatedCombos: [],

    inventory: {
      totalStock: 270,
      stockStatus: "in_stock",
      lowStockThreshold: 30
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1771594056/motivational-collage-notebook-comfort-zone-kill-you_p5gxbn.webp",
      back: "notebook-back.webp",
      images: [
        "comfort-zone-breaker-notebook-inside.webp",
        "comfort-zone-breaker-notebook-binding.webp"
      ]
    },

    tags: [
      "motivational notebook",
      "edgy notebook",
      "art collage notebook",
      "creative notebook",
      "A4 notebook",
      "modern notebook",
      "premium notebook"
    ],

    seo: {
      metaTitle: "Edgy Motivational A4 Notebook — Comfort Zone Breaker",
      metaDescription:
        "Bold A4 notebook with artistic collage design and powerful motivation. Perfect for creatives and students.",
      keywords: [
        "motivational notebook",
        "art notebook",
        "creative notebook",
        "A4 notebook",
        "cool notebook"
      ]
    },

    productionTime: "1–2 business days",

    shipping: {
      weight: 0.55,
      dimensions: {
        width: 21,
        height: 29.7,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.7,
    reviewsCount: 84,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "nb-aes-001",
    name: "Offline Cool Aesthetic Notebook",
    slug: "offline-cool-aesthetic-notebook",
    sku: "NB-AES-001",

    productType: "notebook",
    category: "Notebooks",
    subCategory: "Single",
    collections: {
      franchise: "Minimal",
    },

    subjectTheme: "Aesthetic",
    designTheme: "Minimal Attitude",

    brand: "pragyaprint",
    series: "Gen-Z Aesthetic Series",

    shortDescription:
      "Minimal A4 notebook with bold aesthetic typography and modern attitude design.",

    description:
      "A premium A4  notebook featuring a clean minimal layout paired with bold, edgy typography. Designed for the Gen-Z aesthetic, this notebook makes a strong statement while remaining sleek and stylish — perfect for journaling, school, or everyday notes.",

    highlights: [
      "Minimal aesthetic design",
      "Bold attitude typography",
      "Clean modern layout",
      "Highly relatable Gen-Z vibe",
      "Large A4 size for comfortable writing",
      "Strong  binding"
    ],

    options: {
      pages: [120, 160, 200, 240, 300, 400],
      rulingType: ["Ruled", "Unruled"]
    },

    variants: [
      { variantId: "NB-AES-001-120", pages: 120, price: 99, stock: 150 },
      { variantId: "NB-AES-001-160", pages: 160, price: 109, stock: 150 },
      { variantId: "NB-AES-001-200", pages: 200, price: 119, stock: 120 },
      { variantId: "NB-AES-001-240", pages: 240, price: 139, stock: 120 },
      { variantId: "NB-AES-001-300", pages: 300, price: 149, stock: 120 },
      { variantId: "NB-AES-001-400", pages: 400, price: 179, stock: 120 }
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      size: "A4",
      paperGSM: 60,
      bindingType: "",
      coverFinish: "Matte",
      orientation: "portrait"
    },

    relatedCombos: [],

    inventory: {
      totalStock: 270,
      stockStatus: "in_stock",
      lowStockThreshold: 30
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1771594056/miles-morales-spiderman-notebook-social-media-flat-lay_ean5v5.webp",
      back: "notebook-back.webp",
      images: [
        "offline-cool-aesthetic-notebook-inside.webp",
        "offline-cool-aesthetic-notebook-binding.webp"
      ]
    },

    tags: [
      "aesthetic notebook",
      "gen z notebook",
      "minimal notebook",
      "cool notebook",
      "A4 notebook",
      "modern notebook",
      "premium notebook"
    ],

    seo: {
      metaTitle: "Aesthetic A4 Notebook — Minimal Attitude Design",
      metaDescription:
        "Stylish A4 notebook with bold minimal aesthetic design. Perfect for modern students and creatives.",
      keywords: [
        "aesthetic notebook",
        "minimal notebook",
        "cool notebook",
        "A4 notebook",
        "modern notebook"
      ]
    },

    productionTime: "1–2 business days",

    shipping: {
      weight: 0.55,
      dimensions: {
        width: 21,
        height: 29.7,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.7,
    reviewsCount: 84,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "nb-aes-002",
    name: "Serial Chiller Aesthetic Notebook",
    slug: "serial-chiller-aesthetic-notebook",
    sku: "NB-AES-002",

    productType: "notebook",
    category: "Notebooks",
    subCategory: "Single",
    collections: {
      franchise: "Minimal",
    },

    subjectTheme: "Aesthetic",
    designTheme: "Bold Typography",

    brand: "pragyaprint",
    series: "Gen-Z Aesthetic Series",

    shortDescription:
      "Minimal A4 notebook with bold typography and edgy aesthetic vibe.",

    description:
      "A premium A4  notebook featuring a striking red background and bold typographic design. Clean, modern, and attention-grabbing, this notebook is perfect for students and creatives who want a stylish statement piece for everyday writing.",

    highlights: [
      "Bold high-contrast typography design",
      "Clean minimal aesthetic",
      "Eye-catching red cover",
      "Unisex modern appeal",
      "Perfect for school, college, or journaling",
      "Large A4 size for comfortable writing",
      "Durable  binding"
    ],

    options: {
      pages: [120, 160, 200, 240, 300, 400],
      rulingType: ["Ruled", "Unruled"]
    },

    variants: [
      { variantId: "NB-AES-002-120", pages: 120, price: 99, stock: 150 },
      { variantId: "NB-AES-002-160", pages: 160, price: 109, stock: 150 },
      { variantId: "NB-AES-002-200", pages: 200, price: 119, stock: 120 },
      { variantId: "NB-AES-002-240", pages: 240, price: 139, stock: 120 },
      { variantId: "NB-AES-002-300", pages: 300, price: 149, stock: 120 },
      { variantId: "NB-AES-002-400", pages: 400, price: 179, stock: 120 }
    ],

    pricing: {
      basePrice: 149,
      salePrice: 99,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      size: "A4",
      paperGSM: 60,
      bindingType: "",
      coverFinish: "Matte",
      orientation: "portrait"
    },

    relatedCombos: [],

    inventory: {
      totalStock: 270,
      stockStatus: "in_stock",
      lowStockThreshold: 30
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1771594057/serial-chiller-red--notebook-desk-flatlay_gqtlhp.webp",
      back: "notebook-back.webp",
      images: [
        "serial-chiller-notebook-inside.webp",
        "serial-chiller-notebook-binding.webp"
      ]
    },

    tags: [
      "aesthetic notebook",
      "typography notebook",
      "minimal notebook",
      "cool notebook",
      "A4 notebook",
      "modern notebook",
      "premium notebook"
    ],

    seo: {
      metaTitle: "Aesthetic Typography A4 Notebook — Serial Chiller",
      metaDescription:
        "Bold minimal A4 notebook with striking typography design. Stylish and eye-catching for everyday use.",
      keywords: [
        "aesthetic notebook",
        "typography notebook",
        "minimal notebook",
        "A4 notebook",
        "cool notebook"
      ]
    },

    productionTime: "1–2 business days",

    shipping: {
      weight: 0.55,
      dimensions: {
        width: 21,
        height: 29.7,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.7,
    reviewsCount: 84,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "nb-combo-marvel-001",
    name: "The Big Three Notebook Combo",
    slug: "marvel-big-three-notebook-combo",
    sku: "NB-COMBO-MARVEL-001",

    productType: "notebook_combo",
    category: "Notebooks",
    subCategory: "Combo",
    collections: {
      franchise: "Minimal",
    },

    comboType: "Marvel",

    includesNotebooks: [
      "Thor Notebook",
      "Iron Man Notebook",
      "Captain America Notebook"
    ],

    quantityIncluded: 3,

    subjectTheme: ["Superhero", "Action", "Pop Culture"],
    targetAudience: ["Teens", "Fans", "Gamers", "Gift Buyers"],

    brand: "pragyaprint",
    series: "Pop Culture Action Series",

    shortDescription:
      "Power-packed superhero notebook combo featuring the iconic Big Three.",

    description:
      "This premium combo includes three action-packed A4  notebooks inspired by legendary superhero icons. Designed for fans of epic battles, heroism, and cinematic universes, this bundle delivers bold visuals and unmatched shelf appeal — perfect for school, college, or gifting.",

    highlights: [
      "Iconic superhero trio bundle",
      "Highly eye-catching cinematic designs",
      "Perfect gift for fans",
      "Premium pop-culture collection",
      "Great for school or personal use"
    ],

    pricing: {
      basePrice: 299,
      salePrice: 249,
      discountPercentage: 16,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      size: "A4",
      paperGSM: 60,
      bindingType: "",
      coverFinish: "Matte"
    },

    options: {
      pages: [100, 200, 300],
      rulingType: ["Ruled", "Unruled"]
    },

    variants: [
      {
        variantId: "NB-COMBO-MARVEL-001-100",
        pages: 100,
        price: 249,
        stock: 150
      },
      {
        variantId: "NB-COMBO-MARVEL-001-200",
        pages: 200,
        price: 349,
        stock: 150
      },
      {
        variantId: "NB-COMBO-MARVEL-001-300",
        pages: 300,
        price: 449,
        stock: 150
      }
    ],

    inventory: {
      totalStock: 120,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1771594003/marvel-avengers--notebooks-thor-captain-america-iron-man_fzkgkz.webp",
      back: "notebook-back.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1771594002/iron-man--notebook-office-desk-setup_tapegs.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1771594002/thor-marvel--notebook-desk-setup_e2fjeq.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1771594002/captain-america-mjolnir--notebook-desk_msefrp.webp"
      ]
    },

    tags: [
      "marvel combo",
      "superhero notebook set",
      "big three combo",
      "pop culture bundle",
      "gift combo"
    ],

    seo: {
      metaTitle: "Marvel Big Three Notebook Combo — Thor Iron Man Captain America",
      metaDescription:
        "Premium superhero notebook combo featuring the iconic Big Three. Perfect for fans, students, and gifting.",
      keywords: [
        "marvel notebook combo",
        "superhero notebooks",
        "avengers combo",
        "gift notebook set",
        "fan merchandise notebook"
      ]
    },

    productionTime: "1–2 business days",

    shipping: {
      weight: 1.5,
      dimensions: {
        width: 21,
        height: 29.7,
        depth: 6
      },
      shippingClass: "standard_box"
    },

    rating: 4.9,
    reviewsCount: 72,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "nb-combo-pcm-001",
    name: "PCM Study Notebook Combo",
    slug: "pcm-study-notebook-combo",
    sku: "NB-COMBO-PCM-001",

    productType: "notebook_combo",
    category: "Notebooks",
    subCategory: "Combo",
    collections: {
      franchise: "Minimal",
    },

    comboType: "PCM",

    includesNotebooks: [
      "Physics Study Notebook",
      "Chemistry Study Notebook",
      "Mathematics Study Notebook"
    ],

    quantityIncluded: 3,

    subjectTheme: ["Physics", "Chemistry", "Mathematics"],
    targetAudience: ["Science Students", "School", "Coaching"],

    brand: "pragyaprint",
    series: "Student Combo Series",

    shortDescription:
      "Complete PCM notebook combo designed for science students.",

    description:
      "This PCM combo pack includes Physics, Chemistry, and Mathematics notebooks, helping science students stay organized and focused. A cost-saving bundle perfect for school, coaching classes, and exam preparation.",

    highlights: [
      "Complete science subject bundle",
      "Cost-saving combo pack",
      "Organized subject-wise learning",
      "Perfect for school & coaching use"
    ],

    pricing: {
      basePrice: 299,
      salePrice: 249,
      discountPercentage: 16,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      size: "A4",
      paperGSM: 60,
      bindingType: "",
      coverFinish: "Matte"
    },

    options: {
      pages: [100, 200, 300],
      rulingType: ["Ruled", "Unruled"]
    },

    variants: [
      {
        variantId: "NB-COMBO-PCM-001-100",
        pages: 100,
        price: 249,
        stock: 150
      },
      {
        variantId: "NB-COMBO-PCM-001-200",
        pages: 200,
        price: 349,
        stock: 150
      },
      {
        variantId: "NB-COMBO-PCM-001-300",
        pages: 300,
        price: 449,
        stock: 150
      }
    ],

    inventory: {
      totalStock: 120,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1771594034/custom-subject-themed-notebook-covers-chemistry-physics-math_a90hep.webp",
      back: "notebook-back.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1771594033/physics-themed--notebook-desk-flatlay_wequvo.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1771594033/chemistry--notebook-desk-setup_q7sc6q.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1771594032/matematica-themed--notebook-desk-flatlay_iwf58w.webp",
      ]
    },

    tags: [
      "pcm combo",
      "science notebook combo",
      "student combo pack",
      "school notebooks bundle"
    ],

    seo: {
      metaTitle: "PCM Notebook Combo for Science Students",
      metaDescription:
        "Cost-saving PCM notebook combo including Physics, Chemistry & Mathematics notebooks. Perfect for school & coaching.",
      keywords: [
        "pcm combo notebooks",
        "science combo",
        "student bundle",
        "school notebooks"
      ]
    },

    productionTime: "1–2 business days",

    shipping: {
      weight: 1.5,
      dimensions: {
        width: 21,
        height: 29.7,
        depth: 6
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 56,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "nb-combo-mot-001",
    name: "Motivational Notebook Combo",
    slug: "motivational-notebook-combo",
    sku: "NB-COMBO-MOT-001",

    productType: "notebook_combo",
    category: "Notebooks",
    subCategory: "Combo",
    collections: {
      franchise: "Minimal",
    },

    comboType: "Motivational",

    includesNotebooks: [
      "Take It Day by Day Notebook",
      "Move at Your Own Pace Notebook",
      "Bet on Yourself Notebook"
    ],

    quantityIncluded: 3,

    subjectTheme: ["Motivation", "Positive", "Self Growth"],
    targetAudience: ["Students", "Teens", "Journaling", "Gift Buyers"],

    brand: "pragyaprint",
    series: "Motivation Series",

    shortDescription:
      "Positive motivational notebook combo designed to inspire daily progress.",

    description:
      "This uplifting combo includes three A4  notebooks featuring encouraging messages and cute character designs. Perfect for students, journaling, or anyone who wants daily motivation while writing. A thoughtful gift bundle that combines style with positivity.",

    highlights: [
      "Encouraging motivational themes",
      "Cute and relatable designs",
      "Perfect for journaling and school use",
      "Great gift option",
      "Positive daily inspiration"
    ],

    pricing: {
      basePrice: 299,
      salePrice: 249,
      discountPercentage: 16,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      size: "A4",
      paperGSM: 60,
      bindingType: "",
      coverFinish: "Matte"
    },

    options: {
      pages: [100, 200, 300],
      rulingType: ["Ruled", "Unruled"]
    },

    variants: [
      {
        variantId: "NB-COMBO-MOT-001-100",
        pages: 100,
        price: 249,
        stock: 150
      },
      {
        variantId: "NB-COMBO-MOT-001-200",
        pages: 200,
        price: 349,
        stock: 150
      },
      {
        variantId: "NB-COMBO-MOT-001-300",
        pages: 300,
        price: 449,
        stock: 150
      }
    ],

    inventory: {
      totalStock: 120,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1771594013/motivational--notebooks-set_miblyk.webp",
      back: "notebook-back.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1771594013/bet-on-your-damn-self-motivational-notebook-illustration_f14kfe.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1771594013/motivational-notebook-move-at-your-own-pace-snail-graphic_tuc51h.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1771594013/motivational-take-it-day-by-day-notebook-flat-lay_phqvfm.webp",
      ]
    },

    tags: [
      "motivational combo",
      "inspirational notebooks",
      "positive notebook set",
      "student gift combo",
      "journaling notebooks bundle"
    ],

    seo: {
      metaTitle: "Motivational Notebook Combo — Inspiring Study Pack",
      metaDescription:
        "Positive A4 notebook combo with uplifting designs. Perfect for students, journaling, and gifting.",
      keywords: [
        "motivational notebooks",
        "inspirational notebook set",
        "student gift combo",
        "positive journal notebooks"
      ]
    },

    productionTime: "1–2 business days",

    shipping: {
      weight: 1.5,
      dimensions: {
        width: 21,
        height: 29.7,
        depth: 6
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 56,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
];

export const LOCAL_SERVICES = [
  {

    id: "dj-gentle-blue-marble-001",
    name: "Be Gentle With Yourself Premium Journal",
    slug: "be-gentle-with-yourself-premium-journal",
    sku: "DJ-BGWM-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Aesthetic Quotes Collection",

    collections: {
      franchise: "Quotes",
      theme: "Blue Marble",
      universe: "Minimal Aesthetic",
      genre: "Motivational"
    },

    moods: ["Calm", "Minimal", "Aesthetic", "Reflective", "Peaceful"],

    shortDescription:
      "A calming aesthetic journal featuring a soothing blue marble design with a self-growth quote.",

    description:
      "Designed to inspire mindfulness and self-reflection, this premium journal blends minimal aesthetics with a calming blue marble design. Featuring the quote 'Be Gentle With Yourself', it serves as a perfect companion for journaling, planning, sketching, or expressing your thoughts with clarity and peace.",

    highlights: [
      "Premium matte laminated aesthetic cover",
      "Smooth high-quality pages for writing & sketching",
      "Elegant durable wiro binding",
      "Minimal calming design with motivational quote",
      "Perfect for gifting & daily journaling"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-BGWM-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-BGWM-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-BGWM-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-BGWM-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-BGWM-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-BGWM-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-BGWM-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-BGWM-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-BGWM-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-BGWM-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-BGWM-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-BGWM-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-BGWM-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-BGWM-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-BGWM-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-BGWM-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-BGWM-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-BGWM-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-BGWM-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-BGWM-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931054/be-gentle-with-yourself-blue-marble-spiral-notebook_ydroqs.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929920/be-gentle-with-yourself-spiral-notebook-blue-fluid-art_dfo6va.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "motivational journal",
      "self growth diary",
      "aesthetic notebook",
      "blue marble journal",
      "mental wellness journal",
      "gift journal"
    ],

    seo: {
      metaTitle: "Be Gentle With Yourself Journal | Aesthetic Blue Marble Diary",
      metaDescription:
        "A calming blue marble aesthetic journal with a self-growth quote. Perfect for journaling, planning, and mindfulness.",
      keywords: [
        "motivational journal",
        "self care diary",
        "aesthetic notebook",
        "blue marble journal"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-cr7-stripes-001",
    name: "CR7 Cristiano Stripes Premium Journal",
    slug: "cr7-cristiano-stripes-premium-journal",
    sku: "DJ-CR7S-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Sports Icons Collection",

    collections: {
      franchise: "Graphic Art",
      theme: "CR7 Stripes",
      universe: "Football",
      genre: "Sports Motivation"
    },

    moods: [
      "Energetic",
      "Bold",
      "Motivational",
      "Powerful",
      "Focused"
    ],

    shortDescription:
      "A bold CR7-inspired journal featuring a dynamic striped design symbolizing passion and performance.",

    description:
      "Inspired by one of football’s greatest icons, this premium journal captures the energy, discipline, and winning mindset of Cristiano Ronaldo. The striking red gradient stripes and iconic CR7 stance make it perfect for those who chase goals relentlessly—whether in sports, studies, or life.",

    highlights: [
      "Premium matte laminated sports design cover",
      "High-quality smooth pages for writing & planning",
      "Durable premium wiro binding",
      "CR7 inspired bold visual design",
      "Perfect for students, athletes & fans"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-CR7S-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-CR7S-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-CR7S-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-CR7S-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-CR7S-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-CR7S-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-CR7S-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-CR7S-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-CR7S-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-CR7S-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-CR7S-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-CR7S-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-CR7S-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-CR7S-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-CR7S-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-CR7S-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-CR7S-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-CR7S-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-CR7S-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-CR7S-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931054/cristiano-ronaldo-cr7-manchester-united-spiral-notebook_j7qijr.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929918/cristiano-ronaldo-manchester-united-custom-notebook_fksvlu.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "cr7 notebook",
      "ronaldo journal",
      "football diary",
      "sports notebook",
      "motivational journal",
      "gym mindset journal"
    ],

    seo: {
      metaTitle: "CR7 Cristiano Ronaldo Journal | Football Motivational Notebook",
      metaDescription:
        "CR7 inspired premium journal with bold red stripes design. Perfect for football fans, athletes, and goal-driven individuals.",
      keywords: [
        "cr7 notebook",
        "ronaldo diary",
        "football journal",
        "sports motivational notebook"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-dont-give-up-001",
    name: "Don't Give Up Premium Motivational Journal",
    slug: "dont-give-up-premium-motivational-journal",
    sku: "DJ-DGU-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Motivation Core Collection",

    collections: {
      franchise: "Graphic Art",
      theme: "Bold Typography",
      universe: "Self Growth",
      genre: "Motivational"
    },

    moods: [
      "Bold",
      "Energetic",
      "Determined",
      "Focused",
      "Resilient"
    ],

    shortDescription:
      "A bold motivational journal designed to push you forward with a powerful 'Don't Give Up' message.",

    description:
      "Built for those who refuse to quit, this premium journal features a striking bold typography design with the powerful message 'Don't Give Up'. Designed to fuel persistence and discipline, it's perfect for goal tracking, journaling, and staying committed to your journey. A constant reminder that success comes to those who keep going.",

    highlights: [
      "Premium matte laminated bold typography cover",
      "High-quality pages for writing, planning & tracking goals",
      "Strong durable wiro binding",
      "High-impact motivational design",
      "Ideal for students, entrepreneurs & self-growth enthusiasts"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-DGU-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-DGU-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-DGU-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-DGU-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-DGU-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-DGU-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-DGU-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-DGU-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-DGU-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-DGU-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-DGU-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-DGU-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-DGU-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-DGU-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-DGU-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-DGU-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-DGU-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-DGU-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-DGU-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-DGU-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931057/motivational-dont-give-up-spiral-notebook-mockup_fuuyk1.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929919/dont-give-up-motivational--notebook_boudto.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "motivational notebook",
      "dont give up journal",
      "success diary",
      "goal planner journal",
      "self discipline notebook",
      "study motivation journal"
    ],

    seo: {
      metaTitle: "Don't Give Up Journal | Motivational Notebook for Success & Goals",
      metaDescription:
        "Stay focused and never quit with this bold motivational journal. Perfect for goal setting, journaling, and daily inspiration.",
      keywords: [
        "motivational journal",
        "dont give up notebook",
        "success diary",
        "goal tracking journal"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-pressed-floral-vintage-001",
    name: "Pressed Floral Vintage Aesthetic Journal",
    slug: "pressed-floral-vintage-aesthetic-journal",
    sku: "DJ-PFV-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Nature Aesthetic Collection",

    collections: {
      franchise: "Floral",
      theme: "Pressed Flowers",
      universe: "Nature",
      genre: "Vintage Aesthetic"
    },

    moods: [
      "Calm",
      "Soft",
      "Aesthetic",
      "Vintage",
      "Peaceful"
    ],

    shortDescription:
      "A soft vintage-inspired journal featuring delicate pressed floral elements for a calming writing experience.",

    description:
      "Inspired by the beauty of preserved nature, this premium journal showcases a delicate pressed floral design on a textured background. Perfect for mindful journaling, sketching, or daily reflections, it creates a peaceful and aesthetic space for your thoughts. Ideal for those who appreciate minimal, vintage, and nature-inspired designs.",

    highlights: [
      "Premium matte laminated vintage floral cover",
      "Soft aesthetic pressed flower design",
      "Smooth high-quality pages for writing & sketching",
      "Elegant and durable wiro binding",
      "Perfect for journaling, gifting & creative expression"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-PFV-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-PFV-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-PFV-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-PFV-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-PFV-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-PFV-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-PFV-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-PFV-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-PFV-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-PFV-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-PFV-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-PFV-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-PFV-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-PFV-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-PFV-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-PFV-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-PFV-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-PFV-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-PFV-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-PFV-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931062/vintage-floral-spiral-notebook-wood-background_udvgea.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929919/floral-pressed-flower-spiral-notebook-wood-background_kadypa.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "floral notebook",
      "aesthetic journal",
      "vintage diary",
      "nature journal",
      "minimal notebook",
      "gift journal"
    ],

    seo: {
      metaTitle: "Pressed Floral Aesthetic Journal | Vintage Nature Notebook",
      metaDescription:
        "A soft vintage floral aesthetic journal inspired by nature. Perfect for journaling, sketching, and gifting.",
      keywords: [
        "floral notebook",
        "aesthetic diary",
        "vintage journal",
        "nature notebook"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-hanuman-meditation-001",
    name: "Hanuman Meditation Spiritual Journal",
    slug: "hanuman-meditation-spiritual-journal",
    sku: "DJ-HANM-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Spiritual Collection",

    collections: {
      franchise: "Spiritual",
      theme: "Meditative Hanuman",
      universe: "Hindu Spirituality",
      genre: "Devotional"
    },

    moods: [
      "Peaceful",
      "Spiritual",
      "Focused",
      "Calm",
      "Mindful"
    ],

    shortDescription:
      "A serene spiritual journal featuring Lord Hanuman in a meditative form, symbolizing strength and inner peace.",

    description:
      "Inspired by the divine strength and unwavering devotion of Lord Hanuman, this premium journal showcases a calm meditative illustration that radiates peace and focus. Perfect for journaling, spiritual reflection, meditation notes, or daily planning, it helps you stay grounded while pursuing your goals with discipline and clarity.",

    highlights: [
      "Premium matte laminated spiritual artwork cover",
      "Calming meditative Hanuman design",
      "High-quality pages for journaling & reflection",
      "Durable premium wiro binding",
      "Ideal for spiritual writing, gifting & daily use"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-HANM-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-HANM-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-HANM-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-HANM-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-HANM-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-HANM-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-HANM-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-HANM-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-HANM-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-HANM-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-HANM-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-HANM-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-HANM-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-HANM-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-HANM-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-HANM-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-HANM-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-HANM-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-HANM-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-HANM-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931058/lord-hanuman-meditating-art-notebook-cover_w988va.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929921/lord-hanuman-illustration-spiral-notebook-cover_ugplup.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "hanuman notebook",
      "spiritual journal",
      "meditation diary",
      "devotional notebook",
      "hindu spiritual journal",
      "focus journal"
    ],

    seo: {
      metaTitle: "Hanuman Spiritual Journal | Meditation & Devotional Notebook",
      metaDescription:
        "A peaceful Hanuman meditation journal designed for spiritual reflection, focus, and mindful journaling.",
      keywords: [
        "hanuman journal",
        "spiritual notebook",
        "meditation diary",
        "devotional journal"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-happy-doodle-001",
    name: "Do More Of What Makes You Happy Doodle Journal",
    slug: "do-more-of-what-makes-you-happy-doodle-journal",
    sku: "DJ-HAPPY-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Cute Doodle Collection",

    collections: {
      franchise: "Quotes",
      theme: "Doodle Art",
      universe: "Cute Aesthetic",
      genre: "Motivational"
    },

    moods: [
      "Happy",
      "Playful",
      "Cute",
      "Positive",
      "Cheerful"
    ],

    shortDescription:
      "A cute doodle-style journal with a joyful message to inspire positivity and creativity.",

    description:
      "Brighten your day with this adorable doodle-style journal featuring the uplifting quote 'Do More Of What Makes You Happy'. Designed with playful illustrations and vibrant elements, it’s perfect for journaling, note-taking, or creative expression. A perfect companion for those who love positivity, art, and a cheerful vibe.",

    highlights: [
      "Premium matte laminated cute doodle cover",
      "Fun and colorful hand-drawn illustration style",
      "Smooth high-quality pages for writing & sketching",
      "Durable premium wiro binding",
      "Perfect for students, gifting & daily journaling"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-HAPPY-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-HAPPY-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-HAPPY-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-HAPPY-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-HAPPY-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-HAPPY-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-HAPPY-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-HAPPY-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-HAPPY-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-HAPPY-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-HAPPY-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-HAPPY-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-HAPPY-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-HAPPY-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-HAPPY-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-HAPPY-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-HAPPY-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-HAPPY-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-HAPPY-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-HAPPY-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931074/motivational-hand-drawn-notebook-quote_ytagwu.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929918/do-more-of-what-makes-you-happy-spiral-notebook_t4nlz5.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "cute notebook",
      "doodle journal",
      "happy quotes diary",
      "aesthetic cute notebook",
      "gift for friends",
      "positive journal"
    ],

    seo: {
      metaTitle: "Cute Doodle Journal | Do More Of What Makes You Happy Notebook",
      metaDescription:
        "A cute and cheerful doodle journal with a positive message. Perfect for students, gifting, and daily happiness journaling.",
      keywords: [
        "cute notebook",
        "doodle journal",
        "happy diary",
        "aesthetic cute journal"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-yellow-train-journey-001",
    name: "Yellow Train Journey Aesthetic Quote Journal",
    slug: "yellow-train-journey-aesthetic-quote-journal",
    sku: "DJ-YTJ-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Aesthetic Quotes Collection",

    collections: {
      franchise: "Quotes",
      theme: "Train Illustration",
      universe: "Minimal Aesthetic",
      genre: "Motivational"
    },

    moods: [
      "Hopeful",
      "Calm",
      "Reflective",
      "Aesthetic",
      "Thoughtful"
    ],

    shortDescription:
      "A minimal aesthetic journal featuring a yellow train illustration with a deep, reflective life quote.",

    description:
      "This beautifully designed journal captures the essence of life’s journey through a simple yet meaningful illustration of a train and a thoughtful quote: 'There is a seat waiting for you at tables you haven't even seen.' Perfect for journaling, self-reflection, and capturing your thoughts, it inspires hope, patience, and belief in unseen opportunities.",

    highlights: [
      "Premium matte laminated aesthetic cover",
      "Minimal illustration with meaningful quote",
      "Smooth high-quality pages for writing & reflection",
      "Durable premium wiro binding",
      "Perfect for journaling, gifting & mindful writing"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-YTJ-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-YTJ-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-YTJ-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-YTJ-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-YTJ-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-YTJ-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-YTJ-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-YTJ-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-YTJ-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-YTJ-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-YTJ-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-YTJ-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-YTJ-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-YTJ-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-YTJ-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-YTJ-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-YTJ-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-YTJ-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-YTJ-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-YTJ-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931070/inspirational-quote-spiral-notebook-yellow-train_bvoyum.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929933/spiral-notebook-yellow-train-inspirational-quote_l6ooxz.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "aesthetic journal",
      "life quote notebook",
      "travel vibe journal",
      "minimal notebook",
      "motivational diary",
      "gift journal"
    ],

    seo: {
      metaTitle: "Aesthetic Quote Journal | Yellow Train Life Journey Notebook",
      metaDescription:
        "A minimal aesthetic journal with a deep life quote and train illustration. Perfect for reflection, journaling, and gifting.",
      keywords: [
        "aesthetic notebook",
        "quote journal",
        "life journey diary",
        "minimal aesthetic journal"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-shiva-parvati-kailash-001",
    name: "Shiva Parvati Kailash Spiritual Art Journal",
    slug: "shiva-parvati-kailash-spiritual-art-journal",
    sku: "DJ-SPK-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Divine Art Collection",

    collections: {
      franchise: "Spiritual",
      theme: "Kailash Meditation Art",
      universe: "Hindu Spirituality",
      genre: "Devotional Art"
    },

    moods: [
      "Divine",
      "Peaceful",
      "Spiritual",
      "Calm",
      "Sacred"
    ],

    shortDescription:
      "A divine art journal featuring Lord Shiva and Goddess Parvati in a serene Kailash setting.",

    description:
      "Experience divine calm and spiritual connection with this premium journal featuring an artistic depiction of Lord Shiva and Goddess Parvati seated peacefully in the Himalayas. Inspired by Mount Kailash, this design symbolizes balance, devotion, and inner peace. Perfect for journaling, meditation notes, or daily reflections rooted in spirituality.",

    highlights: [
      "Premium matte laminated spiritual art cover",
      "Detailed Shiva-Parvati illustration inspired by Kailash",
      "High-quality pages for journaling & reflection",
      "Durable premium wiro binding",
      "Perfect for spiritual use, gifting & daily writing"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-SPK-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-SPK-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-SPK-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-SPK-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-SPK-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-SPK-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-SPK-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-SPK-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-SPK-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-SPK-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-SPK-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-SPK-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-SPK-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-SPK-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-SPK-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-SPK-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-SPK-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-SPK-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-SPK-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-SPK-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931058/shiva-parvati-himalayas-painting-notebook-cover_kf0vpg.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929928/shiva-parvati-mount-kailash-spiral-notebook_w1atcy.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "shiva parvati notebook",
      "spiritual journal",
      "devotional diary",
      "kailash art notebook",
      "hindu spiritual journal",
      "meditation journal"
    ],

    seo: {
      metaTitle: "Shiva Parvati Journal | Kailash Spiritual Art Notebook",
      metaDescription:
        "A divine spiritual journal featuring Shiva and Parvati in a serene Kailash setting. Perfect for meditation, journaling, and gifting.",
      keywords: [
        "shiva parvati journal",
        "spiritual notebook",
        "kailash diary",
        "devotional journal"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-david-graffiti-neoart-001",
    name: "David Graffiti Neo Art Aesthetic Journal",
    slug: "david-graffiti-neo-art-aesthetic-journal",
    sku: "DJ-DAVID-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Modern Art Collection",

    collections: {
      franchise: "Modern",
      theme: "Graffiti Neo Art",
      universe: "Renaissance x Street Art",
      genre: "Art Aesthetic"
    },

    moods: [
      "Bold",
      "Creative",
      "Edgy",
      "Artistic",
      "Modern"
    ],

    shortDescription:
      "A bold neo-art journal blending Michelangelo’s David with modern graffiti aesthetics.",

    description:
      "This premium journal reimagines the iconic Michelangelo's David with a striking graffiti twist. Combining classical art with contemporary street style, it creates a bold and expressive design perfect for artists, creators, and thinkers. Ideal for journaling, sketching, or capturing creative ideas with attitude.",

    highlights: [
      "Premium matte laminated modern art cover",
      "Fusion of classical sculpture and graffiti design",
      "High-quality pages for writing, sketching & creativity",
      "Durable premium wiro binding",
      "Perfect for artists, designers & creative minds"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-DAVID-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-DAVID-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-DAVID-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-DAVID-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-DAVID-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-DAVID-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-DAVID-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-DAVID-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-DAVID-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-DAVID-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-DAVID-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-DAVID-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-DAVID-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-DAVID-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-DAVID-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-DAVID-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-DAVID-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-DAVID-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-DAVID-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-DAVID-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931054/david-statue-graffiti-art-spiral-notebook_wq2te1.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929918/david-michelangelo-street-art-spiral-notebook_nyzmlm.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "david sculpture notebook",
      "modern art journal",
      "aesthetic notebook",
      "graffiti art diary",
      "artist sketch journal",
      "creative notebook"
    ],

    seo: {
      metaTitle: "David Graffiti Art Journal | Modern Aesthetic Notebook",
      metaDescription:
        "A bold fusion of Michelangelo’s David and graffiti art. Perfect for artists, creatives, and aesthetic journaling.",
      keywords: [
        "david notebook",
        "modern art journal",
        "graffiti notebook",
        "aesthetic art diary"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-remember-who-you-001",
    name: "Remember Who You Wanted To Be Motivational Journal",
    slug: "remember-who-you-wanted-to-be-motivational-journal",
    sku: "DJ-RWY-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Motivation Core Collection",

    collections: {
      franchise: "Quotes",
      theme: "Abstract Motivation",
      universe: "Self Growth",
      genre: "Motivational"
    },

    moods: [
      "Intense",
      "Driven",
      "Focused",
      "Reflective",
      "Powerful"
    ],

    shortDescription:
      "A powerful motivational journal designed to remind you of your goals and who you strive to become.",

    description:
      "Stay aligned with your purpose with this bold motivational journal featuring the impactful quote 'Remember Who You Wanted To Be'. Designed to push you beyond distractions and self-doubt, it serves as a daily reminder of your ambitions and discipline. Perfect for journaling, goal tracking, and building a focused mindset.",

    highlights: [
      "Premium matte laminated abstract design cover",
      "Bold motivational quote for daily inspiration",
      "High-quality pages for journaling & goal tracking",
      "Durable premium wiro binding",
      "Perfect for students, fitness enthusiasts & self-growth"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-RWY-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-RWY-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-RWY-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-RWY-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-RWY-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-RWY-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-RWY-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-RWY-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-RWY-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-RWY-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-RWY-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-RWY-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-RWY-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-RWY-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-RWY-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-RWY-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-RWY-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-RWY-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-RWY-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-RWY-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931058/motivational-journal-remember-who-you-wanted-to-be-spiral-cover_zx534p.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929923/motivational-spiral-notebook-remember-who-you-wanted-to-be_tncykl.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "motivational notebook",
      "self discipline journal",
      "goal setting diary",
      "gym motivation notebook",
      "study motivation journal",
      "self growth journal"
    ],

    seo: {
      metaTitle: "Motivational Journal | Remember Who You Wanted To Be Notebook",
      metaDescription:
        "A powerful motivational journal to keep you focused on your goals and growth. Perfect for students and self-discipline.",
      keywords: [
        "motivational journal",
        "self discipline notebook",
        "goal journal",
        "study motivation diary"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-ocean-sailor-octopus-001",
    name: "Love Me Like A Sailor Ocean Aesthetic Journal",
    slug: "love-me-like-a-sailor-ocean-aesthetic-journal",
    sku: "DJ-SAILOR-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Indie Aesthetic Collection",

    collections: {
      franchise: "Minimal",
      theme: "Octopus Sea Art",
      universe: "Ocean Aesthetic",
      genre: "Indie Aesthetic"
    },

    moods: [
      "Dreamy",
      "Mysterious",
      "Aesthetic",
      "Creative",
      "Moody"
    ],

    shortDescription:
      "A dreamy ocean-inspired journal with a quirky sailor quote and surreal octopus artwork.",

    description:
      "Dive into a world of imagination with this unique journal featuring an ocean scene blended with surreal octopus tentacles and the poetic line 'Love Me Like A Sailor'. Designed for creative minds and free spirits, this journal is perfect for writing, sketching, or capturing deep thoughts and ideas inspired by the sea.",

    highlights: [
      "Premium matte laminated indie aesthetic cover",
      "Unique ocean + surreal octopus artwork",
      "Creative and expressive visual storytelling design",
      "High-quality pages for journaling & sketching",
      "Durable premium wiro binding"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-SAILOR-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-SAILOR-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-SAILOR-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-SAILOR-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-SAILOR-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-SAILOR-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-SAILOR-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-SAILOR-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-SAILOR-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-SAILOR-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-SAILOR-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-SAILOR-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-SAILOR-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-SAILOR-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-SAILOR-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-SAILOR-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-SAILOR-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-SAILOR-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-SAILOR-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-SAILOR-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931073/love-me-like-a-sailor-nautical-spiral-notebook_eehdgd.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929925/octopus-tentacle-sea-spiral-notebook-love-me-like-a-sailor_m1zshd.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "ocean notebook",
      "aesthetic journal",
      "indie notebook",
      "creative diary",
      "sea aesthetic notebook",
      "artistic journal"
    ],

    seo: {
      metaTitle: "Ocean Aesthetic Journal | Love Me Like A Sailor Notebook",
      metaDescription:
        "A dreamy ocean-inspired journal with surreal octopus art and poetic aesthetic. Perfect for creative journaling and gifting.",
      keywords: [
        "ocean notebook",
        "indie aesthetic journal",
        "sea diary",
        "creative notebook"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-orange-wave-abstract-001",
    name: "Orange Wave Minimal Abstract Journal",
    slug: "orange-wave-minimal-abstract-journal",
    sku: "DJ-OWA-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Minimal Abstract Collection",

    collections: {
      franchise: "Graphic Art",
      theme: "Orange Waves",
      universe: "Minimal Aesthetic",
      genre: "Modern Minimal"
    },

    moods: [
      "Minimal",
      "Clean",
      "Modern",
      "Calm",
      "Aesthetic"
    ],

    shortDescription:
      "A clean and modern journal featuring a minimal orange wave abstract design.",

    description:
      "Designed for those who appreciate simplicity and modern aesthetics, this premium journal features a smooth flowing orange wave pattern on a clean background. Perfect for professionals, students, and creatives who prefer a minimal yet stylish notebook for writing, planning, or daily use.",

    highlights: [
      "Premium matte laminated minimal abstract cover",
      "Clean modern design with orange wave pattern",
      "Smooth high-quality pages for writing & planning",
      "Durable premium wiro binding",
      "Perfect for office, study & daily journaling"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-OWA-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-OWA-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-OWA-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-OWA-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-OWA-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-OWA-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-OWA-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-OWA-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-OWA-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-OWA-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-OWA-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-OWA-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-OWA-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-OWA-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-OWA-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-OWA-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-OWA-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-OWA-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-OWA-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-OWA-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931057/orange-wavy-abstract-spiral-notebook-wooden-background_y7wot9.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929925/orange-cream-wavy-pattern-spiral-notebook-retro-stationery_lwwatb.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "minimal notebook",
      "abstract journal",
      "modern notebook",
      "office notebook",
      "clean aesthetic journal",
      "professional diary"
    ],

    seo: {
      metaTitle: "Minimal Abstract Journal | Orange Wave Modern Notebook",
      metaDescription:
        "A clean and modern abstract journal with an orange wave design. Perfect for professionals, students, and minimal lovers.",
      keywords: [
        "minimal notebook",
        "abstract journal",
        "modern diary",
        "office notebook"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-saraswati-mandala-001",
    name: "Saraswati Mandala Spiritual Art Journal",
    slug: "saraswati-mandala-spiritual-art-journal",
    sku: "DJ-SARA-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Divine Art Collection",

    collections: {
      franchise: "Spiritual",
      theme: "Mandala Saraswati Art",
      universe: "Hindu Spirituality",
      genre: "Devotional Art"
    },

    moods: [
      "Peaceful",
      "Focused",
      "Spiritual",
      "Calm",
      "Inspired"
    ],

    shortDescription:
      "A divine journal featuring Goddess Saraswati in an intricate mandala art style symbolizing knowledge and creativity.",

    description:
      "Invoke wisdom, creativity, and focus with this beautifully designed journal featuring Goddess Saraswati in a detailed mandala art style. Symbolizing knowledge, music, and learning, this premium journal is perfect for students, writers, and creatives who seek inspiration and clarity in their daily work.",

    highlights: [
      "Premium matte laminated spiritual mandala cover",
      "Detailed Saraswati artwork symbolizing knowledge & wisdom",
      "High-quality pages for journaling, study & reflection",
      "Durable premium wiro binding",
      "Ideal for students, creatives & spiritual gifting"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-SARA-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-SARA-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-SARA-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-SARA-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-SARA-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-SARA-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-SARA-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-SARA-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-SARA-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-SARA-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-SARA-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-SARA-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-SARA-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-SARA-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-SARA-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-SARA-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-SARA-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-SARA-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-SARA-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-SARA-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931057/saraswati-goddess-illustration-spiral-notebook_i63mnb.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929927/saraswati-mandala-art-spiral-notebook_bsxz26.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "saraswati notebook",
      "student journal",
      "study notebook",
      "spiritual journal",
      "knowledge diary",
      "exam motivation notebook"
    ],

    seo: {
      metaTitle: "Saraswati Journal | Spiritual Notebook for Study & Focus",
      metaDescription:
        "A divine Saraswati journal designed for students and creatives. Perfect for study, focus, and spiritual inspiration.",
      keywords: [
        "saraswati notebook",
        "study journal",
        "spiritual notebook",
        "exam diary"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-spiderman-power-001",
    name: "Spider Hero Power Quote Premium Journal",
    slug: "spider-hero-power-quote-premium-journal",
    sku: "DJ-SPIDEY-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Superhero Collection",

    collections: {
      franchise: "Modern",
      theme: "Power Responsibility Quote",
      universe: "Superhero",
      genre: "Motivational"
    },

    moods: [
      "Powerful",
      "Bold",
      "Motivational",
      "Heroic",
      "Focused"
    ],

    shortDescription:
      "A bold superhero-inspired journal featuring a powerful quote about responsibility and strength.",

    description:
      "Unleash your inner hero with this premium journal inspired by the iconic spider hero. Featuring a minimal yet powerful design and the legendary quote 'With great power comes great responsibilities', this notebook is perfect for students, creators, and dreamers striving to achieve greatness with purpose.",

    highlights: [
      "Premium matte laminated superhero design cover",
      "Minimal bold spider emblem aesthetic",
      "Iconic motivational quote for daily inspiration",
      "High-quality pages for journaling & planning",
      "Durable premium wiro binding"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-SPIDEY-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-SPIDEY-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-SPIDEY-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-SPIDEY-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-SPIDEY-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-SPIDEY-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-SPIDEY-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-SPIDEY-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-SPIDEY-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-SPIDEY-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-SPIDEY-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-SPIDEY-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-SPIDEY-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-SPIDEY-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-SPIDEY-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-SPIDEY-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-SPIDEY-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-SPIDEY-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-SPIDEY-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-SPIDEY-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931076/spider-man-themed-red-spiral-notebook-great-power-quote_py3k1u.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929929/spider-man-themed-spiral-notebook-red-quote_puupsv.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "spiderman notebook",
      "superhero journal",
      "marvel style notebook",
      "motivational notebook",
      "student journal",
      "gift notebook"
    ],

    seo: {
      metaTitle: "Spider Hero Journal | Motivational Superhero Notebook",
      metaDescription:
        "A bold superhero-inspired journal with a powerful quote. Perfect for students, fans, and motivation seekers.",
      keywords: [
        "spiderman notebook",
        "superhero journal",
        "marvel notebook",
        "motivational diary"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-sunrise-landscape-art-001",
    name: "Sunrise Mountain Landscape Art Journal",
    slug: "sunrise-mountain-landscape-art-journal",
    sku: "DJ-SUNLAND-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Nature Art Collection",

    collections: {
      franchise: "Graphic Art",
      theme: "Sunrise Mountains",
      universe: "Nature",
      genre: "Scenic Illustration"
    },

    moods: [
      "Peaceful",
      "Adventurous",
      "Creative",
      "Refreshing",
      "Inspired"
    ],

    shortDescription:
      "A vibrant journal featuring a scenic sunrise over mountains, designed to inspire creativity and calm.",

    description:
      "Capture your thoughts and ideas in this beautifully illustrated journal inspired by nature’s serenity. Featuring a bold sunrise over scenic mountains and lush valleys, this premium notebook is perfect for writers, travelers, and creatives who draw inspiration from the outdoors and vibrant art.",

    highlights: [
      "Premium matte laminated scenic art cover",
      "Vibrant sunrise and mountain landscape illustration",
      "Smooth high-quality pages for journaling & sketching",
      "Durable premium wiro binding",
      "Perfect for travel journaling & creative writing"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-SUNLAND-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-SUNLAND-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-SUNLAND-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-SUNLAND-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-SUNLAND-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-SUNLAND-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-SUNLAND-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-SUNLAND-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-SUNLAND-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-SUNLAND-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-SUNLAND-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-SUNLAND-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-SUNLAND-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-SUNLAND-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-SUNLAND-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-SUNLAND-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-SUNLAND-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-SUNLAND-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-SUNLAND-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-SUNLAND-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931086/vibrant-mountain-landscape-spiral-notebook_kvtqft.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929931/spiral-notebook-landscape-illustration-cover_oihxtu.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "landscape notebook",
      "nature journal",
      "travel diary",
      "aesthetic notebook",
      "art journal",
      "creative notebook"
    ],

    seo: {
      metaTitle: "Nature Landscape Journal | Sunrise Mountain Notebook",
      metaDescription:
        "A vibrant landscape journal featuring sunrise mountains. Perfect for travel, journaling, and creative inspiration.",
      keywords: [
        "nature notebook",
        "landscape journal",
        "travel diary",
        "aesthetic notebook"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-tree-canopy-nature-001",
    name: "Tree Canopy Nature Art Journal",
    slug: "tree-canopy-nature-art-journal",
    sku: "DJ-TREE-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Nature Art Collection",

    collections: {
      franchise: "Graphic Art",
      theme: "Tree Canopy",
      universe: "Nature",
      genre: "Botanical Art"
    },

    moods: [
      "Calm",
      "Peaceful",
      "Grounded",
      "Mindful",
      "Refreshing"
    ],

    shortDescription:
      "A calming journal inspired by lush tree canopies, designed to bring peace and clarity to your writing.",

    description:
      "Reconnect with nature through this beautifully illustrated journal featuring an intricate tree canopy design. Inspired by the tranquility of forests and the beauty of natural patterns, this premium notebook is perfect for mindful journaling, sketching, and daily reflection.",

    highlights: [
      "Premium matte laminated botanical art cover",
      "Intricate tree canopy illustration for a calming feel",
      "Smooth high-quality pages for journaling & sketching",
      "Durable premium wiro binding",
      "Perfect for mindfulness, journaling & gifting"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-TREE-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-TREE-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-TREE-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-TREE-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-TREE-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-TREE-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-TREE-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-TREE-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-TREE-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-TREE-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-TREE-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-TREE-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-TREE-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-TREE-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-TREE-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-TREE-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-TREE-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-TREE-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-TREE-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-TREE-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931059/tree-canopy-spiral-notebook-design_r8hs0z.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929941/tree-canopy-design-spiral-notebooks-on-wood_ujgjnz.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "nature notebook",
      "botanical journal",
      "eco friendly diary",
      "mindfulness journal",
      "aesthetic notebook",
      "green theme notebook"
    ],

    seo: {
      metaTitle: "Nature Journal | Tree Canopy Botanical Notebook",
      metaDescription:
        "A calming nature journal featuring a tree canopy design. Perfect for mindfulness, journaling, and nature lovers.",
      keywords: [
        "nature notebook",
        "botanical journal",
        "green aesthetic diary",
        "mindfulness notebook"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-travel-wanderlust-001",
    name: "Travel Wanderlust Scrapbook Journal",
    slug: "travel-wanderlust-scrapbook-journal",
    sku: "DJ-TRAVEL-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Travel Collection",

    collections: {
      franchise: "Travel",
      theme: "Wanderlust Scrapbook",
      universe: "Travel",
      genre: "Vintage Travel"
    },

    moods: [
      "Adventurous",
      "Excited",
      "Creative",
      "Nostalgic",
      "Inspired"
    ],

    shortDescription:
      "A travel-inspired journal with scrapbook-style elements perfect for capturing memories and adventures.",

    description:
      "Document your journeys and memories with this vibrant travel-themed journal featuring a collage of maps, passports, tickets, and wanderlust elements. Designed for travelers, dreamers, and explorers, this premium notebook is perfect for planning trips, journaling experiences, or capturing unforgettable moments.",

    highlights: [
      "Premium matte laminated travel scrapbook cover",
      "Vintage map, passport & ticket collage design",
      "Perfect for travel journaling & memory keeping",
      "Smooth high-quality pages for writing & sketching",
      "Durable premium wiro binding"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-TRAVEL-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-TRAVEL-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-TRAVEL-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-TRAVEL-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-TRAVEL-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-TRAVEL-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-TRAVEL-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-TRAVEL-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-TRAVEL-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-TRAVEL-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-TRAVEL-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-TRAVEL-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-TRAVEL-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-TRAVEL-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-TRAVEL-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-TRAVEL-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-TRAVEL-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-TRAVEL-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-TRAVEL-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-TRAVEL-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931081/travel-themed-spiral-journal-notebook-cover_vryqrh.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929939/travel-themed-spiral-notebook-collage-design_eod3my.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "travel journal",
      "wanderlust notebook",
      "scrapbook diary",
      "travel planner",
      "memory journal",
      "aesthetic notebook"
    ],

    seo: {
      metaTitle: "Travel Journal | Wanderlust Scrapbook Notebook",
      metaDescription:
        "A travel-themed scrapbook journal perfect for documenting trips, memories, and adventures.",
      keywords: [
        "travel journal",
        "wanderlust notebook",
        "travel diary",
        "scrapbook journal"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-trust-flow-life-001",
    name: "Trust the Flow of Life Affirmation Journal",
    slug: "trust-the-flow-of-life-affirmation-journal",
    sku: "DJ-FLOW-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Mindfulness Collection",

    collections: {
      franchise: "Quotes",
      theme: "Trust the Flow",
      universe: "Self Growth",
      genre: "Mindfulness"
    },

    moods: [
      "Calm",
      "Healing",
      "Positive",
      "Peaceful",
      "Balanced"
    ],

    shortDescription:
      "A calming affirmation journal designed to inspire peace, trust, and mindful living.",

    description:
      "Embrace calmness and trust the journey with this beautifully designed affirmation journal. Featuring a minimal aesthetic and the uplifting message 'Trust the flow of life', this premium notebook is perfect for mindfulness journaling, self-reflection, and daily positivity.",

    highlights: [
      "Premium matte laminated minimal affirmation cover",
      "Soft calming color palette for a peaceful feel",
      "Positive affirmation design for daily motivation",
      "Smooth high-quality pages for journaling & reflection",
      "Durable premium wiro binding"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-FLOW-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-FLOW-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-FLOW-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-FLOW-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-FLOW-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-FLOW-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-FLOW-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-FLOW-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-FLOW-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-FLOW-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-FLOW-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-FLOW-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-FLOW-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-FLOW-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-FLOW-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-FLOW-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-FLOW-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-FLOW-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-FLOW-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-FLOW-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931060/trust-the-flow-of-life-inspirational-spiral-notebook_nvuwdn.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929942/trust-the-flow-of-life-motivational-spiral-notebook_lhort5.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "affirmation journal",
      "mindfulness notebook",
      "self care diary",
      "mental wellness journal",
      "positive journal",
      "aesthetic notebook"
    ],

    seo: {
      metaTitle: "Affirmation Journal | Trust the Flow of Life Notebook",
      metaDescription:
        "A calming affirmation journal designed for mindfulness, positivity, and self-growth.",
      keywords: [
        "affirmation journal",
        "mindfulness notebook",
        "self care diary",
        "positive journal"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-vintage-botanical-001",
    name: "Vintage Botanical Floral Journal",
    slug: "vintage-botanical-floral-journal",
    sku: "DJ-VBOT-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Vintage Collection",

    collections: {
      franchise: "Floral",
      theme: "Vintage Floral",
      universe: "Nature",
      genre: "Cottagecore Vintage"
    },

    moods: [
      "Elegant",
      "Calm",
      "Aesthetic",
      "Classic",
      "Peaceful"
    ],

    shortDescription:
      "A timeless vintage botanical journal with detailed floral illustrations for a classic aesthetic experience.",

    description:
      "Step into a world of timeless beauty with this vintage botanical journal featuring intricate floral illustrations inspired by classic botanical art. Designed for those who love elegance and nature, this premium notebook is perfect for journaling, sketching, or capturing ideas in a refined and aesthetic way.",

    highlights: [
      "Premium matte laminated vintage floral cover",
      "Detailed botanical illustration with classic aesthetic",
      "Elegant label space for personalization",
      "Smooth high-quality pages for journaling & sketching",
      "Durable premium wiro binding"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-VBOT-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-VBOT-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-VBOT-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-VBOT-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-VBOT-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-VBOT-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-VBOT-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-VBOT-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-VBOT-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-VBOT-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-VBOT-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-VBOT-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-VBOT-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-VBOT-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-VBOT-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-VBOT-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-VBOT-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-VBOT-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-VBOT-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-VBOT-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931062/vintage-botanical-floral--notebook_aoflud.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929944/vintage-botanical-floral-spiral-notebook-wooden-background_xhwsk2.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "vintage notebook",
      "botanical journal",
      "floral diary",
      "aesthetic notebook",
      "cottagecore journal",
      "gift journal"
    ],

    seo: {
      metaTitle: "Vintage Botanical Journal | Floral Aesthetic Notebook",
      metaDescription:
        "A timeless vintage botanical journal with elegant floral design. Perfect for journaling, sketching, and gifting.",
      keywords: [
        "vintage notebook",
        "botanical journal",
        "floral diary",
        "aesthetic journal"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-gods-plan-faith-001",
    name: "God’s Plan Faith & Strength Journal",
    slug: "gods-plan-faith-strength-journal",
    sku: "DJ-GPLAN-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Faith & Motivation Collection",

    collections: {
      franchise: "Modern",
      theme: "God's Plan",
      universe: "Spiritual Motivation",
      genre: "Devotional Inspiration"
    },

    moods: [
      "Faith",
      "Motivation",
      "Power",
      "Devotion",
      "Strength"
    ],

    shortDescription:
      "A powerful journal blending faith, strength, and motivation with a divine message of trust and surrender.",

    description:
      "Channel strength, faith, and resilience with this impactful journal featuring the message 'God’s plan is always better than yours'. Inspired by devotion and inner strength, this notebook is perfect for journaling, reflection, and staying grounded through life’s challenges.",

    highlights: [
      "Powerful faith-driven motivational cover",
      "Spiritual and strength-based visual theme",
      "Perfect for reflection, journaling & goal setting",
      "Smooth high-quality pages for everyday use",
      "Durable premium wiro binding"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-GPLAN-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-GPLAN-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-GPLAN-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-GPLAN-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-GPLAN-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-GPLAN-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-GPLAN-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-GPLAN-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-GPLAN-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-GPLAN-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-GPLAN-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-GPLAN-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-GPLAN-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-GPLAN-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-GPLAN-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-GPLAN-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-GPLAN-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-GPLAN-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-GPLAN-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-GPLAN-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931086/virat-kohli-hanuman-inspirational-quote-notebook_rmmun5.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929945/virat-kohli-hanuman-spiritual-cricket-notebook_uervfy.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "faith journal",
      "spiritual notebook",
      "motivational diary",
      "god quotes notebook",
      "devotional journal",
      "inspirational notebook"
    ],

    seo: {
      metaTitle: "God’s Plan Journal | Faith & Motivation Notebook",
      metaDescription:
        "Stay grounded and inspired with this faith-driven journal featuring a powerful message of trust and strength.",
      keywords: [
        "faith journal",
        "spiritual notebook",
        "god quotes diary",
        "motivational journal"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-explore-nature-001",
    name: "I Just Want to Explore Adventure Journal",
    slug: "i-just-want-to-explore-adventure-journal",
    sku: "DJ-EXPLORE-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Adventure Collection",

    collections: {
      franchise: "Travel",
      theme: "Explore Nature",
      universe: "Adventure & Travel",
      genre: "Outdoor Lifestyle"
    },

    moods: [
      "Adventurous",
      "Free",
      "Inspired",
      "Wanderlust",
      "Energetic"
    ],

    shortDescription:
      "A bold adventure journal for explorers, dreamers, and nature lovers.",

    description:
      "Fuel your wanderlust with this stunning adventure-themed journal featuring the message 'I just want to explore'. Designed for those who crave freedom and discovery, this notebook is perfect for travel notes, journaling, or capturing ideas on the go.",

    highlights: [
      "Vibrant nature and mountain landscape cover",
      "Adventure-inspired typography for a bold look",
      "Perfect for travel journaling and daily notes",
      "Smooth high-quality pages for writing & sketching",
      "Durable premium wiro binding"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-EXPLORE-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-EXPLORE-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-EXPLORE-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-EXPLORE-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-EXPLORE-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-EXPLORE-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-EXPLORE-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-EXPLORE-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-EXPLORE-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-EXPLORE-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-EXPLORE-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-EXPLORE-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-EXPLORE-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-EXPLORE-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-EXPLORE-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-EXPLORE-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-EXPLORE-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-EXPLORE-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-EXPLORE-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-EXPLORE-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931067/explore-mountain-landscape-spiral-notebook-wood-background_xanm07.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929920/i-just-want-to-explore-mountain-landscape-spiral-notebook_uic5jx.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "travel journal",
      "adventure notebook",
      "wanderlust diary",
      "nature notebook",
      "explore journal",
      "aesthetic travel notebook"
    ],

    seo: {
      metaTitle: "Explore Adventure Journal | Travel & Nature Notebook",
      metaDescription:
        "A bold and inspiring adventure journal for travel lovers and explorers.",
      keywords: [
        "travel journal",
        "adventure notebook",
        "wanderlust diary",
        "nature journal"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-karma-mirror-001",
    name: "Karma Mirror Attitude Journal",
    slug: "karma-mirror-attitude-journal",
    sku: "DJ-KARMA-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Bold Quotes Collection",

    collections: {
      franchise: "Modern",
      theme: "Karma Mirror",
      universe: "Self Expression",
      genre: "Bold Aesthetic"
    },

    moods: [
      "Bold",
      "Confident",
      "Savage",
      "Expressive",
      "Empowered"
    ],

    shortDescription:
      "A bold statement journal that reflects attitude, confidence, and unapologetic self-expression.",

    description:
      "Make a statement with this striking journal featuring the quote 'Karma isn't a b*tch, it's a mirror'. Designed for those who embrace confidence and self-awareness, this notebook blends bold typography with aesthetic design—perfect for journaling thoughts, ideas, and unapologetic expression.",

    highlights: [
      "Bold typography with attitude-driven quote",
      "Modern aesthetic teal and yellow design",
      "Perfect for self-expression and journaling",
      "Smooth high-quality pages for daily writing",
      "Durable premium wiro binding"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-KARMA-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-KARMA-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-KARMA-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-KARMA-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-KARMA-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-KARMA-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-KARMA-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-KARMA-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-KARMA-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-KARMA-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-KARMA-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-KARMA-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-KARMA-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-KARMA-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-KARMA-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-KARMA-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-KARMA-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-KARMA-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-KARMA-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-KARMA-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931072/karma-isnt-a-bitch-turquoise-spiral-notebook_gxugg0.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929921/karma-spiral-notebook-teal-cover_wb4qlu.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "karma journal",
      "attitude notebook",
      "bold quotes diary",
      "aesthetic journal",
      "self expression notebook",
      "genz notebook"
    ],

    seo: {
      metaTitle: "Karma Journal | Bold Attitude Notebook",
      metaDescription:
        "A bold and aesthetic journal featuring a powerful karma quote. Perfect for self-expression and confidence.",
      keywords: [
        "karma notebook",
        "attitude journal",
        "bold quotes diary",
        "genz notebook"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-out-of-mind-001",
    name: "Out of Mind Retro Abstract Journal",
    slug: "out-of-mind-retro-abstract-journal",
    sku: "DJ-OOM-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Abstract Collection",

    collections: {
      franchise: "Modern",
      theme: "Out of Mind",
      universe: "Art & Creativity",
      genre: "Retro Abstract"
    },

    moods: [
      "Creative",
      "Abstract",
      "Expressive",
      "Chill",
      "Aesthetic"
    ],

    shortDescription:
      "A retro abstract journal for creative minds who think beyond limits.",

    description:
      "Unleash your creativity with this bold retro abstract journal featuring the phrase 'Out of Mind'. Designed for thinkers, artists, and free spirits, this notebook blends expressive typography with fluid abstract patterns—perfect for journaling, sketching, and capturing ideas beyond the ordinary.",

    highlights: [
      "Retro abstract wavy design with bold typography",
      "Creative and expressive aesthetic for Gen-Z users",
      "Perfect for journaling, sketching & brainstorming",
      "Smooth high-quality pages for everyday use",
      "Durable premium wiro binding"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-OOM-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-OOM-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-OOM-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-OOM-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-OOM-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-OOM-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-OOM-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-OOM-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-OOM-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-OOM-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-OOM-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-OOM-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-OOM-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-OOM-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-OOM-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-OOM-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-OOM-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-OOM-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-OOM-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-OOM-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931075/retro-wavy-spiral-notebook-out-of-mind_wgut3n.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929926/out-of-mind-spiral-notebook-psychedelic-design_fkpqlu.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "abstract notebook",
      "retro journal",
      "creative notebook",
      "aesthetic journal",
      "genz notebook",
      "art notebook"
    ],

    seo: {
      metaTitle: "Retro Abstract Journal | Out of Mind Notebook",
      metaDescription:
        "A bold retro abstract journal designed for creative minds and self-expression.",
      keywords: [
        "abstract notebook",
        "retro journal",
        "creative notebook",
        "aesthetic journal"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-flame-core-001",
    name: "Flame Core Minimal Aesthetic Journal",
    slug: "flame-core-minimal-aesthetic-journal",
    sku: "DJ-FLAME-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Minimal Bold Collection",

    collections: {
      franchise: "Minimal",
      theme: "Flame Core",
      universe: "Street & Urban",
      genre: "Edgy Minimal"
    },

    moods: [
      "Bold",
      "Energetic",
      "Edgy",
      "Minimal",
      "Powerful"
    ],

    shortDescription:
      "A bold minimal journal featuring a striking flame design for a powerful aesthetic statement.",

    description:
      "Ignite your creativity with this flame-inspired journal designed for those who love bold and minimal aesthetics. Featuring a striking fire graphic on a clean black background, this notebook is perfect for journaling, sketching, or making a statement wherever you go.",

    highlights: [
      "Bold flame graphic with minimal black background",
      "High-contrast edgy aesthetic design",
      "Perfect for students, creatives & daily journaling",
      "Smooth high-quality pages for writing & sketching",
      "Durable premium wiro binding"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-FLAME-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-FLAME-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-FLAME-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-FLAME-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-FLAME-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-FLAME-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-FLAME-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-FLAME-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-FLAME-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-FLAME-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-FLAME-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-FLAME-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-FLAME-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-FLAME-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-FLAME-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-FLAME-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-FLAME-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-FLAME-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-FLAME-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-FLAME-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931068/fire-flame-illustration-spiral-notebook-on-wood_z6yaee.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929930/spiral-notebook-flame-design-cover_jlbiqx.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "flame notebook",
      "minimal aesthetic journal",
      "edgy notebook",
      "street style notebook",
      "cool notebook",
      "black aesthetic notebook"
    ],

    seo: {
      metaTitle: "Flame Journal | Minimal Edgy Notebook",
      metaDescription:
        "A bold minimal flame design notebook perfect for edgy aesthetics and daily journaling.",
      keywords: [
        "flame notebook",
        "black aesthetic journal",
        "minimal notebook",
        "edgy journal"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-stay-weird-001",
    name: "Stay Weird Quirky Aesthetic Journal",
    slug: "stay-weird-quirky-aesthetic-journal",
    sku: "DJ-WEIRD-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Quirky Collection",

    collections: {
      franchise: "Quotes",
      theme: "Stay Weird",
      universe: "Self Expression",
      genre: "Quirky Aesthetic"
    },

    moods: [
      "Fun",
      "Playful",
      "Expressive",
      "Unique",
      "Chill"
    ],

    shortDescription:
      "A fun and quirky journal for those who embrace their uniqueness and love to stand out.",

    description:
      "Celebrate your individuality with this bold and playful journal featuring the phrase 'Stay Weird'. Designed for free spirits and creative minds, this notebook is perfect for journaling, doodling, or capturing thoughts in your own unique way.",

    highlights: [
      "Bold playful typography with quirky design",
      "Minimal yet expressive aesthetic",
      "Perfect for journaling, doodling & creative notes",
      "Smooth high-quality pages for everyday use",
      "Durable premium wiro binding"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-WEIRD-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-WEIRD-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-WEIRD-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-WEIRD-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-WEIRD-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-WEIRD-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-WEIRD-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-WEIRD-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-WEIRD-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-WEIRD-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-WEIRD-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-WEIRD-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-WEIRD-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-WEIRD-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-WEIRD-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-WEIRD-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-WEIRD-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-WEIRD-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-WEIRD-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-WEIRD-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931078/stay-weird-spiral-notebook-mockup-wooden-background_rtmryj.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929936/stay-weird-retro-spiral-notebook-cream-red_vn9qok.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "quirky notebook",
      "stay weird journal",
      "fun notebook",
      "genz notebook",
      "aesthetic journal",
      "creative diary"
    ],

    seo: {
      metaTitle: "Stay Weird Journal | Quirky Aesthetic Notebook",
      metaDescription:
        "A fun and expressive journal for those who love to stay unique and creative.",
      keywords: [
        "stay weird notebook",
        "quirky journal",
        "fun diary",
        "genz notebook"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 120,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-hellfire-gothic-001",
    name: "Hellfire Gothic Tattoo Aesthetic Journal",
    slug: "hellfire-gothic-tattoo-aesthetic-journal",
    sku: "DJ-HELLFIRE-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Dark Aesthetic Collection",

    collections: {
      franchise: "Pop Culture",
      theme: "Gothic Tattoo",
      universe: "Dark Fantasy",
      genre: "Alt / Punk"
    },

    moods: [
      "Dark",
      "Rebellious",
      "Edgy",
      "Mystic",
      "Bold"
    ],

    shortDescription:
      "A dark gothic journal inspired by tattoo art and Hellfire aesthetics, perfect for bold personalities.",

    description:
      "Unleash your dark side with this Hellfire-inspired journal featuring gothic tattoo-style artwork. With bold elements like skulls, weapons, and mystical symbols, this notebook is perfect for those who embrace alternative aesthetics, creativity, and rebellion.",

    highlights: [
      "Gothic tattoo-style artwork with bold detailing",
      "Dark fantasy & alt aesthetic appeal",
      "Perfect for journaling, sketching & creative expression",
      "High-quality smooth pages",
      "Durable premium wiro binding"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-HELLFIRE-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-HELLFIRE-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-HELLFIRE-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-HELLFIRE-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-HELLFIRE-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-HELLFIRE-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-HELLFIRE-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-HELLFIRE-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-HELLFIRE-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-HELLFIRE-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-HELLFIRE-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-HELLFIRE-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-HELLFIRE-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-HELLFIRE-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-HELLFIRE-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-HELLFIRE-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-HELLFIRE-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-HELLFIRE-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-HELLFIRE-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-HELLFIRE-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931079/stranger-things-hellfire-club-spiral-notebook_x3bmkw.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929937/stranger-things-hellfire-club-spiral-notebook-tattoo-art_avgsih.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "hellfire notebook",
      "gothic journal",
      "dark aesthetic notebook",
      "stranger things notebook",
      "punk style journal",
      "tattoo art notebook"
    ],

    seo: {
      metaTitle: "Hellfire Gothic Journal | Dark Aesthetic Notebook",
      metaDescription:
        "A bold gothic tattoo-style notebook inspired by dark aesthetics and Hellfire vibes.",
      keywords: [
        "hellfire notebook",
        "dark aesthetic journal",
        "gothic notebook",
        "punk journal"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.8,
    reviewsCount: 95,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-geeta-karma-001",
    name: "Karma Philosophy Gita Art Journal",
    slug: "karma-philosophy-gita-art-journal",
    sku: "DJ-KARMA-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Spiritual Wisdom Collection",

    collections: {
      franchise: "Spiritual",
      theme: "Karma Philosophy",
      universe: "Indian Spiritual",
      genre: "Philosophical Art"
    },

    moods: [
      "Spiritual",
      "Calm",
      "Wise",
      "Reflective",
      "Powerful"
    ],

    shortDescription:
      "A spiritually inspired journal featuring the timeless wisdom of Karma from the Bhagavad Gita.",

    description:
      "Embrace the profound teachings of the Bhagavad Gita with this beautifully designed journal. Featuring the iconic Karma shloka 'Karmanye Vadhikaraste', this notebook serves as a daily reminder to focus on actions, not outcomes. Perfect for journaling, reflection, and mindful writing.",

    highlights: [
      "Features Bhagavad Gita Karma shloka artwork",
      "Rich traditional aesthetic with modern design",
      "Perfect for journaling, reflection & gifting",
      "High-quality smooth pages",
      "Durable premium wiro binding"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-KARMA-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-KARMA-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-KARMA-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-KARMA-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-KARMA-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-KARMA-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-KARMA-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-KARMA-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-KARMA-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-KARMA-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-KARMA-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-KARMA-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-KARMA-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-KARMA-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-KARMA-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-KARMA-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-KARMA-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-KARMA-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-KARMA-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-KARMA-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931065/bhagavad-gita-krishna-verse-spiritual-notebook_qa6yv2.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929934/spiritual-sanskrit-verse-spiral-notebook-design_ht6p1r.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "bhagavad gita notebook",
      "karma journal",
      "spiritual notebook",
      "indian aesthetic journal",
      "motivational diary",
      "gift notebook india"
    ],

    seo: {
      metaTitle: "Karma Gita Journal | Spiritual Notebook India",
      metaDescription:
        "A spiritually inspired journal featuring Bhagavad Gita's Karma philosophy for mindful living.",
      keywords: [
        "bhagavad gita notebook",
        "karma journal",
        "spiritual diary india",
        "motivational notebook"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 150,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-earth-chaos-art-001",
    name: "The Earth Without Art Typography Journal",
    slug: "earth-without-art-typography-journal",
    sku: "DJ-EARTH-ART-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Art Expression Collection",

    collections: {
      franchise: "Quotes",
      theme: "Art Philosophy",
      universe: "Creative Expression",
      genre: "Modern Typography"
    },

    moods: [
      "Creative",
      "Expressive",
      "Bold",
      "Artistic",
      "Thoughtful"
    ],

    shortDescription:
      "A bold artistic journal that celebrates creativity with expressive typography and vibrant design.",

    description:
      "Make a statement with this striking journal featuring the phrase 'The Earth Without Art is Just Eh'. Designed with fluid, paint-like typography, this notebook is perfect for artists, thinkers, and creatives who see the world differently.",

    highlights: [
      "Unique paint-style typography design",
      "Bold artistic and expressive aesthetic",
      "Perfect for artists, designers & creatives",
      "Smooth high-quality pages for writing & sketching",
      "Durable premium wiro binding"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-EARTH-ART-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-EARTH-ART-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-EARTH-ART-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-EARTH-ART-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-EARTH-ART-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-EARTH-ART-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-EARTH-ART-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-EARTH-ART-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-EARTH-ART-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-EARTH-ART-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-EARTH-ART-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-EARTH-ART-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-EARTH-ART-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-EARTH-ART-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-EARTH-ART-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-EARTH-ART-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-EARTH-ART-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-EARTH-ART-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-EARTH-ART-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-EARTH-ART-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931081/the-earth-without-art-is-just-eh-hand-lettered-quote_doiimb.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929920/earth-without-art-quote-spiral-notebook_lvwycr.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "art notebook",
      "creative journal",
      "artist diary",
      "typography notebook",
      "design notebook",
      "aesthetic journal"
    ],

    seo: {
      metaTitle: "Art Typography Journal | Creative Notebook",
      metaDescription:
        "A bold artistic journal designed for creatives who love expressive typography and design.",
      keywords: [
        "art notebook",
        "creative journal",
        "artist notebook",
        "typography journal"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.8,
    reviewsCount: 90,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-yes-you-can-001",
    name: "Yes You Can Floral Motivation Journal",
    slug: "yes-you-can-floral-motivation-journal",
    sku: "DJ-YESCAN-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Motivation Collection",

    collections: {
      franchise: "Quotes",
      theme: "Yes You Can",
      universe: "Positive Mindset",
      genre: "Floral Aesthetic"
    },

    moods: [
      "Positive",
      "Motivating",
      "Uplifting",
      "Calm",
      "Bright"
    ],

    shortDescription:
      "A bright and uplifting journal with floral typography to inspire positivity every day.",

    description:
      "Start your day with confidence and positivity using this beautifully designed journal featuring the phrase 'Yes You Can'. With vibrant floral typography and a clean aesthetic, this notebook is perfect for journaling, goal setting, and daily motivation.",

    highlights: [
      "Vibrant floral typography design",
      "Clean and aesthetic motivational theme",
      "Perfect for journaling, planning & goal setting",
      "High-quality smooth pages",
      "Durable premium wiro binding"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-YESCAN-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-YESCAN-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-YESCAN-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-YESCAN-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-YESCAN-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-YESCAN-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-YESCAN-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-YESCAN-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-YESCAN-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-YESCAN-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-YESCAN-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-YESCAN-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-YESCAN-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-YESCAN-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-YESCAN-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-YESCAN-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-YESCAN-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-YESCAN-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-YESCAN-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-YESCAN-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931088/yes-you-can-floral-typography-motivational-notebook_yezbde.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929946/yes-you-can-floral-motivational-notebook_l4sacd.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "motivational notebook",
      "yes you can journal",
      "positive diary",
      "floral notebook",
      "student journal",
      "inspirational notebook"
    ],

    seo: {
      metaTitle: "Yes You Can Journal | Motivational Notebook",
      metaDescription:
        "A bright and inspiring floral journal to keep you motivated and positive every day.",
      keywords: [
        "motivational notebook",
        "yes you can journal",
        "positive diary",
        "student notebook"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 140,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-mischief-magic-001",
    name: "Mischief Magic Quote Journal",
    slug: "mischief-magic-quote-journal",
    sku: "DJ-MISCHIEF-001",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Fantasy Collection",

    collections: {
      franchise: "Quotes",
      theme: "Mischief Quote",
      universe: "Fantasy Magic",
      genre: "Fandom Inspired"
    },

    moods: [
      "Magical",
      "Nostalgic",
      "Playful",
      "Mysterious",
      "Adventurous"
    ],

    shortDescription:
      "A magical quote journal inspired by classic wizarding adventures and mischief-filled stories.",

    description:
      "Step into a world of magic and mystery with this beautifully designed journal inspired by iconic wizarding quotes. Perfect for fans of fantasy, storytelling, and adventure, this notebook brings a nostalgic charm to your everyday writing.",

    highlights: [
      "Classic magical quote inspired design",
      "Elegant vintage typography aesthetic",
      "Perfect for fantasy lovers & journaling",
      "Smooth high-quality pages",
      "Durable premium wiro binding"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240],
        A4: [120, 160, 200, 240]
      }
    },

    variants: [
      { variantId: "DJ-MISCHIEF-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-MISCHIEF-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-MISCHIEF-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-MISCHIEF-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-MISCHIEF-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-MISCHIEF-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-MISCHIEF-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-MISCHIEF-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-MISCHIEF-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-MISCHIEF-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-MISCHIEF-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-MISCHIEF-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-MISCHIEF-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-MISCHIEF-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-MISCHIEF-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-MISCHIEF-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-MISCHIEF-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-MISCHIEF-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-MISCHIEF-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-MISCHIEF-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 240,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931070/harry-potter-marauders-map-quote-spiral-notebook_lc4eqv.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929920/harry-potter-marauders-map-spiral-notebook_l75god.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "magic notebook",
      "fantasy journal",
      "wizard notebook",
      "mischief quote notebook",
      "fantasy diary",
      "gift notebook"
    ],

    seo: {
      metaTitle: "Magic Quote Journal | Fantasy Notebook",
      metaDescription:
        "A magical fantasy-inspired journal perfect for fans of adventure and storytelling.",
      keywords: [
        "magic notebook",
        "fantasy journal",
        "wizard notebook",
        "quote diary"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 135,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-starry-celestial-002",
    name: "Starry Night Celestial Quote Journal",
    slug: "starry-night-celestial-quote-journal",
    sku: "DJ-STARRY-002",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Artistic Impression Collection",

    collections: {
      franchise: "Modern",
      theme: "Starry Night Quote",
      universe: "Celestial Wonders",
      genre: "Artistic & Motivational"
    },

    moods: [
      "Inspirational",
      "Artistic",
      "Dreamy",
      "Sophisticated",
      "Calm"
    ],

    shortDescription:
      "A stunning artistic journal featuring Van Gogh-inspired imagery and an uplifting celestial quote.",

    description:
      "Embrace the beauty of the night sky with this Starry Night inspired journal. Featuring the timeless 'Stars can't shine without darkness' quote set against a creative torn-paper aesthetic of iconic post-impressionist art, this notebook is designed to inspire your deepest thoughts and creative sparks.",

    highlights: [
      "Van Gogh 'Starry Night' inspired cover art",
      "Motivational 'Stars can't shine without darkness' quote",
      "Elegant vintage typewriter typography",
      "Smooth high-quality 80 GSM pages",
      "Durable premium wiro binding for 360-degree opening"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240, 365],
        A4: [120, 160, 200, 240, 365]
      }
    },

    variants: [
      { variantId: "DJ-STARRY-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-STARRY-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-STARRY-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-STARRY-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-STARRY-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-STARRY-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-STARRY-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-STARRY-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-STARRY-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-STARRY-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-STARRY-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-STARRY-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-STARRY-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-STARRY-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-STARRY-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-STARRY-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-STARRY-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-STARRY-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-STARRY-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-STARRY-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 350,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931082/van-gogh-starry-night-quote-notebook_w361av.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929935/starry-night-quote-spiral-notebook-mockup_nhxfdq.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "starry night notebook",
      "van gogh journal",
      "celestial diary",
      "inspirational quote notebook",
      "artistic stationary",
      "aesthetic journal"
    ],

    seo: {
      metaTitle: "Starry Night Quote Journal | Van Gogh Inspired Notebook",
      metaDescription:
        "A beautiful Van Gogh inspired journal with the quote 'Stars can't shine without darkness'. Perfect for art lovers and dreamers.",
      keywords: [
        "starry night journal",
        "van gogh notebook",
        "celestial quote diary",
        "artistic wiro notebook"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 42,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-minimalist-overthink-003",
    name: "Don't Overthink It Abstract Journal",
    slug: "dont-overthink-it-minimalist-journal",
    sku: "DJ-MINIMAL-003",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Modern Mindset Collection",

    collections: {
      franchise: "Minimal",
      theme: "Mental Wellness",
      universe: "Abstract Geometry",
      genre: "Modern Lifestyle"
    },

    moods: [
      "Mindful",
      "Minimalist",
      "Focus",
      "Modern",
      "Calm"
    ],

    shortDescription:
      "A sleek, modern journal featuring an abstract geometric design and a gentle reminder to keep it simple.",

    description:
      "Clear your mind and your desk with this minimalist abstract journal. Featuring a bold retro-modern color palette and the 'Don't Overthink It' mantra, this notebook is the perfect companion for brainstorming, planning, or daily reflection without the clutter.",

    highlights: [
      "Modern minimalist abstract design",
      "Bold 'Don't Overthink It' typography",
      "Vibrant retro-inspired color palette",
      "Smooth high-quality 80 GSM pages",
      "Durable premium wiro binding"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240, 365],
        A4: [120, 160, 200, 240, 365]
      }
    },

    variants: [
      { variantId: "DJ-OVERTHINK-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-OVERTHINK-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-OVERTHINK-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-OVERTHINK-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-OVERTHINK-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-OVERTHINK-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-OVERTHINK-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-OVERTHINK-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-OVERTHINK-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-OVERTHINK-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-OVERTHINK-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-OVERTHINK-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-OVERTHINK-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-OVERTHINK-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-OVERTHINK-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-OVERTHINK-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-OVERTHINK-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-OVERTHINK-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-OVERTHINK-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-OVERTHINK-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 280,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931065/dont-overthink-it-minimalist-spiral-notebook-wooden-desk_ep4cs7.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929922/minimalist-motivational-spiral-notebook-dont-overthink-it_xpxfaz.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "minimalist notebook",
      "abstract design journal",
      "mental health diary",
      "modern stationary",
      "overthink it quote",
      "aesthetic office supplies"
    ],

    seo: {
      metaTitle: "Don't Overthink It Journal | Minimalist Abstract Notebook",
      metaDescription:
        "Keep your thoughts organized with our minimalist abstract journal. A modern design for mindful writing and productivity.",
      keywords: [
        "minimalist journal",
        "abstract notebook",
        "dont overthink it diary",
        "modern wiro journal"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.8,
    reviewsCount: 56,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "dj-lyrical-night-met-004",
    name: "The Night We Met Lyrical Journal",
    slug: "the-night-we-met-lyrical-journal",
    sku: "DJ-MET-004",

    productType: "diary_journal",
    category: "Journals",
    subCategory: "Premium Journals",

    brand: "pragyaprint",
    series: "Lyrical Echoes Collection",

    collections: {
      franchise: "Pop Culture",
      theme: "The Night We Met",
      universe: "Romantic Nostalgia",
      genre: "Fandom & Lyrical"
    },

    moods: [
      "Romantic",
      "Nostalgic",
      "Melancholic",
      "Dreamy",
      "Sentimental"
    ],

    shortDescription:
      "A soulful, watercolor-illustrated journal inspired by the hauntingly beautiful lyrics of 'The Night We Met'.",

    description:
      "Capture your most cherished memories and heartfelt thoughts in this beautifully illustrated journal. Featuring a moody watercolor night sky and a delicate hand-holding illustration, it prominently displays the iconic lyric 'Take me back to the night we met.' Perfect for fans of indie-folk, romantic storytelling, and personal reflection.",

    highlights: [
      "Custom watercolor celestial cover art",
      "Hand-holding silhouette 'Take me back' design",
      "Matte finish for a premium tactile feel",
      "Smooth high-quality 80 GSM pages",
      "Durable black wiro binding for easy flat-lay writing"
    ],

    options: {
      size: ["A5", "A4"],
      coverType: ["Softcover", "Hardcover"],
      rulingType: ["Ruled", "Grid Dots", "Grid Lines", "Unruled", "Dated"],
      pageMap: {
        A5: [120, 160, 200, 240, 365],
        A4: [120, 160, 200, 240, 365]
      }
    },

    variants: [
      { variantId: "DJ-MET-A4-365-HC", size: "A4", pages: 365, coverType: "Hardcover", price: 549, stock: 80 },
      { variantId: "DJ-MET-A4-365-SC", size: "A4", pages: 365, coverType: "Softcover", price: 499, stock: 80 },

      { variantId: "DJ-MET-A5-365-HC", size: "A5", pages: 365, coverType: "Hardcover", price: 299, stock: 80 },
      { variantId: "DJ-MET-A5-365-SC", size: "A5", pages: 365, coverType: "Softcover", price: 249, stock: 80 },

      { variantId: "DJ-MET-A5-120-SC", size: "A5", pages: 120, coverType: "Softcover", price: 149, stock: 80 },
      { variantId: "DJ-MET-A5-160-SC", size: "A5", pages: 160, coverType: "Softcover", price: 179, stock: 80 },
      { variantId: "DJ-MET-A5-200-SC", size: "A5", pages: 200, coverType: "Softcover", price: 199, stock: 80 },
      { variantId: "DJ-MET-A5-240-SC", size: "A5", pages: 240, coverType: "Softcover", price: 229, stock: 55 },

      { variantId: "DJ-MET-A5-120-HC", size: "A5", pages: 120, coverType: "Hardcover", price: 199, stock: 80 },
      { variantId: "DJ-MET-A5-160-HC", size: "A5", pages: 160, coverType: "Hardcover", price: 219, stock: 80 },
      { variantId: "DJ-MET-A5-200-HC", size: "A5", pages: 200, coverType: "Hardcover", price: 229, stock: 80 },
      { variantId: "DJ-MET-A5-240-HC", size: "A5", pages: 240, coverType: "Hardcover", price: 249, stock: 80 },

      { variantId: "DJ-MET-A4-120-SC", size: "A4", pages: 120, coverType: "Softcover", price: 289, stock: 80 },
      { variantId: "DJ-MET-A4-160-SC", size: "A4", pages: 160, coverType: "Softcover", price: 339, stock: 80 },
      { variantId: "DJ-MET-A4-200-SC", size: "A4", pages: 200, coverType: "Softcover", price: 389, stock: 80 },
      { variantId: "DJ-MET-A4-240-SC", size: "A4", pages: 240, coverType: "Softcover", price: 429, stock: 80 },

      { variantId: "DJ-MET-A4-120-HC", size: "A4", pages: 120, coverType: "Hardcover", price: 319, stock: 80 },
      { variantId: "DJ-MET-A4-160-HC", size: "A4", pages: 160, coverType: "Hardcover", price: 349, stock: 80 },
      { variantId: "DJ-MET-A4-200-HC", size: "A4", pages: 200, coverType: "Hardcover", price: 399, stock: 80 },
      { variantId: "DJ-MET-A4-240-HC", size: "A4", pages: 240, coverType: "Hardcover", price: 449, stock: 80 }
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 25,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      paperGSM: 80,
      bindingType: "Premium Wiro",
      coverFinish: "Matte Lamination",
      orientation: "portrait"
    },

    inventory: {
      totalStock: 320,
      stockStatus: "in_stock",
      lowStockThreshold: 15
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1773931058/take-me-back-night-we-met-watercolor-notebook_kvfc7i.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1773929939/take-me-back-watercolor-spiral-notebook_jncw3j.webp",
      images: [
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/spiral-notebook-paper-layout-options-grid-ruled-dotted_gt1fmj.webp",
        "https://res.cloudinary.com/dal56whd6/image/upload/v1773925138/a4-a5-spiral-notebook-size-comparison-guide_oxn6gk.webp"
      ]
    },

    tags: [
      "the night we met notebook",
      "lyrical journal",
      "watercolor aesthetic diary",
      "music lover gift",
      "sentimental gift",
      "romantic diary"
    ],

    seo: {
      metaTitle: "The Night We Met Journal | Lyrical Aesthetic Notebook",
      metaDescription:
        "Express your feelings in 'The Night We Met' lyrical journal. High-quality notebook with a romantic watercolor night-sky design.",
      keywords: [
        "lyrical notebook",
        "night we met journal",
        "watercolor journal",
        "romantic notebook gift"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.5,
      dimensions: {
        width: 14.8,
        height: 21,
        depth: 2.5
      },
      shippingClass: "premium_box"
    },

    rating: 4.9,
    reviewsCount: 88,

    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },

];

// --- Categories Data (for filtering/home page) ---
export const CATEGORIES = [
  { name: 'Posters', slug: "posters", icon: 'Layers', description: 'Large format prints for display and marketing.', image: "https://res.cloudinary.com/dal56whd6/image/upload/v1770976295/posters_yjx4df.png" },
  { name: 'Diaries & Journals', slug: "journals", icon: 'Briefcase', description: 'Letterheads, envelopes, business cards, and brochures.', image: journal },
  { name: 'Photo Prints', slug: "photoprints", icon: 'Image', description: 'Personalized photos, polaroids, and canvas prints.', image: "https://thumbs.dreamstime.com/b/polaroid-prints-textured-wall-collection-each-capturing-unique-scenes-pinned-to-off-white-arrangement-creates-visually-401186269.jpg" },
  { name: 'Notebooks', slug: "notebooks", icon: 'Heart', description: '', image: notebook },

  { name: 'Wall banners', slug: "banners", icon: 'Heart', description: 'Wedding, birthday, and special occasion invitations.', image: "https://dbdzm869oupei.cloudfront.net/img/quadres/large/79603.jpg" },
  { name: 'Stickers', slug: "stickers", icon: 'Star', description: 'Vinyl, paper, and custom die-cut stickers.', image: " https://i.pinimg.com/736x/57/ac/9c/57ac9c020929545e9c1d3c648ffb6e3f.jpg" },
];

//https://images.squarespace-cdn.com/content/v1/66e5ff131ebccd7304d16f90/e8a5362a-d713-4c4c-8cc1-b9d1e1f2525e/s2k+copy111.png?format=500w

export const SERVICES = [
  {
    id: "business-stationery",
    name: "Business Stationery",
    icon: "Layers",
    description:
      "Professional stationery solutions for offices, shops, and corporate branding.",
    image: business,

    subCategories: [
      { id: "bill-books", name: "Bill Books / Invoices" },
      { id: "receipt-books", name: "Receipt Books" },
      { id: "envelopes", name: "Envelopes" },
      { id: "letterheads", name: "Letterheads" },
      { id: "visiting-cards", name: "Visiting Cards" },
      { id: "menu-cards", name: "Menu Cards" },
      { id: "pamphlets", name: "Pamphlets" },
      { id: "catalogs", name: "Catalogs" }
    ]
  },

  {
    id: "event-essentials",
    name: "Event Essentials",
    icon: "Image",
    description:
      "Beautifully designed print materials for weddings, birthdays, and special occasions.",
    image: wedding,

    subCategories: [
      { id: "wedding-cards", name: "Wedding Cards & Patrika" },
      { id: "invitation-cards", name: "Invitation Cards" },
      { id: "birthday-cards", name: "Birthday Cards" },
      { id: "event-banners", name: "Event Banners" }
    ]
  },

  {
    id: "advertising",
    name: "Advertising",
    icon: "Briefcase",
    description:
      "Promotional materials to boost brand visibility and marketing reach.",
    image: adv,

    subCategories: [
      { id: "posters", name: "Posters & Pamphlets" },
      { id: "bottle-pen", name: "Bottle & Pen Printing" },
      { id: "custom-tshirts", name: "Custom T-Shirts" },
      { id: "cups-mugs", name: "Cups & Mugs" },
      { id: "-books", name: " Books" },
      { id: "visiting-cards-ads", name: "Visiting Cards" }
    ]
  },

  {
    id: "school-stationery",
    name: "School Stationery",
    icon: "Star",
    description:
      "Complete stationery and branding solutions for schools and institutions.",
    image: school,

    subCategories: [
      { id: "registers", name: "Registers" },
      { id: "exam-papers", name: "Exam Papers & Answer Sheets" },
      { id: "fee-receipts", name: "Fee Receipt Books" },
      { id: "school-letterheads", name: "Letterheads" },
      { id: "fee-result-cards", name: "Fee & Result Cards" },
      { id: "vehicle-fee-cards", name: "Vehicle Fee Cards" },
      { id: "school-branding", name: "School Branding Items" },
      { id: "id-cards", name: "ID Cards (Faculty & Students)" }
    ]
  },

  {
    id: "gift-items",
    name: "Gift Items",
    icon: "Heart",
    description:
      "Personalized gifts crafted to make every occasion memorable.",
    image: gift,

    subCategories: [
      { id: "tshirts-hoodies", name: "T-Shirts & Hoodies" },
      { id: "custom-mugs", name: "Mugs" },
      { id: "keychains", name: "Keychains" },
      { id: "greeting-cards", name: "Greeting Cards" },
      { id: "photo-frames", name: "Photo Frames" },
      { id: "custom-gifts", name: "Custom Gift Items" }
    ]
  }
];

// --- Local Services Data (Offline Shop Offerings) ---


export const BANNER = [
  {
    id: "wb-spiritual-radha-krishna-001",
    name: "Radha Krishna Eternal Love Wall Banner",
    slug: "radha-krishna-eternal-love-wall-banner",
    sku: "WB-SPI-RK-001",

    productType: "banner",
    category: "Banners",

    collections: {
      franchise: "Spiritual",
      series: "Devotional Art",
      album: "Divine Landscapes",
      artist: "Madhur"
    },

    themes: ["Spiritual", "Indian Art", "Devotional", "Aesthetic", "Floral"],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "original_art",

    "shortDescription": "Premium fabric wall banner featuring Radha Krishna in a serene floral setting.",
    "description": "A high-definition spiritual wall banner capturing the divine love of Radha Krishna on a swing, surrounded by vibrant blooms. Perfect for home temples, living rooms, or office decor.",

    "highlights": [
      "Premium fabric material",
      "Intricate floral detail & high-res print",
      "Vibrant, fade-resistant colors",
      "Traditional yet modern aesthetic",
      "Lightweight & easy to hang"
    ],

    "pricing": {
      "basePrice": 199,
      "salePrice": 149,
      "discountPercentage": 25,
      "currency": "INR",
      "isTaxable": true
    },

    "options": {
      "size": ["12x18", "18x24", "24x36", "36x48"],
      "material": ["Paper", "Vinyl", "Canvas"],
      "paperType": ["Matte", "Glossy"]
    },

    "variants": [
      { "variantId": "WB-RK-12x18-PAPER", "size": "12x18", "material": "Paper", "price": 149, "stock": 30 },
      { "variantId": "WB-RK-18x24-PAPER", "size": "18x24", "material": "Paper", "price": 349, "stock": 25 },
      { "variantId": "WB-RK-24x36-PAPER", "size": "24x36", "material": "Paper", "price": 649, "stock": 25 },
      { "variantId": "WB-RK-36x48-PAPER", "size": "36x48", "material": "Paper", "price": 1299, "stock": 25 },
      { "variantId": "WB-RK-12x18-VINYL", "size": "12x18", "material": "Vinyl", "price": 149, "stock": 30 },
      { "variantId": "WB-RK-18x24-VINYL", "size": "18x24", "material": "Vinyl", "price": 349, "stock": 25 },
      { "variantId": "WB-RK-24x36-VINYL", "size": "24x36", "material": "Vinyl", "price": 649, "stock": 25 },
      { "variantId": "WB-RK-36x48-VINYL", "size": "36x48", "material": "Vinyl", "price": 1299, "stock": 25 },
      { "variantId": "WB-RK-12x18-CANVAS", "size": "12x18", "material": "Canvas", "price": 499, "stock": 15 },
      { "variantId": "WB-RK-18x24-CANVAS", "size": "18x24", "material": "Canvas", "price": 899, "stock": 15 },
      { "variantId": "WB-RK-24x36-CANVAS", "size": "24x36", "material": "Canvas", "price": 1599, "stock": 15 },
      { "variantId": "WB-RK-36x48-CANVAS", "size": "36x48", "material": "Canvas", "price": 2999, "stock": 15 }
    ],

    "inventory": {
      "totalStock": 270,
      "stockStatus": "in_stock",
      "lowStockThreshold": 10
    },

    "media": {
      "thumbnail": "https://res.cloudinary.com/dal56whd6/image/upload/v1774202307/radha-krishna-spiritual-wall-art-office-decor_aelfg3.webp",
      "images": [
        "https://res.cloudinary.com/.../radha_krishna_mockup1.webp"
      ]
    },

    "tags": [
      "spiritual banner",
      "radha krishna art",
      "indian wall decor",
      "devotional wall hanging",
      "office decor"
    ],

    "seo": {
      "metaTitle": "Radha Krishna Wall Banner | Spiritual Home Decor",
      "metaDescription": "Transform your space with the Radha Krishna Eternal Love banner. High-quality fabric and vibrant colors.",
      "keywords": ["radha krishna banner", "spiritual wall art", "iskcon art", "indian decor"]
    },

    "productionTime": "2–4 business days",

    "shipping": {
      "weight": 0.4,
      "dimensions": { "width": 24, "height": 36, "depth": 1 },
      "shippingClass": "rolled_tube"
    },

    "status": "active",
    "isFeatured": true,
    isNewArrival: false
  },
  {
    id: "wb-spiritual-hanuman-meditation-002",
    name: "Lord Hanuman Meditating Divine Wall Banner",
    slug: "lord-hanuman-meditating-divine-wall-banner",
    sku: "WB-SPI-HNM-002",

    productType: "banner",
    category: "Banners",

    collections: {
      franchise: "Spiritual",
      series: "Divine Strength",
      album: "Vedic Icons",
      artist: "Madhur"
    },

    themes: ["Spiritual", "Hinduism", "Meditation", "Fitness", "Traditional"],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "original_art",

    "shortDescription": "Powerful wall banner of Lord Hanuman in a meditative state with Jai Shri Ram mandala.",
    "description": "A striking wall banner depicting a muscular, serene Lord Hanuman in deep meditation. The background features a glowing 'Ram' naam mandala, symbolizing strength and devotion. Ideal for home gyms, meditation spaces, or living areas.",

    "highlights": [
      "Premium fabric material",
      "Detailed muscular anatomy and divine aura",
      "Vivid Jai Shri Ram mandala backdrop",
      "Fade-resistant high-definition print",
      "Lightweight & easy to hang"
    ],

    "pricing": {
      "basePrice": 199,
      "salePrice": 149,
      "discountPercentage": 25,
      "currency": "INR",
      "isTaxable": true
    },

    "options": {
      "size": ["12x18", "18x24", "24x36", "36x48"],
      "material": ["Paper", "Vinyl", "Canvas"],
      "paperType": ["Matte", "Glossy"]
    },

    "variants": [
      { "variantId": "WB-HNM-12x18-PAPER", "size": "12x18", "material": "Paper", "price": 149, "stock": 30 },
      { "variantId": "WB-HNM-18x24-PAPER", "size": "18x24", "material": "Paper", "price": 349, "stock": 25 },
      { "variantId": "WB-HNM-24x36-PAPER", "size": "24x36", "material": "Paper", "price": 649, "stock": 25 },
      { "variantId": "WB-HNM-36x48-PAPER", "size": "36x48", "material": "Paper", "price": 1299, "stock": 25 },
      { "variantId": "WB-HNM-12x18-VINYL", "size": "12x18", "material": "Vinyl", "price": 149, "stock": 30 },
      { "variantId": "WB-HNM-18x24-VINYL", "size": "18x24", "material": "Vinyl", "price": 349, "stock": 25 },
      { "variantId": "WB-HNM-24x36-VINYL", "size": "24x36", "material": "Vinyl", "price": 649, "stock": 25 },
      { "variantId": "WB-HNM-36x48-VINYL", "size": "36x48", "material": "Vinyl", "price": 1299, "stock": 25 },
      { "variantId": "WB-HNM-12x18-CANVAS", "size": "12x18", "material": "Canvas", "price": 499, "stock": 15 },
      { "variantId": "WB-HNM-18x24-CANVAS", "size": "18x24", "material": "Canvas", "price": 899, "stock": 15 },
      { "variantId": "WB-HNM-24x36-CANVAS", "size": "24x36", "material": "Canvas", "price": 1599, "stock": 15 },
      { "variantId": "WB-HNM-36x48-CANVAS", "size": "36x48", "material": "Canvas", "price": 2999, "stock": 15 }
    ],

    "inventory": {
      "totalStock": 270,
      "stockStatus": "in_stock",
      "lowStockThreshold": 10
    },

    "media": {
      "thumbnail": "https://res.cloudinary.com/dal56whd6/image/upload/v1774202304/lord-hanuman-meditating-muscular-canvas-wall-art_szccyr.webp",
      "images": [
        "https://res.cloudinary.com/.../hanuman_mockup1.webp"
      ]
    },

    "tags": [
      "hanuman banner",
      "meditation decor",
      "spiritual wall art",
      "gym motivation",
      "jai shri ram banner"
    ],

    "seo": {
      "metaTitle": "Lord Hanuman Meditating Wall Banner | Divine Strength Art",
      "metaDescription": "A premium spiritual banner of Lord Hanuman. Bring strength and serenity to your home with this high-quality wall decor.",
      "keywords": ["hanuman wall art", "bajrangbali banner", "spiritual decor", "meditating hanuman"]
    },

    "productionTime": "2–4 business days",

    "shipping": {
      "weight": 0.4,
      "dimensions": { "width": 24, "height": 36, "depth": 1 },
      "shippingClass": "rolled_tube"
    },

    "status": "active",
    "isFeatured": true,
    isNewArrival: true
  },
  {
    id: "wb-movie-interstellar-003",
    name: "Interstellar 'Mann's Planet' Cinematic Wall Banner",
    slug: "interstellar-manns-planet-cinematic-wall-banner",
    sku: "WB-MOV-INT-003",

    productType: "banner",
    category: "Banners",

    collections: {
      franchise: "Movies",
      series: "Christopher Nolan Collection",
      album: "Sci-Fi Greats",
      artist: "Madhur"
    },

    themes: ["Sci-Fi", "Cinema", "Space", "Minimalist", "Aesthetic"],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    "shortDescription": "Premium cinematic wall banner featuring the icy landscapes of Interstellar.",
    "description": "A breathtaking high-definition banner capturing the iconic exploration of Mann's Planet from Christopher Nolan's Interstellar. Features a cool blue and white palette that adds a modern, sophisticated touch to any office or room.",

    "highlights": [
      "Premium fabric material",
      "Widescreen cinematic composition",
      "Deep, high-contrast printing",
      "Fade-resistant icy blue tones",
      "Lightweight & easy to hang"
    ],

    "pricing": {
      "basePrice": 199,
      "salePrice": 149,
      "discountPercentage": 25,
      "currency": "INR",
      "isTaxable": true
    },

    "options": {
      "size": ["12x18", "18x24", "24x36", "36x48"],
      "material": ["Paper", "Vinyl", "Canvas"],
      "paperType": ["Matte", "Glossy"]
    },

    "variants": [
      { "variantId": "WB-INT-12x18-PAPER", "size": "12x18", "material": "Paper", "price": 149, "stock": 30 },
      { "variantId": "WB-INT-18x24-PAPER", "size": "18x24", "material": "Paper", "price": 349, "stock": 25 },
      { "variantId": "WB-INT-24x36-PAPER", "size": "24x36", "material": "Paper", "price": 649, "stock": 25 },
      { "variantId": "WB-INT-36x48-PAPER", "size": "36x48", "material": "Paper", "price": 1299, "stock": 25 },
      { "variantId": "WB-INT-12x18-VINYL", "size": "12x18", "material": "Vinyl", "price": 149, "stock": 30 },
      { "variantId": "WB-INT-18x24-VINYL", "size": "18x24", "material": "Vinyl", "price": 349, "stock": 25 },
      { "variantId": "WB-INT-24x36-VINYL", "size": "24x36", "material": "Vinyl", "price": 649, "stock": 25 },
      { "variantId": "WB-INT-36x48-VINYL", "size": "36x48", "material": "Vinyl", "price": 1299, "stock": 25 },
      { "variantId": "WB-INT-12x18-CANVAS", "size": "12x18", "material": "Canvas", "price": 499, "stock": 15 },
      { "variantId": "WB-INT-18x24-CANVAS", "size": "18x24", "material": "Canvas", "price": 899, "stock": 15 },
      { "variantId": "WB-INT-24x36-CANVAS", "size": "24x36", "material": "Canvas", "price": 1599, "stock": 15 },
      { "variantId": "WB-INT-36x48-CANVAS", "size": "36x48", "material": "Canvas", "price": 2999, "stock": 15 }
    ],

    "inventory": {
      "totalStock": 270,
      "stockStatus": "in_stock",
      "lowStockThreshold": 10
    },

    "media": {
      "thumbnail": "https://res.cloudinary.com/dal56whd6/image/upload/v1774202304/interstellar-movie-poster-office-wall-decor_agyzbz.webp",
      "images": [
        "https://res.cloudinary.com/.../interstellar_mockup1.webp"
      ]
    },

    "tags": [
      "interstellar poster",
      "movie banner",
      "sci-fi decor",
      "office wall art",
      "space banner"
    ],

    "seo": {
      "metaTitle": "Interstellar Movie Wall Banner | Sci-Fi Decor",
      "metaDescription": "Elevate your room with this Interstellar cinematic banner. High-quality print on premium fabric.",
      "keywords": ["interstellar wall art", "movie posters india", "space wall decor", "nolan movie banner"]
    },

    "productionTime": "2–4 business days",

    "shipping": {
      "weight": 0.4,
      "dimensions": { "width": 24, "height": 36, "depth": 1 },
      "shippingClass": "rolled_tube"
    },

    "status": "active",
    "isFeatured": true,
    isNewArrival: false
  },
  {
    id: "wb-marvel-ironman-minimalist-004",
    name: "Iron Man Minimalist Glow Wall Banner",
    slug: "iron-man-minimalist-glow-wall-banner",
    sku: "WB-MAR-IM-004",

    productType: "banner",
    category: "Banners",

    collections: {
      franchise: "Marvel",
      series: "Avengers Collection",
      album: "Minimalist Heroes",
      artist: "Madhur"
    },

    themes: ["Superheroes", "Marvel", "Minimalist", "Tech", "Modern"],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    "shortDescription": "Premium minimalist wall banner featuring Iron Man's iconic silhouette.",
    "description": "A sophisticated minimalist wall banner showcasing the silhouette of Iron Man with a glowing Arc Reactor focus. Designed with a dark aesthetic to complement high-end office setups and gaming rooms.",

    "highlights": [
      "Premium fabric material",
      "Deep black tones & high-contrast glow effect",
      "Minimalist design for professional environments",
      "Fade-resistant high-resolution print",
      "Lightweight & easy to hang"
    ],

    "pricing": {
      "basePrice": 199,
      "salePrice": 149,
      "discountPercentage": 25,
      "currency": "INR",
      "isTaxable": true
    },

    "options": {
      "size": ["12x18", "18x24", "24x36", "36x48"],
      "material": ["Paper", "Vinyl", "Canvas"],
      "paperType": ["Matte", "Glossy"]
    },

    "variants": [
      { "variantId": "WB-IM-12x18-PAPER", "size": "12x18", "material": "Paper", "price": 149, "stock": 30 },
      { "variantId": "WB-IM-18x24-PAPER", "size": "18x24", "material": "Paper", "price": 349, "stock": 25 },
      { "variantId": "WB-IM-24x36-PAPER", "size": "24x36", "material": "Paper", "price": 649, "stock": 25 },
      { "variantId": "WB-IM-36x48-PAPER", "size": "36x48", "material": "Paper", "price": 1299, "stock": 25 },
      { "variantId": "WB-IM-12x18-VINYL", "size": "12x18", "material": "Vinyl", "price": 149, "stock": 30 },
      { "variantId": "WB-IM-18x24-VINYL", "size": "18x24", "material": "Vinyl", "price": 349, "stock": 25 },
      { "variantId": "WB-IM-24x36-VINYL", "size": "24x36", "material": "Vinyl", "price": 649, "stock": 25 },
      { "variantId": "WB-IM-36x48-VINYL", "size": "36x48", "material": "Vinyl", "price": 1299, "stock": 25 },
      { "variantId": "WB-IM-12x18-CANVAS", "size": "12x18", "material": "Canvas", "price": 499, "stock": 15 },
      { "variantId": "WB-IM-18x24-CANVAS", "size": "18x24", "material": "Canvas", "price": 899, "stock": 15 },
      { "variantId": "WB-IM-24x36-CANVAS", "size": "24x36", "material": "Canvas", "price": 1599, "stock": 15 },
      { "variantId": "WB-IM-36x48-CANVAS", "size": "36x48", "material": "Canvas", "price": 2999, "stock": 15 }
    ],

    "inventory": {
      "totalStock": 270,
      "stockStatus": "in_stock",
      "lowStockThreshold": 10
    },

    "media": {
      "thumbnail": "https://res.cloudinary.com/dal56whd6/image/upload/v1774202308/iron-man-minimalist-wall-art-office-setup_s2koso.webp",
      "images": [
        "https://res.cloudinary.com/.../ironman_mockup_office.webp"
      ]
    },

    "tags": [
      "iron man banner",
      "marvel wall art",
      "minimalist superhero",
      "office decor",
      "avengers wall hanging"
    ],

    "seo": {
      "metaTitle": "Iron Man Minimalist Wall Banner | Marvel Office Decor",
      "metaDescription": "Add a touch of Stark Industries to your office with this premium minimalist Iron Man banner. High-definition print on durable fabric.",
      "keywords": ["iron man wall decor", "minimalist marvel poster", "stark tech art", "avengers office art"]
    },

    "productionTime": "2–4 business days",

    "shipping": {
      "weight": 0.4,
      "dimensions": { "width": 24, "height": 36, "depth": 1 },
      "shippingClass": "rolled_tube"
    },

    "status": "active",
    "isFeatured": true,
    isNewArrival: true
  },
  {
    id: "wb-tv-friends-cast-005",
    name: "Friends TV Show Iconic Cast Wall Banner",
    slug: "friends-tv-show-iconic-cast-wall-banner",
    sku: "WB-TV-FRN-005",

    productType: "banner",
    category: "Banners",

    collections: {
      franchise: "TV Shows",
      series: "90s Nostalgia",
      album: "Sitcom Classics",
      artist: "Madhur"
    },

    themes: ["Comedy", "90s", "Friends", "Aesthetic", "Pop Culture"],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    "shortDescription": "Premium fabric wall banner featuring the legendary cast of Friends.",
    "description": "The ultimate tribute to the world's favorite sitcom. This high-quality banner features the iconic cast in a classic pose, perfect for adding a cozy, nostalgic feel to your bedroom, living room, or cafe-themed office.",

    "highlights": [
      "Premium fabric material",
      "Vibrant high-definition character print",
      "Durable and fade-resistant fabric",
      "Classic 90s aesthetic",
      "Lightweight & easy to hang"
    ],

    "pricing": {
      "basePrice": 199,
      "salePrice": 149,
      "discountPercentage": 25,
      "currency": "INR",
      "isTaxable": true
    },

    "options": {
      "size": ["12x18", "18x24", "24x36", "36x48"],
      "material": ["Paper", "Vinyl", "Canvas"],
      "paperType": ["Matte", "Glossy"]
    },

    "variants": [
      { "variantId": "WB-FRN-12x18-PAPER", "size": "12x18", "material": "Paper", "price": 149, "stock": 30 },
      { "variantId": "WB-FRN-18x24-PAPER", "size": "18x24", "material": "Paper", "price": 349, "stock": 25 },
      { "variantId": "WB-FRN-24x36-PAPER", "size": "24x36", "material": "Paper", "price": 649, "stock": 25 },
      { "variantId": "WB-FRN-36x48-PAPER", "size": "36x48", "material": "Paper", "price": 1299, "stock": 25 },
      { "variantId": "WB-FRN-12x18-VINYL", "size": "12x18", "material": "Vinyl", "price": 149, "stock": 30 },
      { "variantId": "WB-FRN-18x24-VINYL", "size": "18x24", "material": "Vinyl", "price": 349, "stock": 25 },
      { "variantId": "WB-FRN-24x36-VINYL", "size": "24x36", "material": "Vinyl", "price": 649, "stock": 25 },
      { "variantId": "WB-FRN-36x48-VINYL", "size": "36x48", "material": "Vinyl", "price": 1299, "stock": 25 },
      { "variantId": "WB-FRN-12x18-CANVAS", "size": "12x18", "material": "Canvas", "price": 499, "stock": 15 },
      { "variantId": "WB-FRN-18x24-CANVAS", "size": "18x24", "material": "Canvas", "price": 899, "stock": 15 },
      { "variantId": "WB-FRN-24x36-CANVAS", "size": "24x36", "material": "Canvas", "price": 1599, "stock": 15 },
      { "variantId": "WB-FRN-36x48-CANVAS", "size": "36x48", "material": "Canvas", "price": 2999, "stock": 15 }
    ],

    "inventory": {
      "totalStock": 270,
      "stockStatus": "in_stock",
      "lowStockThreshold": 10
    },

    "media": {
      "thumbnail": "https://res.cloudinary.com/dal56whd6/image/upload/v1774202307/friends-tv-show-cast-wall-art-office-decor_ktqob7.webp",
      "images": [
        "https://res.cloudinary.com/.../friends_mockup_living.webp"
      ]
    },

    "tags": [
      "friends tv show",
      "friends merchandise",
      "90s tv decor",
      "central perk banner",
      "sitcom wall art"
    ],

    "seo": {
      "metaTitle": "Friends TV Show Cast Wall Banner | Nostalgic Room Decor",
      "metaDescription": "Celebrate your favorite sitcom with this premium Friends cast wall banner. High-quality fabric and vibrant 90s style.",
      "keywords": ["friends wall art", "friends tv show poster", "central perk decor", "90s nostalgia banner"]
    },

    "productionTime": "2–4 business days",

    "shipping": {
      "weight": 0.4,
      "dimensions": { "width": 24, "height": 36, "depth": 1 },
      "shippingClass": "rolled_tube"
    },

    "status": "active",
    "isFeatured": false,
    isNewArrival: true
  },
  {
    id: "wb-tv-got-bastards-006",
    name: "Game of Thrones Battle of the Bastards Wall Banner",
    slug: "game-of-thrones-battle-of-the-bastards-wall-banner",
    sku: "WB-TV-GOT-006",

    productType: "banner",
    category: "Banners",

    collections: {
      franchise: "TV Shows",
      series: "Epic Fantasy",
      album: "Westeros Collection",
      artist: "Madhur"
    },

    themes: ["Fantasy", "Action", "Cinematic", "Medieval", "Dark Aesthetic"],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    "shortDescription": "Epic wall banner featuring Jon Snow from the Battle of the Bastards.",
    "description": "Capture the raw intensity of the North with this premium wall banner. Depicting Jon Snow facing the cavalry charge in the legendary 'Battle of the Bastards', this piece brings the cinematic scale of Westeros to your home or office.",

    "highlights": [
      "Premium fabric material",
      "Epic cinematic widescreen composition",
      "High-contrast grit and detail",
      "Fade-resistant dark tones",
      "Lightweight & easy to hang"
    ],

    "pricing": {
      "basePrice": 199,
      "salePrice": 149,
      "discountPercentage": 25,
      "currency": "INR",
      "isTaxable": true
    },

    "options": {
      "size": ["12x18", "18x24", "24x36", "36x48"],
      "material": ["Paper", "Vinyl", "Canvas"],
      "paperType": ["Matte", "Glossy"]
    },

    "variants": [
      { "variantId": "WB-GOT-12x18-PAPER", "size": "12x18", "material": "Paper", "price": 149, "stock": 30 },
      { "variantId": "WB-GOT-18x24-PAPER", "size": "18x24", "material": "Paper", "price": 349, "stock": 25 },
      { "variantId": "WB-GOT-24x36-PAPER", "size": "24x36", "material": "Paper", "price": 649, "stock": 25 },
      { "variantId": "WB-GOT-36x48-PAPER", "size": "36x48", "material": "Paper", "price": 1299, "stock": 25 },
      { "variantId": "WB-GOT-12x18-VINYL", "size": "12x18", "material": "Vinyl", "price": 149, "stock": 30 },
      { "variantId": "WB-GOT-18x24-VINYL", "size": "18x24", "material": "Vinyl", "price": 349, "stock": 25 },
      { "variantId": "WB-GOT-24x36-VINYL", "size": "24x36", "material": "Vinyl", "price": 649, "stock": 25 },
      { "variantId": "WB-GOT-36x48-VINYL", "size": "36x48", "material": "Vinyl", "price": 1299, "stock": 25 },
      { "variantId": "WB-GOT-12x18-CANVAS", "size": "12x18", "material": "Canvas", "price": 499, "stock": 15 },
      { "variantId": "WB-GOT-18x24-CANVAS", "size": "18x24", "material": "Canvas", "price": 899, "stock": 15 },
      { "variantId": "WB-GOT-24x36-CANVAS", "size": "24x36", "material": "Canvas", "price": 1599, "stock": 15 },
      { "variantId": "WB-GOT-36x48-CANVAS", "size": "36x48", "material": "Canvas", "price": 2999, "stock": 15 }
    ],

    "inventory": {
      "totalStock": 270,
      "stockStatus": "in_stock",
      "lowStockThreshold": 10
    },

    "media": {
      "thumbnail": "https://res.cloudinary.com/dal56whd6/image/upload/v1774202306/game-of-thrones-battle-of-the-bastards-wall-art-home-office_q3kg8g.webp",
      "images": [
        "https://res.cloudinary.com/.../got_mockup_office.webp"
      ]
    },

    "tags": [
      "game of thrones banner",
      "jon snow wall art",
      "battle of the bastards",
      "fantasy decor",
      "hbo merchandise"
    ],

    "seo": {
      "metaTitle": "Game of Thrones Battle of the Bastards Wall Banner | Jon Snow Art",
      "metaDescription": "Relive the greatest battle in TV history with this Jon Snow wall banner. Premium fabric and cinematic print quality.",
      "keywords": ["game of thrones wall art", "jon snow poster", "stark banner", "westeros wall decor"]
    },

    "productionTime": "2–4 business days",

    "shipping": {
      "weight": 0.4,
      "dimensions": { "width": 24, "height": 36, "depth": 1 },
      "shippingClass": "rolled_tube"
    },

    "status": "active",
    "isFeatured": true,
    isNewArrival: false
  },
  {
    id: "wb-marvel-loki-silhouette-007",
    name: "Loki God of Mischief Minimalist Wall Banner",
    slug: "loki-god-of-mischief-minimalist-wall-banner",
    sku: "WB-MAR-LOK-007",

    productType: "banner",
    category: "Banners",

    collections: {
      franchise: "Marvel",
      series: "Asgardian Legends",
      album: "Minimalist Heroes",
      artist: "Madhur"
    },

    themes: ["Superheroes", "Marvel", "Minimalist", "Fantasy", "Dark Aesthetic"],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    "shortDescription": "Premium fabric wall banner featuring Loki's iconic horned silhouette.",
    "description": "A sleek, minimalist tribute to Loki, the God of Mischief. Featuring the iconic horned helmet silhouette in a high-contrast dark design, this banner is a sophisticated choice for office decor, gaming setups, or Marvel fans.",

    "highlights": [
      "Premium fabric material",
      "Sharp, high-contrast minimalist design",
      "Vibrant green accents on deep black",
      "Fade-resistant high-definition print",
      "Lightweight & easy to hang"
    ],

    "pricing": {
      "basePrice": 199,
      "salePrice": 149,
      "discountPercentage": 25,
      "currency": "INR",
      "isTaxable": true
    },

    "options": {
      "size": ["12x18", "18x24", "24x36", "36x48"],
      "material": ["Paper", "Vinyl", "Canvas"],
      "paperType": ["Matte", "Glossy"]
    },

    "variants": [
      { "variantId": "WB-LOK-12x18-PAPER", "size": "12x18", "material": "Paper", "price": 149, "stock": 30 },
      { "variantId": "WB-LOK-18x24-PAPER", "size": "18x24", "material": "Paper", "price": 349, "stock": 25 },
      { "variantId": "WB-LOK-24x36-PAPER", "size": "24x36", "material": "Paper", "price": 649, "stock": 25 },
      { "variantId": "WB-LOK-36x48-PAPER", "size": "36x48", "material": "Paper", "price": 1299, "stock": 25 },
      { "variantId": "WB-LOK-12x18-VINYL", "size": "12x18", "material": "Vinyl", "price": 149, "stock": 30 },
      { "variantId": "WB-LOK-18x24-VINYL", "size": "18x24", "material": "Vinyl", "price": 349, "stock": 25 },
      { "variantId": "WB-LOK-24x36-VINYL", "size": "24x36", "material": "Vinyl", "price": 649, "stock": 25 },
      { "variantId": "WB-LOK-36x48-VINYL", "size": "36x48", "material": "Vinyl", "price": 1299, "stock": 25 },
      { "variantId": "WB-LOK-12x18-CANVAS", "size": "12x18", "material": "Canvas", "price": 499, "stock": 15 },
      { "variantId": "WB-LOK-18x24-CANVAS", "size": "18x24", "material": "Canvas", "price": 899, "stock": 15 },
      { "variantId": "WB-LOK-24x36-CANVAS", "size": "24x36", "material": "Canvas", "price": 1599, "stock": 15 },
      { "variantId": "WB-LOK-36x48-CANVAS", "size": "36x48", "material": "Canvas", "price": 2999, "stock": 15 }
    ],

    "inventory": {
      "totalStock": 270,
      "stockStatus": "in_stock",
      "lowStockThreshold": 10
    },

    "media": {
      "thumbnail": "https://res.cloudinary.com/dal56whd6/image/upload/v1774202306/loki-silhouette-poster-office-decor_ilhjzi.webp",
      "images": [
        "https://res.cloudinary.com/.../loki_mockup_office.webp"
      ]
    },

    "tags": [
      "loki banner",
      "marvel silhouette",
      "god of mischief",
      "minimalist superhero decor",
      "asgardian art"
    ],

    "seo": {
      "metaTitle": "Loki Minimalist Wall Banner | Marvel Silhouette Decor",
      "metaDescription": "Embrace your glorious purpose with this premium Loki silhouette banner. High-quality fabric with a sleek minimalist finish.",
      "keywords": ["loki wall art", "minimalist marvel poster", "loki silhouette", "marvel office decor"]
    },

    "productionTime": "2–4 business days",

    "shipping": {
      "weight": 0.4,
      "dimensions": { "width": 24, "height": 36, "depth": 1 },
      "shippingClass": "rolled_tube"
    },

    "status": "active",
    "isFeatured": false,
    isNewArrival: true
  },
  {
    id: "wb-dc-batman-motorcycle-008",
    name: "Batman Dark Knight Motorcycle Wall Banner",
    slug: "batman-dark-knight-motorcycle-wall-banner",
    sku: "WB-DC-BAT-008",

    productType: "banner",
    category: "Banners",

    collections: {
      franchise: "DC Comics",
      series: "The Dark Knight Trilogy",
      album: "Gotham Nights",
      artist: "Madhur"
    },

    themes: ["Superheroes", "DC", "Action", "Automotive", "Dark Aesthetic"],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    "shortDescription": "Premium wall banner featuring Batman on a motorcycle through the streets of Gotham.",
    "description": "An intense, high-action wall banner depicting the Dark Knight navigating a sleek motorcycle through a rainy, neon-lit Gotham City. Perfect for fans of the trilogy and anyone looking for a bold, cinematic atmosphere in their office or room.",

    "highlights": [
      "Premium fabric material",
      "Cinematic motion-blur effect and high-res detail",
      "Deep blacks and vibrant blue/neon contrast",
      "Fade-resistant high-definition print",
      "Lightweight & easy to hang"
    ],

    "pricing": {
      "basePrice": 199,
      "salePrice": 149,
      "discountPercentage": 25,
      "currency": "INR",
      "isTaxable": true
    },

    "options": {
      "size": ["12x18", "18x24", "24x36", "36x48"],
      "material": ["Paper", "Vinyl", "Canvas"],
      "paperType": ["Matte", "Glossy"]
    },

    "variants": [
      { "variantId": "WB-BAT-12x18-PAPER", "size": "12x18", "material": "Paper", "price": 149, "stock": 30 },
      { "variantId": "WB-BAT-18x24-PAPER", "size": "18x24", "material": "Paper", "price": 349, "stock": 25 },
      { "variantId": "WB-BAT-24x36-PAPER", "size": "24x36", "material": "Paper", "price": 649, "stock": 25 },
      { "variantId": "WB-BAT-36x48-PAPER", "size": "36x48", "material": "Paper", "price": 1299, "stock": 25 },
      { "variantId": "WB-BAT-12x18-VINYL", "size": "12x18", "material": "Vinyl", "price": 149, "stock": 30 },
      { "variantId": "WB-BAT-18x24-VINYL", "size": "18x24", "material": "Vinyl", "price": 349, "stock": 25 },
      { "variantId": "WB-BAT-24x36-VINYL", "size": "24x36", "material": "Vinyl", "price": 649, "stock": 25 },
      { "variantId": "WB-BAT-36x48-VINYL", "size": "36x48", "material": "Vinyl", "price": 1299, "stock": 25 },
      { "variantId": "WB-BAT-12x18-CANVAS", "size": "12x18", "material": "Canvas", "price": 499, "stock": 15 },
      { "variantId": "WB-BAT-18x24-CANVAS", "size": "18x24", "material": "Canvas", "price": 899, "stock": 15 },
      { "variantId": "WB-BAT-24x36-CANVAS", "size": "24x36", "material": "Canvas", "price": 1599, "stock": 15 },
      { "variantId": "WB-BAT-36x48-CANVAS", "size": "36x48", "material": "Canvas", "price": 2999, "stock": 15 }
    ],

    "inventory": {
      "totalStock": 270,
      "stockStatus": "in_stock",
      "lowStockThreshold": 10
    },

    "media": {
      "thumbnail": "https://res.cloudinary.com/dal56whd6/image/upload/v1774202306/batman-motorcycle-wall-art-office-decor_akxzb5.webp",
      "images": [
        "https://res.cloudinary.com/.../batman_mockup_office.webp"
      ]
    },

    "tags": [
      "batman banner",
      "dark knight wall art",
      "dc comics decor",
      "motorcycle poster",
      "gotham city art"
    ],

    "seo": {
      "metaTitle": "Batman Dark Knight Motorcycle Wall Banner | Gotham City Art",
      "metaDescription": "Bring the intensity of Gotham to your walls with this premium Batman motorcycle banner. Durable fabric and stunning cinematic print.",
      "keywords": ["batman wall decor", "dark knight motorcycle art", "gotham banner", "superhero wall hanging"]
    },

    "productionTime": "2–4 business days",

    "shipping": {
      "weight": 0.4,
      "dimensions": { "width": 24, "height": 36, "depth": 1 },
      "shippingClass": "rolled_tube"
    },

    "status": "active",
    "isFeatured": true,
    isNewArrival: false
  },
  {
    id: "wb-marvel-tony-stark-abstract-009",
    name: "Tony Stark Abstract Vision Wall Banner",
    slug: "tony-stark-abstract-vision-wall-banner",
    sku: "WB-MAR-TSA-009",

    productType: "banner",
    category: "Banners",

    collections: {
      franchise: "Marvel",
      series: "Genius Billionaire Collection",
      album: "Abstract Heroes",
      artist: "Madhur"
    },

    themes: ["Marvel", "Abstract", "Modern", "Tech", "Aesthetic"],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    "shortDescription": "Premium abstract fabric wall banner of Tony Stark/Iron Man.",
    "description": "A sophisticated abstract portrait of Tony Stark, blending high-tech aesthetics with artistic brushstrokes. This banner is designed for modern office spaces, studios, or fans who prefer a subtle, artistic approach to superhero decor.",

    "highlights": [
      "Premium fabric material",
      "Modern abstract art style",
      "Vibrant high-contrast color palette",
      "Fade-resistant high-definition print",
      "Lightweight & easy to hang"
    ],

    "pricing": {
      "basePrice": 199,
      "salePrice": 149,
      "discountPercentage": 25,
      "currency": "INR",
      "isTaxable": true
    },

    "options": {
      "size": ["12x18", "18x24", "24x36", "36x48"],
      "material": ["Paper", "Vinyl", "Canvas"],
      "paperType": ["Matte", "Glossy"]
    },

    "variants": [
      { "variantId": "WB-TSA-12x18-PAPER", "size": "12x18", "material": "Paper", "price": 149, "stock": 30 },
      { "variantId": "WB-TSA-18x24-PAPER", "size": "18x24", "material": "Paper", "price": 349, "stock": 25 },
      { "variantId": "WB-TSA-24x36-PAPER", "size": "24x36", "material": "Paper", "price": 649, "stock": 25 },
      { "variantId": "WB-TSA-36x48-PAPER", "size": "36x48", "material": "Paper", "price": 1299, "stock": 25 },
      { "variantId": "WB-TSA-12x18-VINYL", "size": "12x18", "material": "Vinyl", "price": 149, "stock": 30 },
      { "variantId": "WB-TSA-18x24-VINYL", "size": "18x24", "material": "Vinyl", "price": 349, "stock": 25 },
      { "variantId": "WB-TSA-24x36-VINYL", "size": "24x36", "material": "Vinyl", "price": 649, "stock": 25 },
      { "variantId": "WB-TSA-36x48-VINYL", "size": "36x48", "material": "Vinyl", "price": 1299, "stock": 25 },
      { "variantId": "WB-TSA-12x18-CANVAS", "size": "12x18", "material": "Canvas", "price": 499, "stock": 15 },
      { "variantId": "WB-TSA-18x24-CANVAS", "size": "18x24", "material": "Canvas", "price": 899, "stock": 15 },
      { "variantId": "WB-TSA-24x36-CANVAS", "size": "24x36", "material": "Canvas", "price": 1599, "stock": 15 },
      { "variantId": "WB-TSA-36x48-CANVAS", "size": "36x48", "material": "Canvas", "price": 2999, "stock": 15 }
    ],

    "inventory": {
      "totalStock": 270,
      "stockStatus": "in_stock",
      "lowStockThreshold": 10
    },

    "media": {
      "thumbnail": "https://res.cloudinary.com/dal56whd6/image/upload/v1774202306/modern-office-decor-tony-stark-abstract-portrait_fermf9.webp",
      "images": [
        "https://res.cloudinary.com/.../tony_stark_mockup_office.webp"
      ]
    },

    "tags": [
      "tony stark art",
      "iron man banner",
      "abstract wall decor",
      "marvel office art",
      "modern superhero banner"
    ],

    "seo": {
      "metaTitle": "Tony Stark Abstract Wall Banner | Modern Marvel Art",
      "metaDescription": "Upgrade your office with this premium Tony Stark abstract banner. High-quality fabric featuring a unique, modern artistic style.",
      "keywords": ["tony stark wall art", "abstract iron man", "marvel office decor", "modern banner art"]
    },

    "productionTime": "2–4 business days",

    "shipping": {
      "weight": 0.4,
      "dimensions": { "width": 24, "height": 36, "depth": 1 },
      "shippingClass": "rolled_tube"
    },

    "status": "active",
    "isFeatured": true,
    isNewArrival: true
  },
  {
    id: "wb-dc-superman-flight-010",
    name: "Superman Man of Steel Flight Wall Banner",
    slug: "superman-man-of-steel-flight-wall-banner",
    sku: "WB-DC-SUP-010",

    productType: "banner",
    category: "Banners",

    collections: {
      franchise: "DC Comics",
      series: "Justice League Icons",
      album: "Dawn of Justice",
      artist: "Madhur"
    },

    themes: ["Superheroes", "DC", "Inspirational", "Action", "Vintage Modern"],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    "shortDescription": "Premium wall banner of Superman soaring through the Metropolis sky.",
    "description": "A powerful and inspiring wall banner featuring the Man of Steel in his iconic flight pose. With vibrant primary colors and a cinematic sky backdrop, this banner is the perfect center-piece for home offices, kids' rooms, or collector spaces.",

    "highlights": [
      "Premium fabric material",
      "Dynamic flight composition",
      "Vibrant Red, Blue, and Yellow tones",
      "Fade-resistant high-definition print",
      "Lightweight & easy to hang"
    ],

    "pricing": {
      "basePrice": 199,
      "salePrice": 149,
      "discountPercentage": 25,
      "currency": "INR",
      "isTaxable": true
    },

    "options": {
      "size": ["12x18", "18x24", "24x36", "36x48"],
      "material": ["Paper", "Vinyl", "Canvas"],
      "paperType": ["Matte", "Glossy"]
    },

    "variants": [
      { "variantId": "WB-SUP-12x18-PAPER", "size": "12x18", "material": "Paper", "price": 149, "stock": 30 },
      { "variantId": "WB-SUP-18x24-PAPER", "size": "18x24", "material": "Paper", "price": 349, "stock": 25 },
      { "variantId": "WB-SUP-24x36-PAPER", "size": "24x36", "material": "Paper", "price": 649, "stock": 25 },
      { "variantId": "WB-SUP-36x48-PAPER", "size": "36x48", "material": "Paper", "price": 1299, "stock": 25 },
      { "variantId": "WB-SUP-12x18-VINYL", "size": "12x18", "material": "Vinyl", "price": 149, "stock": 30 },
      { "variantId": "WB-SUP-18x24-VINYL", "size": "18x24", "material": "Vinyl", "price": 349, "stock": 25 },
      { "variantId": "WB-SUP-24x36-VINYL", "size": "24x36", "material": "Vinyl", "price": 649, "stock": 25 },
      { "variantId": "WB-SUP-36x48-VINYL", "size": "36x48", "material": "Vinyl", "price": 1299, "stock": 25 },
      { "variantId": "WB-SUP-12x18-CANVAS", "size": "12x18", "material": "Canvas", "price": 499, "stock": 15 },
      { "variantId": "WB-SUP-18x24-CANVAS", "size": "18x24", "material": "Canvas", "price": 899, "stock": 15 },
      { "variantId": "WB-SUP-24x36-CANVAS", "size": "24x36", "material": "Canvas", "price": 1599, "stock": 15 },
      { "variantId": "WB-SUP-36x48-CANVAS", "size": "36x48", "material": "Canvas", "price": 2999, "stock": 15 }
    ],

    "inventory": {
      "totalStock": 270,
      "stockStatus": "in_stock",
      "lowStockThreshold": 10
    },

    "media": {
      "thumbnail": "https://res.cloudinary.com/dal56whd6/image/upload/v1774202303/superman-wall-art-home-office-decor_nh8pgh.webp",
      "images": [
        "https://res.cloudinary.com/.../superman_mockup_office.webp"
      ]
    },

    "tags": [
      "superman banner",
      "man of steel art",
      "dc comics wall decor",
      "justice league art",
      "superhero flight poster"
    ],

    "seo": {
      "metaTitle": "Superman Man of Steel Wall Banner | DC Comics Art",
      "metaDescription": "Inspirational Superman wall banner on premium fabric. Bring the strength of Metropolis to your home or office.",
      "keywords": ["superman wall art", "clark kent poster", "dc superhero banner", "man of steel decor"]
    },

    "productionTime": "2–4 business days",

    "shipping": {
      "weight": 0.4,
      "dimensions": { "width": 24, "height": 36, "depth": 1 },
      "shippingClass": "rolled_tube"
    },

    "status": "active",
    "isFeatured": false,
    isNewArrival: true
  },
  {
    id: "wb-marvel-thor-lightning-011",
    name: "Thor God of Thunder Cosmic Wall Banner",
    slug: "thor-god-of-thunder-cosmic-wall-banner",
    sku: "WB-MAR-THR-011",

    productType: "banner",
    category: "Banners",

    collections: {
      franchise: "Marvel",
      series: "Asgardian Legends",
      album: "Avenging Heroes",
      artist: "Madhur"
    },

    themes: ["Marvel", "Superheroes", "Cosmic", "Action", "Cinematic"],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    "shortDescription": "Premium fabric wall banner featuring Thor wielding Mjolnir amidst lightning.",
    "description": "An epic cinematic wall banner showcasing Thor, the God of Thunder, channeling the power of the storm. Featuring high-contrast lightning effects and a cosmic backdrop, this piece adds a powerful energy to any gaming room, home office, or studio.",

    "highlights": [
      "Premium fabric material",
      "Dynamic lightning and storm visual effects",
      "High-definition cosmic color palette",
      "Fade-resistant durable print",
      "Lightweight & easy to hang"
    ],

    "pricing": {
      "basePrice": 199,
      "salePrice": 149,
      "discountPercentage": 25,
      "currency": "INR",
      "isTaxable": true
    },

    "options": {
      "size": ["12x18", "18x24", "24x36", "36x48"],
      "material": ["Paper", "Vinyl", "Canvas"],
      "paperType": ["Matte", "Glossy"]
    },

    "variants": [
      { "variantId": "WB-THR-12x18-PAPER", "size": "12x18", "material": "Paper", "price": 149, "stock": 30 },
      { "variantId": "WB-THR-18x24-PAPER", "size": "18x24", "material": "Paper", "price": 349, "stock": 25 },
      { "variantId": "WB-THR-24x36-PAPER", "size": "24x36", "material": "Paper", "price": 649, "stock": 25 },
      { "variantId": "WB-THR-36x48-PAPER", "size": "36x48", "material": "Paper", "price": 1299, "stock": 25 },
      { "variantId": "WB-THR-12x18-VINYL", "size": "12x18", "material": "Vinyl", "price": 149, "stock": 30 },
      { "variantId": "WB-THR-18x24-VINYL", "size": "18x24", "material": "Vinyl", "price": 349, "stock": 25 },
      { "variantId": "WB-THR-24x36-VINYL", "size": "24x36", "material": "Vinyl", "price": 649, "stock": 25 },
      { "variantId": "WB-THR-36x48-VINYL", "size": "36x48", "material": "Vinyl", "price": 1299, "stock": 25 },
      { "variantId": "WB-THR-12x18-CANVAS", "size": "12x18", "material": "Canvas", "price": 499, "stock": 15 },
      { "variantId": "WB-THR-18x24-CANVAS", "size": "18x24", "material": "Canvas", "price": 899, "stock": 15 },
      { "variantId": "WB-THR-24x36-CANVAS", "size": "24x36", "material": "Canvas", "price": 1599, "stock": 15 },
      { "variantId": "WB-THR-36x48-CANVAS", "size": "36x48", "material": "Canvas", "price": 2999, "stock": 15 }
    ],

    "inventory": {
      "totalStock": 270,
      "stockStatus": "in_stock",
      "lowStockThreshold": 10
    },

    "media": {
      "thumbnail": "https://res.cloudinary.com/dal56whd6/image/upload/v1774202304/thor-movie-poster-home-office-decor_jnwq3y.webp",
      "images": [
        "https://res.cloudinary.com/.../thor_mockup_setup.webp"
      ]
    },

    "tags": [
      "thor banner",
      "god of thunder",
      "marvel wall art",
      "avengers decor",
      "lightning poster"
    ],

    "seo": {
      "metaTitle": "Thor God of Thunder Wall Banner | Marvel Cosmic Decor",
      "metaDescription": "Summon the power of Asgard with this premium Thor wall banner. High-definition fabric print featuring intense lightning and cosmic art.",
      "keywords": ["thor wall art", "mjolnir banner", "marvel asgardian art", "superhero room decor"]
    },

    "productionTime": "2–4 business days",

    "shipping": {
      "weight": 0.4,
      "dimensions": { "width": 24, "height": 36, "depth": 1 },
      "shippingClass": "rolled_tube"
    },

    "status": "active",
    "isFeatured": true,
    isNewArrival: false
  },
  {
    id: "wb-sports-f1-racing-012",
    name: "Formula 1 Grand Prix Velocity Wall Banner",
    slug: "f1-race-car-velocity-wall-banner",
    sku: "WB-SPT-F1-012",

    productType: "banner",
    category: "Banners",

    collections: {
      franchise: "Sports",
      series: "Motorsport Legends",
      album: "Velocity Series",
      artist: "Madhur"
    },

    themes: ["Sports", "Racing", "F1", "Automotive", "Modern"],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "original_art",

    "shortDescription": "Premium fabric wall banner featuring a high-speed Formula 1 race car.",
    "description": "Capture the essence of speed and engineering excellence with this F1 racing wall banner. Featuring a sleek aerodynamic race car in motion, this piece is designed to bring a high-energy, professional look to modern office interiors and gaming dens.",

    "highlights": [
      "Premium fabric material",
      "Dynamic motion-blur racing aesthetic",
      "High-definition automotive detail",
      "Fade-resistant vibrant colors",
      "Lightweight & easy to hang"
    ],

    "pricing": {
      "basePrice": 199,
      "salePrice": 149,
      "discountPercentage": 25,
      "currency": "INR",
      "isTaxable": true
    },

    "options": {
      "size": ["12x18", "18x24", "24x36", "36x48"],
      "material": ["Paper", "Vinyl", "Canvas"],
      "paperType": ["Matte", "Glossy"]
    },

    "variants": [
      { "variantId": "WB-F1-12x18-PAPER", "size": "12x18", "material": "Paper", "price": 149, "stock": 30 },
      { "variantId": "WB-F1-18x24-PAPER", "size": "18x24", "material": "Paper", "price": 349, "stock": 25 },
      { "variantId": "WB-F1-24x36-PAPER", "size": "24x36", "material": "Paper", "price": 649, "stock": 25 },
      { "variantId": "WB-F1-36x48-PAPER", "size": "36x48", "material": "Paper", "price": 1299, "stock": 25 },
      { "variantId": "WB-F1-12x18-VINYL", "size": "12x18", "material": "Vinyl", "price": 149, "stock": 30 },
      { "variantId": "WB-F1-18x24-VINYL", "size": "18x24", "material": "Vinyl", "price": 349, "stock": 25 },
      { "variantId": "WB-F1-24x36-VINYL", "size": "24x36", "material": "Vinyl", "price": 649, "stock": 25 },
      { "variantId": "WB-F1-36x48-VINYL", "size": "36x48", "material": "Vinyl", "price": 1299, "stock": 25 },
      { "variantId": "WB-F1-12x18-CANVAS", "size": "12x18", "material": "Canvas", "price": 499, "stock": 15 },
      { "variantId": "WB-F1-18x24-CANVAS", "size": "18x24", "material": "Canvas", "price": 899, "stock": 15 },
      { "variantId": "WB-F1-24x36-CANVAS", "size": "24x36", "material": "Canvas", "price": 1599, "stock": 15 },
      { "variantId": "WB-F1-36x48-CANVAS", "size": "36x48", "material": "Canvas", "price": 2999, "stock": 15 }
    ],

    "inventory": {
      "totalStock": 270,
      "stockStatus": "in_stock",
      "lowStockThreshold": 10
    },

    "media": {
      "thumbnail": "https://res.cloudinary.com/dal56whd6/image/upload/v1774202304/f1-race-car-wall-art-modern-office-interior_sdq8t8.webp",
      "images": [
        "https://res.cloudinary.com/.../f1_mockup_office.webp"
      ]
    },

    "tags": [
      "f1 banner",
      "formula 1 art",
      "racing wall decor",
      "motorsport poster",
      "car enthusiast gift"
    ],

    "seo": {
      "metaTitle": "Formula 1 Racing Wall Banner | Modern Motorsport Art",
      "metaDescription": "Level up your office decor with this premium F1 racing banner. High-quality fabric featuring a sleek Grand Prix race car in motion.",
      "keywords": ["f1 wall art", "racing car banner", "motorsport decor", "formula 1 poster india"]
    },

    "productionTime": "2–4 business days",

    "shipping": {
      "weight": 0.4,
      "dimensions": { "width": 24, "height": 36, "depth": 1 },
      "shippingClass": "rolled_tube"
    },

    "status": "active",
    "isFeatured": true,
    isNewArrival: true
  },
  {
    id: "wb-sports-ronaldo-cr7-013",
    name: "Cristiano Ronaldo CR7 Legendary Wall Banner",
    slug: "cristiano-ronaldo-cr7-legendary-wall-banner",
    sku: "WB-SPT-CR7-013",

    productType: "banner",
    category: "Banners",

    collections: {
      franchise: "Sports",
      series: "Football Legends",
      album: "The GOAT Series",
      artist: "Madhur"
    },

    themes: ["Sports", "Football", "Inspirational", "Fitness", "Modern"],

    brand: "pragyaprint",
    artistName: "madhur",
    licenseType: "fan_art",

    "shortDescription": "Premium fabric wall banner featuring football icon Cristiano Ronaldo.",
    "description": "Celebrate the legacy of CR7 with this high-definition wall banner. Captured in a moment of peak performance, this piece is designed to inspire discipline and excellence. A perfect addition to home gyms, sports rooms, or modern office setups.",

    "highlights": [
      "Premium fabric material",
      "High-intensity sports photography print",
      "Vibrant colors with deep contrast",
      "Fade-resistant and durable",
      "Lightweight & easy to hang"
    ],

    "pricing": {
      "basePrice": 199,
      "salePrice": 149,
      "discountPercentage": 25,
      "currency": "INR",
      "isTaxable": true
    },

    "options": {
      "size": ["12x18", "18x24", "24x36", "36x48"],
      "material": ["Paper", "Vinyl", "Canvas"],
      "paperType": ["Matte", "Glossy"]
    },

    "variants": [
      { "variantId": "WB-CR7-12x18-PAPER", "size": "12x18", "material": "Paper", "price": 149, "stock": 30 },
      { "variantId": "WB-CR7-18x24-PAPER", "size": "18x24", "material": "Paper", "price": 349, "stock": 25 },
      { "variantId": "WB-CR7-24x36-PAPER", "size": "24x36", "material": "Paper", "price": 649, "stock": 25 },
      { "variantId": "WB-CR7-36x48-PAPER", "size": "36x48", "material": "Paper", "price": 1299, "stock": 25 },
      { "variantId": "WB-CR7-12x18-VINYL", "size": "12x18", "material": "Vinyl", "price": 149, "stock": 30 },
      { "variantId": "WB-CR7-18x24-VINYL", "size": "18x24", "material": "Vinyl", "price": 349, "stock": 25 },
      { "variantId": "WB-CR7-24x36-VINYL", "size": "24x36", "material": "Vinyl", "price": 649, "stock": 25 },
      { "variantId": "WB-CR7-36x48-VINYL", "size": "36x48", "material": "Vinyl", "price": 1299, "stock": 25 },
      { "variantId": "WB-CR7-12x18-CANVAS", "size": "12x18", "material": "Canvas", "price": 499, "stock": 15 },
      { "variantId": "WB-CR7-18x24-CANVAS", "size": "18x24", "material": "Canvas", "price": 899, "stock": 15 },
      { "variantId": "WB-CR7-24x36-CANVAS", "size": "24x36", "material": "Canvas", "price": 1599, "stock": 15 },
      { "variantId": "WB-CR7-36x48-CANVAS", "size": "36x48", "material": "Canvas", "price": 2999, "stock": 15 }
    ],

    "inventory": {
      "totalStock": 270,
      "stockStatus": "in_stock",
      "lowStockThreshold": 10
    },

    "media": {
      "thumbnail": "https://res.cloudinary.com/dal56whd6/image/upload/v1774202303/cristiano-ronaldo-wall-art-office-desk-setup_pnanpx.webp",
      "images": [
        "https://res.cloudinary.com/.../ronaldo_mockup_desk.webp"
      ]
    },

    "tags": [
      "cristiano ronaldo banner",
      "cr7 wall art",
      "football decor",
      "motivational sports poster",
      "real madrid art"
    ],

    "seo": {
      "metaTitle": "Cristiano Ronaldo CR7 Wall Banner | Football Legend Decor",
      "metaDescription": "Level up your space with this premium Cristiano Ronaldo wall banner. High-quality fabric featuring the football GOAT in action.",
      "keywords": ["ronaldo wall decor", "cr7 poster india", "football wall banner", "motivational athlete art"]
    },

    "productionTime": "2–4 business days",

    "shipping": {
      "weight": 0.4,
      "dimensions": { "width": 24, "height": 36, "depth": 1 },
      "shippingClass": "rolled_tube"
    },

    "status": "active",
    "isFeatured": true,
    isNewArrival: false
  },

];


