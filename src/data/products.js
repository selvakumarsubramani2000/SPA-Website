// 24 items from customer's business catalog
export const categories = [
  { id: 'all', name: 'All Products', icon: 'LayoutGrid', count: 24 },
  { id: 'furniture', name: 'Furniture & Storage', icon: 'Armchair', count: 9 },
  { id: 'kitchen', name: 'Kitchen Appliances', icon: 'CookingPot', count: 6 },
  { id: 'cookware', name: 'Cookware & Essentials', icon: 'UtensilsCrossed', count: 4 },
  { id: 'cooling', name: 'Fans & Air Coolers', icon: 'Wind', count: 4 },
  { id: 'electrical', name: 'Home Electricals', icon: 'Zap', count: 1 },
];

export const products = [
  // 1. Mixie
  {
    id: 1,
    name: "Heavy Duty 750W Mixer Grinder (Mixie)",
    category: "kitchen",
    categoryLabel: "Kitchen Appliances",
    price: 3499,
    originalPrice: 4999,
    discount: "30% OFF",
    rating: 4.8,
    reviewsCount: 142,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80",
    description: "750 Watt high-torque 100% copper motor with 3 stainless steel leak-proof jars and 3D airflow cooling technology for tough grinding.",
    specs: {
      "Motor Power": "750 Watts Pure Copper Motor",
      "Jars Included": "3 Heavy SS Jars (1.5L Wet, 1.0L Dry, 0.4L Chutney)",
      "Speed Control": "3 Speeds + Pulse Function",
      "Warranty": "2 Years Comprehensive + 5 Years on Motor",
      "Safety": "Overload Protection Trip Switch"
    },
    inStock: true,
    fastDelivery: true,
    material: "High Grade ABS & Stainless Steel"
  },

  // 2. Wet Grinder
  {
    id: 2,
    name: "Table Top 2-Litre Wet Grinder",
    category: "kitchen",
    categoryLabel: "Kitchen Appliances",
    price: 4899,
    originalPrice: 6500,
    discount: "25% OFF",
    rating: 4.9,
    reviewsCount: 98,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80",
    description: "Conical natural cylindrical stones for ultra-smooth idli/dosa batter. Compact tabletop design with stainless steel drum and transparent lid.",
    specs: {
      "Capacity": "2 Litres",
      "Stone Type": "Conical Natural Granite Stones",
      "Drum": "Food-grade AISI 304 Stainless Steel",
      "Motor": "150 Watts High Torque Induction Motor",
      "Warranty": "5 Years Motor Warranty"
    },
    inStock: true,
    fastDelivery: true,
    material: "Stainless Steel Drum & ABS Body"
  },

  // 3. Cooker
  {
    id: 3,
    name: "5L Tri-Ply Stainless Steel Pressure Cooker",
    category: "kitchen",
    categoryLabel: "Kitchen Appliances",
    price: 2299,
    originalPrice: 3200,
    discount: "28% OFF",
    rating: 4.7,
    reviewsCount: 210,
    badge: "Essential",
    image: "https://images.unsplash.com/photo-1584990347449-3990666675ff?auto=format&fit=crop&w=800&q=80",
    description: "Tri-ply 3-layer steel construction with outer lid, induction base, and gasket release system. Faster cooking with uniform heat distribution.",
    specs: {
      "Capacity": "5 Litres (Outer Lid)",
      "Base Type": "Induction & Gas Stove Compatible",
      "Material": "SS 304 Food Grade Inner / Aluminum Core / SS 430 Magnetic Base",
      "Safety": "Lead-Free Safety Valve + Controlled Gasket Release",
      "Warranty": "5 Years Replacement Warranty"
    },
    inStock: true,
    fastDelivery: true,
    material: "Tri-Ply Stainless Steel"
  },

  // 4. Induction Cooker
  {
    id: 4,
    name: "2000W Smart Touch Induction Cooktop",
    category: "kitchen",
    categoryLabel: "Kitchen Appliances",
    price: 2499,
    originalPrice: 3799,
    discount: "34% OFF",
    rating: 4.6,
    reviewsCount: 88,
    badge: "Hot Deal",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    description: "Sleek crystal glass induction cooktop with pre-programmed Indian cooking menus, auto-shut off sensor, and feather touch panel.",
    specs: {
      "Power": "2000 Watts Turbo Heating",
      "Preset Menus": "7 Preset Indian Cooking Menus (Roti, Dosa, Milk, Curry, Idli)",
      "Surface": "Anti-Magnetic Crystal Glass Plate",
      "Timer": "Up to 3 Hours Digital Timer",
      "Warranty": "1 Year Manufacturer Warranty"
    },
    inStock: true,
    fastDelivery: true,
    material: "Microcrystalline Glass & ABS"
  },

  // 5. Hot Box (Casserole)
  {
    id: 5,
    name: "Insulated Stainless Steel Hot Box / Casserole Set (3-Piece)",
    category: "cookware",
    categoryLabel: "Cookware & Essentials",
    price: 1399,
    originalPrice: 1999,
    discount: "30% OFF",
    rating: 4.7,
    reviewsCount: 75,
    badge: "Value Pack",
    image: "https://images.unsplash.com/photo-1615865417491-9941019fbc00?auto=format&fit=crop&w=800&q=80",
    description: "Double-walled polyurethane insulated hot packs keep food piping hot or chilled for up to 6 hours. Set contains 1000ml, 1500ml, and 2500ml casseroles.",
    specs: {
      "Set Contents": "3 Sizes (1000ml, 1500ml, 2500ml)",
      "Insulation": "High Density Polyurethane Foam (PUF)",
      "Inner Shell": "Mirror-Finish SS 304 Stainless Steel",
      "Locking": "Twist Lock Airtight Lid",
      "Warranty": "1 Year Thermal Performance Warranty"
    },
    inStock: true,
    fastDelivery: true,
    material: "Stainless Steel & Insulated Composite"
  },

  // 6. Iron Box
  {
    id: 6,
    name: "Heavyweight 1000W Electric Dry Iron Box",
    category: "electrical",
    categoryLabel: "Home Electricals",
    price: 999,
    originalPrice: 1450,
    discount: "31% OFF",
    rating: 4.8,
    reviewsCount: 164,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80",
    description: "Traditional heavy 1.75kg weight iron box with golden American Heritage non-stick soleplate. Removes tough wrinkles effortlessly.",
    specs: {
      "Weight": "1.75 kg (Heavy Duty for Crisp Creases)",
      "Power": "1000 Watts Quick Heat Element",
      "Soleplate": "Golden Non-Stick Coated Base",
      "Cord": "360-Degree Swivel Cotton Braided Cord",
      "Warranty": "2 Years Comprehensive Warranty"
    },
    inStock: true,
    fastDelivery: true,
    material: "Heavy Cast Metal Base & Deluxe Handle"
  },

  // 7. Flask
  {
    id: 7,
    name: "1000ml Vacuum Insulated Hot & Cold Thermos Flask",
    category: "cookware",
    categoryLabel: "Cookware & Essentials",
    price: 849,
    originalPrice: 1299,
    discount: "35% OFF",
    rating: 4.6,
    reviewsCount: 112,
    badge: "Everyday Pick",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    description: "Double wall vacuum insulation maintains boiling temperature for 24 hours and cold for 30 hours. Leakproof spout cap doubles as a cup.",
    specs: {
      "Capacity": "1000 ml (1 Litre)",
      "Thermal Retention": "24h Hot / 30h Cold",
      "Steel Grade": "18/8 SS 304 Inside & Outside",
      "Spout": "One-Touch Push Button Pourer",
      "Warranty": "1 Year Insulation Guarantee"
    },
    inStock: true,
    fastDelivery: true,
    material: "SS 304 Food Grade Stainless Steel"
  },

  // 8. Ceiling Fan
  {
    id: 8,
    name: "Decorative High-Speed 1200mm Ceiling Fan",
    category: "cooling",
    categoryLabel: "Fans & Air Coolers",
    price: 1899,
    originalPrice: 2699,
    discount: "30% OFF",
    rating: 4.8,
    reviewsCount: 180,
    badge: "Energy Saver",
    image: "https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&w=800&q=80",
    description: "1200mm sweep high air delivery (230 CMM) ceiling fan with ribbed aluminum blades, copper motor, and anti-dust nano-paint coating.",
    specs: {
      "Sweep Size": "1200 mm (48 Inches)",
      "Speed": "380 RPM High Velocity",
      "Air Delivery": "230 CMM",
      "Motor": "100% Copper Winding Motor",
      "Warranty": "2 Years Doorstep Service Warranty"
    },
    inStock: true,
    fastDelivery: true,
    material: "Corrosion Resistant Aluminum"
  },

  // 9. Table Fan
  {
    id: 9,
    name: "High-Velocity 400mm Aerodynamic Table Fan",
    category: "cooling",
    categoryLabel: "Fans & Air Coolers",
    price: 1699,
    originalPrice: 2399,
    discount: "29% OFF",
    rating: 4.5,
    reviewsCount: 65,
    badge: "Portable",
    image: "https://images.unsplash.com/photo-1618941716939-553df3c6c278?auto=format&fit=crop&w=800&q=80",
    description: "Compact desk fan with 90-degree smooth jerk-free oscillation, thermal overload protector, and aerodynamically designed 3-leaf blades.",
    specs: {
      "Sweep": "400 mm (16 Inches)",
      "RPM": "2100 RPM Ultra High Speed",
      "Oscillation": "90 Degree Wide Angle",
      "Guard": "120 Spokes Safety Wire Mesh",
      "Warranty": "2 Years Warranty"
    },
    inStock: true,
    fastDelivery: true,
    material: "Durable Polypropylene & Metal Mesh"
  },

  // 10. Pedestal Fan
  {
    id: 10,
    name: "Telescopic Height-Adjustable Pedestal Stand Fan",
    category: "cooling",
    categoryLabel: "Fans & Air Coolers",
    price: 2399,
    originalPrice: 3299,
    discount: "27% OFF",
    rating: 4.7,
    reviewsCount: 89,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80",
    description: "Heavy circular base pedestal fan with telescopic height adjustment up to 140cm, powerful copper motor, and whisper-quiet operation.",
    specs: {
      "Sweep Size": "400 mm (16 Inches)",
      "Height Range": "Adjustable from 110 cm to 142 cm",
      "Base": "Weighted Stability Round Base",
      "Speeds": "3 Speed Piano Push Buttons",
      "Warranty": "2 Years Home Service Warranty"
    },
    inStock: true,
    fastDelivery: true,
    material: "Powder Coated Metal Stem & Heavy Base"
  },

  // 11. Air Cooler
  {
    id: 11,
    name: "55-Litre Heavy Duty Desert Air Cooler",
    category: "cooling",
    categoryLabel: "Fans & Air Coolers",
    price: 6999,
    originalPrice: 9500,
    discount: "26% OFF",
    rating: 4.8,
    reviewsCount: 130,
    badge: "Summer Special",
    image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=800&q=80",
    description: "55L water tank with 3-side dense honeycomb cooling pads, powerful blower with 40-feet air throw, ice chamber, and castor wheels.",
    specs: {
      "Tank Capacity": "55 Litres with Water Level Indicator",
      "Air Throw": "Up to 45 Feet",
      "Cooling Media": "3-Sided High Efficiency Honeycomb Pads",
      "Inverter Support": "Works on Inverter Power",
      "Warranty": "1 Year Motor & Pump Warranty"
    },
    inStock: true,
    fastDelivery: true,
    material: "Engineering Grade Thermoplastic"
  },

  // 12. Dining Table
  {
    id: 12,
    name: "6-Seater Solid Sheesham Wood Dining Table Set",
    category: "furniture",
    categoryLabel: "Furniture & Storage",
    price: 19999,
    originalPrice: 28500,
    discount: "30% OFF",
    rating: 4.9,
    reviewsCount: 44,
    badge: "Premium Wood",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted 6-seater dining table with 6 ergonomically cushioned chairs. Walnut matte finish with natural wood grain patterns.",
    specs: {
      "Dimensions": "58\" Length x 35\" Width x 30\" Height",
      "Wood Type": "100% Solid Seasoned Sheesham Wood",
      "Seating Capacity": "6 Adults (Cushioned fabric seats included)",
      "Finish": "Water-Resistant Melamine Walnut Matte",
      "Warranty": "5 Years Termite & Structural Warranty"
    },
    inStock: true,
    fastDelivery: false,
    material: "Solid Sheesham Wood & High Density Foam"
  },

  // 13. Dressing Table
  {
    id: 13,
    name: "Modern Dressing Table with Full-Length Mirror & Stool",
    category: "furniture",
    categoryLabel: "Furniture & Storage",
    price: 7499,
    originalPrice: 10999,
    discount: "32% OFF",
    rating: 4.7,
    reviewsCount: 52,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    description: "Contemporary bedroom vanity table featuring full-length distortion-free mirror, internal cosmetic shelves, bangle holder, and lockable drawer.",
    specs: {
      "Dimensions": "72\" Height x 24\" Width x 16\" Depth",
      "Mirror": "5.5 Ft Distortion-Free Toughened Glass",
      "Storage": "4 Concealed Shelves + 1 Lockable Drawer + Stool",
      "Finish": "Warm Teak Wood Textured Laminate",
      "Warranty": "3 Years Termite Proof Warranty"
    },
    inStock: true,
    fastDelivery: true,
    material: "Premium Engineered Wood (MDF/HDF)"
  },

  // 14. Steel Bureau (Berrow)
  {
    id: 14,
    name: "Heavy Gauge 20-Gauge Steel Bureau (Almirah / Berrow)",
    category: "furniture",
    categoryLabel: "Furniture & Storage",
    price: 12499,
    originalPrice: 16500,
    discount: "24% OFF",
    rating: 4.9,
    reviewsCount: 195,
    badge: "Showroom Favorite",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    description: "Traditional heavy 20-gauge CRCA cold-rolled steel bureau with double locker, secret jewelry compartment, hanging rod, and dressing mirror.",
    specs: {
      "Dimensions": "78\" Height x 36\" Width x 20\" Depth",
      "Sheet Thickness": "Heavy 20-Gauge CRCA Steel",
      "Security": "Dual Brass Lock System + Safe Vault",
      "Paint": "Powder Coated Anti-Rust Oven-Baked Finish",
      "Warranty": "10 Years Anti-Rust Guarantee"
    },
    inStock: true,
    fastDelivery: true,
    material: "CRCA Prime Cold-Rolled Steel"
  },

  // 15. Wood Bureau (Berrow)
  {
    id: 15,
    name: "3-Door Teak Finish Wooden Bureau / Wardrobe",
    category: "furniture",
    categoryLabel: "Furniture & Storage",
    price: 15999,
    originalPrice: 22000,
    discount: "27% OFF",
    rating: 4.8,
    reviewsCount: 82,
    badge: "Spacious",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=800&q=80",
    description: "Spacious 3-door wooden wardrobe with hanging space, 6 internal clothing shelves, 2 smooth glide drawers, and full-length dressing mirror.",
    specs: {
      "Dimensions": "76\" Height x 48\" Width x 21\" Depth",
      "Door Count": "3 Doors with European Soft-Close Hinges",
      "Locking": "Dual Keyed Locks on Primary Doors",
      "Finish": "Warm Teakwood Natural Grain Membrane",
      "Warranty": "5 Years Structural & Borer Warranty"
    },
    inStock: true,
    fastDelivery: false,
    material: "Heavy Action TESA Engineered Wood"
  },

  // 16. Iron Bed
  {
    id: 16,
    name: "Heavy Pipe Metal Queen Size Bed / Cot (Iron Bed)",
    category: "furniture",
    categoryLabel: "Furniture & Storage",
    price: 6899,
    originalPrice: 9500,
    discount: "27% OFF",
    rating: 4.7,
    reviewsCount: 110,
    badge: "Sturdy & Strong",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    description: "Heavy gauge round metal pipe cot with welded mesh support and decorative headboard. Zero creak sound with reinforced center support legs.",
    specs: {
      "Size": "Queen Size (78\" Length x 60\" Width)",
      "Pipe Quality": "16-Gauge Heavy Welded Mild Steel Pipe",
      "Load Capacity": "Supports up to 450 kg",
      "Assembly": "Simple Knock-Down DIY Bolt Assembly",
      "Warranty": "10 Years Structural Welds Warranty"
    },
    inStock: true,
    fastDelivery: true,
    material: "Powder Coated Heavy Carbon Steel"
  },

  // 17. Bed (Wooden + Mattress)
  {
    id: 17,
    name: "Solid Teak Finish King Size Bed with Storage & Mattress",
    category: "furniture",
    categoryLabel: "Furniture & Storage",
    price: 18499,
    originalPrice: 25000,
    discount: "26% OFF",
    rating: 4.9,
    reviewsCount: 134,
    badge: "Bestseller Combo",
    image: "https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=800&q=80",
    description: "Premium king size double cot with spacious hydraulic under-bed box storage plus dual comfort 6-inch orthopedic foam mattress combo.",
    specs: {
      "Size": "King Size (78\" Length x 72\" Width)",
      "Storage": "Spacious Box Storage with Hydraulic Lift",
      "Mattress Included": "6-Inch High Resilient Rebonded Orthopedic Mattress",
      "Headboard": "Cushioned Ergonomic Reading Headboard",
      "Warranty": "5 Years Bed & 7 Years Mattress Warranty"
    },
    inStock: true,
    fastDelivery: false,
    material: "High Density Marine Plywood & Teak Veneer"
  },

  // 18. Chair
  {
    id: 18,
    name: "Heavy Duty Premium Arm Chairs (Set of 4)",
    category: "furniture",
    categoryLabel: "Furniture & Storage",
    price: 2499,
    originalPrice: 3500,
    discount: "29% OFF",
    rating: 4.6,
    reviewsCount: 77,
    badge: "Value 4-Pack",
    image: "https://images.unsplash.com/photo-1580481077195-c990264b3ef8?auto=format&fit=crop&w=800&q=80",
    description: "Set of 4 heavy virgin polymer chairs with ergonomic backrest, sturdy armrests, and non-slip rubberized floor shoes. Stackable design.",
    specs: {
      "Pack Quantity": "4 Chairs Included",
      "Weight Capacity": "Tested for up to 150 kg per chair",
      "Stackable": "Yes, space-saving nesting design",
      "Weatherproof": "100% Waterproof, UV Resistant",
      "Warranty": "3 Years Breakage Replacement Warranty"
    },
    inStock: true,
    fastDelivery: true,
    material: "Virgin Polypropylene with Matte Finish"
  },

  // 19. Folding Table
  {
    id: 19,
    name: "Heavy Duty Portable Multi-Purpose Folding Table",
    category: "furniture",
    categoryLabel: "Furniture & Storage",
    price: 1799,
    originalPrice: 2499,
    discount: "28% OFF",
    rating: 4.7,
    reviewsCount: 92,
    badge: "Smart Utility",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
    description: "Versatile folding table with powder-coated steel legs and scratch-resistant pre-laminated top. Folds completely flat within 5 seconds.",
    specs: {
      "Table Top Size": "36\" Length x 24\" Width x 29\" Height",
      "Mechanism": "Snap-lock Folding Leg System",
      "Load Bearing": "Up to 80 kg",
      "Portability": "Flat folding, fits easily behind doors or in car trunk",
      "Warranty": "2 Years Frame Warranty"
    },
    inStock: true,
    fastDelivery: true,
    material: "MDF Top & Powder Coated Metal Frame"
  },

  // 20. Teapoy
  {
    id: 20,
    name: "Modern Glass Top Wooden Teapoy / Coffee Table",
    category: "furniture",
    categoryLabel: "Furniture & Storage",
    price: 3299,
    originalPrice: 4800,
    discount: "31% OFF",
    rating: 4.8,
    reviewsCount: 68,
    badge: "Living Room Centerpiece",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80",
    description: "Center coffee table with 8mm beveled tempered glass top, lower magazine shelf, and solid wood legs with rich walnut polish.",
    specs: {
      "Dimensions": "36\" Length x 20\" Width x 18\" Height",
      "Glass": "8mm Heavy Duty Tempered Safety Glass",
      "Shelf": "Lower Utility Shelf for Magazines & Remotes",
      "Finish": "Walnut Rich Gloss Finish",
      "Warranty": "3 Years Termite Free Warranty"
    },
    inStock: true,
    fastDelivery: true,
    material: "Seasoned Wood & Toughened Glass"
  },

  // 21. Money Office Table
  {
    id: 21,
    name: "Executive Shop & Office Cash Table (Money Office Table)",
    category: "furniture",
    categoryLabel: "Furniture & Storage",
    price: 5999,
    originalPrice: 8500,
    discount: "29% OFF",
    rating: 4.8,
    reviewsCount: 54,
    badge: "Commercial Pick",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
    description: "Heavy commercial desk specially designed for shop billing and office management with lockable cash drawers, currency dividers, and cable organizer grommet.",
    specs: {
      "Dimensions": "48\" Length x 24\" Width x 30\" Height",
      "Security": "Lockable Cash Box Drawer with Key + Cupboard",
      "Divider": "Integrated Coin & Bill Organizer Insert",
      "Design": "Privacy modesty panel on 3 sides",
      "Warranty": "3 Years Commercial Warranty"
    },
    inStock: true,
    fastDelivery: true,
    material: "Heavy Action Pre-Laminated Wood Board"
  },

  // 22. Dosa Tawa
  {
    id: 22,
    name: "Traditional Pre-Seasoned Cast Iron Dosa Tawa (11-Inch)",
    category: "cookware",
    categoryLabel: "Cookware & Essentials",
    price: 899,
    originalPrice: 1399,
    discount: "36% OFF",
    rating: 4.9,
    reviewsCount: 310,
    badge: "Chef's Choice",
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80",
    description: "100% natural pre-seasoned heavy cast iron tawa with organic ginger/til oil. Naturally non-stick for golden crisp, paper-thin dosas with authentic taste.",
    specs: {
      "Diameter": "11 Inches (28 cm) Wide Flat Base",
      "Weight": "2.6 kg (Holds and Retains Heat Evenly)",
      "Seasoning": "Pre-Seasoned with 100% Organic Edible Oil",
      "Compatibility": "Gas Stove, Induction, Charcoal, Oven Safe",
      "Longevity": "Lasts for Generations"
    },
    inStock: true,
    fastDelivery: true,
    material: "100% Pure Virgin Cast Iron"
  },

  // 23. Paniyaram Pan (Paniyara dana)
  {
    id: 23,
    name: "12-Pit Heavy Cast Iron Kuzhi Paniyaram Pan (Paniyara Dana)",
    category: "cookware",
    categoryLabel: "Cookware & Essentials",
    price: 799,
    originalPrice: 1199,
    discount: "33% OFF",
    rating: 4.8,
    reviewsCount: 145,
    badge: "Traditional Cookware",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    description: "Traditional 12-cavity heavy bottom cast iron paniyaram pan for crispy outside and soft fluffy inside paniyaram, unniyappam, and falafel.",
    specs: {
      "Cavities": "12 Deep Pits",
      "Weight": "2.2 kg Solid Iron",
      "Coating": "Chemical-Free 100% Natural Pre-Seasoned",
      "Heat Retention": "Uniform Cooking Without Burning",
      "Free Accessory": "Comes with Wooden Turning Skewer"
    },
    inStock: true,
    fastDelivery: true,
    material: "Pre-Seasoned Cast Iron"
  },

  // 24. Appa Chetty
  {
    id: 24,
    name: "Concave Cast Iron & Non-Stick Appa Chetty (Appachatti)",
    category: "cookware",
    categoryLabel: "Cookware & Essentials",
    price: 649,
    originalPrice: 999,
    discount: "35% OFF",
    rating: 4.7,
    reviewsCount: 188,
    badge: "Kitchen Must-Have",
    image: "https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?auto=format&fit=crop&w=800&q=80",
    description: "Traditional concave curved appam maker with sturdy dual stay-cool handles and dome stainless steel lid with steam vent for soft-center lacy appams.",
    specs: {
      "Diameter": "20 cm Concave Bowl Shape",
      "Lid": "Stainless Steel Dome Lid with Knob Included",
      "Handles": "Double Riveted Heat-Resistant Bakelite Grips",
      "Stove Support": "Gas Stove and Induction Compatible Base",
      "Warranty": "2 Years Coating Warranty"
    },
    inStock: true,
    fastDelivery: true,
    material: "Heavy Aluminium with Food-Grade Non-Stick / Cast Iron"
  }
];

export const storeInfo = {
  name: "Sri Home Comforts & Living",
  tagline: "Quality Furniture, Kitchenware & Appliances Showroom",
  whatsappNumber: "+919876543210",
  displayPhone: "+91 98765 43210",
  email: "orders@srihomecomforts.com",
  address: "No. 45, Main Bazaar Road, Near Bus Stand, Tamil Nadu",
  timings: "Monday - Sunday: 9:00 AM - 9:30 PM",
  pincodeDeliveryCheck: ["600001", "600028", "641001", "625001", "620001", "636001", "627001"],
};
