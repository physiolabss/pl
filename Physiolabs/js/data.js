// FULL EXTENDED 52 SLIDES DATA IN ENGLISH
const slidesData = [
  // MODULE 1: Craniofacial Architecture & Facial Aesthetics
  { 
    id: 1, 
    module: "Module 1: Craniofacial Architecture & Facial Aesthetics", 
    title: "Introduction to Craniofacial Biometrics & Aesthetics", 
    text: "The bony architecture of the skull forms the fundamental framework that dictates overall facial aesthetics, soft tissue support, and visual attractiveness. Key parameters like bicondylar width (jawline width), anteroposterior maxilla position (midface projection), and gonial angle determine how tautly skin and fat pad layers rest over bone. A forwardly and upwardly rotated maxilla provides excellent orbital support and a defined jawline.", 
    practical: "Perform a systematic posture and symmetry audit: Stand barefoot in front of a mirror with a neutral gaze. Check if ears are level and if you exhibit Forward Head Posture. Consciously keep your sternum slightly elevated and lengthen your cervical spine throughout the day.", 
    medicalInfo: "Mechanical traction and functional forces act continuously on craniofacial bone structures. Via mechanotransduction, targeted physiological load induces bone matrix remodeling. Osteoblasts increase mineralization in high-stress zones, strengthening bone density according to Wolff's Law." 
  },
  { 
    id: 2, 
    module: "Module 1: Craniofacial Architecture & Facial Aesthetics", 
    title: "Anatomy of the Viscerocranium: Maxilla, Mandible, Zygoma", 
    text: "The viscerocranium consists of 14 bones, with the maxilla, mandible, and zygoma being aesthetically dominant. The maxilla (upper jaw) forms the center of facial projection; if recessed, cheek support and lower eyelid support collapse. The mandible defines the lower third and hyoid area, while the zygoma creates three-dimensional cheekbone width.", 
    practical: "Strictly avoid mouth breathing. Keep lips gently closed at rest. Check jaw position hourly: teeth should not clench at rest but maintain a 1-2 mm resting gap while the tongue rests flat against the palate.", 
    medicalInfo: "Craniofacial sutures (e.g., median palatine suture) are fibrous joints filled with Sharpey's fibers. They remain dynamic throughout life, responding to mechanical tension by activating Runx2 transcription factors to stimulate localized bone remodeling." 
  },
  { 
    id: 3, 
    module: "Module 1: Craniofacial Architecture & Facial Aesthetics", 
    title: "Wolff's Law & Mechanotransduction in the Facial Skeleton", 
    text: "Wolff's Law dictates that bone adapts adaptively to applied mechanical loads. Increasing functional masticatory force and biomechanical tongue pressure creates piezoelectric signals and shear stress on the bone matrix, increasing cortical bone thickness over time.", 
    practical: "Integrate progressive chewing exercises into your routine: start with tougher foods (e.g., root vegetables, tough meats) or specialized mastic gum. Train 3 times weekly for 10-15 minutes, ensuring symmetrical bilateral engagement.", 
    medicalInfo: "Osteocytes act as primary mechanosensors within the lacunar-canalicular network. Fluid shear stress activates integrin-mediated signaling, downregulating sclerostin and increasing RANKL/OPG ratios to favor osteoblastogenesis." 
  },
  { 
    id: 4, 
    module: "Module 1: Craniofacial Architecture & Facial Aesthetics", 
    title: "Palatal Tongue Rest Posture (Mewing) & Dynamics", 
    text: "Correct tongue posture ('mewing') involves resting the entire body of the tongue flat against the roof of the mouth. The posterior third must apply continuous upward force. This palatal support maintains maxillary width and tightens submental tissue beneath the chin.", 
    practical: "Placement technique: make the 'NG' sound (as in 'sing') or swallow and hold the tongue flat against the palate at the end of the swallow. Ensure nasal airways remain open and unblocked. Maintain this posture implicitly 24/7.", 
    medicalInfo: "The genioglossus muscle exerts a hydrostatic pressure of 50-100 grams against the palatine bone and maxilla. Continuous low-force loading stimulates palatal vault remodeling and promotes transverse arch expansion." 
  },
  { 
    id: 5, 
    module: "Module 1: Craniofacial Architecture & Facial Aesthetics", 
    title: "Oral Posture, Mandibular Alignment & TMJ Health", 
    text: "Poor oral posture causes retrusion of the mandible inside the temporomandibular joint (TMJ). A retruded jaw constricts pharyngeal airways, forcing forward head posture and creating an illusion of a double chin even at low body fat levels.", 
    practical: "Avoid facial grimacing when swallowing; swallowing must be driven exclusively by tongue propulsion against the palate. Address bruxism (teeth grinding) using relaxation protocols or custom night guards.", 
    medicalInfo: "Chronic mandibular retrusion compresses retrodiscal tissues in the TMJ, causing microtrauma to the articular disc. Re-establishing optimal muscle tone relieves strain on the lateral pterygoid muscle." 
  },
  { 
    id: 6, 
    module: "Module 1: Craniofacial Architecture & Facial Aesthetics", 
    title: "Masseter Muscle Hypertrophy via Resistance Chewing", 
    text: "The masseter muscle is one of the strongest muscles relative to its cross-sectional area. Target hypertrophy expands the jaw angle width, defining the contrast between neck and jawline.", 
    practical: "Masseter Protocol: use mastic gum 2-3 times per week. Perform 3 sets of 10-15 minutes followed by jaw stretching. Discontinue immediately if joint clicking or pain occurs.", 
    medicalInfo: "Masseter muscle hypertrophy follows classical skeletal muscle hypertrophy pathways: mechanical stress induces micro-tears, triggering mTORC1-mediated protein synthesis. Masseter fibers are predominantly Type I and Type IIa." 
  },
  { 
    id: 7, 
    module: "Module 1: Craniofacial Architecture & Facial Aesthetics", 
    title: "Symmetry Analysis & Chewing Pattern Correction", 
    text: "Facial asymmetries often result from unilateral mastication, sleeping on one side, or habitual head tilting. Chewing predominantly on one side leads to asymmetrical masseter hypertrophy and uneven mechanical stress on jaw bones.", 
    practical: "Audit your chewing habits over a week. If you notice a dominant chewing side, shift 60-70% of chewing work to the weaker side until muscular balance is restored.", 
    medicalInfo: "Unilateral mastication imposes asymmetric force vectors on the mandibular ramus and mental symphysis, triggering uneven condylar remodeling and altered occlusal plane tilts." 
  },
  { 
    id: 8, 
    module: "Module 1: Craniofacial Architecture & Facial Aesthetics", 
    title: "Respiratory Physiology: Nasal Breathing vs. Mouth Breathing", 
    text: "Airway physiology directly impacts facial development. Chronic mouth breathing drops mandibular and tongue position, resulting in vertical facial lengthening, narrow dental arches, and recessed midfaces ('mouthbreather facies'). Nasal breathing maintains intraoral vacuum.", 
    practical: "Maintain 100% strict nasal breathing during daytime. Use medical mouth tape at night to prevent sleep-induced mouth breathing. Keep nasal passages clear using saline rinses if necessary.", 
    medicalInfo: "Nasal respiration stimulates nitric oxide (NO) production in paranasal sinuses. NO acts as a potent vasodilator, optimizing pulmonary ventilation-perfusion matching and increasing arterial oxygenation by up to 15%." 
  },

  // MODULE 2: Fluid Dynamics, Debloating & Subcutaneous Definition
  { 
    id: 9, 
    module: "Module 2: Fluid Dynamics, Debloating & Subcutaneous Definition", 
    title: "Physiology of Subcutaneous Tissue & Extracellular Space", 
    text: "Visual definition depends on the ratio of intracellular to extracellular fluid. The subcutaneous layer stores interstitial water; excess extracellular fluid masks underlying bone structure and muscle separation even at low body fat.", 
    practical: "Eliminate ultra-processed foods rich in hidden sodium and artificial preservatives. Drink adequate fluid to signal your body that water retention is unnecessary.", 
    medicalInfo: "Fluid shifts between capillaries and interstitium are governed by Starling equations. Capillary hydrostatic pressure and plasma oncotic pressure regulate filtration rates into extracellular spaces." 
  },
  { 
    id: 10, 
    module: "Module 2: Fluid Dynamics, Debloating & Subcutaneous Definition", 
    title: "Electrolyte Biochemistry: The Na+/K+ Pump & Osmosis", 
    text: "The balance between sodium (Na+) and potassium (K+) governs cellular hydration. Sodium resides mainly extracellularly and holds water outside cells, while potassium sits intracellularly, pulling fluid directly into myocytes for a fuller appearance.", 
    practical: "Aim for 4000-5000 mg potassium daily (from spinach, avocados, potatoes) balanced with 2000-3000 mg sodium. Avoid sudden sodium spikes.", 
    medicalInfo: "The Na+/K+-ATPase pump expels 3 Na+ ions for every 2 K+ ions imported via ATP hydrolysis. Elevated intracellular potassium expands myocyte volume while reducing interstitial edema." 
  },
  { 
    id: 11, 
    module: "Module 2: Fluid Dynamics, Debloating & Subcutaneous Definition", 
    title: "Aldosterone Regulation & The RAAS Cascade", 
    text: "Aldosterone regulates renal sodium and water reabsorption. Suddenly crashing sodium intake triggers a surge in aldosterone secretion, causing rebound water retention.", 
    practical: "Keep daily sodium intake stable. If making dietary adjustments, taper intake gradually to prevent aldosterone spikes.", 
    medicalInfo: "RAAS activation triggers aldosterone binding to mineralocorticoid receptors in kidney distal tubules, upregulating ENaC channels to increase fluid reabsorption." 
  },
  { 
    id: 12, 
    module: "Module 2: Fluid Dynamics, Debloating & Subcutaneous Definition", 
    title: "Facial Lymphatic System & Manual Lymphatic Drainage", 
    text: "The lymphatic system clears cellular waste and excess interstitial fluid. Poor sleep posture, systemic inflammation, or lack of movement causes facial lymph stasis, manifesting as facial puffiness.", 
    practical: "Morning routine: Perform a 5-minute gentle lymphatic massage. Stroke lightly from the center of the face outward toward earlobes, then downward along the neck to the clavicles.", 
    medicalInfo: "Lymphatic vessels lack a central pump; flow relies on smooth muscle lymphangion contractions and external compression. Manual drainage significantly increases initial lymph capillary intake." 
  },
  { 
    id: 13, 
    module: "Module 2: Fluid Dynamics, Debloating & Subcutaneous Definition", 
    title: "Hydration Strategies for Maximum Vascular Definition", 
    text: "Inadequate water intake causes the body to hoard interstitial fluid. High, consistent water intake suppresses antidiuretic signals, keeping renal filtration active.", 
    practical: "Consume 3.5 to 4.5 liters of clean water daily. Distribute intake evenly from waking until 2 hours before sleep.", 
    medicalInfo: "High fluid intake suppresses antidiuretic hormone (ADH/vasopressin) release from the posterior pituitary, closing renal aquaporin-2 channels and inducing physiological diuresis." 
  },
  { 
    id: 14, 
    module: "Module 2: Fluid Dynamics, Debloating & Subcutaneous Definition", 
    title: "Natural Diuretics & Botanicals: Dandelion, Nettle, Caffeine", 
    text: "Specific botanical extracts enhance glomerular filtration without depleting essential intracellular electrolytes.", 
    practical: "Use dandelion root extract (Taraxacum) and stinging nettle tea for 3-5 days prior to photoshoots or events. Use moderate caffeine in the morning.", 
    medicalInfo: "Taraxacum officinale acts as a potassium-sparing diuretic, enhancing renal excretion rates without triggering dangerous hypokalemia associated with pharmaceutical diuretics." 
  },
  { 
    id: 15, 
    module: "Module 2: Fluid Dynamics, Debloating & Subcutaneous Definition", 
    title: "Inflammatory Edema: Histamine, Cortisol & Food Sensitivities", 
    text: "Subclinical food sensitivities and elevated cortisol increase vascular permeability, allowing fluids to leak into facial tissues.", 
    practical: "Run a 14-day elimination trial: remove dairy, gluten, and artificial sweeteners. Monitor changes in facial sharpness and skin clarity.", 
    medicalInfo: "Histamine binding to H1 receptors causes endothelial cell contraction and inter-endothelial gap formation, leading to extravasation of plasma proteins and localized edema." 
  },

  // MODULE 3: Dermatological Science & Microbiome
  { 
    id: 16, 
    module: "Module 3: Dermatological Science & Microbiome", 
    title: "Dermal & Epidermal Anatomy: Stratum Corneum & Barrier Function", 
    text: "The stratum corneum prevents transepidermal water loss (TEWL) and pathogen invasion. A healthy barrier requires a balanced 3:1:1 lipid ratio of ceramides, cholesterol, and free fatty acids.", 
    practical: "Avoid harsh sulfates (e.g., SLS) and hot water. Use mild, pH-balanced cleansers followed immediately by a ceramide-rich moisturizer.", 
    medicalInfo: "The brick-and-mortar model describes corneocytes embedded in lamellar lipid bilayers. Barrier disruption triggers inflammatory cytokines like IL-1-alpha." 
  },
  { 
    id: 17, 
    module: "Module 3: Dermatological Science & Microbiome", 
    title: "Dermatological Active Ingredients: Retinoids & Tretinoin", 
    text: "Retinoids are the most gold-standard ingredients for collagen synthesis and cell turnover acceleration in both epidermis and dermis.", 
    practical: "Start with mild retinoids (e.g., retinal 0.05%) twice weekly at night. Use the 'sandwich method' (moisturizer – retinoid – moisturizer) to buffer irritation.", 
    medicalInfo: "Tretinoin binds nuclear retinoic acid receptors (RAR) and RXR, altering gene transcription to increase epidermal mitosis and inhibit matrix metalloproteinases (MMP-1)." 
  },
  { 
    id: 18, 
    module: "Module 3: Dermatological Science & Microbiome", 
    title: "Collagenesis & Matrix Remodeling: Vitamin C & Peptides", 
    text: "Type I collagen supplies dermal tensile strength. Vitamin C (L-ascorbic acid) acts as an indispensable cofactor for collagen strand stabilization, while signal peptides trigger matrix repair.", 
    practical: "Apply a 10-15% L-ascorbic acid serum every morning under sunscreen. Use copper peptides (GHK-Cu) in evening routines.", 
    medicalInfo: "L-ascorbic acid is essential for prolyl-4-hydroxylase and lysyl-hydroxylase enzymatic activity, enabling triple-helix stabilization of procollagen molecules." 
  },
  { 
    id: 19, 
    module: "Module 3: Dermatological Science & Microbiome", 
    title: "UV Radiation, Photoaging & Broad-Spectrum Photoprotection", 
    text: "Up to 80% of visible facial aging is driven by UV exposure (photoaging). UVA rays penetrate deep into the dermis, generating reactive oxygen species that destroy elastin and collagen.", 
    practical: "Apply broad-spectrum SPF 50+ sunscreen daily regardless of weather. Choose modern organic filters (e.g., Tinosorb S/M, Uvinul A Plus).", 
    medicalInfo: "UVA-induced ROS activate AP-1 and NF-kB transcription factors, upregulating collagenase production (MMP-1, MMP-8, MMP-13) and causing dermal elastosis." 
  },
  { 
    id: 20, 
    module: "Module 3: Dermatological Science & Microbiome", 
    title: "Sebum Mechanics, Acne Pathophysiology & Salicylic Acid", 
    text: "Acne results from follicular hyperkeratinization, excess sebum, and Cutibacterium acnes proliferation. Lipid-soluble Salicylic acid (BHA) penetrates deep into pores to dissolve impactions.", 
    practical: "Incorporate a 2% BHA exfoliant 2-3 times weekly at night. Allow 10 minutes absorption before applying moisturizer.", 
    medicalInfo: "Salicylic acid cleaves desmosomal bonds within follicular structures, exerting keratolytic and anti-inflammatory effects via cyclooxygenase inhibition." 
  },
  { 
    id: 21, 
    module: "Module 3: Dermatological Science & Microbiome", 
    title: "The Cutaneous Microbiome: Microbial Diversity & Skin Health", 
    text: "Trillions of commensal microorganisms form the skin microbiome, producing antimicrobial peptides and suppressing systemic skin inflammation.", 
    practical: "Limit cleansing to twice daily. Avoid harsh antibacterial soaps or alcohol-dense toners that strip beneficial skin flora.", 
    medicalInfo: "Staphylococcus epidermidis produces fermentation metabolites like succinic acid, inhibiting C. acnes growth. Maintaining a low skin pH (4.5–5.5) supports commensal viability." 
  },
  { 
    id: 22, 
    module: "Module 3: Dermatological Science & Microbiome", 
    title: "Systemic Dermatology: Glycation (AGEs) & Tissue Elasticity", 
    text: "Advanced Glycation End-products (AGEs) form when excess blood sugars bind uncontrollably to collagen fibers, causing tissue cross-linking, stiffness, and premature wrinkling.", 
    practical: "Reduce simple sugar intake and avoid high-heat charred foods. Supplement with antioxidants like Alpha-Lipoic Acid.", 
    medicalInfo: "Maillard reactions induce irreversible cross-linking in dermal collagen. Glycated collagen resists enzymatic turnover and impairs dermal elasticity." 
  },

  // MODULE 4: Hypertrophy, V-Taper & Proportion
  { 
    id: 23, 
    module: "Module 4: Hypertrophie, V-Taper & Proportion", 
    title: "The Mathematics of Aesthetic Proportions: The Golden Ratio", 
    text: "Male upper body aesthetic appeal relies heavily on geometric proportions. The shoulder-to-waist ratio (~1.618) creates the classic V-Taper illusion, making the waist appear smaller.", 
    practical: "Measure shoulder circumference at the widest point of lateral deltoids and waist circumference at the navel. Focus training on lateral deltoids and latissimus growth.", 
    medicalInfo: "Evolutionary biology correlates a high shoulder-to-waist ratio with circulating androgen levels and physical capability, triggering positive neural perception." 
  },
  { 
    id: 24, 
    module: "Module 4: Hypertrophie, V-Taper & Proportion", 
    title: "Lateral Deltoid Isolation: Building Shoulder Width", 
    text: "The lateral head of the deltoid (pars acromialis) is the primary driver of frontal shoulder width. Standard overhead presses bias the anterior head, requiring lateral isolation.", 
    practical: "Perform cable or dumbbell lateral raises 2-3 times weekly for 12-16 total sets. Lean slightly forward and move in the scapular plane (30° forward).", 
    medicalInfo: "Maximal lateral deltoid EMG activation requires continuous tension across the entire range of motion; cables offer superior resistance profiles compared to dumbbells in lengthened positions." 
  },
  { 
    id: 25, 
    module: "Module 4: Hypertrophie, V-Taper & Proportion", 
    title: "Latissimus Dorsi Architecture & Upper Back Width", 
    text: "The latissimus dorsi creates lateral back flare beneath the axilla, adding upper body width and enhancing the V-taper silhouette.", 
    practical: "Prioritize overhand pull-ups and lat pulldowns with a focused stretch at top position. Drive movements through elbows rather than hands.", 
    medicalInfo: "The latissimus dorsi features iliac, costal, and thoracic fiber orientations. Full humerus adduction and extension under mechanical load optimizes myofibrillar recruitment." 
  },
  { 
    id: 26, 
    module: "Module 4: Hypertrophie, V-Taper & Proportion", 
    title: "Waist Minimization: Transversus Abdominis Control", 
    text: "A tight waist requires low body fat and strong transverse abdominis (TVA) tone. The TVA acts as an internal corset pulling the abdominal wall inward.", 
    practical: "Stomach Vacuum Routine: Perform 4-5 sets of stomach vacuums every morning on an empty stomach. Fully exhale, draw the navel inward and upward, and hold for 15-20 seconds.", 
    medicalInfo: "The transversus abdominis runs orientationally around the abdominal cavity. Isometric conditioning increases resting tone, curbing visceral protrusion." 
  },
  { 
    id: 27, 
    module: "Module 4: Hypertrophie, V-Taper & Proportion", 
    title: "Body Fat Reduction & Regional Fat Distribution", 
    text: "Revealing facial bone architecture and abdominal separation requires lowering overall body fat (typically 10-12% for men). Fat loss occurs systemically.", 
    practical: "Maintain a moderate daily caloric deficit of 300-500 kcal. Keep protein high (2.0-2.2g per kg body weight) to preserve lean muscle tissue.", 
    medicalInfo: "Adipose tissue lipolysis is initiated by hormone-sensitive lipase (HSL) cleaving triglycerides into free fatty acids via beta-1 and beta-2 adrenergic stimulation." 
  },
  { 
    id: 28, 
    module: "Module 4: Hypertrophie, V-Taper & Proportion", 
    title: "Neck & Trapezius Development for Aesthetic Framing", 
    text: "A well-developed neck (sternocleidomastoid) frames the jawline from side and front profiles. However, over-developing the upper traps can narrow perceived shoulder width.", 
    practical: "Train neck flexors using neck curls with light weight plates on forehead (3 sets of 15-20 reps). Avoid extreme heavy shrugs if shoulder width is lacking.", 
    medicalInfo: "The sternocleidomastoid stabilizes cervical vertebrae against rotational forces. Strengthening protects against forward head posture strain." 
  },
  { 
    id: 29, 
    module: "Module 4: Hypertrophie, V-Taper & Proportion", 
    title: "Posture Correction: Eradicating Upper Crossed Syndrome", 
    text: "Upper Crossed Syndrome involves rounded shoulders, hyper-kyphosis, and forward head position, undermining upper body aesthetics.", 
    practical: "Daily routine: Stretch pectoralis muscles against a doorframe. Train rear deltoids (face pulls) and rhomboids with active scapular retraction.", 
    medicalInfo: "Pathomechanics reflect tight pectoralis major/minor and upper trapezius muscles paired with inhibited lower traps, rhomboids, and deep neck flexors." 
  },

  // MODULE 5: Nutritional Biochemistry & Endocrinology
  { 
    id: 30, 
    module: "Module 5: Nutritional Biochemistry & Endocrinology", 
    title: "The Endocrine Axis: HPTA Regulation & Physiology", 
    text: "The Hypothalamic-Pituitary-Testicular Axis regulates androgen production. The hypothalamus secretes GnRH, prompting LH and FSH release from the pituitary to stimulate testicular testosterone synthesis.", 
    practical: "Avoid sleep deprivation and chronic stress; high cortisol directly suppresses hypothalamic GnRH release. Prioritize 7-9 hours of quality sleep.", 
    medicalInfo: "LH binds to Leydig cell G-protein coupled receptors, activating adenylate cyclase and cAMP pathways to upregulate StAR protein transport of cholesterol into mitochondria." 
  },
  { 
    id: 31, 
    module: "Module 5: Nutritional Biochemistry & Endocrinology", 
    title: "Steroidogenesis: From Cholesterol to Testosterone & DHT", 
    text: "Steroid hormones derive from cholesterol. Testosterone converts into the potent androgen Dihydrotestosterone (DHT) via the 5-alpha-reductase enzyme.", 
    practical: "Consume adequate healthy fats (~1.0g per kg body weight) from eggs, avocados, and olive oil to supply steroid precursors.", 
    medicalInfo: "DHT exhibits 3-5 times higher androgen receptor affinity than testosterone. It governs secondary male characteristics and facial hair density." 
  },
  { 
    id: 32, 
    module: "Module 5: Nutritional Biochemistry & Endocrinology", 
    title: "Aromatase Inhibition & Estrogen Balance", 
    text: "The aromatase enzyme converts free testosterone into estradiol (E2). Excess estrogen causes fluid retention, gynecomastia, and mood instability.", 
    practical: "Eat cruciferous vegetables (broccoli, cauliflower) containing Indole-3-Carbinol / DIM to support healthy estrogen metabolism.", 
    medicalInfo: "Diindolylmethan (DIM) modulates Cytochrome P450 enzymes, favoring estrogen metabolism down the 2-hydroxyestrone pathway over 16-hydroxyestrone." 
  },
  { 
    id: 33, 
    module: "Module 5: Nutritional Biochemistry & Endocrinology", 
    title: "SHBG Modulation: Free vs. Bound Testosterone", 
    text: "Sex Hormone-Binding Globulin (SHBG) binds circulating testosterone tightly. Only 1-2% of total testosterone remains unbound ('free') and bioavailable.", 
    practical: "Supplement with boron (6-10 mg daily), zinc, and magnesium to prevent excessive SHBG binding and optimize free testosterone levels.", 
    medicalInfo: "Boron supplementation significantly reduces serum SHBG levels within 7 days, yielding a measurable elevation in free testosterone." 
  },
  { 
    id: 34, 
    module: "Module 5: Nutritional Biochemistry & Endocrinology", 
    title: "Micronutrient Synergy: Zinc, Magnesium, Vitamin D3 & K2", 
    text: "Micronutrient deficiencies stall hormone synthesis pathways. Vitamin D3 operates as a nuclear steroid hormone, while Zinc acts as an essential cofactor in testosterone synthesis.", 
    practical: "Daily Protocol: 4000-5000 IU Vitamin D3 with 200 mcg K2 (MK-7), 15-25 mg Zinc Bisglycinate, and 300-400 mg Magnesium Glycinate.", 
    medicalInfo: "Vitamin D receptors (VDR) are expressed directly in Leydig cells. Serum 25(OH)D levels above 50 ng/mL correlate with optimized LH and androgen production." 
  },
  { 
    id: 35, 
    module: "Module 5: Nutritional Biochemistry & Endocrinology", 
    title: "Insulin Sensitivity & Nutrient Partitioning", 
    text: "High insulin sensitivity directs ingested carbohydrates into skeletal muscle as glycogen rather than into systemic adipose stores.", 
    practical: "Take a 10-15 minute walk after carb-heavy meals. Focus on complex carbohydrates pre-workout and avoid constant high-sugar snacking.", 
    medicalInfo: "Muscle contractions activate AMP-activated protein kinase (AMPK), stimulating GLUT4 translocation to the cell membrane independent of insulin pathways." 
  },
  { 
    id: 36, 
    module: "Module 5: Nutritional Biochemistry & Endocrinology", 
    title: "Thyroid Hormones (T3/T4) & Metabolic Rate Optimization", 
    text: "The thyroid gland controls cellular metabolic rates. Inactive Thyroxine (T4) converts in liver and kidneys into active Triiodothyronine (T3), regulating mitochondrial respiration.", 
    practical: "Avoid prolonged extreme low-calorie diets. Implement periodic refeed days with higher carbohydrate intake to maintain T4-to-T3 conversion rates.", 
    medicalInfo: "T4-to-T3 conversion relies on deiodinase enzymes (DIO1/DIO2). Selenium deficiencies or severe glycogen depletion suppress deiodinase activity." 
  },

  // MODULE 6: Grooming, Hair Health & Visual Presentation
  { 
    id: 37, 
    module: "Module 6: Grooming, Hair Health & Visual Presentation", 
    title: "Androgenetic Alopecia (AGA): DHT & Follicular Miniaturization", 
    text: "Pattern hair loss stems from genetic sensitivity of scalp hair follicles to Dihydrotestosteron (DHT), which shortens the anagen growth phase and constricts micro-vasculature.", 
    practical: "Monitor hairline and crown density regularly under good lighting. Early intervention is vital, as dead hair follicles cannot be revived.", 
    medicalInfo: "DHT binds dermal papilla androgen receptors, upregulating TGF-beta-1 and IL-6 cytokines to induce pericapillary fibrosis and follicular miniaturization." 
  },
  { 
    id: 38, 
    module: "Module 6: Grooming, Hair Health & Visual Presentation", 
    title: "Pharmacology of Hair Retention: Finasteride & Minoxidil", 
    text: "Finasteride inhibits 5-alpha-reductase, lowering scalp DHT levels, while Minoxidil acts as a potassium channel opener to increase follicular blood supply.", 
    practical: "Consult a dermatologist. Daily consistency with prescribed topical/oral Finasteride and Minoxidil is required for long-term retention.", 
    medicalInfo: "Finasteride selectively inhibits Type II 5-alpha-reductase, lowering serum DHT by ~70%. Minoxidil induces hyperpolarization of smooth muscle cell membranes to enhance microcirculation." 
  },
  { 
    id: 39, 
    module: "Module 6: Grooming, Hair Health & Visual Presentation", 
    title: "Microneedling & Scalp Tension Mechanics", 
    text: "Galea aponeurotica tension restricts scalp blood flow. Microneedling causes controlled micro-injuries, releasing growth factors and stimulating tissue repair.", 
    practical: "Protocol: Use a dermapen (1.0mm-1.5mm) once weekly on clean scalp tissue. Do not apply topical Minoxidil for 24 hours post-needling.", 
    medicalInfo: "Microneedling activates the Wnt/beta-catenin signaling pathway, upregulating VEGF and PDGF expressions in dermal papillae." 
  },
  { 
    id: 40, 
    module: "Module 6: Grooming, Hair Health & Visual Presentation", 
    title: "Beard Growth Biochemistry: Facial Androgen Receptors", 
    text: "Unlike scalp hair, facial hair growth is stimulated by DHT and testosterone. Density depends on regional androgen receptor sensitivity along the jawline.", 
    practical: "Allow facial hair to grow untouched for 8-12 weeks before shaping lines. Apply 5% topical Minoxidil to patchy cheek areas if desired.", 
    medicalInfo: "Facial hair follicles express high levels of 5-alpha-reductase Type I, converting vellus hair into thick terminal hair under androgenic stimulation." 
  },
  { 
    id: 41, 
    module: "Module 6: Grooming, Hair Health & Visual Presentation", 
    title: "Dental Aesthetics: Alignment, Remineralization & Enamel Glow", 
    text: "A straight, bright smile signifies health and symmetry. Enamel remineralization protects against acid erosion and staining.", 
    practical: "Floss daily. Use toothpastes containing Nano-Hydroxyapatite (nHAp) to remineralize microscopic enamel lesions and reduce sensitivity.", 
    medicalInfo: "Nano-Hydroxyapatite deposits directly into micro-fissures in enamel, forming a synthetic protective layer resistant to acid dissolution." 
  },
  { 
    id: 42, 
    module: "Module 6: Grooming, Hair Health & Visual Presentation", 
    title: "Periorbital Optimization: Dark Circles & Under-Eye Fluid", 
    text: "Dark under-eye circles stem from thin periorbital skin revealing underlying blood vessels, hyperpigmentation, or tear trough hollowing.", 
    practical: "Apply a cold compress under eyes for 2 minutes every morning. Use topical creams containing caffeine and niacinamide to constrict vessels.", 
    medicalInfo: "Topical caffeine acts as a local vasoconstrictor, reducing capillary permeability and fluid pooling in delicate periorbital interstitial tissue." 
  },
  { 
    id: 43, 
    module: "Module 6: Grooming, Hair Health & Visual Presentation", 
    title: "Style Physiology, Color Contrast & Facial Framing", 
    text: "Clothing, necklines, and eyewear alter perceived facial geometry, balancing proportions to create visual symmetry.", 
    practical: "Determine your contrast level: high-contrast features (dark hair, light skin) suit high-contrast outfits. Choose angular frames for round faces.", 
    medicalInfo: "Visual cortex edge detection algorithms (Area V1) process facial geometry based on brightness contrasts and structural border lines." 
  },
  { 
    id: 44, 
    module: "Module 6: Grooming, Hair Health & Visual Presentation", 
    title: "Fragrance Molecular Biology: Pheromones & Sillage", 
    text: "Olfactory signals travel directly to the limbic system. High-quality fragrance molecules blend with epidermal lipids to create a unique sillage.", 
    practical: "Apply fragrance to moisturized pulse points (neck, wrists). Never rub wrists together, as friction degrades delicate top-note scent molecules.", 
    medicalInfo: "Synthetic scent molecules such as Iso E Super and Ambroxan bind olfactory receptors, providing long-lasting projection due to low volatility profiles." 
  },

  // MODULE 7: Sleep Architecture, Light Biology & Circadian Regeneration
  { 
    id: 45, 
    module: "Module 7: Sleep Architecture, Light Biology & Regeneration", 
    title: "Circadian Biology & The Suprachiasmatic Nucleus (SCN)", 
    text: "The Suprachiasmatic Nucleus (SCN) in the hypothalamus acts as the master circadian clock, synchronizing peripheral cellular clocks via light signals entering the retina.", 
    practical: "Morning Protocol: Step outside within 30 minutes of waking to get 10-20 minutes of direct natural sunlight without wearing sunglasses.", 
    medicalInfo: "Intrinsically photosensitive retinal ganglion cells (ipRGCs) express melanopsin, projecting light signals (~480 nm wavelength) via the retinohypothalamic tract to the SCN." 
  },
  { 
    id: 46, 
    module: "Module 7: Sleep Architecture, Light Biology & Regeneration", 
    title: "Blue Light Toxicity, Melatonin Suppression & Sleep Quality", 
    text: "Evening exposure to blue light emitted by screens suppresses pineal melatonin secretion, mimicking daytime signals and disrupting sleep onset.", 
    practical: "Dim lights 2 hours before bed. Wear blue-blocker glasses or switch electronic devices to night mode.", 
    medicalInfo: "Melatonin synthesized from serotonin acts not only as a sleep-onset signal but also as a powerful mitochondrial antioxidant." 
  },
  { 
    id: 47, 
    module: "Module 7: Sleep Architecture, Light Biology & Regeneration", 
    title: "Sleep Phase Architecture: Deep Sleep (SWS) & HGH Release", 
    text: "Slow-Wave Sleep (SWS) dominates the first half of the night and is critical for physical repair, tissue growth, and systemic anabolic hormone release.", 
    practical: "Keep your bedroom cool (16-18°C), completely dark, and quiet. Avoid alcohol and large late meals within 3 hours of sleep.", 
    medicalInfo: "Pulsatile Human Growth Hormone (HGH) secretion occurs predominantly during early SWS cycles, stimulated by hypothalamic GHRH." 
  },
  { 
    id: 48, 
    module: "Module 7: Sleep Architecture, Light Biology & Regeneration", 
    title: "The Glymphatic System: Brain Clearance in Deep Sleep", 
    text: "The glymphatic system clears metabolic waste from the brain. During deep sleep, interstitial space expands by ~60%, facilitating cerebrospinal fluid flushing.", 
    practical: "Maintain strict, consistent sleep schedules (+/- 30 minutes) to allow complete neuro-clearing cycles every night.", 
    medicalInfo: "Astrocyte-mediated CSF influx through Aquaporin-4 (AQP4) water channels flushes neurotoxic waste products like beta-amyloid from brain tissue." 
  },
  { 
    id: 49, 
    module: "Module 7: Sleep Architecture, Light Biology & Regeneration", 
    title: "Mitochondrial Health & Adenosine Accumulation", 
    text: "Waking ATP consumption leads to progressive adenosine buildup in the brain, driving sleep pressure. Caffeine blocks adenosine receptors without removing adenosine.", 
    practical: "Delay morning caffeine intake by 90-120 minutes post-waking to allow natural adenosine clearing. Avoid caffeine past 2:00 PM.", 
    medicalInfo: "Caffeine functions as a competitive antagonist at A1 and A2A adenosine receptors, masking fatigue while impairing SWS quality if taken late." 
  },
  { 
    id: 50, 
    module: "Module 7: Sleep Architecture, Light Biology & Regeneration", 
    title: "Temperature Extremes: Cold Exposure & Brown Fat Activation", 
    text: "Cold exposure activates brown adipose tissue (BAT), which is dense in mitochondria and burns lipids for non-shivering thermogenesis.", 
    practical: "Cold Shower Protocol: End daily showers with 60-120 seconds of cold water over the neck, chest, and back while maintaining calm nasal breathing.", 
    medicalInfo: "Cold exposure releases norepinephrine, activating beta-3 adrenergic receptors in BAT and upregulating Uncoupling Protein 1 (UCP-1) in mitochondria." 
  },
  { 
    id: 51, 
    module: "Module 7: Sleep Architecture, Light Biology & Regeneration", 
    title: "Sauna Therapy, Heat Shock Proteins (HSP) & Vascular Health", 
    text: "Sauna-induced hyperthermia promotes vasodilation, improves endothelial function, and triggers Heat Shock Protein (HSP) synthesis to repair misfolded proteins.", 
    practical: "Sauna Protocol: Perform 2-3 sessions weekly for 15-20 minutes at 80-90°C. Hydrate thoroughly with electrolyte water afterward.", 
    medicalInfo: "Thermal stress activates Heat Shock Factor 1 (HSF-1), upregulating molecular chaperones (e.g., HSP70) that prevent protein aggregation." 
  },
  { 
    id: 52, 
    module: "Module 7: Sleep Architecture, Light Biology & Regeneration", 
    title: "Summary: The Integrated 24-Hour Protocol", 
    text: "Maximum physical transformation requires systemic synergy: combining tongue posture, targeted hypertrophy, skincare, hormonal optimization, and sleep hygiene.", 
    practical: "Implement routines incrementally. Introduce 2 new habits per week and anchor them solidly before expanding your protocol.", 
    medicalInfo: "Long-term physiological adaptation relies on continuous gene expression modulation. Synchronizing circadian rhythms optimizes tissue plasticity." 
  }
];