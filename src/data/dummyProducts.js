// --- Products Data ---
export const PRODUCTS = [
    {
        id: "poster-001",
        name: "Interstellar Minimalist Poster",
        category: "Posters",

        price: 25,
        salePrice: 20,
        discount: 20,

        sku: "PST-INT-001",
        stock: 110,
        stockStatus: "In Stock",

        description: "A minimalist space-themed Interstellar poster featuring the wormhole and astronaut silhouette.",
        tags: ["interstellar", "movie", "space", "minimalist"],
        brand: "Printify Studio",
        slug: "interstellar-minimalist-poster",

        images: ["interstellar1.jpg", "interstellar2.jpg"],
        thumbnail: "https://www.posterized.in/cdn/shop/files/INTER_W_3_15304fbc-a7d7-4148-8e7a-50e2829734e3.jpg?v=1736617824&width=823",
        gallery: ["interstellar1.jpg", "interstellar2.jpg", "interstellar3.jpg"],

        options: {
            size: ["12x18", "18x24", "24x36"],
            paperType: ["Glossy", "Matte"]
        },

        customizable: true,
        productionTime: "2–3 days",

        weight: 0.2,
        dimensions: { width: 18, height: 24, depth: 0.1 },
        shippingClass: "Small Tube",

        rating: 4.9,
        reviewsCount: 128,

        createdAt: Date.now(),
        updatedAt: Date.now(),
        status: "active",
        isFeatured: true
    },
    {
        id: "poster-002",
        name: "Naruto Sage Mode Poster",
        category: "Posters",

        price: 22,
        salePrice: 18,
        discount: 18,

        sku: "PST-NRT-001",
        stock: 95,
        stockStatus: "In Stock",

        description: "Dynamic Naruto Sage Mode illustrated poster with bright chakra tones.",
        tags: ["anime", "naruto", "sage mode", "poster"],
        brand: "Otaku Prints",
        slug: "naruto-sage-mode-poster",

        images: ["naruto1.jpg", "naruto2.jpg"],
        thumbnail: "https://www.posterized.in/cdn/shop/files/DESIER.jpg?v=1736618550&width=823",
        gallery: ["naruto1.jpg", "naruto2.jpg", "naruto3.jpg"],

        options: {
            size: ["12x18", "18x24", "24x36"],
            paperType: ["Matte", "Glossy"]
        },

        customizable: false,
        productionTime: "2–4 days",

        weight: 0.18,
        dimensions: { width: 18, height: 24, depth: 0.1 },
        shippingClass: "Small Tube",

        rating: 4.8,
        reviewsCount: 170,

        createdAt: Date.now(),
        updatedAt: Date.now(),
        status: "active",
        isFeatured: true
    },
    {
        id: "poster-003",
        name: "Cristiano Ronaldo Celebration Poster",
        category: "Posters",

        price: 26,
        salePrice: 22,
        discount: 15,

        sku: "PST-CR7-001",
        stock: 140,
        stockStatus: "In Stock",

        description: "High-energy Cristiano Ronaldo 'SIUU' celebration poster with stadium lighting effects.",
        tags: ["football", "cr7", "sports", "poster"],
        brand: "Sportify Prints",
        slug: "cristiano-ronaldo-celebration-poster",

        images: ["cr7_1.jpg", "cr7_2.jpg"],
        thumbnail: "https://www.posterized.in/cdn/shop/files/ronaldowall.jpg?v=1736616909&width=823",
        gallery: ["cr7_1.jpg", "cr7_2.jpg", "cr7_3.jpg"],

        options: {
            size: ["18x24", "24x36"],
            paperType: ["Glossy"]
        },

        customizable: false,
        productionTime: "1–2 days",

        weight: 0.25,
        dimensions: { width: 24, height: 36, depth: 0.1 },
        shippingClass: "Poster Tube",

        rating: 4.9,
        reviewsCount: 210,

        createdAt: Date.now(),
        updatedAt: Date.now(),
        status: "active",
        isFeatured: true
    },
    {
        id: "poster-004",
        name: "Stranger Things Retro Neon Poster",
        category: "Posters",

        price: 20,
        salePrice: 15,
        discount: 25,

        sku: "PST-ST-001",
        stock: 80,
        stockStatus: "Low Stock",

        description: "Retro neon synthwave styled Stranger Things artwork featuring Eleven and the Upside Down.",
        tags: ["stranger things", "retro", "tv series"],
        brand: "RetroWall Co.",
        slug: "stranger-things-retro-poster",

        images: ["st1.jpg", "st2.jpg"],
        thumbnail: "https://www.posterized.in/cdn/shop/files/StrangerThings62.jpg?v=1736618451&width=823",
        gallery: ["st1.jpg", "st2.jpg", "st3.jpg"],

        options: {
            size: ["12x18", "18x24"],
            paperType: ["Matte", "Glossy"]
        },

        customizable: true,
        productionTime: "3 days",

        weight: 0.16,
        dimensions: { width: 18, height: 24, depth: 0.1 },
        shippingClass: "Small Tube",

        rating: 4.7,
        reviewsCount: 87,

        createdAt: Date.now(),
        updatedAt: Date.now(),
        status: "active",
        isFeatured: false
    },
    {
        id: "poster-005",
        name: "Spider-Man Across the Spider-Verse Poster",
        category: "Posters",

        price: 28,
        salePrice: 24,
        discount: 14,

        sku: "PST-SPDM-001",
        stock: 130,
        stockStatus: "In Stock",

        description: "Colorful multiverse Spider-Man poster featuring Miles Morales in dynamic action.",
        tags: ["marvel", "spider-man", "movie", "poster"],
        brand: "HeroPrints",
        slug: "spider-man-multiverse-poster",

        images: ["spidey1.jpg", "spidey2.jpg"],
        thumbnail: "https://www.posterized.in/cdn/shop/files/16_f15bb85f-87c7-45c4-a678-0ca280847972.jpg?v=1736617254&width=823",
        gallery: ["spidey1.jpg", "spidey2.jpg", "spidey3.jpg"],

        options: {
            size: ["12x18", "18x24", "24x36"],
            paperType: ["Glossy", "Matte"]
        },

        customizable: false,
        productionTime: "2–3 days",

        weight: 0.23,
        dimensions: { width: 24, height: 36, depth: 0.1 },
        shippingClass: "Poster Tube",

        rating: 4.95,
        reviewsCount: 190,

        createdAt: Date.now(),
        updatedAt: Date.now(),
        status: "active",
        isFeatured: true
    }





];

