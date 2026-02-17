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


export const SPIRALS = [
  {
    id: "sb-hp-001",
    name: "I Solemnly Swear Spiral Book",
    slug: "i-solemnly-swear-spiral-book",
    sku: "SB-HPSW-001",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Harry Potter",
      universe: "Wizarding World",
      genre: "Fantasy",
      collectionType: "Quote Series"
    },

    moods: [
      "Mystical",
      "Nostalgic",
      "Aesthetic",
      "Creative",
      "Dark Academia"
    ],

    brand: "pragyaprint",
    series: "Movies Collection",
    licenseType: "fan_art_inspired",

    shortDescription: "A vintage aesthetic spiral notebook inspired by the iconic wizard quote – perfect for journaling, college notes, and creative writing.",

    description: "Bring a touch of wizard-inspired mystery to your everyday writing. This spiral-bound notebook features a parchment-style cover design inspired by magical lore. Crafted for students, writers, and fantasy lovers, it blends aesthetic design with practical usability. Whether you're journaling, taking lecture notes, sketching ideas, or gifting someone special, this spiral book adds personality to every page.",

    highlights: [
      "Premium matte finish aesthetic cover",
      "Durable metal spiral binding for easy flipping",
      "Smooth 70 GSM pages for effortless writing",
      "Multiple size & page options available",
      "Perfect for journaling, college notes, gifting & creative writing"
    ],

    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]    
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-HPSW-001-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-HPSW-001-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-HPSW-001-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-HPSW-001-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-HPSW-001-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-HPSW-001-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-HPSW-001-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-HPSW-001-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-HPSW-001-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-HPSW-001-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172573/harry-potter-solemnly-swear-notebook-marauders-map_olaqnn.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "",
        ""
      ]
    },

    tags: [
      "spiral notebook",
      "aesthetic notebook",
      "fantasy notebook",
      "movie inspired stationery",
      "college notebook",
      "quote notebook",
      "gift notebook",
      "dark academia stationery",
      "wizard aesthetic",
      "journaling notebook"
    ],

    seo: {
      metaTitle: "Wizard Quote Spiral Notebook | Aesthetic Fantasy Journal",
      metaDescription: "Shop aesthetic wizard-inspired spiral notebooks in A5 & A4 sizes. Perfect for journaling, college notes, and gifting.",
      keywords: [
        "spiral notebook",
        "fantasy notebook",
        "aesthetic journal",
        "movie inspired notebook",
        "wizard notebook"
      ]
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote: "Fan-art inspired design. All referenced quotes belong to their respective owners.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "sb-mod-001",
    name: "Be Gentle With Yourself Spiral Book",
    slug: "be-gentle-with-yourself-spiral-book",
    sku: "SB-MOD-BGYS-001",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Modern",
      universe: "Self Care",
      genre: "Minimal Art",
      collectionType: "Modern"
    },

    moods: [
      "Calm",
      "Mindful",
      "Aesthetic",
      "Minimal",
      "Soothing"
    ],
    series: "Modern Collection",
    licenseType: "original_design",

    shortDescription:
      "A calming modern spiral notebook with a gentle reminder to slow down and be kind to yourself.",

    description:
      "Designed for moments of reflection and calm, this modern spiral notebook features abstract blue marble artwork paired with the reassuring message ‘Be Gentle With Yourself’. Perfect for journaling, mindfulness practices, creative writing, or daily notes, this notebook blends minimal design with emotional warmth — making it ideal for both personal use and thoughtful gifting.",

    highlights: [
      "Modern abstract blue marble artwork",
      "Minimal typography with self-care message",
      "Strong metal spiral binding",
      "Smooth 70 GSM high-quality pages",
      "Ideal for journaling, mindfulness & daily notes"
    ],



    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172558/be-gentle-with-yourself-blue-marble-spiral-notebook_c60fkm.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "",
        ""
      ]
    },

    tags: [
      "modern spiral notebook",
      "self care notebook",
      "minimal notebook",
      "aesthetic journal",
      "mindfulness notebook",
      "blue marble notebook",
      "mental health stationery",
      "daily journaling notebook"
    ],

    seo: {
      metaTitle: "Be Gentle With Yourself Spiral Notebook | Modern Self Care Journal",
      metaDescription:
        "A modern spiral notebook with abstract blue marble art and a calming self-care message. Perfect for journaling, mindfulness, and daily notes.",
      keywords: [
        "modern spiral notebook",
        "self care journal",
        "minimal aesthetic notebook",
        "mindfulness notebook",
        "blue marble notebook"
      ]
    },

    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-MOD-BGYS-001-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-MOD-BGYS-001-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-MOD-BGYS-001-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-MOD-BGYS-001-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-MOD-BGYS-001-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-MOD-BGYS-001-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-MOD-BGYS-001-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-MOD-BGYS-001-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-MOD-BGYS-001-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-MOD-BGYS-001-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "sb-spt-001",
    name: "Cristiano Ronaldo CR7 Spiral Book",
    slug: "cristiano-ronaldo-cr7-spiral-book",
    sku: "SB-SPT-CR7-001",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Football",
      universe: "Manchester United",
      genre: "Sports",
      collectionType: "Sports"
    },

    moods: [
      "Bold",
      "Energetic",
      "Motivational",
      "Powerful",
      "Athletic"
    ],

    
    series: "Sports Collection",
    licenseType: "fan_art_inspired",

    shortDescription:
      "A bold CR7-inspired spiral notebook featuring iconic red tones and athletic energy.",

    description:
      "Celebrate the legacy of a football icon with this Cristiano Ronaldo inspired spiral notebook. Featuring a powerful red gradient design with a CR7 silhouette aesthetic, this notebook captures confidence, ambition, and winning energy. Perfect for students, athletes, fans, and dreamers who play to win — both on and off the field.",

    highlights: [
      "Bold CR7-inspired modern design",
      "Premium matte finish cover",
      "Strong metal spiral binding",
      "Smooth 70 GSM pages",
      "Perfect for students, athletes & football fans"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172558/cristiano-ronaldo-cr7-manchester-united-themed-spiral-notebook_tj9qjh.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "cr7-cover.webp",
        "cr7-inner.webp"
      ]
    },

    tags: [
      "cr7 notebook",
      "ronaldo spiral notebook",
      "football notebook",
      "sports spiral book",
      "athlete journal",
      "motivational notebook",
      "manchester united notebook",
      "football fan gift"
    ],
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-SPT-CR7-001-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-SPT-CR7-001-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-SPT-CR7-001-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-SPT-CR7-001-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-SPT-CR7-001-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-SPT-CR7-001-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-SPT-CR7-001-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-SPT-CR7-001-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-SPT-CR7-001-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-SPT-CR7-001-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    seo: {
      metaTitle: "Cristiano Ronaldo CR7 Spiral Notebook | Football Fan Journal",
      metaDescription:
        "CR7-inspired spiral notebook with bold red athletic design. Perfect for football fans, students, and sports lovers.",
      keywords: [
        "cr7 notebook",
        "ronaldo spiral notebook",
        "football notebook",
        "sports journal",
        "manchester united fan notebook"
      ]
    }
  },
  {
    id: "sb-quo-001",
    name: "Don't Give Up Motivational Spiral Book",
    slug: "dont-give-up-motivational-spiral-book",
    sku: "SB-QUO-DGU-001",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Motivation",
      universe: "Inspirational Quotes",
      genre: "Typography Art",
      collectionType: "Quotes"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-QUO-DGU-001-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-QUO-DGU-001-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-QUO-DGU-001-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-QUO-DGU-001-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-QUO-DGU-001-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-QUO-DGU-001-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-QUO-DGU-001-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-QUO-DGU-001-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-QUO-DGU-001-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-QUO-DGU-001-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Motivational",
      "Bold",
      "Encouraging",
      "Focused",
      "Determined"
    ],

    series: "Quotes Collection",
    licenseType: "original_design",

    shortDescription:
      "A bold motivational spiral notebook featuring a powerful 'Don't Give Up' typography design.",

    description:
      "Stay driven and inspired every day with this bold 'Don't Give Up' spiral notebook. Designed with striking typography and warm gradient tones, this notebook serves as a constant reminder to push forward. Ideal for students, entrepreneurs, creators, and dreamers who refuse to quit. Perfect for journaling goals, planning success, or daily notes.",

    highlights: [
      "Bold motivational typography cover",
      "Eye-catching modern gradient design",
      "Premium matte finish cover",
      "Strong metal spiral binding",
      "Perfect for goal setting & daily productivity"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172558/dont-give-up-motivational-spiral-notebook_if8n1e.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "dont-give-up-cover.webp",
        "dont-give-up-inner.webp"
      ]
    },

    tags: [
      "motivational notebook",
      "dont give up notebook",
      "inspirational spiral book",
      "goal planner notebook",
      "productivity journal",
      "quote notebook",
      "student motivational notebook",
      "entrepreneur journal"
    ],

    seo: {
      metaTitle: "Don't Give Up Spiral Notebook | Motivational Quote Journal",
      metaDescription:
        "Bold motivational spiral notebook with 'Don't Give Up' typography design. Perfect for students, entrepreneurs, and daily goal setting.",
      keywords: [
        "motivational notebook",
        "dont give up journal",
        "inspirational spiral notebook",
        "quote notebook",
        "goal setting journal"
      ]
    }

  },
  {
    id: "sb-mod-002",
    name: "Pressed Floral Aesthetic Spiral Book",
    slug: "pressed-floral-aesthetic-spiral-book",
    sku: "SB-MOD-FLR-002",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",


    collections: {
      theme: "Floral",
      universe: "Botanical Art",
      genre: "Minimal Aesthetic",
      collectionType: "Modern"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-MOD-FLR-002-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-MOD-FLR-002-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-MOD-FLR-002-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-MOD-FLR-002-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-MOD-FLR-002-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-MOD-FLR-002-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-MOD-FLR-002-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-MOD-FLR-002-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-MOD-FLR-002-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-MOD-FLR-002-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Soft",
      "Calm",
      "Nature Inspired",
      "Elegant",
      "Aesthetic"
    ],

    series: "Modern Collection",
    licenseType: "original_design",

    shortDescription:
      "A soft floral aesthetic spiral notebook featuring pressed botanical artwork on a textured background.",

    description:
      "Inspired by delicate pressed flowers and natural textures, this aesthetic spiral notebook blends simplicity with elegance. Featuring soft botanical elements on a neutral textured backdrop, it’s perfect for journaling, poetry, creative writing, or everyday notes. Ideal for nature lovers, minimalists, and anyone who appreciates subtle beauty in their stationery.",

    highlights: [
      "Pressed floral botanical artwork",
      "Soft neutral textured background design",
      "Premium matte finish cover",
      "Durable metal spiral binding",
      "Perfect for journaling, poetry & daily notes"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172560/floral-spiral-notebook-pressed-flowers-wooden-background_zczjke.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "pressed-floral-cover.webp",
        "pressed-floral-inner.webp"
      ]
    },

    tags: [
      "floral spiral notebook",
      "botanical notebook",
      "aesthetic journal",
      "minimal spiral book",
      "nature inspired notebook",
      "cottagecore notebook",
      "soft aesthetic stationery",
      "floral gift notebook"
    ],

    seo: {
      metaTitle: "Pressed Floral Spiral Notebook | Botanical Aesthetic Journal",
      metaDescription:
        "Elegant pressed floral spiral notebook with soft botanical artwork. Perfect for journaling, poetry, and nature lovers.",
      keywords: [
        "floral spiral notebook",
        "botanical journal",
        "aesthetic floral notebook",
        "nature inspired notebook",
        "minimal floral journal"
      ]
    }

  },
  {
    id: "sb-spr-001",
    name: "Hanuman Meditation Art Spiral Book",
    slug: "hanuman-meditation-art-spiral-book",
    sku: "SB-SPR-HNM-001",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Spiritual",
      universe: "Hindu Art",
      genre: "Devotional Illustration",
      collectionType: "Spiritual"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-SPR-HNM-001-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-SPR-HNM-001-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-SPR-HNM-001-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-SPR-HNM-001-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-SPR-HNM-001-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-SPR-HNM-001-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-SPR-HNM-001-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-SPR-HNM-001-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-SPR-HNM-001-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-SPR-HNM-001-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Peaceful",
      "Devotional",
      "Powerful",
      "Calm",
      "Focused"
    ],

    series: "Spiritual Collection",
    licenseType: "original_design",

    shortDescription:
      "A serene Hanuman meditation artwork spiral notebook inspired by devotion, strength, and inner peace.",

    description:
      "This Hanuman meditation spiral notebook blends spiritual symbolism with artistic elegance. Featuring a calm and powerful depiction of Lord Hanuman in a meditative pose, it represents strength, discipline, and devotion. Ideal for journaling, mantra writing, daily reflections, or spiritual practice, this notebook brings divine inspiration to your everyday thoughts.",

    highlights: [
      "Spiritual Hanuman meditation artwork",
      "Calm and devotional aesthetic design",
      "Premium matte finish cover",
      "Strong metal spiral binding",
      "Perfect for journaling, mantra writing & daily reflections"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172564/hanuman-meditation-art-notebook-on-wood_a0m1vn.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "hanuman-cover.webp",
        "hanuman-inner.webp"
      ]
    },

    tags: [
      "hanuman notebook",
      "spiritual spiral notebook",
      "hindu art notebook",
      "devotional journal",
      "meditation notebook",
      "indian culture stationery",
      "religious spiral book",
      "mantra journal"
    ],

    seo: {
      metaTitle: "Hanuman Meditation Spiral Notebook | Spiritual Devotional Journal",
      metaDescription:
        "Spiritual Hanuman meditation spiral notebook inspired by devotion, strength, and inner peace. Perfect for journaling and spiritual practice.",
      keywords: [
        "hanuman notebook",
        "spiritual journal",
        "hindu art spiral notebook",
        "meditation notebook",
        "devotional journal"
      ]
    }

  },
  {
    id: "sb-quo-002",
    name: "Do More of What Makes You Happy Spiral Book",
    slug: "do-more-of-what-makes-you-happy-spiral-book",
    sku: "SB-QUO-HAP-002",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Positivity",
      universe: "Happy Illustrations",
      genre: "Hand Drawn Art",
      collectionType: "Quotes"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-QUO-HAP-002-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-QUO-HAP-002-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-QUO-HAP-002-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-QUO-HAP-002-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-QUO-HAP-002-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-QUO-HAP-002-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-QUO-HAP-002-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-QUO-HAP-002-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-QUO-HAP-002-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-QUO-HAP-002-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Happy",
      "Cheerful",
      "Playful",
      "Positive",
      "Cute"
    ],

    series: "Quotes Collection",
    licenseType: "original_design",

    shortDescription:
      "A cheerful illustrated spiral notebook with the uplifting message 'Do More of What Makes You Happy'.",

    description:
      "Bright, playful, and full of positivity — this illustrated spiral notebook spreads joy with its heartwarming message and colorful hand-drawn artwork. Perfect for journaling, school notes, creative writing, or daily reflections, it’s designed to remind you to choose happiness every single day. Ideal for kids, students, and anyone who loves cute aesthetic stationery.",

    highlights: [
      "Cute hand-drawn illustration design",
      "Uplifting positive quote cover",
      "Premium matte finish cover",
      "Strong metal spiral binding",
      "Perfect for journaling, school & daily notes"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172559/inspirational-notebook-do-more-of-what-makes-you-happy-illustration_jkk3mj.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "do-more-happy-cover.webp",
        "do-more-happy-inner.webp"
      ]
    },

    tags: [
      "happy quote notebook",
      "positive spiral notebook",
      "cute illustration journal",
      "kids spiral notebook",
      "inspirational notebook",
      "aesthetic stationery",
      "school notebook",
      "gift for girls notebook"
    ],

    seo: {
      metaTitle: "Do More of What Makes You Happy Spiral Notebook | Cute Quote Journal",
      metaDescription:
        "Colorful illustrated spiral notebook with positive quote. Perfect for kids, students, journaling, and daily inspiration.",
      keywords: [
        "happy quote notebook",
        "positive spiral notebook",
        "cute journal",
        "kids inspirational notebook",
        "illustrated spiral book"
      ]
    }

  },
  {
    id: "sb-quo-003",
    name: "There Is a Seat Waiting Spiral Book",
    slug: "there-is-a-seat-waiting-spiral-book",
    sku: "SB-QUO-TSW-003",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Inspiration",
      universe: "Life Journey",
      genre: "Illustration Art",
      collectionType: "Quotes"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-QUO-TSW-003-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-QUO-TSW-003-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-QUO-TSW-003-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-QUO-TSW-003-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-QUO-TSW-003-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-QUO-TSW-003-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-QUO-TSW-003-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-QUO-TSW-003-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-QUO-TSW-003-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-QUO-TSW-003-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Hopeful",
      "Dreamy",
      "Encouraging",
      "Aspirational",
      "Calm"
    ],

    series: "Quotes Collection",
    licenseType: "original_design",

    shortDescription:
      "A hopeful illustrated spiral notebook featuring the quote 'There is a seat waiting for you at tables you haven't even seen.'",

    description:
      "This beautifully illustrated spiral notebook captures the spirit of hope and new beginnings. Featuring a charming yellow train artwork and an uplifting quote, it reminds you that opportunities are always ahead — even the ones you can't yet imagine. Perfect for journaling, planning goals, creative writing, or daily reflections. Designed for dreamers, students, and anyone building their future.",

    highlights: [
      "Inspirational quote cover design",
      "Charming modern illustration artwork",
      "Premium matte finish cover",
      "Strong metal spiral binding",
      "Perfect for journaling, planning & self-growth"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172559/inspirational-quote-notebook-yellow-train-illustration_c8seoz.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "seat-waiting-cover.webp",
        "seat-waiting-inner.webp"
      ]
    },

    tags: [
      "inspirational quote notebook",
      "hope journal",
      "motivational spiral book",
      "aesthetic illustration notebook",
      "life journey journal",
      "student motivation notebook",
      "dream big notebook",
      "positive quote journal"
    ],

    seo: {
      metaTitle: "There Is a Seat Waiting Spiral Notebook | Inspirational Quote Journal",
      metaDescription:
        "Inspirational spiral notebook with hopeful quote and charming illustration. Perfect for journaling, goal setting, and daily motivation.",
      keywords: [
        "inspirational notebook",
        "hope journal",
        "quote spiral notebook",
        "motivational journal",
        "aesthetic illustrated notebook"
      ]
    }

  },

  {
    id: "sb-spr-002",
    name: "Shiva Parvati Mount Kailash Art Spiral Book",
    slug: "shiva-parvati-mount-kailash-art-spiral-book",
    sku: "SB-SPR-SPK-002",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Spiritual",
      universe: "Hindu Mythology",
      genre: "Mythological Art",
      collectionType: "Spiritual"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-SPR-SPK-002-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-SPR-SPK-002-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-SPR-SPK-002-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-SPR-SPK-002-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-SPR-SPK-002-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-SPR-SPK-002-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-SPR-SPK-002-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-SPR-SPK-002-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-SPR-SPK-002-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-SPR-SPK-002-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Divine",
      "Peaceful",
      "Devotional",
      "Serene",
      "Sacred"
    ],

    series: "Spiritual Collection",
    licenseType: "original_design",

    shortDescription:
      "A divine spiral notebook featuring artistic illustration of Lord Shiva and Goddess Parvati at Mount Kailash.",

    description:
      "Inspired by the serene presence of Lord Shiva and Goddess Parvati at Mount Kailash, this spiritual spiral notebook captures devotion, balance, and divine energy. The textured mythological artwork brings a timeless aesthetic to your daily writing. Perfect for journaling, spiritual reflections, mantra writing, or gifting during festivals and religious occasions.",

    highlights: [
      "Mythological Shiva-Parvati artwork",
      "Sacred Mount Kailash inspired design",
      "Premium matte finish cover",
      "Strong metal spiral binding",
      "Ideal for journaling, spiritual writing & gifting"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172561/lord-shiva-parvati-mount-kailash-art-notebook_ivtzxs.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "shiva-parvati-cover.webp",
        "shiva-parvati-inner.webp"
      ]
    },

    tags: [
      "shiva parvati notebook",
      "hindu mythology notebook",
      "spiritual spiral notebook",
      "devotional journal",
      "kailash art notebook",
      "religious stationery",
      "indian culture notebook",
      "festival gift notebook"
    ],

    seo: {
      metaTitle: "Shiva Parvati Spiral Notebook | Spiritual Mount Kailash Art Journal",
      metaDescription:
        "Spiritual spiral notebook featuring Lord Shiva and Goddess Parvati at Mount Kailash. Perfect for journaling and devotional writing.",
      keywords: [
        "shiva parvati notebook",
        "spiritual journal",
        "hindu mythology spiral notebook",
        "kailash art notebook",
        "devotional notebook"
      ]
    }

  },
  {
    id: "sb-urb-001",
    name: "David Graffiti Pop Art Spiral Book",
    slug: "david-graffiti-pop-art-spiral-book",
    sku: "SB-URB-DAV-001",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Urban Art",
      universe: "Pop Culture",
      genre: "Graffiti Illustration",
      collectionType: "Modern"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-URB-DAV-001-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-URB-DAV-001-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-URB-DAV-001-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-URB-DAV-001-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-URB-DAV-001-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-URB-DAV-001-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-URB-DAV-001-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-URB-DAV-001-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-URB-DAV-001-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-URB-DAV-001-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Bold",
      "Edgy",
      "Creative",
      "Modern",
      "Expressive"
    ],

    series: "Urban Collection",
    licenseType: "fan_art_inspired",

    shortDescription:
      "A bold graffiti-inspired spiral notebook featuring a modern pop-art take on the iconic David sculpture.",

    description:
      "This urban pop-art spiral notebook reimagines the iconic David sculpture with graffiti elements and neon highlights. A fusion of classical art and modern street culture, this design speaks creativity, rebellion, and self-expression. Perfect for artists, designers, students, and anyone who loves bold aesthetic stationery with personality.",

    highlights: [
      "Modern graffiti pop-art design",
      "Classic sculpture reimagined in urban style",
      "Neon accent detailing for bold impact",
      "Premium matte finish cover",
      "Perfect for sketching, journaling & creative work"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172561/michelangelo-david-graffiti-art-spiral-notebook_gk1k4k.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "david-graffiti-cover.webp",
        "david-graffiti-inner.webp"
      ]
    },

    tags: [
      "graffiti notebook",
      "pop art spiral notebook",
      "david sculpture notebook",
      "urban art journal",
      "modern aesthetic notebook",
      "artist sketchbook",
      "creative spiral book",
      "gen z stationery"
    ],

    seo: {
      metaTitle: "David Graffiti Spiral Notebook | Urban Pop Art Journal",
      metaDescription:
        "Bold graffiti-style spiral notebook featuring a modern pop-art take on the David sculpture. Perfect for artists and creative minds.",
      keywords: [
        "graffiti notebook",
        "pop art journal",
        "urban spiral notebook",
        "modern art notebook",
        "artist notebook"
      ]
    }

  },
  {
    id: "sb-quo-004",
    name: "Remember Who You Wanted To Be Spiral Book",
    slug: "remember-who-you-wanted-to-be-spiral-book",
    sku: "SB-QUO-RWY-004",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Motivation",
      universe: "Self Growth",
      genre: "Abstract Art",
      collectionType: "Quotes"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-QUO-RWY-004-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-QUO-RWY-004-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-QUO-RWY-004-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-QUO-RWY-004-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-QUO-RWY-004-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-QUO-RWY-004-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-QUO-RWY-004-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-QUO-RWY-004-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-QUO-RWY-004-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-QUO-RWY-004-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Reflective",
      "Motivational",
      "Bold",
      "Expressive",
      "Thought Provoking"
    ],

    series: "Quotes Collection",
    licenseType: "original_design",

    shortDescription:
      "An abstract motivational spiral notebook featuring the powerful quote 'Remember Who You Wanted To Be.'",

    description:
      "This bold and artistic spiral notebook blends abstract spiral patterns with a powerful reminder to stay aligned with your dreams. 'Remember Who You Wanted To Be' speaks to ambition, growth, and personal evolution. Perfect for journaling goals, reflecting on progress, or planning your next big move. Designed for thinkers, creators, and dreamers who refuse to settle.",

    highlights: [
      "Bold motivational quote design",
      "Abstract spiral art background",
      "Premium matte finish cover",
      "Strong metal spiral binding",
      "Perfect for goal setting & personal growth journaling"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172561/motivational-spiral-notebook-remember-who-you-wanted-to-be_azzrxr.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "remember-who-cover.webp",
        "remember-who-inner.webp"
      ]
    },

    tags: [
      "motivational notebook",
      "self growth journal",
      "abstract art notebook",
      "goal planner spiral book",
      "inspirational quote notebook",
      "dream big journal",
      "personal development notebook",
      "reflective journal"
    ],

    seo: {
      metaTitle: "Remember Who You Wanted To Be Spiral Notebook | Motivational Journal",
      metaDescription:
        "Abstract motivational spiral notebook with powerful self-growth quote. Perfect for journaling goals and personal development.",
      keywords: [
        "motivational spiral notebook",
        "self growth journal",
        "inspirational quote notebook",
        "goal setting notebook",
        "personal development journal"
      ]
    }

  },
  {
    id: "sb-art-001",
    name: "Love Me Like a Sailor Spiral Book",
    slug: "love-me-like-a-sailor-spiral-book",
    sku: "SB-ART-SLR-001",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Nautical",
      universe: "Ocean Art",
      genre: "Surreal Illustration",
      collectionType: "Modern"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-ART-SLR-001-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-ART-SLR-001-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-ART-SLR-001-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-ART-SLR-001-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-ART-SLR-001-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-ART-SLR-001-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-ART-SLR-001-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-ART-SLR-001-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-ART-SLR-001-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-ART-SLR-001-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Dreamy",
      "Moody",
      "Artistic",
      "Romantic",
      "Mysterious"
    ],

    series: "Artistic Collection",
    licenseType: "original_design",

    shortDescription:
      "A surreal ocean-themed spiral notebook featuring bold octopus tentacles and the poetic line 'Love Me Like a Sailor.'",

    description:
      "This artistic spiral notebook blends ocean waves with surreal octopus illustration and a poetic handwritten phrase. Moody, expressive, and visually striking, it captures themes of depth, emotion, and freedom. Perfect for journaling, poetry, sketching, or creative writing. Designed for ocean lovers, artists, and free-spirited thinkers.",

    highlights: [
      "Surreal nautical ocean artwork",
      "Poetic handwritten quote design",
      "Premium matte finish cover",
      "Strong metal spiral binding",
      "Perfect for journaling, poetry & creative writing"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172562/nautical-octopus-tentacles-love-me-like-a-sailor-notebook_uskv5s.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "sailor-cover.webp",
        "sailor-inner.webp"
      ]
    },

    tags: [
      "nautical notebook",
      "ocean spiral notebook",
      "octopus art journal",
      "surreal notebook",
      "artistic spiral book",
      "poetry journal",
      "indie aesthetic notebook",
      "creative writing notebook"
    ],

    seo: {
      metaTitle: "Love Me Like a Sailor Spiral Notebook | Nautical Ocean Art Journal",
      metaDescription:
        "Surreal ocean-inspired spiral notebook with octopus illustration and poetic quote. Perfect for journaling and creative writing.",
      keywords: [
        "nautical spiral notebook",
        "ocean art journal",
        "octopus notebook",
        "surreal spiral book",
        "creative writing journal"
      ]
    }

  },
  {
    id: "sb-mod-003",
    name: "Orange Wavy Abstract Spiral Book",
    slug: "orange-wavy-abstract-spiral-book",
    sku: "SB-MOD-ORG-003",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Abstract",
      universe: "Modern Design",
      genre: "Minimal Pattern",
      collectionType: "Modern"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-MOD-ORG-003-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-MOD-ORG-003-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-MOD-ORG-003-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-MOD-ORG-003-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-MOD-ORG-003-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-MOD-ORG-003-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-MOD-ORG-003-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-MOD-ORG-003-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-MOD-ORG-003-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-MOD-ORG-003-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Minimal",
      "Modern",
      "Vibrant",
      "Creative",
      "Trendy"
    ],

    series: "Modern Collection",
    licenseType: "original_design",

    shortDescription:
      "A bold modern spiral notebook featuring a vibrant orange abstract wavy pattern design.",

    description:
      "This modern spiral notebook features a clean and vibrant orange abstract wave pattern that blends simplicity with bold style. Designed for minimal aesthetic lovers, it’s perfect for journaling, college notes, sketching ideas, or everyday planning. A trendy and versatile design that fits creative minds and modern workspaces.",

    highlights: [
      "Modern abstract wavy pattern design",
      "Bold vibrant orange aesthetic",
      "Premium matte finish cover",
      "Strong metal spiral binding",
      "Perfect for journaling, notes & creative planning"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172563/orange-abstract-wavy-pattern-spiral-notebook_iyjxm9.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "orange-wavy-cover.webp",
        "orange-wavy-inner.webp"
      ]
    },

    tags: [
      "abstract spiral notebook",
      "orange aesthetic notebook",
      "minimal spiral book",
      "modern pattern notebook",
      "trendy stationery",
      "college notebook aesthetic",
      "clean design journal",
      "creative notebook"
    ],

    seo: {
      metaTitle: "Orange Abstract Spiral Notebook | Modern Minimal Journal",
      metaDescription:
        "Modern orange abstract spiral notebook with bold wavy pattern design. Perfect for journaling, college notes, and creative planning.",
      keywords: [
        "abstract spiral notebook",
        "modern notebook",
        "orange aesthetic journal",
        "minimal pattern notebook",
        "trendy spiral book"
      ]
    }

  },
  {
    id: "sb-spr-003",
    name: "Saraswati Mandala Art Spiral Book",
    slug: "saraswati-mandala-art-spiral-book",
    sku: "SB-SPR-SRS-003",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Spiritual",
      universe: "Hindu Mythology",
      genre: "Mandala Devotional Art",
      collectionType: "Spiritual"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-SPR-SRS-003-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-SPR-SRS-003-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-SPR-SRS-003-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-SPR-SRS-003-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-SPR-SRS-003-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-SPR-SRS-003-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-SPR-SRS-003-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-SPR-SRS-003-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-SPR-SRS-003-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-SPR-SRS-003-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Divine",
      "Graceful",
      "Peaceful",
      "Sacred",
      "Inspiring"
    ],

    series: "Spiritual Collection",
    licenseType: "original_design",

    shortDescription:
      "A divine spiral notebook featuring Goddess Saraswati in detailed mandala-style devotional artwork.",

    description:
      "This elegant spiral notebook showcases Goddess Saraswati, symbol of knowledge, wisdom, music, and creativity. Designed with intricate mandala elements and sacred symbolism, it represents learning, purity, and artistic expression. Ideal for students, writers, artists, and spiritual seekers. Perfect for journaling, study notes, mantra writing, and devotional reflections.",

    highlights: [
      "Intricate Saraswati mandala artwork",
      "Symbol of wisdom, learning & creativity",
      "Premium matte finish cover",
      "Strong metal spiral binding",
      "Perfect for study, journaling & spiritual writing"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172564/saraswati-mandala-art-notebook-journal_hjaveh.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "saraswati-cover.webp",
        "saraswati-inner.webp"
      ]
    },

    tags: [
      "saraswati notebook",
      "spiritual spiral notebook",
      "goddess art journal",
      "hindu mythology notebook",
      "devotional journal",
      "student study notebook",
      "mandala art notebook",
      "indian culture stationery"
    ],

    seo: {
      metaTitle: "Saraswati Mandala Spiral Notebook | Spiritual Study Journal",
      metaDescription:
        "Spiritual spiral notebook featuring Goddess Saraswati mandala artwork. Perfect for students, journaling, and devotional writing.",
      keywords: [
        "saraswati notebook",
        "spiritual journal",
        "hindu goddess spiral notebook",
        "mandala art notebook",
        "study notebook spiritual"
      ]
    }

  },
  {
    id: "sb-mov-001",
    name: "Spider Hero Great Power Spiral Book",
    slug: "spider-hero-great-power-spiral-book",
    sku: "SB-MOV-SPD-001",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Superhero",
      universe: "Comic Inspired",
      genre: "Minimal Pop Art",
      collectionType: "Movies"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-MOV-SPD-001-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-MOV-SPD-001-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-MOV-SPD-001-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-MOV-SPD-001-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-MOV-SPD-001-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-MOV-SPD-001-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-MOV-SPD-001-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-MOV-SPD-001-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-MOV-SPD-001-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-MOV-SPD-001-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Bold",
      "Heroic",
      "Motivational",
      "Powerful",
      "Confident"
    ],

    series: "Movies Collection",
    licenseType: "fan_art_inspired",

    shortDescription:
      "A bold red superhero-inspired spiral notebook featuring the iconic 'With Great Power Comes Great Responsibility' quote.",

    description:
      "This superhero-inspired spiral notebook captures the essence of responsibility, courage, and strength. Designed with a powerful red minimalist aesthetic and bold emblem artwork, it’s perfect for fans, students, and dreamers who believe in using their power wisely. Ideal for journaling goals, study notes, or everyday writing with heroic energy.",

    highlights: [
      "Minimal superhero emblem design",
      "Iconic motivational quote cover",
      "Bold red modern aesthetic",
      "Premium matte finish cover",
      "Perfect for fans, students & daily journaling"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172563/spider-man-red-spiral-notebook-great-power-quote_pqkr8x.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "spider-hero-cover.webp",
        "spider-hero-inner.webp"
      ]
    },

    tags: [
      "superhero notebook",
      "spider inspired notebook",
      "motivational quote notebook",
      "movie spiral notebook",
      "comic fan journal",
      "red aesthetic notebook",
      "hero quote notebook",
      "pop culture stationery"
    ],

    seo: {
      metaTitle: "Superhero Great Power Spiral Notebook | Movie Inspired Journal",
      metaDescription:
        "Bold red superhero-inspired spiral notebook featuring the iconic great power quote. Perfect for fans, students, and journaling.",
      keywords: [
        "superhero spiral notebook",
        "great power quote notebook",
        "movie inspired journal",
        "comic notebook",
        "fan art spiral book"
      ]
    }

  },
  {
    id: "sb-art-002",
    name: "Sunrise Mountain Landscape Spiral Book",
    slug: "sunrise-mountain-landscape-spiral-book",
    sku: "SB-ART-MTN-002",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Nature",
      universe: "Landscape Art",
      genre: "Illustration",
      collectionType: "Modern"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-ART-MTN-002-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-ART-MTN-002-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-ART-MTN-002-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-ART-MTN-002-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-ART-MTN-002-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-ART-MTN-002-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-ART-MTN-002-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-ART-MTN-002-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-ART-MTN-002-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-ART-MTN-002-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Adventurous",
      "Vibrant",
      "Peaceful",
      "Inspiring",
      "Free"
    ],

    series: "Artistic Collection",
    licenseType: "original_design",

    shortDescription:
      "A vibrant spiral notebook featuring a bold illustrated mountain landscape with radiant sunrise design.",

    description:
      "This artistic spiral notebook captures the beauty of a radiant sunrise over majestic mountains and lush valleys. Designed with bold colors and graphic illustration style, it symbolizes freedom, exploration, and fresh beginnings. Perfect for journaling, travel planning, sketching, or daily note-taking. A great choice for nature lovers and creative minds.",

    highlights: [
      "Bold mountain landscape artwork",
      "Vibrant sunrise graphic design",
      "Premium matte finish cover",
      "Strong metal spiral binding",
      "Perfect for journaling, travel notes & creative writing"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172564/spiral-notebook-mountain-landscape-art_gnmbfl.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "mountain-landscape-cover.webp",
        "mountain-landscape-inner.webp"
      ]
    },

    tags: [
      "mountain notebook",
      "nature spiral notebook",
      "landscape art journal",
      "travel notebook",
      "sunrise aesthetic notebook",
      "outdoor lover journal",
      "adventure notebook",
      "creative spiral book"
    ],

    seo: {
      metaTitle: "Sunrise Mountain Spiral Notebook | Nature Landscape Art Journal",
      metaDescription:
        "Vibrant mountain landscape spiral notebook with bold sunrise design. Perfect for journaling, travel notes, and nature lovers.",
      keywords: [
        "mountain spiral notebook",
        "nature journal",
        "landscape art notebook",
        "travel spiral notebook",
        "sunrise aesthetic journal"
      ]
    }

  },
  {
    id: "sb-nat-003",
    name: "Tree Canopy Illustration Spiral Book",
    slug: "tree-canopy-illustration-spiral-book",
    sku: "SB-NAT-TRE-003",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Nature",
      universe: "Botanical Art",
      genre: "Illustration",
      collectionType: "Modern"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-NAT-TRE-003-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-NAT-TRE-003-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-NAT-TRE-003-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-NAT-TRE-003-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-NAT-TRE-003-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-NAT-TRE-003-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-NAT-TRE-003-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-NAT-TRE-003-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-NAT-TRE-003-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-NAT-TRE-003-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Calm",
      "Earthy",
      "Peaceful",
      "Organic",
      "Mindful"
    ],

    series: "Nature Collection",
    licenseType: "original_design",

    shortDescription:
      "An elegant spiral notebook featuring a detailed tree canopy illustration inspired by nature and sustainability.",

    description:
      "This beautifully illustrated spiral notebook captures the peaceful view of tree canopies stretching toward the sky. With its organic lines and earthy green tones, it represents growth, grounding, and harmony with nature. Perfect for journaling, reflection, study notes, or eco-conscious creatives who love botanical art and mindful design.",

    highlights: [
      "Detailed botanical tree canopy artwork",
      "Earthy green aesthetic design",
      "Premium matte finish cover",
      "Strong metal spiral binding",
      "Perfect for journaling, reflection & study"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172564/spiral-notebook-tree-canopy-illustration-wooden-background_gupfkz.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "tree-canopy-cover.webp",
        "tree-canopy-inner.webp"
      ]
    },

    tags: [
      "nature spiral notebook",
      "botanical notebook",
      "tree illustration journal",
      "eco aesthetic notebook",
      "green spiral book",
      "earthy journal",
      "mindful stationery",
      "organic design notebook"
    ],

    seo: {
      metaTitle: "Tree Canopy Spiral Notebook | Botanical Nature Art Journal",
      metaDescription:
        "Elegant spiral notebook featuring detailed tree canopy botanical artwork. Perfect for journaling, reflection, and nature lovers.",
      keywords: [
        "tree spiral notebook",
        "botanical journal",
        "nature art notebook",
        "eco aesthetic notebook",
        "green illustration journal"
      ]
    }

  },
  {
    id: "sb-mot-004",
    name: "You're Gonna Go Far Spiral Book",
    slug: "youre-gonna-go-far-spiral-book",
    sku: "SB-MOT-YGF-004",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Motivational",
      universe: "Travel Aesthetic",
      genre: "Landscape Photography",
      collectionType: "Quotes"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-MOT-YGF-004-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-MOT-YGF-004-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-MOT-YGF-004-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-MOT-YGF-004-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-MOT-YGF-004-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-MOT-YGF-004-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-MOT-YGF-004-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-MOT-YGF-004-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-MOT-YGF-004-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-MOT-YGF-004-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Inspiring",
      "Hopeful",
      "Adventurous",
      "Warm",
      "Encouraging"
    ],

    series: "Motivational Collection",
    licenseType: "original_design",

    shortDescription:
      "An inspiring spiral notebook featuring a scenic countryside road with the uplifting message 'You're Gonna Go Far.'",

    description:
      "This motivational spiral notebook captures a winding countryside road symbolizing growth, journey, and endless possibilities. With warm earthy tones and a powerful uplifting message, it’s perfect for students, dreamers, graduates, and anyone chasing their goals. Ideal for journaling ambitions, planning future goals, or gifting someone who needs encouragement.",

    highlights: [
      "Inspirational quote cover design",
      "Scenic countryside aesthetic",
      "Warm earthy color palette",
      "Premium matte finish cover",
      "Perfect for journaling goals & gifting"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172565/spiral-notebook-youre-gonna-go-far-landscape-cover_pdqtij.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "youre-gonna-go-far-cover.webp",
        "youre-gonna-go-far-inner.webp"
      ]
    },

    tags: [
      "motivational spiral notebook",
      "inspirational quote notebook",
      "travel aesthetic journal",
      "goal planning notebook",
      "graduation gift notebook",
      "encouragement journal",
      "landscape spiral book",
      "student gift notebook"
    ],

    seo: {
      metaTitle: "You're Gonna Go Far Spiral Notebook | Inspirational Travel Journal",
      metaDescription:
        "Motivational spiral notebook featuring scenic countryside road and uplifting quote. Perfect for students, goal setting, and gifting.",
      keywords: [
        "motivational spiral notebook",
        "youre gonna go far notebook",
        "travel aesthetic journal",
        "goal planner notebook",
        "inspirational gift notebook"
      ]
    }

  },
  {
    id: "sb-trv-001",
    name: "Travel Adventure Collage Spiral Book",
    slug: "travel-adventure-collage-spiral-book",
    sku: "SB-TRV-ADV-001",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Travel",
      universe: "Adventure",
      genre: "Collage Illustration",
      collectionType: "Modern"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-TRV-ADV-001-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-TRV-ADV-001-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-TRV-ADV-001-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-TRV-ADV-001-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-TRV-ADV-001-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-TRV-ADV-001-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-TRV-ADV-001-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-TRV-ADV-001-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-TRV-ADV-001-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-TRV-ADV-001-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Adventurous",
      "Wanderlust",
      "Exciting",
      "Youthful",
      "Explorative"
    ],

    series: "Travel Collection",
    licenseType: "original_design",

    shortDescription:
      "A vibrant travel-themed spiral notebook featuring passport stamps, city signboards, airplanes, and adventure-inspired artwork.",

    description:
      "This travel-inspired spiral notebook captures the excitement of exploring the world. Designed with collage-style illustrations including maps, passports, airplanes, signboards, and global destinations, it’s perfect for journaling trips, travel planning, bucket lists, and memory keeping. Ideal for wanderers, students, and adventure lovers.",

    highlights: [
      "Vibrant travel collage artwork",
      "Adventure and wanderlust theme",
      "Premium matte finish cover",
      "Strong metal spiral binding",
      "Perfect for travel journaling & planning"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172568/travel-themed-spiral-notebook-journal_k2cbii.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "travel-collage-cover.webp",
        "travel-collage-inner.webp"
      ]
    },

    tags: [
      "travel spiral notebook",
      "adventure journal",
      "wanderlust notebook",
      "travel planning notebook",
      "vacation journal",
      "student travel diary",
      "explorer notebook",
      "collage aesthetic journal"
    ],

    seo: {
      metaTitle: "Travel Adventure Spiral Notebook | Wanderlust Journal",
      metaDescription:
        "Travel-themed spiral notebook with collage design featuring maps, passports, and adventure elements. Perfect for travel journaling and planning.",
      keywords: [
        "travel spiral notebook",
        "wanderlust journal",
        "adventure notebook",
        "travel diary spiral book",
        "travel planning notebook"
      ]
    }

  },
  {
    id: "sb-mot-005",
    name: "Trust The Flow Of Life Spiral Book",
    slug: "trust-the-flow-of-life-spiral-book",
    sku: "SB-MOT-TFL-005",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Motivational",
      universe: "Self Growth",
      genre: "Minimal Quote Design",
      collectionType: "Quotes"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-MOT-TFL-005-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-MOT-TFL-005-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-MOT-TFL-005-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-MOT-TFL-005-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-MOT-TFL-005-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-MOT-TFL-005-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-MOT-TFL-005-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-MOT-TFL-005-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-MOT-TFL-005-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-MOT-TFL-005-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Calm",
      "Positive",
      "Mindful",
      "Minimal",
      "Encouraging"
    ],

    series: "Motivational Collection",
    licenseType: "original_design",

    shortDescription:
      "A minimalist affirmation spiral notebook featuring the calming message 'Trust The Flow Of Life.'",

    description:
      "This modern spiral notebook features a clean and uplifting affirmation design that encourages patience, trust, and inner peace. With soft tones and minimal graphic elements, it’s perfect for journaling, daily reflections, goal setting, or mindfulness writing. Ideal for students, creatives, and anyone embracing personal growth.",

    highlights: [
      "Minimal affirmation quote design",
      "Soft modern aesthetic",
      "Premium matte finish cover",
      "Strong metal spiral binding",
      "Perfect for journaling & self-reflection"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172565/trust-the-flow-of-life-spiral-notebook-on-wooden-background_m8p0zy.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "trust-flow-cover.webp",
        "trust-flow-inner.webp"
      ]
    },

    tags: [
      "motivational spiral notebook",
      "affirmation journal",
      "self growth notebook",
      "mindfulness journal",
      "minimal quote notebook",
      "positive affirmation notebook",
      "aesthetic spiral book",
      "daily reflection journal"
    ],

    seo: {
      metaTitle: "Trust The Flow Of Life Spiral Notebook | Minimal Affirmation Journal",
      metaDescription:
        "Minimal affirmation spiral notebook featuring 'Trust The Flow Of Life.' Perfect for journaling, mindfulness, and self-growth.",
      keywords: [
        "affirmation spiral notebook",
        "trust the flow notebook",
        "self growth journal",
        "minimal quote notebook",
        "mindfulness spiral book"
      ]
    }

  },
  {
    id: "sb-vtg-001",
    name: "Vintage Botanical Floral Spiral Book",
    slug: "vintage-botanical-floral-spiral-book",
    sku: "SB-VTG-BOT-001",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Vintage",
      universe: "Botanical Art",
      genre: "Classic Illustration",
      collectionType: "Modern"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-VTG-BOT-001-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-VTG-BOT-001-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-VTG-BOT-001-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-VTG-BOT-001-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-VTG-BOT-001-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-VTG-BOT-001-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-VTG-BOT-001-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-VTG-BOT-001-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-VTG-BOT-001-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-VTG-BOT-001-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Elegant",
      "Timeless",
      "Earthy",
      "Artistic",
      "Scholarly"
    ],

    series: "Vintage Collection",
    licenseType: "original_design",

    shortDescription:
      "A timeless spiral notebook featuring vintage botanical floral illustrations with a classic label frame design.",

    description:
      "This elegant spiral notebook showcases detailed vintage botanical artwork inspired by classic natural history prints. With muted earthy tones and an antique aesthetic, it brings a refined and scholarly charm to your everyday writing. Perfect for journaling, study notes, poetry writing, or creative reflection. Ideal for lovers of cottagecore, dark academia, and timeless design.",

    highlights: [
      "Vintage botanical floral illustration",
      "Classic antique aesthetic design",
      "Premium matte finish cover",
      "Strong metal spiral binding",
      "Perfect for journaling, poetry & study notes"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172566/vintage-botanical-floral-spiral-notebook-wood-background_gxupvl.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "vintage-botanical-cover.webp",
        "vintage-botanical-inner.webp"
      ]
    },

    tags: [
      "vintage spiral notebook",
      "botanical floral journal",
      "cottagecore notebook",
      "dark academia journal",
      "antique aesthetic notebook",
      "heritage art notebook",
      "classic floral spiral book",
      "poetry writing journal"
    ],

    seo: {
      metaTitle: "Vintage Botanical Spiral Notebook | Antique Floral Journal",
      metaDescription:
        "Elegant vintage botanical spiral notebook with classic floral illustration. Perfect for journaling, poetry, and study.",
      keywords: [
        "vintage spiral notebook",
        "botanical journal",
        "antique floral notebook",
        "cottagecore journal",
        "dark academia spiral book"
      ]
    }

  },
  {
    id: "sb-spr-004",
    name: "God's Plan Inspirational Spiral Book",
    slug: "gods-plan-inspirational-spiral-book",
    sku: "SB-SPR-GDP-004",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Spiritual",
      universe: "Faith & Inspiration",
      genre: "Devotional Motivation",
      collectionType: "Quotes"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-SPR-GDP-004-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-SPR-GDP-004-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-SPR-GDP-004-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-SPR-GDP-004-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-SPR-GDP-004-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-SPR-GDP-004-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-SPR-GDP-004-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-SPR-GDP-004-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-SPR-GDP-004-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-SPR-GDP-004-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Faithful",
      "Powerful",
      "Motivational",
      "Strong",
      "Devotional"
    ],

    series: "Spiritual Collection",
    licenseType: "fan_art_inspired",

    shortDescription:
      "A powerful inspirational spiral notebook featuring a devotional faith-themed artwork with the message 'God's Plan Is Always Better Than Yours.'",

    description:
      "This inspirational spiral notebook blends faith, strength, and determination into one powerful design. Featuring devotional symbolism and a motivational message about trusting divine plans, it represents belief, resilience, and surrender to a higher purpose. Perfect for students, athletes, dreamers, and anyone drawing strength from faith. Ideal for journaling, goal setting, and daily reflection.",

    highlights: [
      "Faith-inspired motivational artwork",
      "Powerful inspirational quote cover",
      "Premium matte finish cover",
      "Strong metal spiral binding",
      "Perfect for journaling, prayer notes & goal planning"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172567/virat-kohli-hanuman-gods-plan-inspirational-notebook_uhijqa.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "gods-plan-cover.webp",
        "gods-plan-inner.webp"
      ]
    },

    tags: [
      "faith spiral notebook",
      "spiritual motivational journal",
      "devotional notebook",
      "god quote notebook",
      "cricket inspiration notebook",
      "hanuman inspired journal",
      "belief journal",
      "motivational spiral book"
    ],

    seo: {
      metaTitle: "God's Plan Inspirational Spiral Notebook | Faith Journal",
      metaDescription:
        "Inspirational spiral notebook featuring faith-based artwork and powerful motivational quote. Perfect for journaling and spiritual reflection.",
      keywords: [
        "faith spiral notebook",
        "god quote journal",
        "spiritual motivational notebook",
        "devotional spiral book",
        "inspirational journal faith"
      ]
    }

  },
  {
    id: "sb-adv-002",
    name: "I Just Want To Explore Spiral Book",
    slug: "i-just-want-to-explore-spiral-book",
    sku: "SB-ADV-EXP-002",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Adventure",
      universe: "Nature & Travel",
      genre: "Outdoor Inspiration",
      collectionType: "Quotes"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-ADV-EXP-002-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-ADV-EXP-002-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-ADV-EXP-002-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-ADV-EXP-002-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-ADV-EXP-002-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-ADV-EXP-002-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-ADV-EXP-002-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-ADV-EXP-002-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-ADV-EXP-002-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-ADV-EXP-002-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Adventurous",
      "Free-Spirited",
      "Wild",
      "Dreamy",
      "Motivational"
    ],

    series: "Adventure Collection",
    licenseType: "original_design",

    shortDescription:
      "A bold adventure-themed spiral notebook featuring mountain scenery and the quote 'I Just Want To Explore.'",

    description:
      "This striking spiral notebook captures the spirit of exploration with a dramatic mountain landscape and vibrant wildflowers under a moody sky. The handwritten-style quote reflects freedom, curiosity, and the desire to see the world beyond limits. Perfect for travelers, hikers, dreamers, and anyone who craves adventure. Ideal for journaling travel plans, bucket lists, creative writing, or daily reflections.",

    highlights: [
      "Adventure-inspired mountain artwork",
      "Bold handwritten motivational quote",
      "Premium matte finish cover",
      "Durable metal spiral binding",
      "Perfect for travel journaling & goal planning"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172571/explore-nature-themed-spiral-notebook_h9okuo.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "explore-cover.webp",
        "explore-inner.webp"
      ]
    },

    tags: [
      "adventure spiral notebook",
      "explore journal",
      "travel notebook",
      "mountain aesthetic notebook",
      "nature lover journal",
      "wanderlust spiral book",
      "outdoor inspiration notebook",
      "exploration journal"
    ],

    seo: {
      metaTitle: "I Just Want To Explore Spiral Notebook | Adventure Journal",
      metaDescription:
        "Adventure-themed spiral notebook featuring mountain landscape and motivational quote. Perfect for travel journaling and nature lovers.",
      keywords: [
        "adventure spiral notebook",
        "explore journal",
        "travel spiral book",
        "mountain notebook",
        "wanderlust journal"
      ]
    }

  },
  {
    id: "sb-mot-003",
    name: "Karma Mirror Spiral Book",
    slug: "karma-mirror-spiral-book",
    sku: "SB-MOT-KARMA-003",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Motivation",
      universe: "Quotes & Attitude",
      genre: "Bold Typography",
      collectionType: "Statement"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-MOT-KARMA-003-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-MOT-KARMA-003-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-MOT-KARMA-003-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-MOT-KARMA-003-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-MOT-KARMA-003-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-MOT-KARMA-003-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-MOT-KARMA-003-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-MOT-KARMA-003-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-MOT-KARMA-003-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-MOT-KARMA-003-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Bold",
      "Savage",
      "Confident",
      "Reflective",
      "Empowering"
    ],

    series: "Attitude Collection",
    licenseType: "original_design",

    shortDescription:
      "A bold teal spiral notebook featuring a powerful karma-inspired quote in modern typography.",

    description:
      "This striking spiral notebook features a bold mustard typography design on a calming teal background with the powerful statement 'Karma isn't a bitch; it's a mirror.' Designed for thinkers, leaders, and individuals who believe in accountability and growth. Perfect for journaling, goal-setting, self-reflection, or daily planning with confidence and clarity.",

    highlights: [
      "Minimal bold typography design",
      "Strong motivational statement",
      "Premium matte finish cover",
      "Durable metal spiral binding",
      "Ideal for journaling & self-reflection"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172572/karma-quote-teal-spiral-notebook_lo7ije.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "karma-cover.webp",
        "karma-inner.webp"
      ]
    },

    tags: [
      "karma notebook",
      "motivational spiral notebook",
      "attitude journal",
      "bold quote notebook",
      "self reflection journal",
      "empowerment notebook",
      "minimal typography notebook",
      "statement spiral book"
    ],

    seo: {
      metaTitle: "Karma Mirror Spiral Notebook | Bold Motivational Journal",
      metaDescription:
        "Minimal bold spiral notebook featuring a powerful karma quote. Perfect for journaling, reflection, and daily inspiration.",
      keywords: [
        "karma spiral notebook",
        "motivational journal",
        "bold quote notebook",
        "attitude spiral book",
        "self reflection notebook"
      ]
    }

  },
  {
    id: "sb-ret-004",
    name: "Out Of Mind Retro Spiral Book",
    slug: "out-of-mind-retro-spiral-book",
    sku: "SB-RET-OUTMIND-004",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Retro",
      universe: "Typography & Aesthetic",
      genre: "Abstract Swirl",
      collectionType: "Statement"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-RET-OUTMIND-004-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-RET-OUTMIND-004-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-RET-OUTMIND-004-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-RET-OUTMIND-004-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-RET-OUTMIND-004-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-RET-OUTMIND-004-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-RET-OUTMIND-004-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-RET-OUTMIND-004-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-RET-OUTMIND-004-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-RET-OUTMIND-004-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Trendy",
      "Playful",
      "Creative",
      "Aesthetic",
      "Bold"
    ],

    series: "Retro Wave Collection",
    licenseType: "original_design",

    shortDescription:
      "A retro-inspired spiral notebook featuring abstract wavy patterns with bold 'Out Of Mind' typography.",

    description:
      "This stylish spiral notebook blends earthy retro tones with flowing abstract wave patterns and bold modern typography. The phrase 'Out Of Mind' captures a carefree, expressive vibe perfect for creatives and free thinkers. Ideal for journaling, doodling, creative writing, or daily planning. A must-have for lovers of vintage aesthetics and modern graphic design.",

    highlights: [
      "Retro abstract wavy design",
      "Bold modern typography",
      "Earth-tone aesthetic palette",
      "Premium matte finish cover",
      "Durable metal spiral binding"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172573/retro-wavy-out-of-mind-spiral-notebook_lgoqun.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "outofmind-cover.webp",
        "outofmind-inner.webp"
      ]
    },

    tags: [
      "retro spiral notebook",
      "abstract aesthetic notebook",
      "out of mind journal",
      "wavy pattern notebook",
      "vintage style spiral book",
      "earth tone notebook",
      "creative writing journal",
      "trendy aesthetic notebook"
    ],

    seo: {
      metaTitle: "Out Of Mind Retro Spiral Notebook | Abstract Aesthetic Journal",
      metaDescription:
        "Retro-inspired spiral notebook with abstract wavy patterns and bold typography. Perfect for creative journaling and aesthetic lovers.",
      keywords: [
        "retro spiral notebook",
        "abstract journal",
        "aesthetic notebook",
        "wavy design notebook",
        "creative spiral book"
      ]
    }

  },
  {
    id: "sb-bold-005",
    name: "Blazing Flame Spiral Book",
    slug: "blazing-flame-spiral-book",
    sku: "SB-BOLD-FLAME-005",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Bold",
      universe: "Graphic & Street",
      genre: "Flame Art",
      collectionType: "Minimal Graphic"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-BOLD-FLAME-005-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-BOLD-FLAME-005-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-BOLD-FLAME-005-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-BOLD-FLAME-005-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-BOLD-FLAME-005-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-BOLD-FLAME-005-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-BOLD-FLAME-005-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-BOLD-FLAME-005-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-BOLD-FLAME-005-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-BOLD-FLAME-005-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Intense",
      "Fearless",
      "Powerful",
      "Edgy",
      "Energetic"
    ],

    series: "Fire Collection",
    licenseType: "original_design",

    shortDescription:
      "A bold spiral notebook featuring striking red and yellow flame artwork on a deep black background.",

    description:
      "This eye-catching spiral notebook features a dramatic flame design rising against a black backdrop, symbolizing passion, power, and unstoppable energy. Designed for those who move with intensity and confidence. Perfect for journaling, sketching, planning, or capturing big ideas. A bold statement piece for students, creators, and anyone who brings heat to everything they do.",

    highlights: [
      "Striking flame graphic design",
      "High-contrast black background",
      "Bold street-style aesthetic",
      "Premium matte finish cover",
      "Durable metal spiral binding"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172575/spiral-notebook-flame-design-black-cover_crnjgt.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "flame-cover.webp",
        "flame-inner.webp"
      ]
    },

    tags: [
      "flame spiral notebook",
      "fire design journal",
      "edgy notebook",
      "street style spiral book",
      "bold graphic notebook",
      "aesthetic black notebook",
      "creative journal",
      "cool spiral notebook"
    ],

    seo: {
      metaTitle: "Blazing Flame Spiral Notebook | Bold Fire Design Journal",
      metaDescription:
        "Bold spiral notebook featuring striking flame artwork on a black background. Perfect for journaling, sketching, and creative expression.",
      keywords: [
        "flame spiral notebook",
        "fire design notebook",
        "black aesthetic journal",
        "bold graphic spiral book",
        "edgy notebook design"
      ]
    }

  },
  {
    id: "sb-bold-006",
    name: "Stay Weird Spiral Notebook",
    slug: "stay-weird-spiral-notebook",
    sku: "SB-BOLD-WEIRD-006",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Typography",
      universe: "Trendy & Youth",
      genre: "Retro Bold Text",
      collectionType: "Minimal Statement"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-BOLD-WEIRD-006-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-BOLD-WEIRD-006-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-BOLD-WEIRD-006-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-BOLD-WEIRD-006-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-BOLD-WEIRD-006-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-BOLD-WEIRD-006-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-BOLD-WEIRD-006-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-BOLD-WEIRD-006-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-BOLD-WEIRD-006-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-BOLD-WEIRD-006-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Confident",
      "Playful",
      "Rebellious",
      "Authentic",
      "Creative"
    ],

    series: "Bold Statement Collection",
    licenseType: "original_design",

    shortDescription:
      "Minimal spiral notebook featuring bold red retro typography that says 'Stay Weird'.",

    description:
      "This bold spiral notebook features eye-catching retro-style red typography on a clean neutral background, celebrating individuality and self-expression. Designed for creators, dreamers, and unapologetically unique personalities. Perfect for journaling, sketching, note-taking, or planning your next big idea. A simple yet powerful statement piece that stands out effortlessly.",

    highlights: [
      "Bold retro typography design",
      "Minimal clean aesthetic",
      "High-contrast red statement text",
      "Premium matte finish cover",
      "Durable metal spiral binding"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172574/stay-weird-spiral-notebook-mockup-wooden-background_tdwi42.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "stay-weird-cover.webp",
        "stay-weird-inner.webp"
      ]
    },

    tags: [
      "stay weird notebook",
      "typography spiral notebook",
      "minimal aesthetic journal",
      "retro text notebook",
      "gen z notebook",
      "bold statement journal",
      "creative notebook",
      "quirky spiral book"
    ],

    seo: {
      metaTitle: "Stay Weird Spiral Notebook | Bold Retro Typography Journal",
      metaDescription:
        "Minimal spiral notebook featuring bold red retro typography that says 'Stay Weird'. Perfect for journaling, sketching, and creative expression.",
      keywords: [
        "stay weird notebook",
        "retro typography notebook",
        "minimal spiral journal",
        "bold text notebook",
        "aesthetic statement notebook"
      ]
    }

  },
  {
    id: "sb-alt-007",
    name: "Hellfire Tattoo Aesthetic Spiral Notebook",
    slug: "hellfire-tattoo-aesthetic-spiral-notebook",
    sku: "SB-ALT-HELLFIRE-007",
    productType: "spiral_book",
    category: "Spiral Books",
    subCategory: "Single Spiral Books",

    collections: {
      theme: "Pop Culture Inspired",
      universe: "Dark & Alternative",
      genre: "Tattoo Illustration",
      collectionType: "Fandom Aesthetic"
    },
    brand: "pragyaprint",
    pricing: {
      basePrice: 199,
      salePrice: 149,
      discountPercentage: 33.56,
      currency: "INR",
      isTaxable: true
    },

    specifications: {
      pages: 120,
      paperGSM: 70,
      rulingType: "plain",
      bindingType: "spiral",
      coverFinish: "matte",
      orientation: "portrait"
    },

    options: {
      size: ["A5", "A4"],
      pageMap: {
        A5: [120, 160, 180, 200],
        A4: [120, 160, 200, 240, 300, 400]
      },
      rulingType: ["Unruled", "Ruled", "Dated", "Dotted", "Grid"]
    },

    variants: [
      { variantId: "SB-ALT-HELLFIRE-007-A5-120", size: "A5", pages: 120, price: 149, stock: 80 },
      { variantId: "SB-ALT-HELLFIRE-007-A5-160", size: "A5", pages: 160, price: 169, stock: 80 },
      { variantId: "SB-ALT-HELLFIRE-007-A5-180", size: "A5", pages: 180, price: 189, stock: 80 },
      { variantId: "SB-ALT-HELLFIRE-007-A5-200", size: "A5", pages: 200, price: 199, stock: 80 },
      { variantId: "SB-ALT-HELLFIRE-007-A4-120", size: "A4", pages: 120, price: 110, stock: 60 },
      { variantId: "SB-ALT-HELLFIRE-007-A4-160", size: "A4", pages: 160, price: 120, stock: 60 },
      { variantId: "SB-ALT-HELLFIRE-007-A4-200", size: "A4", pages: 200, price: 130, stock: 60 },
      { variantId: "SB-ALT-HELLFIRE-007-A4-240", size: "A4", pages: 240, price: 140, stock: 60 },
      { variantId: "SB-ALT-HELLFIRE-007-A4-300", size: "A4", pages: 300, price: 160, stock: 60 },
      { variantId: "SB-ALT-HELLFIRE-007-A4-400", size: "A4", pages: 400, price: 199, stock: 60 }
    ],

    inventory: {
      totalStock: 140,
      stockStatus: "in_stock",
      lowStockThreshold: 20
    },

    productionTime: "2–3 business days",

    shipping: {
      weight: 0.45,
      dimensions: {
        width: 15,
        height: 21,
        depth: 2
      },
      shippingClass: "standard_box"
    },

    rating: 4.8,
    reviewsCount: 94,
    copyrightNote:
      "Original modern artwork. Designed for personal and creative use.",
    status: "active",
    visibility: "public",
    isFeatured: true,
    isNewArrival: true,

    moods: [
      "Dark",
      "Edgy",
      "Rebellious",
      "Mystical",
      "Alternative"
    ],

    series: "Alt Culture Collection",
    licenseType: "fan_art_inspired",

    shortDescription:
      "Tattoo-style spiral notebook featuring bold red and black dark fantasy illustrations.",

    description:
      "This bold spiral notebook features a striking tattoo-inspired design filled with dark fantasy symbols, axes, swords, demons, and occult-style graphics in red, black, and gold tones. Perfect for fans of retro horror aesthetics, tabletop fantasy vibes, and alternative street culture. Ideal for journaling, sketching, campaign planning, or capturing creative chaos. A powerful statement piece for those who embrace the darker side of art and imagination.",

    highlights: [
      "Tattoo-style illustrated cover",
      "Dark fantasy aesthetic design",
      "High-contrast red, black & gold palette",
      "Premium matte finish cover",
      "Durable metal spiral binding"
    ],

    media: {
      thumbnail: "https://res.cloudinary.com/dal56whd6/image/upload/v1769172576/stranger-things-hellfire-club-tattoo-style-spiral-notebook_q1qzuq.webp",
      back: "https://res.cloudinary.com/dal56whd6/image/upload/v1770914541/PragyaPrint_deerpy.webp",
      images: [
        "hellfire-cover.webp",
        "hellfire-inner.webp"
      ]
    },

    tags: [
      "dark aesthetic notebook",
      "tattoo style spiral notebook",
      "fantasy journal",
      "gothic notebook",
      "alt culture journal",
      "retro horror notebook",
      "edgy spiral book",
      "fan art inspired notebook"
    ],

    seo: {
      metaTitle: "Hellfire Tattoo Aesthetic Spiral Notebook | Dark Fantasy Journal",
      metaDescription:
        "Dark fantasy tattoo-style spiral notebook featuring bold red and black illustrations. Perfect for journaling, sketching, and alternative culture lovers.",
      keywords: [
        "dark aesthetic notebook",
        "tattoo style notebook",
        "fantasy spiral journal",
        "gothic notebook",
        "alt culture journal"
      ]
    }

  },


];

