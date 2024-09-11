

/*CREATING A NEW DATA TO INPUT */

const samplePlantsListings = [
  {
    botanicalName: ["Ginkgo biloba"],
    commonName: ["Ginkgo", "maidenhair"],
    habitatInformation: [
      "Ginkgo is native to China and is one of the oldest living tree species on the planet.",
      "It can live up to 1,000 years and grow up to 120 feet tall.",
      "The tree has fan-shaped leaves and produces fruits with seeds that are not safe to eat due to their potential toxicity."
    ],
    medicalUses: [
      "Traditionally used for its healing properties.",
      "Potential cardiovascular benefits.",
      "Supports immune function.",
      "May have antimicrobial effects.",
      "Leaves and seeds are toxic to humans and pets."
    ],
    cultivationMethod: [
      "Grow ginkgo biloba in full sun to part shade.",
      "Tolerates various soil types, including acidic and alkaline soil.",
      "Well-drained sandy soil or loam is preferred."
    ],
    advantagesAndProperties: [
      "Golden fall foliage color.",
      "Salt-tolerant and disease-resistant.",
      "Tolerates urban pollution."
    ],
    partsUsed: ["Leaves (medicinal)", "Seeds (toxic)"],
    traditionalUsesAndPreparationMethod: [
      "Medicinal: Leaves used in herbal remedies.",
      "Ornamental: Valued for its unique foliage."
    ],
    safetyPrecautions: [
      "Avoid consumption of seeds and leaves.",
      "Toxicity to humans and pets."
    ],
    storageAndPreservation: ["Not applicable (primarily ornamental)"],
    healthBenefits: [
      "Digestive Health: No specific evidence.",
      "Immune System: Traditionally believed to support immunity.",
      "Skin Health: No specific evidence."
    ],
    advantageOfDailyConsumption: ["Adds beauty to landscapes"],
    availabilityAndSeason: ["Widely grown in various regions"]

  },
  {
    botanicalName: ["Aloe vera"],
    commonName: ["Aloe vera", "burn plant", "lily of the desert"],
    habitatInformation: [
      "Aloe vera is native to the Arabian Peninsula but grows wild in tropical, semi-tropical, and arid climates worldwide.",
      "It thrives in hot climates, such as California, New Mexico, and the Caribbean."
    ],
    medicalUses: [
      "Aloe vera gel is commonly used for skin conditions:",
      "Acne",
      "Cold sores (herpes)",
      "Cuts, scrapes, and minor burns",
      "Psoriasis",
      "When taken orally, aloe vera may help:",
      "Lower cholesterol",
      "Regulate blood sugar",
      "Ease heartburn"
    ],
    cultivationMethod: [
      "Aloe vera is easy to grow:",
      "Plant it in well-draining soil.",
      "Place it in a sunny spot.",
      "Water sparingly."
    ],
    advantagesAndProperties: [
      "Contains over 75 active ingredients:",
      "Enzymes",
      "Amino acids",
      "Vitamins (such as A, C, and E)",
      "Minerals (including calcium, magnesium, and zinc)"
    ],
    properties: [
      "Anti-inflammatory",
      "Antibacterial",
      "Skin-soothing",
      "Promotes new skin cell growth"
    ],
    partsUsed: ["Gel from the inner leaf: Applied topically for skin conditions.", "Aloe latex (yellow liquid): Used as a laxative (with caution)"],
    "traditionalUsesAndPreparation": [
      "Ancient civilizations used aloe vera for healing and softening the skin.",
      "Gel can be directly applied to affected areas.",
      "Aloe vera juice can be consumed."
    ],
    safetyPrecautions: [
      "Avoid excessive consumption of aloe latex (may cause diarrhea and cramps).",
      "Some people may be allergic to aloe vera."
    ],
    storageAndPreservation: ["Store aloe vera gel in a cool, dry place.", "Refrigerate fresh gel for longer shelf life."],
    healthBenefits: [
      "Digestive Health: Aloe vera aids digestion and soothes the digestive tract.",
      "Immune System: Nutrients support overall health.",
      "Skin Health: Topical application helps with wounds, burns, and skin conditions.",
      "Consuming daily may promote general well-being."
    ],
    availabilityAndSeason: ["Available in nurseries, health stores, and online.", "Grows year-round in warm climates"]
  },
  {
    botanicalName: ["Kalanchoe pinnata", "Bryophyllum pinnatum", "Bryophyllum calycinum"],
    commonName: ["Kalanchoe", "Patharchatta"],
    habitatInformation: [
      "Kalanchoe is a perennial succulent plant widely grown in India.",
      "It is commonly known as an 'air plant' due to its tall hollow stems.",
      "Grows in temperate regions of Asia, the West Indies, Australia, and New Zealand."
    ],
    medicalUses: [
      "May reduce mutations caused by cancer cells.",
      "Helps lower blood glucose levels.",
      "Inhibits fungal growth.",
      "Has anti-inflammatory properties.",
      "May prevent stomach ulcers.",
      "Enhances liver health.",
      "Strengthens the immune system.",
      "Protects the kidneys."
    ],
    cultivationMethod: [
      "Kalanchoe is easy to grow:",
      "Requires well-draining soil.",
      "Thrives in sunny spots.",
      "Water sparingly."
    ],
    advantagesAndProperties: [
      "Contains bioactive compounds like alkaloids, flavonoids, and triterpenes.",
      "Anti-inflammatory, antibacterial, and skin-soothing properties.",
      "Promotes new skin cell growth."
    ],
    partsUsed: ["Leaves: Used for medicinal purposes"],
    traditionalUsesAndPreparation: [
      "Leaves valued for addressing urinary insufficiency and kidney/gallbladder stones.",
      "Fresh leaves can be directly applied or consumed as juice."
    ],
    safetyPrecautions: ["Avoid excessive consumption.", "Some people may be allergic."],
    storageAndPreservation: ["Store fresh leaves in a cool place."],
    healthBenefits: [
      "Digestive Health: May help soothe the digestive tract.",
      "Immune System: Supports overall health.",
      "Skin Health: Useful for wounds and burns.",
      "Consider consuming daily for general well-being."
    ],
    availabilityAndSeason: ["Available in nurseries and health stores.", "Grows year-round in warm climates"]
  },
  {
    botanicalName: ["Tinospora cordifolia"],
    commonName: ["ASHMI"],
    habitatInformation: [
      "ASHMI is native to India and grows in tropical and subtropical regions.",
      "Found in deciduous forests, hilly areas, and along riverbanks."
    ],
    medicalUses: [
      "Boosts immunity.",
      "Supports liver health.",
      "Has anti-inflammatory properties.",
      "Used in Ayurvedic medicine for various ailments."
    ],
    cultivationMethod: [
      "Grows well in well-draining soil and partial shade.",
      "Propagate through stem cuttings."
    ],
    advantagesAndProperties: [
      "Rich in antioxidants.",
      "Supports overall health.",
      "May help manage diabetes."
    ],
    partsUsed: ["Stem, leaves, and roots."],
    traditionalUsesAndPreparation: [
      "Used in decoctions, powders, and tonics.",
      "Supports respiratory health."
    ],
    safetyPrecautions: ["Consult a healthcare professional.", "Some people may be allergic."],
    storageAndPreservation: ["Store dried ASHMI in a cool, dry place."],
    healthBenefits: [
      "Digestive Health: Supports digestion.",
      "Immune System: Boosts immunity.",
      "Skin Health: Beneficial for skin conditions.",
      "Consider daily consumption."
    ],
    availabilityAndSeason: ["Available in Ayurvedic stores.", "Harvested year-round."]
  },
  {
    botanicalName: ["Ocimum basilicum"],
    commonName: ["Basil"],
    habitatInformation: [
      "Basil is likely native to India and is widely grown as a kitchen herb.",
      "It thrives in warm climates and can be grown outdoors or indoors."
    ],
    medicalUses: [
      "Basil leaves are used fresh or dried to flavor meats, fish, salads, and sauces.",
      "Basil tea is a stimulant."
    ],
    cultivationMethod: [
      "Basil grows best in full sun (6 to 8 hours daily) but can tolerate partial sun.",
      "Well-draining, moderately fertile soil with a pH of 6.0 to 7.5 is ideal.",
      "Start seeds indoors 6 to 8 weeks before transplanting outside.",
      "Transplant seedlings or starter plants 10 to 12 inches apart."
    ],
    advantagesAndProperties: [
      "Aromatic leaves with a sweet flavor.",
      "Rich in antioxidants, vitamins (A, K, C), and essential oils.",
      "Anti-inflammatory and antimicrobial properties."
    ],
    partsUsed: ["Leaves (fresh or dried)", "Flowers (for garnish)"],
    traditionalUsesAndPreparation: [
      "Culinary: Pesto, sauces, soups, salads.",
      "Herbal teas.",
      "Essential oil extraction."
    ],
    safetyPrecautions: [
      "Avoid consuming large quantities during pregnancy.",
      "Some people may be allergic."
    ],
    storageAndPreservation: [
      "Store fresh basil in the refrigerator (wrapped in a damp paper towel).",
      "Dry leaves for long-term storage."
    ],
    healthBenefits: [
      "Digestive Health: May aid digestion and reduce bloating.",
      "Immune System: Antioxidants support immune function.",
      "Skin Health: Basil oil for skin conditions."
    ],
    advantageOfDailyConsumption: [
      "Boosts overall health due to its nutrient content.",
      "Enhances flavor in meals."
    ],
    availabilityAndSeason: [
      "Available year-round in grocery stores.",
      "Best grown in warm seasons (spring to fall)."
    ]
  },
  {
    botanicalName: ["Clitoria ternatea"],
    commonName: ["Butterfly Pea"],
    habitatInformation: [
      "Butterfly pea is a tropical, perennial vine native to Indonesia.",
      "It thrives in USDA hardiness zones 9 to 11.",
      "Grown as an annual in colder climates or overwintered indoors."
    ],
    medicalUses: [
      "The blue flowers are edible and serve as natural food coloring in Asian cuisine.",
      "Butterfly Pea Tea: A popular beverage made from the flowers.",
      "Antioxidant properties.",
      "Supports brain health.",
      "May have anti-anxiety effects.",
      "Used in traditional medicine for memory enhancement."
    ],
    cultivationMethod: [
      "Start seeds indoors 8 to 10 weeks before the final frost (zones 9+).",
      "Directly sow seeds in early spring (zones 9+).",
      "Requires full sun and well-draining soil.",
      "Vines can reach up to 10 feet in length."
    ],
    advantagesAndProperties: [
      "Vivid blue, purple, and white flowers.",
      "Edible young peas in long flat pods.",
      "Fixes nitrogen in soil."
    ],
    partsUsed: ["Flowers (for color and culinary use)", "Young peas (edible)"],
    traditionalUsesAndPreparation: [
      "Culinary: Butterfly Pea Tea, food coloring.",
      "Flowers turn liquids blue; with citrus, they turn purple."
    ],
    safetyPrecautions: [
      "No significant safety concerns.",
      "As with any edible plant, moderation is key."
    ],
    storageAndPreservation: [
      "Store fresh flowers in a cool, dry place.",
      "Dry leaves and flowers for long-term use."
    ],
    healthBenefits: [
      "Digestive Health: Antioxidants.",
      "Immune System: Supports overall health.",
      "Skin Health: No specific evidence, but rich in nutrients."
    ],
    advantageOfDailyConsumption: [
      "Enhances culinary experiences.",
      "Adds color to beverages and dishes."
    ],
    availabilityAndSeason: [
      "Widely available from specialty growers.",
      "Best grown in warm climates (spring to fall)."
    ]
  },
  {
    botanicalName: ["Eucalyptus cinerea"],
    commonName: ["Eucalyptus", "silver dollar tree", "argyle apple"],
    habitatInformation: [
      "Eucalyptus is native to Australia but has been introduced to various regions worldwide.",
      "It grows as a tall tree in its natural environment (up to 60 feet high), but in home gardens, it remains smaller (around 6 to 10 feet high).",
      "Features reddish-brown peeling bark and silvery to blue-green leaves with a distinct menthol-like fragrance when bruised."
    ],
    medicalUses: [
      "Eucalyptus essential oil is derived from E. globulus and has various health benefits.",
      "Commonly used for respiratory issues (e.g., congestion, coughs).",
      "Antiseptic properties.",
      "May aid in wound healing.",
      "Used in aromatherapy for relaxation.",
      "Potential anti-inflammatory effects."
    ],
    cultivationMethod: [
      "Plant in well-draining soil with full sun exposure.",
      "Allow enough space for the tree's full height and spread (at least 8 feet apart for multiple trees).",
      "Prefers warm temperatures.",
      "Harvest mature leaves and branches later in the growing season."
    ],
    advantagesAndProperties: [
      "Distinctive peeling bark.",
      "Leaves contain essential oils.",
      "Fast growth rate (up to 8-10 feet per year)."
    ],
    partsUsed: ["Leaves (for essential oil extraction)", "Bark (medicinal uses)"],
    traditionalUsesAndPreparation: [
      "Essential oil extraction (steam distillation).",
      "Inhalation for respiratory relief.",
      "Infusions for wound care."
    ],
    safetyPrecautions: [
      "Eucalyptus oil should be diluted before use.",
      "Avoid ingesting large quantities.",
      "Toxic to humans and pets."
    ],
    storageAndPreservation: [
      "Store dried leaves and bark in a cool, dry place.",
      "Essential oil should be stored in dark glass bottles."
    ],
    healthBenefits: [
      "Digestive Health: No specific evidence.",
      "Immune System: Antiseptic properties.",
      "Skin Health: Used in topical applications."
    ],
    advantageOfDailyConsumption: [
      "Not typically consumed daily.",
      "Aromatherapy benefits."
    ],
    availabilityAndSeason: [
      "Widely available in nurseries and garden centers.",
      "Best grown in warm climates (zones 8-11)."
    ]
  },
  {
    botanicalName: ["Mentha spp."],
    commonName: ["Mint"],
    habitatInformation: [
      "Mint is a hardy perennial herb from the Lamiaceae family.",
      "Widely distributed across temperate regions.",
      "Grows back each year with minimal care."
    ],
    medicalUses: [
      "Aromatic leaves flavor food, drinks, and products.",
      "Peppermint and spearmint used for their refreshing taste.",
      "Digestive aid.",
      "May repel pests.",
      "Toxic to animals."
    ],
    cultivationMethod: [
      "Plant mint outdoors in spring after frost threat passes.",
      "Well-draining soil in full sun or part shade.",
      "Fertile soil enriched with compost.",
      "Shallow root system."
    ],
    advantagesAndProperties: [
      "Distinct aroma and flavor (varieties include peppermint, spearmint, apple mint, and chocolate mint).",
      "Aggressive spreader—use edging or containers."
    ],
    partsUsed: ["Leaves (culinary and medicinal)", "Essential oil extraction"],
    traditionalUsesAndPreparation: [
      "Culinary: Flavoring, teas, desserts.",
      "Essential oil for aromatherapy."
    ],
    safetyPrecautions: [
      "Toxic to pets.",
      "Moderate consumption."
    ],
    storageAndPreservation: [
      "Store dried leaves in a cool, dry place.",
      "Essential oil in dark glass bottles."
    ],
    healthBenefits: [
      "Digestive Health: Aids digestion.",
      "Immune System: No specific evidence.",
      "Skin Health: Used in topical applications."
    ],
    advantageOfDailyConsumption: [
      "Enhances culinary experiences.",
      "Freshens breath."
    ],
    availabilityAndSeason: [
      "Widely available.",
      "Best grown in spring to fall."
    ]
  },
  {
    botanicalName: ["Lavandula spp."],
    commonName: ["Lavender"],
    habitatInformation: [
      "Lavender is a small evergreen shrub with gray-green hoary linear leaves.",
      "Native to countries bordering the Mediterranean.",
      "Thrives in warm climates."
    ],
    medicalUses: [
      "Fragrant leaves and attractive flowers.",
      "Widely cultivated for essential oils used in various products.",
      "Aromatherapy for relaxation.",
      "May have anti-inflammatory properties.",
      "Used in herbal teas."
    ],
    cultivationMethod: [
      "Plant lavender in well-draining soil and full sun.",
      "Tolerates lean soil with minimal organic matter.",
      "Prune after flowering to maintain shape."
    ],
    advantagesAndProperties: [
      "Silvery-green foliage.",
      "Spike-shaped flowers in hues of purple, pink, and white.",
      "Oil is used in aromatherapy and cosmetic products."
    ],
    partsUsed: ["Flowers (for essential oil extraction)", "Leaves (culinary and medicinal uses)"],
    traditionalUsesAndPreparation: [
      "Essential oil extraction (steam distillation).",
      "Used in sachets, oils, and teas."
    ],
    safetyPrecautions: [
      "Essential oil should be used with caution in pregnant women.",
      "Allergic reactions may occur in sensitive individuals."
    ],
    storageAndPreservation: [
      "Store dried lavender in airtight containers away from light.",
      "Essential oil should be kept in dark glass bottles."
    ],
    healthBenefits: [
      "Digestive Health: Can relieve indigestion and nausea.",
      "Immune System: Aromatic properties support overall wellness.",
      "Skin Health: Used for calming skin irritations."
    ],
    advantageOfDailyConsumption: [
      "Enhances relaxation and well-being.",
      "Adds flavor to dishes and teas."
    ],
    availabilityAndSeason: [
      "Available year-round in dried form and essential oils.",
      "Best grown in warm, sunny conditions."
    ]
  },
  
    {
        name: "Turmeric",
        botanicalName: "Curcuma longa",
        commonName: "Turmeric",
        habitatInformation: [
            "Native to Southeast Asia.",
            "Grows well in tropical and subtropical climates."
        ],
        medicalUses: [
            "Contains curcumin, which may help manage blood sugar levels.",
            "Has anti-inflammatory and antioxidant properties."
        ],
        cultivationMethod: [
            "Requires well-draining soil and ample moisture.",
            "Grows best in partial shade."
        ],
        advantagesAndProperties: [
            "Rich in curcumin.",
            "Has potent anti-inflammatory and antioxidant effects."
        ],
        partsUsed: ["Rhizomes (roots)"],
        traditionalUsesAndPreparation: [
            "Used in cooking and traditional medicine.",
            "Prepared as a powder or extract."
        ],
        safetyPrecautions: [
            "High doses may cause gastrointestinal discomfort.",
            "Consult with a healthcare provider before use."
        ],
        storageAndPreservation: [
            "Store dried rhizomes in a cool, dry place.",
            "Powdered turmeric should be kept in an airtight container."
        ],
        healthBenefits: [
            "Digestive Health: Aids in digestion.",
            "Immune System: Supports overall health.",
            "Skin Health: Used for its anti-inflammatory properties."
        ],
        availabilityAndSeason: [
            "Available year-round in grocery stores and health shops.",
            "Best grown in tropical regions."
        ]
    },
    {
        name: "Bitter Melon",
        botanicalName: "Momordica charantia",
        commonName: "Bitter Melon",
        habitatInformation: [
            "Native to tropical regions of Africa and Asia.",
            "Grows well in warm, humid climates."
        ],
        medicalUses: [
            "May help lower blood sugar levels.",
            "Contains compounds that may improve insulin sensitivity."
        ],
        cultivationMethod: [
            "Requires well-draining soil and plenty of sunlight.",
            "Needs regular watering but not waterlogged conditions."
        ],
        advantagesAndProperties: [
            "Contains vitamins and antioxidants.",
            "Has anti-diabetic and anti-inflammatory properties."
        ],
        partsUsed: ["Fruits and leaves"],
        traditionalUsesAndPreparation: [
            "Consumed fresh, as juice, or in cooked dishes.",
            "Often used in traditional medicine for diabetes management."
        ],
        safetyPrecautions: [
            "May cause gastrointestinal discomfort in some people.",
            "Consult a healthcare provider before using as a treatment."
        ],
        storageAndPreservation: [
            "Store fresh fruits in the refrigerator.",
            "Dried or processed bitter melon should be kept in a cool, dry place."
        ],
        healthBenefits: [
            "Digestive Health: Supports digestive function.",
            "Immune System: Rich in nutrients and antioxidants.",
            "Skin Health: May improve skin conditions due to its anti-inflammatory properties."
        ],
        availabilityAndSeason: [
            "Available in markets specializing in Asian produce.",
            "Grows year-round in tropical climates."
        ]
    },
    {
        name: "Fenugreek",
        botanicalName: "Trigonella foenum-graecum",
        commonName: "Fenugreek",
        habitatInformation: [
            "Native to the Mediterranean region, India, and North Africa.",
            "Grows well in warm, sunny climates."
        ],
        medicalUses: [
            "May help lower blood sugar levels.",
            "Contains soluble fiber and compounds that may improve insulin sensitivity."
        ],
        cultivationMethod: [
            "Requires well-draining soil and full sun exposure.",
            "Needs regular watering but avoid waterlogging."
        ],
        advantagesAndProperties: [
            "Rich in fiber and nutrients.",
            "Has anti-diabetic and anti-inflammatory properties."
        ],
        partsUsed: ["Seeds and leaves"],
        traditionalUsesAndPreparation: [
            "Seeds used as a spice in cooking and in medicinal teas.",
            "Leaves used in traditional dishes and as a medicinal herb."
        ],
        safetyPrecautions: [
            "High doses may cause gastrointestinal issues.",
            "Consult a healthcare provider before use."
        ],
        storageAndPreservation: [
            "Store seeds in an airtight container in a cool, dry place.",
            "Dried leaves should be kept away from moisture and sunlight."
        ],
        healthBenefits: [
            "Digestive Health: Aids in digestion and may reduce bloating.",
            "Immune System: Supports overall health with its nutrient content.",
            "Skin Health: Used for its anti-inflammatory and antioxidant properties."
        ],
        availabilityAndSeason: [
            "Available year-round in grocery stores and health food shops.",
            "Best grown in warm climates."
        ]
    }





];

// console.log(plants);

module.exports = { data: samplePlantsListings };