// --- Categories Data (for filtering/home page) ---
export const CATEGORIES = [
    { name: 'Posters', icon: 'Layers', description: 'Large format prints for display and marketing.', image: "https://images.squarespace-cdn.com/content/v1/66e5ff131ebccd7304d16f90/e8a5362a-d713-4c4c-8cc1-b9d1e1f2525e/s2k+copy111.png?format=500w" },
    { name: 'Photo Prints', icon: 'Image', description: 'Personalized photos, polaroids, and canvas prints.', image: "https://thumbs.dreamstime.com/b/polaroid-prints-textured-wall-collection-each-capturing-unique-scenes-pinned-to-off-white-arrangement-creates-visually-401186269.jpg" },
    { name: 'Spiral Books', icon: 'Briefcase', description: 'Letterheads, envelopes, business cards, and brochures.', image: "https://lemonadeindia.com/cdn/shop/files/personalized-spiral-notebook-zodiac-signsstationerylemonade-379758_1024x1024.jpg?v=1760007996" },

    { name: 'Stickers', icon: 'Star', description: 'Vinyl, paper, and custom die-cut stickers.', image: "https://i.pinimg.com/736x/57/ac/9c/57ac9c020929545e9c1d3c648ffb6e3f.jpg" },
    { name: 'Wall banners', icon: 'Heart', description: 'Wedding, birthday, and special occasion invitations.', image: "https://dbdzm869oupei.cloudfront.net/img/quadres/large/79603.jpg" },
];

// --- Local Services Data (Offline Shop Offerings) ---
export const LOCAL_SERVICES = [
    { title: 'High-Speed Photocopying', description: 'Fast, crisp, black & white and color photocopying service. Bulk discounts available.', icon: 'Printer' },
    { title: 'Academic / Exam Papers', description: 'Reliable, confidential, and quick printing of exam papers and academic materials.', icon: 'Users' },
    { title: 'Shaadi Patrika & Invites', description: 'Custom design and high-quality printing for marriage invitations and ceremonial cards.', icon: 'Heart' },
    { title: 'Bulk Print Orders', description: 'Handling large-volume printing of flyers, brochures, and documents for businesses.', icon: 'Truck' },
    { title: 'Lamination & Binding', description: 'Professional finishing services including thermal lamination and spiral/hard binding.', icon: 'Package' },
];