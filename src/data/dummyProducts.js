import business from "../assets/business.jpeg"
import wedding from "../assets/wedding.jpeg"
import adv from "../assets/advertising.jpeg"
import school from "../assets/school.jpeg"
import gift from "../assets/goft.jpeg"
// import mockup from "../assets/Group122.png"

// --- Products Data ---
// export const PRODUCTS = [
//     {
//         id: "poster-001",
//         name: "Interstellar Minimalist Poster",
//         category: "Photo Prints",

//         price: 25,
//         salePrice: 20,
//         discount: 20,

//         sku: "PST-INT-001",
//         stock: 110,
//         stockStatus: "In Stock",

//         description: "A minimalist space-themed Interstellar poster featuring the wormhole and astronaut silhouette.",
//         tags: ["interstellar", "movie", "space", "minimalist"],
//         brand: "Printify Studio",
//         slug: "interstellar-minimalist-poster",

//         images: ["interstellar1.jpg", "interstellar2.jpg"],
//         thumbnail: mockup,
//         gallery: ["interstellar1.jpg", "interstellar2.jpg", "interstellar3.jpg"],

//         options: {
//             size: ["A4","12x18", "A3"],
//             paperType: ["Glossy", "Matte"]
//         },

//         customizable: true,
//         productionTime: "2–3 days",

//         weight: 0.2,
//         dimensions: { width: 18, height: 24, depth: 0.1 },
//         shippingClass: "Small Tube",

//         rating: 4.9,
//         reviewsCount: 128,

//         createdAt: Date.now(),
//         updatedAt: Date.now(),
//         status: "active",
//         isFeatured: true
//     },
//     {
//         id: "poster-002",
//         name: "Naruto Sage Mode Poster",
//         category: "Posters",

//         price: 22,
//         salePrice: 18,
//         discount: 18,

//         sku: "PST-NRT-001",
//         stock: 95,
//         stockStatus: "In Stock",

//         description: "Dynamic Naruto Sage Mode illustrated poster with bright chakra tones.",
//         tags: ["anime", "naruto", "sage mode", "poster"],
//         brand: "Otaku Prints",
//         slug: "naruto-sage-mode-poster",

//         images: ["naruto1.jpg", "naruto2.jpg"],
//         thumbnail: "",
//         gallery: ["naruto1.jpg", "naruto2.jpg", "naruto3.jpg"],

//         options: {
//             size: ["A4","12x18", "A3"],
//             paperType: ["Matte", "Glossy"]
//         },

//         customizable: false,
//         productionTime: "2–4 days",

//         weight: 0.18,
//         dimensions: { width: 18, height: 24, depth: 0.1 },
//         shippingClass: "Small Tube",

//         rating: 4.8,
//         reviewsCount: 170,

//         createdAt: Date.now(),
//         updatedAt: Date.now(),
//         status: "active",
//         isFeatured: true
//     },
//     {
//         id: "poster-003",
//         name: "Cristiano Ronaldo Celebration Poster",
//         category: "Posters",

//         price: 26,
//         salePrice: 22,
//         discount: 15,

//         sku: "PST-CR7-001",
//         stock: 140,
//         stockStatus: "In Stock",

//         description: "High-energy Cristiano Ronaldo 'SIUU' celebration poster with stadium lighting effects.",
//         tags: ["football", "cr7", "sports", "poster"],
//         brand: "Sportify Prints",
//         slug: "cristiano-ronaldo-celebration-poster",

//         images: ["cr7_1.jpg", "cr7_2.jpg"],
//         thumbnail: "",
//         gallery: ["cr7_1.jpg", "cr7_2.jpg", "cr7_3.jpg"],

//         options: {
//             size: ["A4","12x18", "A3"],
//             paperType: ["Glossy", "Matte"]
//         },

//         customizable: false,
//         productionTime: "1–2 days",

//         weight: 0.25,
//         dimensions: { width: 24, height: 36, depth: 0.1 },
//         shippingClass: "Poster Tube",

//         rating: 4.9,
//         reviewsCount: 210,

//         createdAt: Date.now(),
//         updatedAt: Date.now(),
//         status: "active",
//         isFeatured: true
//     },
//     {
//         id: "poster-004",
//         name: "Stranger Things Retro Neon Poster",
//         category: "Posters",

//         price: 20,
//         salePrice: 15,
//         discount: 25,

//         sku: "PST-ST-001",
//         stock: 80,
//         stockStatus: "Low Stock",

//         description: "Retro neon synthwave styled Stranger Things artwork featuring Eleven and the Upside Down.",
//         tags: ["stranger things", "retro", "tv series"],
//         brand: "RetroWall Co.",
//         slug: "stranger-things-retro-poster",

//         images: ["st1.jpg", "st2.jpg"],
//         thumbnail: "",
//         gallery: ["st1.jpg", "st2.jpg", "st3.jpg"],

//         options: {
//             size: ["A4","12x18", "A3"],
//             paperType: ["Matte", "Glossy"]
//         },

//         customizable: true,
//         productionTime: "3 days",

//         weight: 0.16,
//         dimensions: { width: 18, height: 24, depth: 0.1 },
//         shippingClass: "Small Tube",

//         rating: 4.7,
//         reviewsCount: 87,

//         createdAt: Date.now(),
//         updatedAt: Date.now(),
//         status: "active",
//         isFeatured: false
//     },
//     {
//         id: "poster-005",
//         name: "Spider-Man Across the Spider-Verse Poster",
//         category: "Posters",

//         price: 28,
//         salePrice: 24,
//         discount: 14,

//         sku: "PST-SPDM-001",
//         stock: 130,
//         stockStatus: "In Stock",

//         description: "Colorful multiverse Spider-Man poster featuring Miles Morales in dynamic action.",
//         tags: ["marvel", "spider-man", "movie", "poster"],
//         brand: "HeroPrints",
//         slug: "spider-man-multiverse-poster",

//         images: ["spidey1.jpg", "spidey2.jpg"],
//         thumbnail: "",
//         gallery: ["spidey1.jpg", "spidey2.jpg", "spidey3.jpg"],

//         options: {
//             size: ["A4","12x18", "A3"],
//             paperType: ["Glossy", "Matte"]
//         },

//         customizable: false,
//         productionTime: "2–3 days",

//         weight: 0.23,
//         dimensions: { width: 24, height: 36, depth: 0.1 },
//         shippingClass: "Poster Tube",

//         rating: 4.95,
//         reviewsCount: 190,

//         createdAt: Date.now(),
//         updatedAt: Date.now(),
//         status: "active",
//         isFeatured: true
//     }
// ];

import ironman from "../assets/postermockup/ironman.png"
import spidey from "../assets/postermockup/spidey.png"
import porsche from "../assets/postermockup/911.png"
import batman from "../assets/postermockup/batman.png"
import bmw from "../assets/postermockup/bmw.png"
import breaking from "../assets/postermockup/breaking.png"
import cars from "../assets/postermockup/cars.png"
import deadpool from "../assets/postermockup/deadpool.png"
import fnf from "../assets/postermockup/fnf.png"
import friends from "../assets/postermockup/friends.png"
import godfather from "../assets/postermockup/godfather.png"
import godofwar from "../assets/postermockup/godofwar.png"
import got from "../assets/postermockup/got.png"
import hp from "../assets/postermockup/hp.png"
import interstellar from "../assets/postermockup/interstellar.png"
import krishna from "../assets/postermockup/krishna.png"
import messi from "../assets/postermockup/messi.png"
import potc from "../assets/postermockup/potc.png"
import ronaldo from "../assets/postermockup/ronaldo.png"
import srt from "../assets/postermockup/srt.png"
import st from "../assets/postermockup/st.png"
import superman from "../assets/postermockup/superman.png"
import thor from "../assets/postermockup/thor.png"
import toystory from "../assets/postermockup/toystory.png"
import weeknd from "../assets/postermockup/weeknd.png"
import virat from "../assets/postermockup/virat.png"
import hanuman from "../assets/postermockup/hanuman.png"