export const LOCAL_SERVICES = [

];

// --- Categories Data (for filtering/home page) ---
export const CATEGORIES = [
  { name: 'Posters', icon: 'Layers', description: 'Large format prints for display and marketing.', image: "https://res.cloudinary.com/dal56whd6/image/upload/v1770976295/posters_yjx4df.png" },
  { name: 'Spiral Books', icon: 'Briefcase', description: 'Letterheads, envelopes, business cards, and brochures.', image: "https://lemonadeindia.com/cdn/shop/files/personalized-spiral-notebook-zodiac-signsstationerylemonade-379758_1024x1024.jpg?v=1760007996" },
  { name: 'Photo Prints', icon: 'Image', description: 'Personalized photos, polaroids, and canvas prints.', image: "https://thumbs.dreamstime.com/b/polaroid-prints-textured-wall-collection-each-capturing-unique-scenes-pinned-to-off-white-arrangement-creates-visually-401186269.jpg" },
  { name: 'Notebooks', icon: 'Heart', description: '', image: notebook },

  { name: 'Wall banners', icon: 'Heart', description: 'Wedding, birthday, and special occasion invitations.', image: "https://dbdzm869oupei.cloudfront.net/img/quadres/large/79603.jpg" },
  { name: 'Stickers', icon: 'Star', description: 'Vinyl, paper, and custom die-cut stickers.', image: " https://i.pinimg.com/736x/57/ac/9c/57ac9c020929545e9c1d3c648ffb6e3f.jpg" },
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
      { id: "spiral-books", name: "Spiral Books" },
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