export const PRODUCTS = [
    {
        /* ===============================
           CORE IDENTITY
           =============================== */
        id: "prd-marvel-ironman-001",
        name: "Iron Man Minimalist Wall Poster",
        slug: "iron-man-minimalist-wall-poster",
        sku: "PST-MAR-IM-001",
        barcode: null,

        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
        //                  // poster | wall_banner | polaroid | canvas
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

        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "fan_art",

        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
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

        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
            basePrice: 999,
            salePrice: 799,
            discountPercentage: 21,
            currency: "INR",
            isTaxable: true,
            taxClass: "standard"
        },

        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
            size: ["A4", "12x18", "A3"],
            paperType: ["Matte", "Glossy"]
        },

        variants: [
            {
                variantId: "IM-A4-MATTE",
                size: "A4",
                paperType: "Matte",
                price: 799,
                stock: 40
            },
            {
                variantId: "IM-A3-GLOSSY",
                size: "A3",
                paperType: "Glossy",
                price: 999,
                stock: 60
            }
        ],

        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
            totalStock: 100,
            stockStatus: "In Stock",      // In Stock | low_stock | out_of_stock
            lowStockThreshold: 10,
            allowBackorder: false
        },

        /* ===============================
           MEDIA
        =============================== */
        thumbnail: ironman,

        images: [
            "ironman_1.jpg",
            "ironman_2.jpg"
        ],

        gallery: [
            "ironman_1.jpg",
            "ironman_2.jpg",
            "ironman_3.jpg"
        ],

        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
            "iron man poster",
            "iron man wall art",
            "marvel poster",
            "marvel wall art",
            "iron man artwork",
            "superhero poster",
            "mcu poster",
            "avengers decor",
            "tony stark poster",
            "marvel cinematic universe",
            "movie wall decor",
            "pop culture wall art",
            "gaming room decor",
            "bedroom poster",
            "office wall art",
            "gift for marvel fans",
            "gift for superhero lovers",
            "minimalist marvel poster",
            "red gold wall poster"
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

        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",

        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
            weight: 0.25,
            dimensions: { width: 18, height: 24, depth: 0.1 },
            shippingClass: "small_tube",
            freeShipping: false,
            shippingCountries: ["IN"]
        },

        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.8,
        reviewsCount: 214,

        /* ===============================
           ANALYTICS (IMPORTANT)
        =============================== */
        analytics: {
            views: 0,
            salesCount: 0,
            wishlistedCount: 0
        },

        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
            "Fan-made artwork. Not official Marvel merchandise.",

        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",              // active | draft | archived
        visibility: "public",          // public | hidden
        isFeatured: true,
        isTrending: true,
        isNewArrival: false,

        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-marvel-spiderman-001",
        name: "Spider-Man Multiverse Wall Poster",
        slug: "spider-man-multiverse-wall-poster",
        sku: "PST-MAR-SM-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | polaroid | canvas
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
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "fan_art",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
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
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1099,
          salePrice: 899,
          discountPercentage: 18,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "SM-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 899,
            stock: 35
          },
          {
            variantId: "SM-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1099,
            stock: 55
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 90,
          stockStatus: "In Stock",     // In Stock | low_stock | out_of_stock
          lowStockThreshold: 10,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: spidey,
      
        images: [
          "spiderman_multiverse_1.jpg",
          "spiderman_multiverse_2.jpg"
        ],
      
        gallery: [
          "spiderman_multiverse_1.jpg",
          "spiderman_multiverse_2.jpg",
          "spiderman_multiverse_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO (VERY IMPORTANT)
        =============================== */
        tags: [
          "spider man poster",
          "spiderman wall art",
          "spider verse poster",
          "marvel spiderman poster",
          "spiderman comic art",
          "superhero wall art",
          "marvel wall decor",
          "pop culture poster",
          "comic style wall art",
          "gaming room decor",
          "bedroom wall poster",
          "spiderman artwork",
          "gift for spiderman fans",
          "gift for marvel lovers",
          "multiverse wall poster",
          "red black wall art",
          "modern comic poster",
          "aesthetic superhero poster"
        ],
      
        seo: {
          metaTitle: "Spider-Man Multiverse Poster | Marvel Comic Wall Art",
          metaDescription:
            "Buy Spider-Man multiverse wall poster with bold comic-style artwork. Premium Marvel wall art for Spider-Man fans and modern interiors.",
          keywords: [
            "spider man poster",
            "spider verse wall art",
            "marvel spiderman poster",
            "comic style spiderman"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.3,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.9,
        reviewsCount: 187,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-made artwork inspired by Spider-Man. Not official Marvel merchandise.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",              // active | draft | archived
        visibility: "public",          // public | hidden
        isFeatured: true,
        isTrending: true,
        isNewArrival: true,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-music-weeknd-001",
        name: "The Weeknd Blinding Lights Wall Poster",
        slug: "the-weeknd-blinding-lights-wall-poster",
        sku: "PST-MUS-WKD-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                        // poster | wall_banner | polaroid | canvas
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
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "fan_art",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "Stylish The Weeknd wall poster inspired by the iconic Blinding Lights era.",
      
        description:
          "A premium wall poster inspired by The Weeknd’s legendary Blinding Lights and After Hours era. Featuring a bold retro aesthetic with warm neon tones, this artwork is perfect for music lovers, modern interiors, bedrooms, and creative spaces.",
      
        highlights: [
          "High-resolution music artwork",
          "Retro neon & synthwave vibe",
          "Fade-resistant premium inks",
          "Perfect for bedrooms & studios",
          "Great gift for The Weeknd fans"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1199,
          salePrice: 949,
          discountPercentage: 21,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "WKD-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 949,
            stock: 30
          },
          {
            variantId: "WKD-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1199,
            stock: 50
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 80,
          stockStatus: "In Stock",     // In Stock | low_stock | out_of_stock
          lowStockThreshold: 8,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: weeknd,
      
        images: [
          "weeknd_blinding_lights_1.jpg",
          "weeknd_blinding_lights_2.jpg"
        ],
      
        gallery: [
          "weeknd_blinding_lights_1.jpg",
          "weeknd_blinding_lights_2.jpg",
          "weeknd_blinding_lights_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "the weeknd poster",
          "weeknd wall art",
          "blinding lights poster",
          "after hours poster",
          "music wall decor",
          "pop music poster",
          "synthwave wall art",
          "retro music poster",
          "neon aesthetic poster",
          "bedroom wall art",
          "studio wall decor",
          "music room poster",
          "gift for weeknd fans",
          "gift for music lovers",
          "modern wall poster",
          "aesthetic music art",
          "celebrity wall poster",
          "album inspired wall art"
        ],
      
        seo: {
          metaTitle: "The Weeknd Blinding Lights Poster | Music Wall Art",
          metaDescription:
            "Buy The Weeknd Blinding Lights wall poster inspired by the After Hours era. Premium music wall art with retro neon aesthetics.",
          keywords: [
            "the weeknd poster",
            "blinding lights wall art",
            "after hours poster",
            "music aesthetic poster"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.28,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.9,
        reviewsCount: 162,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-made artwork inspired by The Weeknd. Not official merchandise.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",              // active | draft | archived
        visibility: "public",          // public | hidden
        isFeatured: true,
        isTrending: false,
        isNewArrival: true,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-marvel-deadpool-001",
        name: "Deadpool Action Wall Poster",
        slug: "deadpool-action-wall-poster",
        sku: "PST-MAR-DP-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | polaroid | canvas
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
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "fan_art",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "Bold Deadpool wall poster featuring an intense action pose with signature red-and-black aesthetics.",
      
        description:
          "A striking Deadpool wall poster inspired by Marvel’s most iconic anti-hero. Featuring gritty comic-style artwork, bold red-and-black tones, and an intense action pose, this poster is perfect for Marvel fans, gamers, and statement interiors.",
      
        highlights: [
          "High-resolution comic-style artwork",
          "Bold red & black color palette",
          "Fade-resistant premium inks",
          "Perfect for gaming rooms & man caves",
          "Must-have for Deadpool fans"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1099,
          salePrice: 899,
          discountPercentage: 18,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "DP-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 899,
            stock: 35
          },
          {
            variantId: "DP-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1099,
            stock: 55
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 90,
          stockStatus: "In Stock",      // In Stock | low_stock | out_of_stock
          lowStockThreshold: 10,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: deadpool,
      
        images: [
          "deadpool_action_1.jpg",
          "deadpool_action_2.jpg"
        ],
      
        gallery: [
          "deadpool_action_1.jpg",
          "deadpool_action_2.jpg",
          "deadpool_action_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "deadpool poster",
          "deadpool wall art",
          "deadpool marvel poster",
          "deadpool comic poster",
          "marvel anti hero poster",
          "superhero wall art",
          "marvel wall decor",
          "comic style wall art",
          "gaming room poster",
          "man cave wall art",
          "bold red black poster",
          "action wall poster",
          "gift for deadpool fans",
          "gift for marvel lovers",
          "pop culture wall decor",
          "edgy superhero poster",
          "comic book wall art"
        ],
      
        seo: {
          metaTitle: "Deadpool Wall Poster | Marvel Anti-Hero Wall Art",
          metaDescription:
            "Buy Deadpool action wall poster with bold comic-style artwork. Premium Marvel wall art for Deadpool fans and modern interiors.",
          keywords: [
            "deadpool poster",
            "deadpool wall art",
            "marvel deadpool poster",
            "comic style deadpool"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.3,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.8,
        reviewsCount: 143,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-made artwork inspired by Deadpool. Not official Marvel merchandise.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",              // active | draft | archived
        visibility: "public",          // public | hidden
        isFeatured: true,
        isTrending: true,
        isNewArrival: false,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-dc-batman-001",
        name: "Batman Dark Knight Wall Poster",
        slug: "batman-dark-knight-wall-poster",
        sku: "PST-DC-BAT-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | polaroid | canvas
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
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "fan_art",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "Dark and gritty Batman wall poster inspired by Detective Comics and the iconic Dark Knight persona.",
      
        description:
          "A powerful Batman wall poster inspired by Detective Comics and the Dark Knight era. Featuring a dramatic black, red, and monochrome palette with bold typography, this artwork is perfect for fans who appreciate Gotham’s darker, serious tone.",
      
        highlights: [
          "High-contrast dark comic artwork",
          "Iconic Dark Knight aesthetic",
          "Fade-resistant premium inks",
          "Perfect for offices & man caves",
          "Must-have for Batman fans"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1099,
          salePrice: 899,
          discountPercentage: 18,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "BAT-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 899,
            stock: 40
          },
          {
            variantId: "BAT-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1099,
            stock: 50
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 90,
          stockStatus: "In Stock",      // In Stock | low_stock | out_of_stock
          lowStockThreshold: 10,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: batman,
      
        images: [
          "batman_dark_knight_1.jpg",
          "batman_dark_knight_2.jpg"
        ],
      
        gallery: [
          "batman_dark_knight_1.jpg",
          "batman_dark_knight_2.jpg",
          "batman_dark_knight_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "batman poster",
          "batman wall art",
          "dark knight poster",
          "dc batman poster",
          "detective comics poster",
          "gotham wall art",
          "dc comics wall decor",
          "superhero wall art",
          "dark aesthetic poster",
          "black red wall art",
          "office wall poster",
          "man cave wall decor",
          "batman quote poster",
          "gift for batman fans",
          "gift for dc lovers",
          "minimalist batman poster",
          "gritty comic wall art",
          "cinematic superhero poster"
        ],
      
        seo: {
          metaTitle: "Batman Dark Knight Poster | DC Comics Wall Art",
          metaDescription:
            "Buy Batman Dark Knight wall poster inspired by Detective Comics. Premium DC wall art with a dark, cinematic aesthetic.",
          keywords: [
            "batman poster",
            "dark knight wall art",
            "dc batman poster",
            "detective comics batman"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.3,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.9,
        reviewsCount: 176,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-made artwork inspired by Batman. Not official DC Comics merchandise.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",              // active | draft | archived
        visibility: "public",          // public | hidden
        isFeatured: true,
        isTrending: true,
        isNewArrival: false,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-dc-superman-001",
        name: "Superman Minimalist Hope Wall Poster",
        slug: "superman-minimalist-hope-wall-poster",
        sku: "PST-DC-SUP-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | polaroid | canvas
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
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "fan_art",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "Minimalist Superman wall poster symbolizing hope, strength, and solitude with bold red-and-white design.",
      
        description:
          "A powerful minimalist Superman wall poster capturing the quiet strength and emotional depth of the Man of Steel. Featuring a clean red-and-white composition with flowing cape details, this artwork is perfect for modern homes, offices, and thoughtful interiors.",
      
        highlights: [
          "Elegant minimalist superhero artwork",
          "Strong emotional & cinematic tone",
          "Fade-resistant premium inks",
          "Perfect for modern & premium interiors",
          "Ideal for DC and Superman fans"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1199,
          salePrice: 999,
          discountPercentage: 17,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "SUP-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 999,
            stock: 30
          },
          {
            variantId: "SUP-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1199,
            stock: 45
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 75,
          stockStatus: "In Stock",      // In Stock | low_stock | out_of_stock
          lowStockThreshold: 8,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: superman,
      
        images: [
          "superman_minimalist_1.jpg",
          "superman_minimalist_2.jpg"
        ],
      
        gallery: [
          "superman_minimalist_1.jpg",
          "superman_minimalist_2.jpg",
          "superman_minimalist_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "superman poster",
          "superman wall art",
          "dc superman poster",
          "man of steel poster",
          "minimalist superhero poster",
          "dc wall decor",
          "hope wall art",
          "cinematic superhero poster",
          "modern wall art",
          "office wall poster",
          "study room wall art",
          "clean aesthetic poster",
          "red white wall art",
          "gift for superman fans",
          "gift for dc lovers",
          "minimalist dc poster",
          "premium superhero art",
          "inspirational wall poster"
        ],
      
        seo: {
          metaTitle: "Superman Minimalist Poster | DC Hope Wall Art",
          metaDescription:
            "Buy Superman minimalist wall poster inspired by the Man of Steel. Premium DC wall art with a clean, cinematic, and inspirational aesthetic.",
          keywords: [
            "superman poster",
            "minimalist superman wall art",
            "dc superman poster",
            "man of steel wall decor"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.28,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.9,
        reviewsCount: 121,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-made artwork inspired by Superman. Not official DC Comics merchandise.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",              // active | draft | archived
        visibility: "public",          // public | hidden
        isFeatured: true,
        isTrending: false,
        isNewArrival: true,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-series-strangerthings-001",
        name: "Stranger Things Steve Harrington Wall Poster",
        slug: "stranger-things-steve-harrington-wall-poster",
        sku: "PST-SER-ST-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | polaroid | canvas
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
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "fan_art",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "Cinematic Stranger Things wall poster featuring Steve Harrington in a dark, retro-inspired aesthetic.",
      
        description:
          "A premium Stranger Things wall poster inspired by the iconic Netflix series. Featuring Steve Harrington in a dramatic, painterly style with retro horror tones, this artwork is perfect for fans of the Upside Down, cinematic storytelling, and nostalgic 80s aesthetics.",
      
        highlights: [
          "High-resolution cinematic artwork",
          "Retro horror & 80s-inspired aesthetic",
          "Fade-resistant premium inks",
          "Perfect for bedrooms & entertainment rooms",
          "Must-have for Stranger Things fans"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1199,
          salePrice: 949,
          discountPercentage: 21,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "ST-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 949,
            stock: 35
          },
          {
            variantId: "ST-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1199,
            stock: 50
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 85,
          stockStatus: "In Stock",      // In Stock | low_stock | out_of_stock
          lowStockThreshold: 8,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: st,
      
        images: [
          "stranger_things_steve_1.jpg",
          "stranger_things_steve_2.jpg"
        ],
      
        gallery: [
          "stranger_things_steve_1.jpg",
          "stranger_things_steve_2.jpg",
          "stranger_things_steve_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "stranger things poster",
          "stranger things wall art",
          "steve harrington poster",
          "netflix series poster",
          "tv series wall art",
          "retro horror poster",
          "80s aesthetic wall art",
          "dark cinematic poster",
          "bedroom wall poster",
          "hostel room decor",
          "netflix wall decor",
          "pop culture poster",
          "gift for stranger things fans",
          "gift for netflix lovers",
          "series inspired wall art",
          "cinematic tv poster",
          "nostalgic wall poster",
          "fan art stranger things"
        ],
      
        seo: {
          metaTitle: "Stranger Things Poster | Steve Harrington Wall Art",
          metaDescription:
            "Buy Stranger Things wall poster featuring Steve Harrington. Premium Netflix series wall art with a dark, retro cinematic aesthetic.",
          keywords: [
            "stranger things poster",
            "steve harrington wall art",
            "netflix stranger things poster",
            "tv series wall decor"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.3,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.9,
        reviewsCount: 189,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-made artwork inspired by Stranger Things. Not official Netflix merchandise.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",              // active | draft | archived
        visibility: "public",          // public | hidden
        isFeatured: true,
        isTrending: true,
        isNewArrival: false,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-movie-cars-001",
        name: "Lightning McQueen Racing Wall Poster",
        slug: "lightning-mcqueen-racing-wall-poster",
        sku: "PST-MOV-CARS-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | polaroid | canvas
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
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "fan_art",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "High-energy Lightning McQueen racing wall poster inspired by Pixar’s Cars movie.",
      
        description:
          "A dynamic Lightning McQueen wall poster inspired by Pixar’s Cars franchise. Featuring a close-up racing action shot with motion blur and dramatic lighting, this artwork captures speed, confidence, and competition. Perfect for kids’ rooms, gaming setups, and car enthusiasts.",
      
        highlights: [
          "High-resolution racing artwork",
          "Dynamic speed & motion effect",
          "Fade-resistant premium inks",
          "Perfect for kids rooms & gaming spaces",
          "Great gift for Cars movie fans"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 999,
          salePrice: 799,
          discountPercentage: 20,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "CARS-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 799,
            stock: 45
          },
          {
            variantId: "CARS-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 999,
            stock: 60
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 105,
          stockStatus: "In Stock",      // In Stock | low_stock | out_of_stock
          lowStockThreshold: 12,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: cars,
      
        images: [
          "lightning_mcqueen_racing_1.jpg",
          "lightning_mcqueen_racing_2.jpg"
        ],
      
        gallery: [
          "lightning_mcqueen_racing_1.jpg",
          "lightning_mcqueen_racing_2.jpg",
          "lightning_mcqueen_racing_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "lightning mcqueen poster",
          "cars movie poster",
          "pixar cars wall art",
          "lightning mcqueen wall poster",
          "racing car poster",
          "kids room wall art",
          "animation movie poster",
          "pixar wall decor",
          "motorsport wall art",
          "gaming room poster",
          "speed racing poster",
          "cars movie wall decor",
          "gift for kids",
          "gift for car lovers",
          "pixar animation wall art",
          "lightning mcqueen racing poster",
          "cinematic racing poster"
        ],
      
        seo: {
          metaTitle: "Lightning McQueen Poster | Pixar Cars Racing Wall Art",
          metaDescription:
            "Buy Lightning McQueen racing wall poster inspired by Pixar’s Cars movie. Premium animation wall art for kids, gamers, and car lovers.",
          keywords: [
            "lightning mcqueen poster",
            "cars movie wall art",
            "pixar cars poster",
            "racing car wall decor"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.28,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.8,
        reviewsCount: 134,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-made artwork inspired by Pixar’s Cars. Not official Disney or Pixar merchandise.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",              // active | draft | archived
        visibility: "public",          // public | hidden
        isFeatured: true,
        isTrending: false,
        isNewArrival: true,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-series-got-001",
        name: "Game of Thrones Battle of Kings Wall Poster",
        slug: "game-of-thrones-battle-of-kings-wall-poster",
        sku: "PST-SER-GOT-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | polaroid | canvas
        category: "Posters",
      
        collections: {
          franchise: "Series",
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
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "fan_art",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "Dark and cinematic Game of Thrones wall poster symbolizing war, sacrifice, and the fight for the Iron Throne.",
      
        description:
          "A powerful Game of Thrones wall poster inspired by the epic battles and brutal reality of Westeros. Featuring a monochrome battlefield aesthetic with fallen banners and weapons, this artwork captures the essence of war, honor, and destiny. Perfect for serious fans and premium interiors.",
      
        highlights: [
          "High-contrast cinematic artwork",
          "Dark medieval fantasy aesthetic",
          "Fade-resistant premium inks",
          "Perfect for offices & study rooms",
          "Must-have for Game of Thrones fans"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1299,
          salePrice: 1099,
          discountPercentage: 15,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "GOT-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 1099,
            stock: 30
          },
          {
            variantId: "GOT-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1299,
            stock: 45
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 75,
          stockStatus: "In Stock",      // In Stock | low_stock | out_of_stock
          lowStockThreshold: 8,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: got,
      
        images: [
          "game_of_thrones_battle_1.jpg",
          "game_of_thrones_battle_2.jpg"
        ],
      
        gallery: [
          "game_of_thrones_battle_1.jpg",
          "game_of_thrones_battle_2.jpg",
          "game_of_thrones_battle_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "game of thrones poster",
          "game of thrones wall art",
          "got poster",
          "hbo series poster",
          "fantasy wall art",
          "dark medieval poster",
          "war themed wall art",
          "iron throne poster",
          "westeros wall decor",
          "cinematic series poster",
          "office wall art",
          "study room poster",
          "gift for got fans",
          "gift for fantasy lovers",
          "minimalist dark poster",
          "epic tv series wall art",
          "fan art game of thrones",
          "black white wall poster"
        ],
      
        seo: {
          metaTitle: "Game of Thrones Poster | Epic Fantasy Wall Art",
          metaDescription:
            "Buy Game of Thrones wall poster inspired by the war for the Iron Throne. Premium HBO series wall art with a dark cinematic aesthetic.",
          keywords: [
            "game of thrones poster",
            "got wall art",
            "hbo game of thrones poster",
            "fantasy series wall decor"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.32,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.9,
        reviewsCount: 201,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-made artwork inspired by Game of Thrones. Not official HBO merchandise.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",              // active | draft | archived
        visibility: "public",          // public | hidden
        isFeatured: true,
        isTrending: true,
        isNewArrival: false,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-series-breakingbad-001",
        name: "Breaking Bad Sunset Silhouette Wall Poster",
        slug: "breaking-bad-sunset-silhouette-wall-poster",
        sku: "PST-SER-BB-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | polaroid | canvas
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
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "fan_art",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "Minimalist Breaking Bad wall poster featuring Walter White and Jesse Pinkman in a cinematic sunset silhouette.",
      
        description:
          "A premium Breaking Bad wall poster inspired by the iconic AMC series. Featuring a minimalist sunset silhouette of Walter White and Jesse Pinkman, this artwork captures the calm-before-the-storm energy of the Heisenberg era. Perfect for serious fans, modern interiors, and framed displays.",
      
        highlights: [
          "Minimalist cinematic artwork",
          "Iconic Breaking Bad symbolism",
          "Warm sunset color palette",
          "Fade-resistant premium inks",
          "Perfect for offices & study rooms"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1299,
          salePrice: 1099,
          discountPercentage: 15,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "BB-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 1099,
            stock: 30
          },
          {
            variantId: "BB-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1299,
            stock: 45
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 75,
          stockStatus: "In Stock",      // In Stock | low_stock | out_of_stock
          lowStockThreshold: 8,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: breaking,
      
        images: [
          "breaking_bad_sunset_1.jpg",
          "breaking_bad_sunset_2.jpg"
        ],
      
        gallery: [
          "breaking_bad_sunset_1.jpg",
          "breaking_bad_sunset_2.jpg",
          "breaking_bad_sunset_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "breaking bad poster",
          "breaking bad wall art",
          "breaking bad silhouette poster",
          "walter white poster",
          "jesse pinkman poster",
          "heisenberg wall art",
          "amc series poster",
          "crime drama wall art",
          "minimalist tv series poster",
          "cinematic wall art",
          "sunset silhouette poster",
          "office wall decor",
          "study room poster",
          "gift for breaking bad fans",
          "gift for tv series lovers",
          "cult classic wall poster",
          "moody aesthetic wall art",
          "framed poster decor"
        ],
      
        seo: {
          metaTitle: "Breaking Bad Poster | Sunset Silhouette Wall Art",
          metaDescription:
            "Buy Breaking Bad sunset silhouette wall poster inspired by the Heisenberg era. Premium minimalist wall art for serious TV series fans.",
          keywords: [
            "breaking bad poster",
            "breaking bad wall art",
            "heisenberg poster",
            "amc breaking bad decor"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.32,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 5.0,
        reviewsCount: 248,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-made artwork inspired by Breaking Bad. Not official AMC merchandise.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",              // active | draft | archived
        visibility: "public",          // public | hidden
        isFeatured: true,
        isTrending: true,
        isNewArrival: false,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-movie-godfather-001",
        name: "The Godfather Classic Mafia Wall Poster",
        slug: "the-godfather-classic-mafia-wall-poster",
        sku: "PST-MOV-GF-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | polaroid | canvas
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
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "fan_art",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "Iconic The Godfather wall poster capturing power, legacy, and classic mafia cinema.",
      
        description:
          "A legendary The Godfather wall poster inspired by one of the greatest films in cinematic history. Featuring the iconic portrait of Don Vito Corleone with a dark, minimalist aesthetic, this artwork symbolizes power, loyalty, and legacy. Perfect for offices, studies, libraries, and premium interiors.",
      
        highlights: [
          "Timeless classic cinema artwork",
          "Iconic mafia & power symbolism",
          "Dark premium aesthetic",
          "Fade-resistant archival-quality inks",
          "Perfect for framed displays"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1399,
          salePrice: 1199,
          discountPercentage: 14,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "GF-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 1199,
            stock: 25
          },
          {
            variantId: "GF-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1399,
            stock: 40
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 65,
          stockStatus: "In Stock",      // In Stock | low_stock | out_of_stock
          lowStockThreshold: 6,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: godfather,
      
        images: [
          "the_godfather_classic_1.jpg",
          "the_godfather_classic_2.jpg"
        ],
      
        gallery: [
          "the_godfather_classic_1.jpg",
          "the_godfather_classic_2.jpg",
          "the_godfather_classic_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "the godfather poster",
          "godfather wall art",
          "don vito corleone poster",
          "mafia movie poster",
          "classic cinema wall art",
          "crime drama poster",
          "vintage movie poster",
          "dark aesthetic wall art",
          "office wall decor",
          "study room poster",
          "library wall art",
          "power quote poster",
          "gift for movie lovers",
          "gift for cinema fans",
          "cult classic wall poster",
          "premium framed poster",
          "iconic movie wall art",
          "cinematic noir poster"
        ],
      
        seo: {
          metaTitle: "The Godfather Poster | Classic Mafia Movie Wall Art",
          metaDescription:
            "Buy The Godfather classic wall poster inspired by Don Vito Corleone. Premium mafia movie wall art for offices and luxury interiors.",
          keywords: [
            "the godfather poster",
            "godfather wall art",
            "mafia movie poster",
            "classic cinema wall decor"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.35,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 5.0,
        reviewsCount: 312,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-made artwork inspired by The Godfather. Not official Paramount Pictures merchandise.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",              // active | draft | archived
        visibility: "public",          // public | hidden
        isFeatured: true,
        isTrending: true,
        isNewArrival: false,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-sports-cricket-001",
        name: "Indian Cricket Legend Motivation Wall Poster",
        slug: "indian-cricket-legend-motivation-wall-poster",
        sku: "PST-SPT-CRIC-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | polaroid | canvas
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
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "fan_art",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "Powerful Indian cricket motivation wall poster symbolizing belief, resilience, and elite mindset.",
      
        description:
          "A cinematic Indian cricket motivation wall poster inspired by the mindset of elite athletes. Featuring a focused moment under stadium lights with a bold quote about belief and probability, this artwork represents discipline, resilience, and mental toughness. Perfect for gyms, study rooms, offices, and sports lovers.",
      
        highlights: [
          "High-impact motivational sports artwork",
          "Powerful quote-driven design",
          "Cinematic stadium lighting aesthetic",
          "Fade-resistant premium inks",
          "Perfect for gyms, offices & study rooms"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1299,
          salePrice: 1099,
          discountPercentage: 15,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "CRIC-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 1099,
            stock: 35
          },
          {
            variantId: "CRIC-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1299,
            stock: 50
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 85,
          stockStatus: "In Stock",      // In Stock | low_stock | out_of_stock
          lowStockThreshold: 8,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: virat,
      
        images: [
          "indian_cricket_motivation_1.jpg",
          "indian_cricket_motivation_2.jpg"
        ],
      
        gallery: [
          "indian_cricket_motivation_1.jpg",
          "indian_cricket_motivation_2.jpg",
          "indian_cricket_motivation_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "cricket poster",
          "indian cricket wall art",
          "cricket motivation poster",
          "sports motivation wall art",
          "gym wall poster",
          "study room motivation poster",
          "discipline mindset poster",
          "elite athlete mindset",
          "inspirational sports poster",
          "cricket fan wall decor",
          "india sports poster",
          "never give up poster",
          "belief mindset wall art",
          "quote based wall poster",
          "sports inspiration decor",
          "athlete motivation poster",
          "cinematic sports wall art",
          "focus determination poster"
        ],
      
        seo: {
          metaTitle: "Indian Cricket Motivation Poster | Sports Mindset Wall Art",
          metaDescription:
            "Buy Indian cricket motivation wall poster inspired by elite athlete mindset. Premium sports wall art for gyms, offices, and study rooms.",
          keywords: [
            "cricket motivation poster",
            "indian cricket wall art",
            "sports mindset poster",
            "gym motivational wall decor"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.33,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 5.0,
        reviewsCount: 267,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-made artwork inspired by Indian cricket culture. Not official merchandise.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",              // active | draft | archived
        visibility: "public",          // public | hidden
        isFeatured: true,
        isTrending: true,
        isNewArrival: true,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-sports-football-001",
        name: "Legendary Football GOAT Wall Poster",
        slug: "legendary-football-goat-wall-poster",
        sku: "PST-SPT-FTB-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | polaroid | canvas
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
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "fan_art",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "High-impact football GOAT wall poster symbolizing confidence, dominance, and elite mindset.",
      
        description:
          "A bold football wall poster inspired by one of the greatest goal scorers in modern football history. Featuring a powerful stance with iconic typography and high-contrast red-and-black tones, this artwork represents confidence, leadership, and an unshakable winner’s mentality. Perfect for football lovers, gyms, hostels, and study rooms.",
      
        highlights: [
          "Bold GOAT-themed football artwork",
          "High-contrast red & black design",
          "Elite mindset & confidence symbolism",
          "Fade-resistant premium inks",
          "Perfect for gyms, bedrooms & football fans"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1299,
          salePrice: 1099,
          discountPercentage: 15,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "FTB-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 1099,
            stock: 40
          },
          {
            variantId: "FTB-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1299,
            stock: 55
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 95,
          stockStatus: "In Stock",
          lowStockThreshold: 10,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: ronaldo,
      
        images: [
          "football_goat_1.jpg",
          "football_goat_2.jpg"
        ],
      
        gallery: [
          "football_goat_1.jpg",
          "football_goat_2.jpg",
          "football_goat_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "football poster",
          "football goat poster",
          "legendary football wall art",
          "football motivation poster",
          "gym football poster",
          "sports confidence wall art",
          "football mindset poster",
          "goal scorer poster",
          "elite athlete mindset",
          "red black wall art",
          "hostel room football decor",
          "study room motivation poster",
          "sports leadership poster",
          "never settle mindset",
          "champion mentality wall art",
          "football fan wall decor",
          "power aesthetic sports poster",
          "goat sports wall art"
        ],
      
        seo: {
          metaTitle: "Football GOAT Poster | Legendary Sports Wall Art",
          metaDescription:
            "Buy legendary football GOAT wall poster inspired by elite goal-scoring mindset. Premium sports wall art for gyms, hostels, and football fans.",
          keywords: [
            "football goat poster",
            "football wall art",
            "football motivation poster",
            "sports mindset wall decor"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.34,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 5.0,
        reviewsCount: 301,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-made artwork inspired by football culture and legendary athletes. Not official merchandise.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",
        visibility: "public",
        isFeatured: true,
        isTrending: true,
        isNewArrival: true,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-sports-football-002",
        name: "Legendary No.10 Football Maestro Wall Poster",
        slug: "legendary-no10-football-maestro-wall-poster",
        sku: "PST-SPT-FTB-002",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | polaroid | canvas
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
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "fan_art",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "Iconic No.10 football wall poster celebrating creativity, legacy, and maestro-level greatness.",
      
        description:
          "A premium football wall poster inspired by the legendary No.10 playmaker era. Featuring a powerful celebration moment with classic club colors and bold typography, this artwork symbolizes creativity, loyalty, and footballing intelligence. Perfect for football fans, study rooms, academies, and premium interiors.",
      
        highlights: [
          "Legendary No.10 playmaker theme",
          "Classic club color palette",
          "High-impact celebration artwork",
          "Fade-resistant premium inks",
          "Perfect for football lovers & academies"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1399,
          salePrice: 1199,
          discountPercentage: 14,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "FTB2-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 1199,
            stock: 35
          },
          {
            variantId: "FTB2-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1399,
            stock: 50
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 85,
          stockStatus: "In Stock",
          lowStockThreshold: 8,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: messi,
      
        images: [
          "football_no10_maestro_1.jpg",
          "football_no10_maestro_2.jpg"
        ],
      
        gallery: [
          "football_no10_maestro_1.jpg",
          "football_no10_maestro_2.jpg",
          "football_no10_maestro_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "football poster",
          "no 10 football poster",
          "football maestro wall art",
          "legendary football playmaker",
          "football legacy poster",
          "football celebration wall art",
          "classic football poster",
          "academy football decor",
          "sports inspiration poster",
          "football creativity poster",
          "football goat debate art",
          "european football wall decor",
          "study room football poster",
          "hostel room football decor",
          "gym football poster",
          "vintage football wall art",
          "football fan gift",
          "premium sports wall poster"
        ],
      
        seo: {
          metaTitle: "Legendary No.10 Football Poster | Maestro Wall Art",
          metaDescription:
            "Buy legendary No.10 football maestro wall poster inspired by elite playmaker legacy. Premium sports wall art for football fans and academies.",
          keywords: [
            "no 10 football poster",
            "football maestro wall art",
            "legendary football poster",
            "sports wall decor"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.34,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 5.0,
        reviewsCount: 342,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-made artwork inspired by football culture and legendary playmakers. Not official club or player merchandise.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",
        visibility: "public",
        isFeatured: true,
        isTrending: true,
        isNewArrival: true,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-spiritual-hanuman-001",
        name: "Lord Hanuman Strength & Bhakti Wall Poster",
        slug: "lord-hanuman-strength-bhakti-wall-poster",
        sku: "PST-SPR-HAN-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | polaroid | canvas
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
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "original_artwork",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "Powerful Lord Hanuman wall poster symbolizing strength, devotion, courage, and protection.",
      
        description:
          "A vibrant Lord Hanuman wall poster inspired by traditional Indian spiritual art. Featuring a bold orange palette and strong line illustration, this artwork represents strength, unwavering devotion, courage, and protection from negativity. Perfect for homes, temples, gyms, offices, and meditation spaces.",
      
        highlights: [
          "Powerful Lord Hanuman illustration",
          "Symbol of strength, courage & devotion",
          "Auspicious orange color palette",
          "Fade-resistant premium inks",
          "Ideal for home, temple & workspace"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 999,
          salePrice: 799,
          discountPercentage: 20,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "HAN-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 799,
            stock: 50
          },
          {
            variantId: "HAN-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 999,
            stock: 65
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 115,
          stockStatus: "In Stock",
          lowStockThreshold: 12,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: hanuman,
      
        images: [
          "lord_hanuman_strength_1.jpg",
          "lord_hanuman_strength_2.jpg"
        ],
      
        gallery: [
          "lord_hanuman_strength_1.jpg",
          "lord_hanuman_strength_2.jpg",
          "lord_hanuman_strength_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "lord hanuman poster",
          "hanuman wall art",
          "hanuman ji poster",
          "bajrangbali wall art",
          "hanuman strength poster",
          "devotional wall art",
          "spiritual wall poster",
          "hindu god poster",
          "hanuman bhakti art",
          "orange spiritual poster",
          "home mandir wall art",
          "temple wall decor",
          "positive energy wall art",
          "faith motivation poster",
          "gym hanuman poster",
          "hanuman protection poster",
          "indian spiritual art",
          "religious wall decor"
        ],
      
        seo: {
          metaTitle: "Lord Hanuman Poster | Strength & Bhakti Wall Art",
          metaDescription:
            "Buy Lord Hanuman wall poster symbolizing strength, courage, and devotion. Premium spiritual wall art for home, temple, and workspace.",
          keywords: [
            "lord hanuman poster",
            "hanuman wall art",
            "bajrangbali poster",
            "spiritual wall decor"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.3,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 5.0,
        reviewsCount: 418,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Original devotional artwork inspired by Lord Hanuman. Created with respect for spiritual traditions.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",
        visibility: "public",
        isFeatured: true,
        isTrending: true,
        isNewArrival: true,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-spiritual-krishna-001",
        name: "Lord Krishna Divine Flute Art Wall Poster",
        slug: "lord-krishna-divine-flute-art-wall-poster",
        sku: "PST-SPR-KRS-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | polaroid | canvas
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
          "Indian Mythology",
          "Premium Spiritual Art"
        ],
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "original_artwork",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "Premium Lord Krishna wall poster featuring divine flute art symbolizing peace, love, and spiritual harmony.",
      
        description:
          "An exquisite Lord Krishna wall poster inspired by classical Indian art and divine symbolism. Featuring Krishna in a serene pose playing the flute, surrounded by nature and golden halos, this artwork represents divine love, peace, and cosmic balance. Ideal for premium homes, meditation spaces, temples, and luxury interiors.",
      
        highlights: [
          "Gallery-grade artistic Krishna illustration",
          "Symbol of peace, love & divine harmony",
          "Rich teal, gold & floral color palette",
          "Fade-resistant premium archival inks",
          "Perfect for meditation & premium interiors"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1299,
          salePrice: 1099,
          discountPercentage: 15,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "KRS-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 1099,
            stock: 40
          },
          {
            variantId: "KRS-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1299,
            stock: 55
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 95,
          stockStatus: "In Stock",
          lowStockThreshold: 10,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: krishna,
      
        images: [
          "lord_krishna_divine_flute_1.jpg",
          "lord_krishna_divine_flute_2.jpg"
        ],
      
        gallery: [
          "lord_krishna_divine_flute_1.jpg",
          "lord_krishna_divine_flute_2.jpg",
          "lord_krishna_divine_flute_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "lord krishna poster",
          "krishna wall art",
          "krishna flute poster",
          "shri krishna painting",
          "divine krishna art",
          "spiritual wall art",
          "premium hindu art",
          "krishna leela poster",
          "meditation room wall art",
          "calming spiritual poster",
          "indian mythology wall decor",
          "radha krishna art style",
          "temple wall art",
          "peaceful wall poster",
          "luxury spiritual decor",
          "bhagwan krishna poster",
          "devotional art premium",
          "gift for spiritual occasions"
        ],
      
        seo: {
          metaTitle: "Lord Krishna Poster | Divine Flute Spiritual Wall Art",
          metaDescription:
            "Buy premium Lord Krishna wall poster featuring divine flute art. Spiritual wall decor symbolizing peace, love, and harmony.",
          keywords: [
            "lord krishna poster",
            "krishna flute wall art",
            "spiritual krishna painting",
            "devotional wall decor"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.34,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 5.0,
        reviewsCount: 389,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Original devotional artwork inspired by Lord Krishna. Created with respect for spiritual and cultural traditions.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",
        visibility: "public",
        isFeatured: true,
        isTrending: true,
        isNewArrival: true,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-auto-bmw-001",
        name: "BMW M Motorsport Racing Wall Poster",
        slug: "bmw-m-motorsport-racing-wall-poster",
        sku: "PST-AUTO-BMW-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | polaroid | canvas
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
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "fan_art_inspired",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "High-performance BMW M Motorsport wall poster featuring a bold racing design inspired by track dominance and precision engineering.",
      
        description:
          "A striking BMW M Motorsport wall poster inspired by high-speed racing culture and German performance engineering. Featuring an aggressive front-facing BMW race car with iconic M stripes, this artwork is designed for car enthusiasts, garage setups, gaming rooms, and modern interiors.",
      
        highlights: [
          "Iconic BMW M racing stripes design",
          "Aggressive motorsport front profile",
          "Premium automotive wall decor",
          "Fade-resistant HD printing",
          "Perfect for garages, gaming rooms & offices"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1399,
          salePrice: 1199,
          discountPercentage: 14,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "BMW-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 1199,
            stock: 35
          },
          {
            variantId: "BMW-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1399,
            stock: 50
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 85,
          stockStatus: "In Stock",
          lowStockThreshold: 10,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: bmw,
      
        images: [
          "bmw_m_motorsport_1.jpg",
          "bmw_m_motorsport_2.jpg"
        ],
      
        gallery: [
          "bmw_m_motorsport_1.jpg",
          "bmw_m_motorsport_2.jpg",
          "bmw_m_motorsport_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "bmw poster",
          "bmw m poster",
          "bmw motorsport wall art",
          "bmw racing poster",
          "bmw m performance poster",
          "luxury car wall art",
          "automotive wall decor",
          "garage wall poster",
          "car enthusiast poster",
          "bmw m stripes poster",
          "sports car wall art",
          "racing car poster",
          "gaming room wall art",
          "modern automotive decor"
        ],
      
        seo: {
          metaTitle: "BMW M Motorsport Poster | Racing Car Wall Art",
          metaDescription:
            "Buy premium BMW M Motorsport wall poster inspired by high-performance racing and iconic M stripes. Perfect for car enthusiasts.",
          keywords: [
            "bmw m poster",
            "bmw racing wall art",
            "automotive poster",
            "bmw motorsport decor"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.36,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.9,
        reviewsCount: 212,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-art inspired automotive artwork. BMW trademarks belong to their respective owners.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",
        visibility: "public",
        isFeatured: true,
        isTrending: true,
        isNewArrival: false,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-auto-porsche-001",
        name: "Porsche 911 GT3 RS Motorsport Wall Poster",
        slug: "porsche-911-gt3-rs-motorsport-wall-poster",
        sku: "PST-AUTO-POR-911RS-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | canvas | polaroid
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
          "Supercar",
          "Racing Heritage",
          "Minimal Automotive Art"
        ],
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "fan_art_inspired",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "Minimal motorsport-inspired Porsche 911 GT3 RS wall poster showcasing track-focused performance and racing heritage.",
      
        description:
          "A premium Porsche 911 GT3 RS wall poster inspired by motorsport discipline and precision engineering. Featuring a clean side profile against a bold racing backdrop, this artwork reflects Porsche’s relentless pursuit of performance. Designed for true car enthusiasts, modern interiors, offices, and high-end garage spaces.",
      
        highlights: [
          "Iconic Porsche 911 GT3 RS side profile",
          "Motorsport-inspired minimal design",
          "Clean, premium automotive aesthetic",
          "Fade-resistant high-definition printing",
          "Perfect for luxury offices & garage setups"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1499,
          salePrice: 1299,
          discountPercentage: 13,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "POR-911RS-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 1299,
            stock: 30
          },
          {
            variantId: "POR-911RS-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1499,
            stock: 45
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 75,
          stockStatus: "In Stock",
          lowStockThreshold: 8,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: porsche,
      
        images: [
          "porsche_911_gt3_rs_1.jpg",
          "porsche_911_gt3_rs_2.jpg"
        ],
      
        gallery: [
          "porsche_911_gt3_rs_1.jpg",
          "porsche_911_gt3_rs_2.jpg",
          "porsche_911_gt3_rs_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "porsche poster",
          "porsche 911 poster",
          "porsche gt3 rs wall art",
          "porsche motorsport poster",
          "luxury car wall art",
          "supercar poster",
          "automotive wall decor",
          "garage wall poster",
          "porsche racing poster",
          "gt3 rs artwork",
          "minimal car poster",
          "high performance car art",
          "german sports car poster"
        ],
      
        seo: {
          metaTitle: "Porsche 911 GT3 RS Poster | Motorsport Wall Art",
          metaDescription:
            "Premium Porsche 911 GT3 RS motorsport wall poster inspired by track performance and racing heritage. Perfect for car enthusiasts.",
          keywords: [
            "porsche gt3 rs poster",
            "porsche 911 wall art",
            "motorsport car poster",
            "luxury automotive decor"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.38,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.9,
        reviewsCount: 164,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-art inspired automotive artwork. Porsche trademarks are property of their respective owners.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",
        visibility: "public",
        isFeatured: true,
        isTrending: true,
        isNewArrival: false,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-auto-dodge-001",
        name: "Dodge Challenger SRT American Muscle Wall Poster",
        slug: "dodge-challenger-srt-american-muscle-wall-poster",
        sku: "PST-AUTO-DOD-SRT-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | canvas | polaroid
        category: "Posters",
      
        collections: {
          franchise: "Automotive",
          brand: "Dodge",
          model: "Challenger",
          variant: "SRT",
          segment: "American Muscle",
          series: "Muscle Cars Collection"
        },
      
        themes: [
          "Automotive",
          "American Muscle",
          "Performance",
          "Power",
          "Aggressive Design",
          "Street Racing",
          "V8 Culture",
          "Car Enthusiast",
          "Garage Decor"
        ],
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "fan_art_inspired",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "Bold Dodge Challenger SRT wall poster showcasing raw American muscle, power, and aggressive street presence.",
      
        description:
          "A high-impact Dodge Challenger SRT wall poster inspired by raw American muscle and street dominance. Featuring a bold front stance, dark tones, and aggressive typography, this artwork is designed for muscle car fans, gaming rooms, garages, and modern bachelor interiors.",
      
        highlights: [
          "Iconic Dodge Challenger SRT muscle stance",
          "Dark, aggressive American muscle aesthetic",
          "High-impact automotive wall decor",
          "Fade-resistant HD print quality",
          "Perfect for gaming rooms & garages"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1399,
          salePrice: 1199,
          discountPercentage: 14,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "DOD-SRT-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 1199,
            stock: 40
          },
          {
            variantId: "DOD-SRT-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1399,
            stock: 60
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 100,
          stockStatus: "In Stock",
          lowStockThreshold: 12,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: srt,
      
        images: [
          "dodge_challenger_srt_1.jpg",
          "dodge_challenger_srt_2.jpg"
        ],
      
        gallery: [
          "dodge_challenger_srt_1.jpg",
          "dodge_challenger_srt_2.jpg",
          "dodge_challenger_srt_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "dodge challenger poster",
          "dodge challenger srt wall art",
          "american muscle car poster",
          "muscle car wall decor",
          "dodge srt poster",
          "v8 muscle poster",
          "garage wall art",
          "gaming room car poster",
          "street muscle car poster",
          "automotive wall decor",
          "dark muscle car art",
          "bachelor room wall poster"
        ],
      
        seo: {
          metaTitle: "Dodge Challenger SRT Poster | American Muscle Wall Art",
          metaDescription:
            "Buy premium Dodge Challenger SRT wall poster inspired by raw American muscle and street dominance. Perfect for car enthusiasts.",
          keywords: [
            "dodge challenger srt poster",
            "american muscle wall art",
            "muscle car poster",
            "dodge wall decor"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.4,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.8,
        reviewsCount: 143,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-art inspired automotive artwork. Dodge and SRT trademarks belong to their respective owners.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",
        visibility: "public",
        isFeatured: true,
        isTrending: true,
        isNewArrival: false,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-superhero-thor-001",
        name: "Thor God of Thunder Cinematic Wall Poster",
        slug: "thor-god-of-thunder-cinematic-wall-poster",
        sku: "PST-MAR-THR-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | canvas | polaroid
        category: "Posters",
      
        collections: {
          franchise: "Marvel",
          character: "Thor",
          universe: "MCU",
          themeSeries: "Gods & Legends",
          collectionType: "Superheroes"
        },
      
        themes: [
          "Superhero",
          "Marvel",
          "God of Thunder",
          "Power",
          "Redemption",
          "Mythology",
          "Cinematic Art",
          "Dark Aesthetic",
          "Heroic Wall Art"
        ],
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "YourBrand Design Team",
        licenseType: "fan_art_inspired",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "Cinematic Thor wall poster capturing the God of Thunder in a powerful, introspective moment.",
      
        description:
          "A premium cinematic Thor wall poster inspired by the God of Thunder’s strength, sacrifice, and inner conflict. Featuring a dramatic side-profile with storm-lit tones and a dark heroic aesthetic, this artwork is perfect for Marvel fans who prefer mature, cinematic wall decor over loud merchandise.",
      
        highlights: [
          "Cinematic side-profile Thor artwork",
          "Dark, premium Marvel aesthetic",
          "Inspired by Norse mythology & MCU visuals",
          "Fade-resistant high-definition print",
          "Perfect for gaming rooms, bedrooms & offices"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1399,
          salePrice: 1199,
          discountPercentage: 14,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "THR-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 1199,
            stock: 45
          },
          {
            variantId: "THR-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1399,
            stock: 65
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 110,
          stockStatus: "In Stock",
          lowStockThreshold: 12,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: thor,
      
        images: [
          "thor_cinematic_1.jpg",
          "thor_cinematic_2.jpg"
        ],
      
        gallery: [
          "thor_cinematic_1.jpg",
          "thor_cinematic_2.jpg",
          "thor_cinematic_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "thor poster",
          "thor wall art",
          "god of thunder poster",
          "marvel thor poster",
          "cinematic thor art",
          "dark marvel wall decor",
          "superhero wall poster",
          "thor mcu artwork",
          "norse mythology wall art",
          "gaming room marvel poster",
          "premium marvel wall art",
          "heroic cinematic poster"
        ],
      
        seo: {
          metaTitle: "Thor Poster | God of Thunder Cinematic Wall Art",
          metaDescription:
            "Buy premium Thor God of Thunder wall poster with cinematic dark aesthetics. Perfect for Marvel fans and superhero decor.",
          keywords: [
            "thor poster",
            "god of thunder wall art",
            "marvel thor cinematic poster",
            "superhero wall decor"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.35,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.9,
        reviewsCount: 276,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-art inspired superhero artwork. Marvel and Thor trademarks belong to their respective owners.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",
        visibility: "public",
        isFeatured: true,
        isTrending: true,
        isNewArrival: false,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-series-friends-001",
        name: "FRIENDS Iconic Sitcom Cast Wall Poster",
        slug: "friends-iconic-sitcom-cast-wall-poster",
        sku: "PST-SER-FRD-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | canvas | polaroid
        category: "Posters",
      
        collections: {
          franchise: "TV Series",
          series: "Friends",
          genre: "Sitcom",
          era: "90s Classics",
          collectionType: "Pop Culture"
        },
      
        themes: [
          "TV Series",
          "Friends",
          "Sitcom",
          "Nostalgia",
          "Friendship",
          "Comfort Shows",
          "Pop Culture",
          "90s Vibes",
          "Cozy Wall Art"
        ],
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "Curated Pop Culture Collection",
        licenseType: "fan_art_inspired",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "Classic FRIENDS sitcom wall poster celebrating friendship, nostalgia, and timeless pop culture.",
      
        description:
          "A timeless FRIENDS wall poster featuring the iconic cast from the legendary sitcom. Perfectly capturing the warmth, humor, and bond of friendship, this artwork is ideal for bedrooms, living rooms, cafés, dorms, and cozy spaces. A must-have for fans who grew up with FRIENDS or discovered comfort in it later.",
      
        highlights: [
          "Iconic FRIENDS cast imagery",
          "Warm, nostalgic pop culture aesthetic",
          "Perfect comfort-show wall decor",
          "High-definition fade-resistant print",
          "Ideal for bedrooms, cafés & cozy spaces"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1199,
          salePrice: 999,
          discountPercentage: 17,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "FRD-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 999,
            stock: 70
          },
          {
            variantId: "FRD-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1199,
            stock: 90
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 160,
          stockStatus: "In Stock",
          lowStockThreshold: 15,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: friends,
      
        images: [
          "friends_cast_1.jpg",
          "friends_cast_2.jpg"
        ],
      
        gallery: [
          "friends_cast_1.jpg",
          "friends_cast_2.jpg",
          "friends_cast_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "friends poster",
          "friends tv show wall art",
          "friends sitcom poster",
          "friends cast poster",
          "90s tv show poster",
          "nostalgia wall decor",
          "comfort show poster",
          "pop culture wall art",
          "friends room decor",
          "cafe wall poster",
          "friends aesthetic poster",
          "iconic tv series poster"
        ],
      
        seo: {
          metaTitle: "FRIENDS Poster | Iconic Sitcom Wall Art",
          metaDescription:
            "Buy classic FRIENDS wall poster featuring the iconic sitcom cast. Perfect for bedrooms, cafés, and fans of comfort TV shows.",
          keywords: [
            "friends poster",
            "friends tv show wall art",
            "friends cast poster",
            "nostalgia sitcom poster"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.33,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.9,
        reviewsCount: 412,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-art inspired TV series artwork. FRIENDS and related trademarks belong to their respective owners.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",
        visibility: "public",
        isFeatured: true,
        isTrending: true,
        isNewArrival: false,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-gaming-kratos-001",
        name: "Kratos God of War Dark Legend Wall Poster",
        slug: "kratos-god-of-war-dark-legend-wall-poster",
        sku: "PST-GAM-GOW-KRT-001",
        barcode: null,
      
        /* ===============================
           PRODUCT TYPE & CLASSIFICATION
        =============================== */
                         // poster | wall_banner | canvas | polaroid
        category: "Posters",
      
        collections: {
          franchise: "Gaming",
          game: "God of War",
          character: "Kratos",
          mythology: "Norse / Greek",
          collectionType: "Dark Legends"
        },
      
        themes: [
          "Gaming",
          "God of War",
          "Kratos",
          "Rage",
          "Redemption",
          "Strength",
          "Anti-Hero",
          "Dark Aesthetic",
          "Warrior Spirit",
          "Motivational Grit"
        ],
      
        /* ===============================
           BRAND & CREATOR
        =============================== */
        brand: "YourBrand Studio",
        artistName: "Curated Gaming Legends",
        licenseType: "fan_art_inspired",
      
        /* ===============================
           DESCRIPTION CONTENT
        =============================== */
        shortDescription:
          "Dark, powerful Kratos wall poster featuring the iconic God of War quote and warrior aesthetic.",
      
        description:
          "A fierce Kratos wall poster inspired by the God of War series, capturing raw rage, discipline, and unbreakable will. Featuring the iconic quote 'Death can have me, when it earns me', this artwork is designed for gamers, warriors-at-heart, and anyone who resonates with strength through suffering.",
      
        highlights: [
          "Iconic Kratos half-portrait design",
          "Legendary God of War quote typography",
          "Dark, gritty warrior aesthetic",
          "High-definition fade-resistant print",
          "Perfect for gaming rooms & intense workspaces"
        ],
      
        /* ===============================
           PRICING & TAX
        =============================== */
        pricing: {
          basePrice: 1399,
          salePrice: 1199,
          discountPercentage: 14,
          currency: "INR",
          isTaxable: true,
          taxClass: "standard"
        },
      
        /* ===============================
           VARIANTS & OPTIONS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Glossy"]
        },
      
        variants: [
          {
            variantId: "KRT-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 1199,
            stock: 50
          },
          {
            variantId: "KRT-A3-GLOSSY",
            size: "A3",
            paperType: "Glossy",
            price: 1399,
            stock: 70
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 120,
          stockStatus: "In Stock",
          lowStockThreshold: 12,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: godofwar,
      
        images: [
          "kratos_god_of_war_1.jpg",
          "kratos_god_of_war_2.jpg"
        ],
      
        gallery: [
          "kratos_god_of_war_1.jpg",
          "kratos_god_of_war_2.jpg",
          "kratos_god_of_war_3.jpg"
        ],
      
        /* ===============================
           SEARCH & SEO
        =============================== */
        tags: [
          "kratos poster",
          "god of war poster",
          "kratos wall art",
          "god of war quote poster",
          "gaming wall decor",
          "dark warrior poster",
          "anti hero wall art",
          "kratos motivational quote",
          "gaming room poster",
          "playstation wall art",
          "norse mythology gaming art",
          "dark aesthetic poster"
        ],
      
        seo: {
          metaTitle: "Kratos Poster | God of War Dark Legend Wall Art",
          metaDescription:
            "Buy premium Kratos God of War wall poster featuring iconic quote and dark warrior aesthetics. Perfect for gamers and fans.",
          keywords: [
            "kratos poster",
            "god of war wall art",
            "gaming poster",
            "kratos quote poster"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION & PRODUCTION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.36,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 5.0,
        reviewsCount: 331,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-art inspired gaming artwork. God of War and Kratos are trademarks of their respective owners.",
      
        /* ===============================
           ADMIN CONTROLS
        =============================== */
        status: "active",
        visibility: "public",
        isFeatured: true,
        isTrending: true,
        isNewArrival: false,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-movie-interstellar-stay-001",
        name: "STAY – Interstellar Inspired Minimal Wall Poster",
        slug: "stay-interstellar-minimal-wall-poster",
        sku: "PST-MOV-INT-STAY-001",
      
        /* ===============================
           PRODUCT TYPE
        =============================== */
                  // poster | wall_banner | canvas | polaroid
        category: "Posters",
      
        /* ===============================
           COLLECTIONS & CLASSIFICATION
        =============================== */
        collections: {
          franchise: "Interstellar",
          studio: "Sci-Fi Cinema",
          genre: "Science Fiction",
          style: "Minimal",
          collectionType: "Cinematic Minimalism"
        },
      
        themes: [
          "Space",
          "Time",
          "Love",
          "Existential",
          "Minimalism",
          "Cinema",
          "Sci-Fi",
          "Emotional",
          "Thought Provoking",
          "Aesthetic Wall Art"
        ],
      
        /* ===============================
           BRANDING
        =============================== */
        brand: "YourBrand Studio",
        artistName: "Cinematic Minimal Series",
        licenseType: "fan_art_inspired",
      
        /* ===============================
           DESCRIPTION
        =============================== */
        shortDescription:
          "Minimal Interstellar-inspired poster featuring the iconic word 'STAY' with cosmic symbolism.",
      
        description:
          "A calm yet emotionally powerful wall poster inspired by Interstellar. Featuring the word 'STAY' against a vast cosmic background, this minimalist artwork represents love, time, and human connection. Designed for modern spaces, study rooms, and movie lovers who appreciate subtle storytelling.",
      
        highlights: [
          "Minimal Interstellar-inspired design",
          "Clean typography with deep cinematic meaning",
          "Soft cosmic color palette",
          "Perfect for modern & aesthetic interiors",
          "Non-distracting, calming wall decor"
        ],
      
        /* ===============================
           PRICING
        =============================== */
        pricing: {
          basePrice: 1299,
          salePrice: 999,
          discountPercentage: 23,
          currency: "INR",
          isTaxable: true
        },
      
        /* ===============================
           OPTIONS / VARIANTS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte"]
        },
      
        variants: [
          {
            variantId: "STAY-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 999,
            stock: 40
          },
          {
            variantId: "STAY-A3-MATTE",
            size: "A3",
            paperType: "Matte",
            price: 1299,
            stock: 60
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 100,
          stockStatus: "In Stock",
          lowStockThreshold: 10,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: interstellar,
      
        images: [
          "stay_interstellar_1.jpg",
          "stay_interstellar_2.jpg"
        ],
      
        gallery: [
          "stay_interstellar_1.jpg",
          "stay_interstellar_2.jpg",
          "stay_interstellar_3.jpg"
        ],
      
        /* ===============================
           SEARCH / TAGS (VERY IMPORTANT)
        =============================== */
        tags: [
          "stay poster",
          "interstellar poster",
          "interstellar stay poster",
          "minimal movie poster",
          "sci fi wall art",
          "space minimalist poster",
          "cinematic wall decor",
          "aesthetic movie poster",
          "study room wall art",
          "minimal typography poster",
          "christopher nolan inspired art",
          "calm wall decor"
        ],
      
        seo: {
          metaTitle: "STAY Interstellar Poster | Minimal Sci-Fi Wall Art",
          metaDescription:
            "Buy minimalist Interstellar-inspired STAY poster. A calm, cinematic wall art piece for movie lovers and modern interiors.",
          keywords: [
            "stay interstellar poster",
            "minimal sci fi poster",
            "interstellar wall art"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.25,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.8,
        reviewsCount: 92,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-art inspired cinematic artwork. Interstellar is a trademark of its respective owners.",
      
        /* ===============================
           ADMIN
        =============================== */
        status: "active",
        visibility: "public",
        isFeatured: true,
        isTrending: false,
        isNewArrival: true,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-hp-silhouette-001",
        name: "Harry Potter Silhouette – Philosopher’s Stone Wall Poster",
        slug: "harry-potter-silhouette-philosophers-stone-poster",
        sku: "PST-HP-SIL-001",
      
        /* ===============================
           PRODUCT TYPE
        =============================== */
                      // poster | wall_banner | canvas | polaroid
        category: "Posters",
        subCategory: "Movie & Series Posters",
      
        /* ===============================
           COLLECTIONS & SORTING
        =============================== */
        collections: {
          franchise: "Harry Potter",
          universe: "Wizarding World",
          studio: "Fantasy Cinema",
          genre: "Fantasy",
          series: "Harry Potter and the Philosopher’s Stone",
          collectionType: "Cinematic Silhouette"
        },
      
        moods: [
          "Magical",
          "Nostalgic",
          "Dreamy",
          "Cinematic",
          "Dark Academia"
        ],
      
        /* ===============================
           BRAND / ART
        =============================== */
        brand: "YourBrand Studio",
        artistSeries: "Wizarding Silhouette Collection",
        licenseType: "fan_art_inspired",
      
        /* ===============================
           CONTENT
        =============================== */
        shortDescription:
          "A cinematic silhouette poster inspired by Harry Potter and the Philosopher’s Stone, featuring Hogwarts in a magical night setting.",
      
        description:
          "This minimalist yet cinematic Harry Potter silhouette poster captures the essence of the wizarding world. Featuring Hogwarts castle within Harry’s silhouette, the artwork evokes nostalgia, magic, and adventure. A perfect wall decor piece for Potterheads, study rooms, bedrooms, and aesthetic setups.",
      
        highlights: [
          "Iconic Harry Potter silhouette artwork",
          "Hogwarts castle night scene",
          "Magical & nostalgic aesthetic",
          "Perfect for Potterheads & fantasy lovers",
          "Blends modern minimalism with cinematic storytelling"
        ],
      
        /* ===============================
           PRICING
        =============================== */
        pricing: {
          basePrice: 1499,
          salePrice: 1199,
          discountPercentage: 20,
          currency: "INR",
          isTaxable: true
        },
      
        /* ===============================
           OPTIONS / VARIANTS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Matte", "Premium Matte"]
        },
      
        variants: [
          {
            variantId: "HP-SIL-A4-MATTE",
            size: "A4",
            paperType: "Matte",
            price: 1199,
            stock: 40
          },
          {
            variantId: "HP-SIL-12X18-PREM",
            size: "12x18",
            paperType: "Premium Matte",
            price: 1399,
            stock: 30
          },
          {
            variantId: "HP-SIL-A3-PREM",
            size: "A3",
            paperType: "Premium Matte",
            price: 1599,
            stock: 50
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 120,
          stockStatus: "In Stock",
          lowStockThreshold: 10,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: hp,
      
        images: [
          "harry_potter_silhouette_1.jpg",
          "harry_potter_silhouette_2.jpg"
        ],
      
        gallery: [
          "harry_potter_silhouette_1.jpg",
          "harry_potter_silhouette_2.jpg",
          "harry_potter_silhouette_room.jpg"
        ],
      
        /* ===============================
           SEARCH & TAGGING (VERY IMPORTANT)
        =============================== */
        tags: [
          "harry potter poster",
          "harry potter wall art",
          "hogwarts poster",
          "wizarding world poster",
          "fantasy movie poster",
          "harry potter silhouette",
          "potterhead decor",
          "study room wall decor",
          "dark academia wall art",
          "magical aesthetic poster",
          "cinematic fantasy poster",
          "harry potter gift"
        ],
      
        seo: {
          metaTitle: "Harry Potter Silhouette Poster | Hogwarts Wall Art",
          metaDescription:
            "Buy Harry Potter silhouette poster featuring Hogwarts. A magical cinematic wall art for Potterheads and fantasy lovers.",
          keywords: [
            "harry potter silhouette poster",
            "hogwarts wall art",
            "fantasy movie poster"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.3,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.9,
        reviewsCount: 156,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-art inspired artwork. Harry Potter and related elements are trademarks of their respective owners.",
      
        /* ===============================
           ADMIN FLAGS
        =============================== */
        status: "active",
        visibility: "public",
        isFeatured: true,
        isTrending: true,
        isNewArrival: false,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-potc-black-pearl-001",
        name: "Pirates of the Caribbean – Curse of the Black Pearl Wall Poster",
        slug: "pirates-of-the-caribbean-curse-of-the-black-pearl-poster",
        sku: "PST-POTC-BP-001",
      
        /* ===============================
           PRODUCT TYPE
        =============================== */
        
        category: "Posters",
        subCategory: "Movie & Series Posters",
      
        /* ===============================
           COLLECTIONS & SORTING
        =============================== */
        collections: {
          franchise: "Pirates of the Caribbean",
          universe: "Disney Adventure",
          genre: "Adventure",
          series: "The Curse of the Black Pearl",
          collectionType: "Classic Cinema"
        },
      
        moods: [
          "Adventurous",
          "Dark",
          "Epic",
          "Cinematic",
          "Rebellious"
        ],
      
        /* ===============================
           BRAND / ART
        =============================== */
        brand: "YourBrand Studio",
        artistSeries: "Cinematic Legends Collection",
        licenseType: "fan_art_inspired",
      
        /* ===============================
           CONTENT
        =============================== */
        shortDescription:
          "A classic cinematic poster inspired by Pirates of the Caribbean: The Curse of the Black Pearl, featuring Captain Jack Sparrow and the legendary crew.",
      
        description:
          "This Pirates of the Caribbean wall poster captures the dark, adventurous spirit of the Black Pearl. Featuring Captain Jack Sparrow alongside iconic characters and epic naval imagery, this poster is a must-have for movie lovers, adventure fans, and cinematic decor enthusiasts.",
      
        highlights: [
          "Iconic Pirates of the Caribbean artwork",
          "Classic cinematic movie poster style",
          "Dark, adventurous pirate aesthetic",
          "Perfect for movie rooms & gaming setups",
          "Timeless Hollywood adventure classic"
        ],
      
        /* ===============================
           PRICING
        =============================== */
        pricing: {
          basePrice: 1599,
          salePrice: 1299,
          discountPercentage: 19,
          currency: "INR",
          isTaxable: true
        },
      
        /* ===============================
           OPTIONS / VARIANTS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Glossy", "Premium Matte"]
        },
      
        variants: [
          {
            variantId: "POTC-A4-GLOSSY",
            size: "A4",
            paperType: "Glossy",
            price: 1299,
            stock: 35
          },
          {
            variantId: "POTC-12X18-PREM",
            size: "12x18",
            paperType: "Premium Matte",
            price: 1499,
            stock: 40
          },
          {
            variantId: "POTC-A3-PREM",
            size: "A3",
            paperType: "Premium Matte",
            price: 1699,
            stock: 45
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 120,
          stockStatus: "In Stock",
          lowStockThreshold: 10,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: potc,
      
        images: [
          "pirates_black_pearl_1.jpg",
          "pirates_black_pearl_2.jpg"
        ],
      
        gallery: [
          "pirates_black_pearl_1.jpg",
          "pirates_black_pearl_2.jpg",
          "pirates_black_pearl_room.jpg"
        ],
      
        /* ===============================
           SEARCH & TAGGING (VERY IMPORTANT)
        =============================== */
        tags: [
          "pirates of the caribbean poster",
          "jack sparrow wall art",
          "black pearl poster",
          "pirate movie poster",
          "cinematic adventure wall art",
          "hollywood classic poster",
          "movie room wall decor",
          "dark adventure poster",
          "pirates wall decor",
          "captain jack sparrow poster",
          "disney adventure poster",
          "movie lovers gift"
        ],
      
        seo: {
          metaTitle: "Pirates of the Caribbean Poster | Curse of the Black Pearl",
          metaDescription:
            "Buy Pirates of the Caribbean wall poster featuring Jack Sparrow and the Black Pearl. Perfect for movie lovers and adventure fans.",
          keywords: [
            "pirates of the caribbean poster",
            "jack sparrow wall art",
            "black pearl poster"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.35,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.8,
        reviewsCount: 142,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-art inspired artwork. Pirates of the Caribbean and related elements are trademarks of their respective owners.",
      
        /* ===============================
           ADMIN FLAGS
        =============================== */
        status: "active",
        visibility: "public",
        isFeatured: true,
        isTrending: false,
        isNewArrival: false,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-fast-furious-7-001",
        name: "Fast & Furious 7 Cinematic Wall Poster",
        slug: "fast-and-furious-7-cinematic-poster",
        sku: "PST-FF7-001",
      
        /* ===============================
           PRODUCT TYPE
        =============================== */
        
        category: "Posters",
        subCategory: "Movie & Series Posters",
      
        /* ===============================
           COLLECTIONS & FILTERING
        =============================== */
        collections: {
          franchise: "Fast & Furious",
          universe: "Fast Saga",
          genre: "Action",
          series: "Fast & Furious 7",
          collectionType: "Hollywood Blockbusters"
        },
      
        moods: [
          "Action",
          "Speed",
          "Brotherhood",
          "Emotional",
          "Cinematic",
          "Powerful"
        ],
      
        /* ===============================
           BRAND / ART SERIES
        =============================== */
        brand: "YourBrand Studio",
        artistSeries: "Action Legends Collection",
        licenseType: "fan_art_inspired",
      
        /* ===============================
           CONTENT
        =============================== */
        shortDescription:
          "A cinematic Fast & Furious 7 wall poster capturing the power, unity, and emotion of the iconic Fast Saga.",
      
        description:
          "This Fast & Furious 7 poster showcases the legendary crew standing together — a symbol of speed, loyalty, and brotherhood. Perfect for car lovers, action movie fans, and anyone inspired by the Fast Saga’s legacy.",
      
        highlights: [
          "Fast & Furious 7 cinematic artwork",
          "Symbol of brotherhood & loyalty",
          "Minimal grey-tone Hollywood style",
          "Perfect for car lovers & action fans",
          "Great for gaming rooms & man caves"
        ],
      
        /* ===============================
           PRICING
        =============================== */
        pricing: {
          basePrice: 1499,
          salePrice: 1199,
          discountPercentage: 20,
          currency: "INR",
          isTaxable: true
        },
      
        /* ===============================
           OPTIONS / VARIANTS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Glossy", "Premium Matte"]
        },
      
        variants: [
          {
            variantId: "FF7-A4-GLOSSY",
            size: "A4",
            paperType: "Glossy",
            price: 1199,
            stock: 40
          },
          {
            variantId: "FF7-12X18-PREM",
            size: "12x18",
            paperType: "Premium Matte",
            price: 1399,
            stock: 45
          },
          {
            variantId: "FF7-A3-PREM",
            size: "A3",
            paperType: "Premium Matte",
            price: 1599,
            stock: 50
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 135,
          stockStatus: "In Stock",
          lowStockThreshold: 10,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: fnf,
      
        images: [
          "fast_furious_7_1.jpg",
          "fast_furious_7_2.jpg"
        ],
      
        gallery: [
          "fast_furious_7_1.jpg",
          "fast_furious_7_crew.jpg",
          "fast_furious_7_room.jpg"
        ],
      
        /* ===============================
           SEARCH / TAGS (HIGH-CONVERSION)
        =============================== */
        tags: [
          "fast and furious poster",
          "fast and furious 7 wall art",
          "fast saga poster",
          "paul walker tribute poster",
          "vin diesel poster",
          "action movie wall decor",
          "car movie poster",
          "hollywood action poster",
          "brotherhood quote poster",
          "man cave wall art",
          "gaming room decor",
          "speed car poster"
        ],
      
        seo: {
          metaTitle: "Fast & Furious 7 Poster | Fast Saga Wall Art",
          metaDescription:
            "Buy Fast & Furious 7 cinematic wall poster inspired by the legendary Fast Saga. Perfect for car lovers & action fans.",
          keywords: [
            "fast and furious poster",
            "fast saga wall art",
            "fast and furious 7 poster"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.35,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.9,
        reviewsCount: 168,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-art inspired artwork. Fast & Furious and related elements are trademarks of their respective owners.",
      
        /* ===============================
           ADMIN FLAGS
        =============================== */
        status: "active",
        visibility: "public",
        isFeatured: true,
        isTrending: true,
        isNewArrival: false,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      
      {
        /* ===============================
           CORE IDENTITY
        =============================== */
        id: "prd-toy-story-3-001",
        name: "Toy Story 3 Pixar Animated Wall Poster",
        slug: "toy-story-3-pixar-animated-poster",
        sku: "PST-TS3-001",
      
        /* ===============================
           PRODUCT TYPE
        =============================== */
        
        category: "Posters",
        subCategory: "Animated & Kids Posters",
      
        /* ===============================
           COLLECTIONS & FILTERING
        =============================== */
        collections: {
          franchise: "Toy Story",
          universe: "Pixar",
          genre: "Animation",
          series: "Toy Story 3",
          collectionType: "Animated Classics"
        },
      
        moods: [
          "Nostalgic",
          "Joyful",
          "Family",
          "Emotional",
          "Colorful",
          "Wholesome"
        ],
      
        /* ===============================
           BRAND / ART SERIES
        =============================== */
        brand: "YourBrand Studio",
        artistSeries: "Pixar Classics Collection",
        licenseType: "fan_art_inspired",
      
        /* ===============================
           CONTENT
        =============================== */
        shortDescription:
          "A vibrant Toy Story 3 wall poster featuring Woody, Buzz Lightyear, and the entire Pixar gang in a joyful, nostalgic design.",
      
        description:
          "This Toy Story 3 poster captures the heart and humor of Pixar’s beloved classic. Featuring Woody, Buzz Lightyear, and the iconic Toy Story characters, this colorful wall poster is perfect for kids’ rooms, family spaces, and anyone who grew up with Pixar magic.",
      
        highlights: [
          "Toy Story 3 official-style artwork",
          "Bright, colorful Pixar animation design",
          "Perfect for kids’ bedrooms & play areas",
          "Nostalgic Pixar classic for all ages",
          "Great gift for animation & Disney fans"
        ],
      
        /* ===============================
           PRICING
        =============================== */
        pricing: {
          basePrice: 1299,
          salePrice: 999,
          discountPercentage: 23,
          currency: "INR",
          isTaxable: true
        },
      
        /* ===============================
           OPTIONS / VARIANTS
        =============================== */
        options: {
          size: ["A4", "12x18", "A3"],
          paperType: ["Glossy", "Premium Matte"]
        },
      
        variants: [
          {
            variantId: "TS3-A4-GLOSSY",
            size: "A4",
            paperType: "Glossy",
            price: 999,
            stock: 50
          },
          {
            variantId: "TS3-12X18-PREM",
            size: "12x18",
            paperType: "Premium Matte",
            price: 1199,
            stock: 55
          },
          {
            variantId: "TS3-A3-PREM",
            size: "A3",
            paperType: "Premium Matte",
            price: 1399,
            stock: 60
          }
        ],
      
        /* ===============================
           INVENTORY
        =============================== */
        inventory: {
          totalStock: 165,
          stockStatus: "In Stock",
          lowStockThreshold: 15,
          allowBackorder: false
        },
      
        /* ===============================
           MEDIA
        =============================== */
        thumbnail: toystory,
      
        images: [
          "toy_story_3_1.jpg",
          "toy_story_3_2.jpg"
        ],
      
        gallery: [
          "toy_story_3_1.jpg",
          "toy_story_3_characters.jpg",
          "toy_story_3_kids_room.jpg"
        ],
      
        /* ===============================
           SEARCH & TAGGING (HIGH DISCOVERY)
        =============================== */
        tags: [
          "toy story poster",
          "toy story 3 wall art",
          "pixar animation poster",
          "woody buzz lightyear poster",
          "kids room wall decor",
          "cartoon movie poster",
          "disney pixar wall art",
          "animated movie poster",
          "family friendly wall decor",
          "nostalgic pixar poster",
          "kids bedroom poster",
          "gift for kids"
        ],
      
        seo: {
          metaTitle: "Toy Story 3 Poster | Pixar Animated Wall Art",
          metaDescription:
            "Buy Toy Story 3 Pixar animated wall poster featuring Woody & Buzz. Perfect for kids rooms, family spaces & Pixar fans.",
          keywords: [
            "toy story poster",
            "toy story 3 wall art",
            "pixar animated poster"
          ]
        },
      
        /* ===============================
           CUSTOMIZATION
        =============================== */
        customizable: false,
        productionTime: "2–3 business days",
      
        /* ===============================
           SHIPPING
        =============================== */
        shipping: {
          weight: 0.3,
          dimensions: { width: 18, height: 24, depth: 0.1 },
          shippingClass: "small_tube",
          freeShipping: false,
          shippingCountries: ["IN"]
        },
      
        /* ===============================
           SOCIAL PROOF
        =============================== */
        rating: 4.9,
        reviewsCount: 210,
      
        /* ===============================
           ANALYTICS
        =============================== */
        analytics: {
          views: 0,
          salesCount: 0,
          wishlistedCount: 0
        },
      
        /* ===============================
           LEGAL
        =============================== */
        copyrightNote:
          "Fan-art inspired artwork. Toy Story and Pixar characters are trademarks of their respective owners.",
      
        /* ===============================
           ADMIN FLAGS
        =============================== */
        status: "active",
        visibility: "public",
        isFeatured: true,
        isTrending: true,
        isNewArrival: false,
      
        /* ===============================
           TIMESTAMPS
        =============================== */
        createdAt: Date.now(),
        updatedAt: Date.now()
      },

];


export const LOCAL_SERVICES = [

];

// --- Categories Data (for filtering/home page) ---
export const CATEGORIES = [
    { name: 'Posters', icon: 'Layers', description: 'Large format prints for display and marketing.', image: "https://i.pinimg.com/1200x/ba/63/14/ba6314b00257bac1e7d4c221c413cda0.jpg" },
    { name: 'Photo Prints', icon: 'Image', description: 'Personalized photos, polaroids, and canvas prints.', image: "https://thumbs.dreamstime.com/b/polaroid-prints-textured-wall-collection-each-capturing-unique-scenes-pinned-to-off-white-arrangement-creates-visually-401186269.jpg" },
    { name: 'Spiral Books', icon: 'Briefcase', description: 'Letterheads, envelopes, business cards, and brochures.', image: "https://lemonadeindia.com/cdn/shop/files/personalized-spiral-notebook-zodiac-signsstationerylemonade-379758_1024x1024.jpg?v=1760007996" },

    { name: 'Stickers', icon: 'Star', description: 'Vinyl, paper, and custom die-cut stickers.', image: " https://i.pinimg.com/736x/57/ac/9c/57ac9c020929545e9c1d3c648ffb6e3f.jpg" },
    { name: 'Wall banners', icon: 'Heart', description: 'Wedding, birthday, and special occasion invitations.', image: "https://dbdzm869oupei.cloudfront.net/img/quadres/large/79603.jpg" },
];

//https://images.squarespace-cdn.com/content/v1/66e5ff131ebccd7304d16f90/e8a5362a-d713-4c4c-8cc1-b9d1e1f2525e/s2k+copy111.png?format=500w

export const SERVICES = [
    {
        name: "Business Stationery",
        icon: "Layers",
        description: "Letterheads, envelopes, visiting cards, brochures, and corporate branding essentials.",
        image: business
    },
    {
        name: "Event Essentials",
        icon: "Image",
        description: "Polaroids, photo prints, canvas frames, and event-friendly personalized gifts.",
        image: wedding
    },
    {
        name: "Advertising",
        icon: "Briefcase",
        description: "Large-format banners, posters, standees, and promotional marketing materials.",
        image: adv
    },
    {
        name: "School Stationery",
        icon: "Star",
        description: "Notebooks, labels, covers, custom stickers, and school branding products.",
        image: school
    },
    {
        name: "Gift Items",
        icon: "Heart",
        description: "Customized gifts like mugs, frames, keychains, notebooks, and decorative prints.",
        image: gift
    },
];
// --- Local Services Data (Offline Shop Offerings) ---
