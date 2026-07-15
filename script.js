/* ============ PRODUCT DATA ============ */
const products = [
  /* ---------- ACCESSORIES (10) ---------- */
  {id:1, name:"Lavender Cloud Scarf", category:"Accessories", subCategory:null, price:899, was:1099, caption:"Wraps around you like a soft evening sky — light enough for autumn, warm enough for winter.", color:"lavender", icon:"scarf"},
  {id:2, name:"Blush Bow Hair Clips (Set of 3)", category:"Accessories", subCategory:null, price:349, caption:"Tiny hand-tied bows for good hair days, bad hair days, and everything in between.", color:"blush", icon:"bow"},
  {id:3, name:"Sky Blossom Market Tote", category:"Accessories", subCategory:null, price:1199, was:1399, caption:"Sturdy enough for market runs, pretty enough for everywhere else.", color:"sky", icon:"tote"},
  {id:4, name:"Boucle Beanie, Warm Beige", category:"Accessories", subCategory:null, price:749, caption:"A slouchy little hug for your head, textured like a cloud that learned to knit.", color:"beige", icon:"beanie"},
  {id:5, name:"Pastel Crochet Headband", category:"Accessories", subCategory:null, price:449, caption:"A pretty little detail that turns any messy bun into an outfit choice.", color:"blush", icon:"headband"},
  {id:6, name:"Sunset Fingerless Gloves", category:"Accessories", subCategory:null, price:599, caption:"Keeps hands warm while leaving fingers free for coffee cups and phone scrolls.", color:"beige", icon:"gloves"},
  {id:7, name:"Blush Crossbody Sling Bag", category:"Accessories", subCategory:null, price:1099, caption:"Small enough to be light, roomy enough for everything you actually carry.", color:"blush", icon:"slingbag"},
  {id:8, name:"Lavender Keychain Charm Set", category:"Accessories", subCategory:null, price:299, caption:"Tiny handmade charms that turn a plain keyring into a personality.", color:"lavender", icon:"keychain"},
  {id:9, name:"Boho Anklet Set", category:"Accessories", subCategory:null, price:399, caption:"Delicate, stackable, and made for bare feet on warm afternoons.", color:"sky", icon:"anklet"},
  {id:10, name:"Sky Blue Neck Bandana", category:"Accessories", subCategory:null, price:549, caption:"A small folded triangle of color that finishes off any plain outfit.", color:"sky", icon:"bandana"},

  /* ---------- AMIGURUMI & TOYS (10) ---------- */
  {id:11, name:"Luna the Bunny", category:"Amigurumi & Toys", subCategory:null, price:649, caption:"Soft ears, softer heart. Luna's been waiting for a name and a home.", color:"lavender", icon:"bunny"},
  {id:12, name:"Pip the Bear", category:"Amigurumi & Toys", subCategory:null, price:699, was:849, caption:"A little round bear who takes his job as chief cuddle officer very seriously.", color:"beige", icon:"bear"},
  {id:13, name:"Marina the Whale", category:"Amigurumi & Toys", subCategory:null, price:599, caption:"Swims through blanket forts and bedtime stories alike.", color:"sky", icon:"whale"},
  {id:14, name:"Sunny the Sloth", category:"Amigurumi & Toys", subCategory:null, price:679, caption:"Moves slowly, loves deeply. The unofficial mascot of lazy Sundays.", color:"blush", icon:"sloth"},
  {id:15, name:"Ollie the Owl", category:"Amigurumi & Toys", subCategory:null, price:629, caption:"Wide-eyed and wise-looking, perfect for a bookshelf or a bedside table.", color:"beige", icon:"owl"},
  {id:16, name:"Milo the Elephant", category:"Amigurumi & Toys", subCategory:null, price:719, caption:"Big ears, gentle soul — the softest thing an elephant has ever been.", color:"sky", icon:"elephant"},
  {id:17, name:"Coco the Cat", category:"Amigurumi & Toys", subCategory:null, price:599, caption:"All the charm of a cat, none of the shedding.", color:"blush", icon:"cat"},
  {id:18, name:"Ziggy the Fox", category:"Amigurumi & Toys", subCategory:null, price:649, was:799, caption:"A clever little face and a tail made for endless hugging.", color:"beige", icon:"fox"},
  {id:19, name:"Bubbles the Octopus", category:"Amigurumi & Toys", subCategory:null, price:749, caption:"Eight soft arms, zero complaints about being squeezed too tight.", color:"sky", icon:"octopus"},
  {id:20, name:"Rosie the Unicorn", category:"Amigurumi & Toys", subCategory:null, price:799, caption:"A little bit of magic, stitched in pastel and gold.", color:"lavender", icon:"unicorn"},

  /* ---------- HOME & DÉCOR (10) ---------- */
  {id:21, name:"Dreamy Coaster Set (4pc)", category:"Home & Décor", subCategory:null, price:449, caption:"Little woven circles that catch condensation and compliments in equal measure.", color:"sky", icon:"coaster"},
  {id:22, name:"Blush Petal Wall Hanging", category:"Home & Décor", subCategory:null, price:1299, caption:"A soft floral moment for the wall that always needed one more thing.", color:"blush", icon:"wallhanging"},
  {id:23, name:"Cloud Nine Cushion Cover", category:"Home & Décor", subCategory:null, price:999, was:1199, caption:"Textured, huggable, and just the right amount of extra for your couch.", color:"lavender", icon:"cushion"},
  {id:24, name:"Lavender Fields Basket", category:"Home & Décor", subCategory:null, price:849, caption:"Sturdy storage that looks too pretty to hide in a closet.", color:"beige", icon:"basket"},
  {id:25, name:"Boho Table Runner", category:"Home & Décor", subCategory:null, price:999, caption:"Dresses up a plain table in one long, textured stripe.", color:"beige", icon:"runner"},
  {id:26, name:"Crochet Plant Hanger", category:"Home & Décor", subCategory:null, price:749, caption:"Lets your favorite plant hang somewhere sunny, cradled in handmade knots.", color:"lavender", icon:"planthanger"},
  {id:27, name:"Star Night Light Cover", category:"Home & Décor", subCategory:null, price:899, caption:"Softens any bulb into a gentle glow for late-night reading.", color:"sky", icon:"nightlight"},
  {id:28, name:"Woven Door Mat", category:"Home & Décor", subCategory:null, price:1099, caption:"The first handmade thing guests notice, right at your doorstep.", color:"beige", icon:"doormat"},
  {id:29, name:"Pastel Photo Frame", category:"Home & Décor", subCategory:null, price:649, caption:"Frames a favorite memory in soft, hand-looped color.", color:"blush", icon:"photoframe"},
  {id:30, name:"Macrame-Style Dreamcatcher", category:"Home & Décor", subCategory:null, price:1199, was:1399, caption:"Catches the light and the good dreams, one loop at a time.", color:"lavender", icon:"dreamcatcher"},

  /* ---------- CLOTHES: MEN (10) ---------- */
  {id:31, name:"Charcoal Crochet Sweater", category:"Clothes", subCategory:"Men", price:1499, was:1799, caption:"Ribbed, roomy, and ready for every chilly evening you've got planned.", color:"beige", icon:"sweater"},
  {id:32, name:"Sandstone Cardigan", category:"Clothes", subCategory:"Men", price:1599, caption:"An open-front layer that looks effortless because the effort's all in the stitches.", color:"beige", icon:"cardigan"},
  {id:33, name:"Slate Crochet Vest", category:"Clothes", subCategory:"Men", price:999, caption:"Layer it over a tee and suddenly everything looks a little more put-together.", color:"sky", icon:"vest"},
  {id:34, name:"Earth-Tone Poncho", category:"Clothes", subCategory:"Men", price:1299, caption:"One drape, zero fuss — the easiest cool-weather piece in the wardrobe.", color:"beige", icon:"poncho"},
  {id:35, name:"Beige Crochet Shorts", category:"Clothes", subCategory:"Men", price:899, caption:"Breezy, textured, and built for lazy beach mornings.", color:"beige", icon:"shorts"},
  {id:36, name:"Ocean Tank Top", category:"Clothes", subCategory:"Men", price:799, caption:"Open-weave and airy — summer's favorite excuse to show off a tan.", color:"sky", icon:"tanktop"},
  {id:37, name:"Textured Pullover Hoodie", category:"Clothes", subCategory:"Men", price:1799, was:2099, caption:"A hood, a pocket, and enough texture to make plain hoodies jealous.", color:"lavender", icon:"hoodie"},
  {id:38, name:"Crochet Kurta, Sky Blue", category:"Clothes", subCategory:"Men", price:1699, caption:"Festival-ready with a handmade softness no store rack can copy.", color:"sky", icon:"kurta"},
  {id:39, name:"Lavender Zip Jacket", category:"Clothes", subCategory:"Men", price:1899, caption:"Zip it up for a walk, throw it open for everything else.", color:"lavender", icon:"cardigan"},
  {id:40, name:"Storm Grey Henley", category:"Clothes", subCategory:"Men", price:1399, caption:"A button placket and a snug fit — quietly the best thing in the closet.", color:"beige", icon:"sweater"},

  /* ---------- CLOTHES: WOMEN (10) ---------- */
  {id:41, name:"Blush Crochet Crop Top", category:"Clothes", subCategory:"Women", price:899, caption:"Pairs with everything and steals the outfit every single time.", color:"blush", icon:"tanktop"},
  {id:42, name:"Lavender Maxi Dress", category:"Clothes", subCategory:"Women", price:2199, was:2499, caption:"Floor-length, flowing, and made for golden-hour photos.", color:"lavender", icon:"dress"},
  {id:43, name:"Sky Ruffle Cardigan", category:"Clothes", subCategory:"Women", price:1699, caption:"Ruffled edges and a soft drape — like wearing a cloud with sleeves.", color:"sky", icon:"cardigan"},
  {id:44, name:"Beige Wrap Top", category:"Clothes", subCategory:"Women", price:999, caption:"Ties at the waist, flatters everywhere, works for every season.", color:"beige", icon:"cardigan"},
  {id:45, name:"Floral Crochet Skirt", category:"Clothes", subCategory:"Women", price:1299, caption:"A-line and airy, with just enough swing when you walk.", color:"blush", icon:"skirt"},
  {id:46, name:"Pastel Bralette", category:"Clothes", subCategory:"Women", price:699, caption:"Soft structure, softer colors — a summer staple in the making.", color:"blush", icon:"tanktop"},
  {id:47, name:"Boho Shrug", category:"Clothes", subCategory:"Women", price:1199, caption:"Throw it over any dress and instantly feel like you planned the whole outfit.", color:"lavender", icon:"cardigan"},
  {id:48, name:"Halter Neck Top", category:"Clothes", subCategory:"Women", price:849, caption:"Backless, breezy, and built for warm-weather evenings out.", color:"sky", icon:"tanktop"},
  {id:49, name:"Off-Shoulder Summer Dress", category:"Clothes", subCategory:"Women", price:1999, caption:"Effortlessly romantic, with just enough stretch to move freely in.", color:"blush", icon:"dress"},
  {id:50, name:"Crochet Kimono", category:"Clothes", subCategory:"Women", price:1799, caption:"Open, flowing, and dramatic in the best possible way over swimwear or jeans.", color:"lavender", icon:"cardigan"},

  /* ---------- CLOTHES: KIDS (10) ---------- */
  {id:51, name:"Mini Bunny Romper", category:"Clothes", subCategory:"Kids", price:799, caption:"Tiny ears on the hood, big cuddles guaranteed.", color:"blush", icon:"romper"},
  {id:52, name:"Rainbow Crochet Dress", category:"Clothes", subCategory:"Kids", price:999, caption:"A stripe of every favorite color, sized for tiny twirls.", color:"sky", icon:"dress"},
  {id:53, name:"Baby Boy Sweater Set", category:"Clothes", subCategory:"Kids", price:1099, caption:"Sweater and cap together, because matching sets are simply cuter.", color:"beige", icon:"babyset"},
  {id:54, name:"Toddler Poncho", category:"Clothes", subCategory:"Kids", price:849, caption:"Easy on, easy off, and warm for every stroller ride.", color:"lavender", icon:"poncho"},
  {id:55, name:"Kids Beanie & Scarf Set", category:"Clothes", subCategory:"Kids", price:699, caption:"A matching set that makes winter mornings a little less of a fight.", color:"sky", icon:"babyset"},
  {id:56, name:"Little Star Onesie", category:"Clothes", subCategory:"Kids", price:899, caption:"Snap-button softness for the smallest members of the family.", color:"blush", icon:"romper"},
  {id:57, name:"Girls Crochet Frock", category:"Clothes", subCategory:"Kids", price:1199, caption:"Party-ready with a hand-finished hem that photographs beautifully.", color:"blush", icon:"dress"},
  {id:58, name:"Boys Crochet Vest", category:"Clothes", subCategory:"Kids", price:799, caption:"Layer over a shirt for picture day or just because.", color:"beige", icon:"vest"},
  {id:59, name:"Baby Booties & Cap Set", category:"Clothes", subCategory:"Kids", price:599, caption:"The tiniest shoes that will ever fit anyone, ever.", color:"lavender", icon:"babyset"},
  {id:60, name:"Kids Cardigan, Sky Blue", category:"Clothes", subCategory:"Kids", price:999, caption:"Button-up layering for school runs and playground afternoons.", color:"sky", icon:"cardigan"},

  /* ---------- GIFT ITEMS: HAMPERS (10) ---------- */
  {id:61, name:"Cozy Home Hamper", category:"Gift Items", subCategory:"Hampers", price:1499, caption:"Coasters, a cushion cover, and a basket — everything a cozy corner needs.", color:"beige", icon:"hamper"},
  {id:62, name:"New Mom & Baby Hamper", category:"Gift Items", subCategory:"Hampers", price:1899, caption:"Booties, a cap, and a soft toy, wrapped up for the newest arrival.", color:"blush", icon:"hamper"},
  {id:63, name:"Festive Crochet Hamper", category:"Gift Items", subCategory:"Hampers", price:1699, caption:"A curated set of handmade pieces for celebrating in style.", color:"lavender", icon:"hamper"},
  {id:64, name:"Self-Care Crochet Hamper", category:"Gift Items", subCategory:"Hampers", price:1299, caption:"Soft things for slow evenings — because everyone deserves a pause.", color:"sky", icon:"hamper"},
  {id:65, name:"Wedding Gift Hamper", category:"Gift Items", subCategory:"Hampers", price:2499, was:2799, caption:"A generous set of home pieces to bless a brand new home.", color:"blush", icon:"hamper"},
  {id:66, name:"Birthday Surprise Hamper", category:"Gift Items", subCategory:"Hampers", price:1399, caption:"A little bundle of handmade joy, ribboned and ready to gift.", color:"lavender", icon:"hamper"},
  {id:67, name:"Anniversary Hamper", category:"Gift Items", subCategory:"Hampers", price:2199, caption:"Thoughtful pieces for celebrating another year, stitch by stitch.", color:"beige", icon:"hamper"},
  {id:68, name:"Kids Delight Hamper", category:"Gift Items", subCategory:"Hampers", price:999, caption:"A soft toy and a little something extra for the smallest fans.", color:"sky", icon:"hamper"},
  {id:69, name:"Pastel Dreams Hamper", category:"Gift Items", subCategory:"Hampers", price:1599, caption:"A soft-toned bundle for anyone who loves gentle, dreamy things.", color:"blush", icon:"hamper"},
  {id:70, name:"Deluxe Luxe Hamper", category:"Gift Items", subCategory:"Hampers", price:2899, was:3199, caption:"Our biggest, most generous hamper — the whole Crochet Luxe experience in one box.", color:"lavender", icon:"hamper"},

  /* ---------- GIFT ITEMS: BOUQUET (10) ---------- */
  {id:71, name:"Lavender Rose Bouquet", category:"Gift Items", subCategory:"Bouquet", price:899, caption:"Roses that never wilt, in a shade that never goes out of style.", color:"lavender", icon:"flower_rose"},
  {id:72, name:"Sunflower Crochet Bouquet", category:"Gift Items", subCategory:"Bouquet", price:999, caption:"A burst of sunshine that stays cheerful long after real sunflowers fade.", color:"beige", icon:"flower_sunflower"},
  {id:73, name:"Mixed Pastel Bouquet", category:"Gift Items", subCategory:"Bouquet", price:1099, caption:"A little bit of every soft color, gathered into one sweet bunch.", color:"blush", icon:"flower_mixed"},
  {id:74, name:"Tulip Crochet Bouquet", category:"Gift Items", subCategory:"Bouquet", price:949, caption:"Neat little tulip heads that hold their shape forever.", color:"sky", icon:"flower_tulip"},
  {id:75, name:"Blush Peony Bouquet", category:"Gift Items", subCategory:"Bouquet", price:1199, caption:"Full, romantic blooms in the softest blush imaginable.", color:"blush", icon:"flower_rose"},
  {id:76, name:"Wildflower Basket Bouquet", category:"Gift Items", subCategory:"Bouquet", price:1299, caption:"A basket of mixed blooms that looks freshly picked, always.", color:"lavender", icon:"flower_mixed"},
  {id:77, name:"Everlasting Rose Bunch", category:"Gift Items", subCategory:"Bouquet", price:1499, was:1699, caption:"A dozen roses that will still look this good next year.", color:"blush", icon:"flower_rose"},
  {id:78, name:"Daisy Delight Bouquet", category:"Gift Items", subCategory:"Bouquet", price:899, caption:"Cheerful little daisies for a gift that's simple and sweet.", color:"sky", icon:"flower_mixed"},
  {id:79, name:"Anniversary Rose Bouquet", category:"Gift Items", subCategory:"Bouquet", price:1599, caption:"A statement bunch for the anniversary that deserves a big gesture.", color:"lavender", icon:"flower_rose"},
  {id:80, name:"Rainbow Crochet Bouquet", category:"Gift Items", subCategory:"Bouquet", price:1099, caption:"Every color in one bunch, for someone who can never pick a favorite.", color:"sky", icon:"flower_mixed"},
];

const categories = ["All", "Accessories", "Amigurumi & Toys", "Home & Décor", "Clothes", "Gift Items"];
const subCategoryOptions = {
  "Clothes": ["All", "Men", "Women", "Kids"],
  "Gift Items": ["All", "Hampers", "Bouquet"]
};
const colorMap = {
  lavender: ["var(--lavender)", "var(--lavender-deep)"],
  blush: ["var(--blush)", "var(--blush-deep)"],
  sky: ["var(--sky)", "var(--sky-deep)"],
  beige: ["var(--beige)", "var(--beige-deep)"],
};

/* simple line-art icon set, one path style per product silhouette */
const icons = {
  scarf: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 30 Q50 15 80 30 L80 40 Q50 25 20 40 Z"/><path d="M20 40 Q35 55 25 78 M80 40 Q65 55 75 78"/><path d="M18 74 l14 8 M71 74 l14 8"/></svg>`,
  bow: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M50 50 L20 30 Q10 45 20 60 Z"/><path d="M50 50 L80 30 Q90 45 80 60 Z"/><circle cx="50" cy="50" r="7" fill="white"/></svg>`,
  tote: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M25 40 h50 l-5 45 h-40 z"/><path d="M37 40 v-8 a13 13 0 0 1 26 0 v8"/></svg>`,
  beanie: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M25 60 a25 28 0 0 1 50 0 v6 h-50 z"/><path d="M23 66 h54"/><circle cx="50" cy="26" r="6" fill="white"/></svg>`,
  headband: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 55 Q20 20 50 20 Q80 20 80 55"/><circle cx="50" cy="24" r="5" fill="white"/></svg>`,
  gloves: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M35 45 V25 M45 40 V20 M55 40 V20 M65 45 V25 M30 45 h40 v25 q0 12 -20 12 q-20 0 -20 -12 z"/></svg>`,
  slingbag: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M30 45 h40 l-4 35 h-32 z"/><path d="M30 45 Q20 20 50 15 Q80 20 70 45"/></svg>`,
  keychain: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="28" r="12"/><path d="M50 40 V55"/><circle cx="50" cy="68" r="14"/></svg>`,
  anklet: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 55 Q50 75 80 55"/><circle cx="30" cy="60" r="3" fill="white"/><circle cx="50" cy="68" r="3" fill="white"/><circle cx="70" cy="60" r="3" fill="white"/></svg>`,
  bandana: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 30 h60 l-30 45 z"/><path d="M20 30 Q10 25 5 32 M80 30 Q90 25 95 32"/></svg>`,
  bunny: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="50" cy="65" rx="24" ry="20"/><path d="M38 40 Q34 15 42 12 Q48 30 44 42"/><path d="M62 40 Q66 15 58 12 Q52 30 56 42"/><circle cx="43" cy="60" r="2.5" fill="white"/><circle cx="57" cy="60" r="2.5" fill="white"/></svg>`,
  bear: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="58" r="24"/><circle cx="30" cy="30" r="9"/><circle cx="70" cy="30" r="9"/><circle cx="43" cy="55" r="2.5" fill="white"/><circle cx="57" cy="55" r="2.5" fill="white"/><path d="M45 65 q5 4 10 0"/></svg>`,
  whale: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 55 Q20 35 50 35 Q80 35 85 55 Q75 65 50 65 Q25 65 15 55 Z"/><path d="M78 40 Q90 30 90 20 Q80 25 76 35"/><circle cx="35" cy="50" r="2.5" fill="white"/><path d="M20 62 Q10 70 8 78 M32 65 Q28 74 30 80"/></svg>`,
  sloth: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="52" r="22"/><path d="M32 40 q-10 -6 -14 4 M68 40 q10 -6 14 4"/><circle cx="42" cy="52" r="2.5" fill="white"/><circle cx="58" cy="52" r="2.5" fill="white"/><path d="M43 60 q7 5 14 0"/></svg>`,
  owl: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M50 20 Q25 20 25 50 Q25 78 50 82 Q75 78 75 50 Q75 20 50 20 Z"/><circle cx="40" cy="48" r="7"/><circle cx="60" cy="48" r="7"/><circle cx="40" cy="48" r="2" fill="white"/><circle cx="60" cy="48" r="2" fill="white"/><path d="M50 55 L46 63 L54 63 Z"/></svg>`,
  elephant: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="45" cy="55" rx="26" ry="22"/><circle cx="72" cy="35" r="10"/><path d="M60 60 Q55 78 65 82"/><circle cx="38" cy="50" r="2.5" fill="white"/></svg>`,
  cat: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="55" r="24"/><path d="M32 38 L26 20 L42 32 M68 38 L74 20 L58 32"/><circle cx="42" cy="52" r="2.5" fill="white"/><circle cx="58" cy="52" r="2.5" fill="white"/><path d="M45 62 q5 4 10 0"/></svg>`,
  fox: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M30 55 Q30 30 50 30 Q70 30 70 55 Q70 78 50 78 Q30 78 30 55 Z"/><path d="M32 36 L20 18 L40 30 M68 36 L80 18 L60 30"/><circle cx="42" cy="55" r="2.5" fill="white"/><circle cx="58" cy="55" r="2.5" fill="white"/><path d="M50 60 L45 68 L55 68 Z"/></svg>`,
  octopus: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="42" r="24"/><circle cx="40" cy="38" r="2.5" fill="white"/><circle cx="60" cy="38" r="2.5" fill="white"/><path d="M28 55 q-6 14 2 22 M40 60 q-2 14 6 20 M50 62 v22 M60 60 q2 14 -6 20 M72 55 q6 14 -2 22"/></svg>`,
  unicorn: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="48" cy="58" rx="22" ry="20"/><path d="M62 42 L78 15 M56 35 Q50 15 42 12 Q46 30 50 40"/><circle cx="40" cy="55" r="2.5" fill="white"/></svg>`,
  coaster: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3" stroke-linecap="round"><circle cx="50" cy="50" r="28"/><circle cx="50" cy="50" r="18"/><circle cx="50" cy="50" r="8"/></svg>`,
  wallhanging: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M25 20 h50 M50 20 v18"/><path d="M35 38 q0 20 -6 34 M50 38 q0 24 0 38 M65 38 q0 20 6 34"/><circle cx="35" cy="38" r="4"/><circle cx="50" cy="38" r="4"/><circle cx="65" cy="38" r="4"/></svg>`,
  cushion: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linejoin="round"><path d="M22 25 h56 v56 h-56 z"/><path d="M22 25 L50 50 L78 25 M22 81 L50 50 L78 81"/></svg>`,
  basket: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 42 h56 l-7 38 h-42 z"/><path d="M30 42 q20 -18 40 0"/><path d="M28 52 h44 M25 64 h50"/></svg>`,
  runner: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="15" y="40" width="70" height="20" rx="4"/><path d="M25 40 v20 M40 40 v20 M55 40 v20 M70 40 v20"/></svg>`,
  planthanger: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M50 15 V30"/><path d="M50 30 L25 55 M50 30 L75 55 M50 30 L38 60 M50 30 L62 60"/><path d="M25 55 Q50 85 75 55"/></svg>`,
  nightlight: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="40" r="20"/><path d="M50 60 v8 M40 76 h20"/><circle cx="46" cy="34" r="2" fill="white"/><circle cx="58" cy="30" r="1.6" fill="white"/><circle cx="58" cy="46" r="1.6" fill="white"/></svg>`,
  doormat: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="15" y="35" width="70" height="35" rx="6"/><path d="M15 50 h70 M30 35 v35 M50 35 v35 M70 35 v35"/></svg>`,
  photoframe: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linejoin="round"><rect x="22" y="18" width="56" height="64" rx="6"/><rect x="32" y="28" width="36" height="30" rx="3"/><path d="M38 66 h24"/></svg>`,
  dreamcatcher: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="35" r="22"/><path d="M32 30 L68 40 M32 40 L68 30 M40 20 L60 50 M60 20 L40 50"/><path d="M35 55 q-4 14 -10 20 M50 57 v24 M65 55 q4 14 10 20"/></svg>`,
  sweater: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M35 25 L20 35 L28 48 L35 42 V80 H65 V42 L72 48 L80 35 L65 25 Q50 35 35 25 Z"/><path d="M42 25 Q50 32 58 25"/></svg>`,
  cardigan: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M35 25 L20 35 L28 48 L35 42 V80 H48 V40 M65 25 L80 35 L72 48 L65 42 V80 H52 V40"/><circle cx="50" cy="50" r="1.6" fill="white"/><circle cx="50" cy="60" r="1.6" fill="white"/><circle cx="50" cy="70" r="1.6" fill="white"/></svg>`,
  vest: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M38 25 L28 35 V80 H72 V35 L62 25 Q50 34 38 25 Z"/><path d="M42 25 Q50 32 58 25"/></svg>`,
  poncho: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M50 22 L82 78 H18 Z"/><circle cx="50" cy="28" r="6"/></svg>`,
  shorts: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M25 30 H75 V55 L62 78 L52 55 L48 55 L38 78 L25 55 Z"/></svg>`,
  tanktop: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M38 25 L30 32 L36 42 L40 38 V80 H60 V38 L64 42 L70 32 L62 25 Q50 32 38 25 Z"/></svg>`,
  hoodie: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M35 30 L20 40 L28 52 L35 46 V80 H65 V46 L72 52 L80 40 L65 30 Q62 40 50 40 Q38 40 35 30 Z"/><path d="M40 30 Q50 22 60 30 Q56 38 50 38 Q44 38 40 30 Z"/></svg>`,
  kurta: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M36 24 L22 34 L30 46 L36 40 V85 H64 V40 L70 46 L78 34 L64 24 Q50 33 36 24 Z"/><path d="M50 24 V38"/></svg>`,
  dress: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M38 22 L28 32 L34 40 L40 35 L34 82 H66 L60 35 L66 40 L72 32 L62 22 Q50 30 38 22 Z"/></svg>`,
  skirt: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M32 30 H68 L80 78 H20 Z"/><path d="M32 30 Q50 38 68 30"/></svg>`,
  romper: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M38 22 L26 30 L32 40 L38 36 V60 L28 78 L38 82 L50 62 L62 82 L72 78 L62 60 V36 L68 40 L74 30 L62 22 Q50 30 38 22 Z"/></svg>`,
  babyset: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M50 18 a16 14 0 0 1 16 14 v6 h-32 v-6 a16 14 0 0 1 16 -14 z"/><path d="M28 62 q-4 10 2 16 q8 4 14 -2 l4 -14 z"/><path d="M72 62 q4 10 -2 16 q-8 4 -14 -2 l-4 -14 z"/></svg>`,
  hamper: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 50 H80 L74 82 H26 Z"/><path d="M30 50 Q50 20 70 50"/><path d="M50 30 L44 18 M50 30 L56 18"/><circle cx="50" cy="30" r="4"/></svg>`,
  flower_rose: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M50 78 V45"/><path d="M50 45 q-14 -4 -14 -18 q14 -4 14 10 q0 -14 14 -10 q0 14 -14 18 z"/><path d="M38 60 q-8 4 -10 12 M62 60 q8 4 10 12"/></svg>`,
  flower_sunflower: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M50 78 V50"/><circle cx="50" cy="34" r="8"/><path d="M50 18 v8 M66 24 l-6 6 M74 40 h-8 M66 56 l-6 -6 M34 56 l6 -6 M26 40 h8 M34 24 l6 6"/></svg>`,
  flower_mixed: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M50 80 V55 M35 80 V60 M65 80 V60"/><circle cx="50" cy="42" r="9"/><circle cx="35" cy="50" r="7"/><circle cx="65" cy="50" r="7"/></svg>`,
  flower_tulip: `<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M50 80 V48"/><path d="M50 48 q-12 -6 -10 -22 q10 -4 10 10 q0 -14 10 -10 q2 16 -10 22 z"/><path d="M50 62 q-10 6 -16 4 M50 62 q10 6 16 4"/></svg>`
};

let cart = [];
let wishlist = new Set();
let activeCategory = "All";
let activeSubCategory = "All";

/* ============ RENDER: MARQUEE ============ */
function renderMarquee(){
  const words = ["✦ Handmade with love","🧶 Made to order","✦ Small batch collections","🧵 Custom pieces welcome","🎁 Gift hampers & bouquets"];
  const track = document.getElementById('marqueeTrack');
  track.innerHTML = Array(2).fill(words.map(w=>`<span>${w}</span>`).join('')).join('');
}

/* ============ RENDER: CHIPS ============ */
function renderChips(){
  const row = document.getElementById('chipRow');
  row.innerHTML = categories.map(c => `<button class="chip ${c===activeCategory?'active':''}" onclick="filterByCategory('${c}')">${c}</button>`).join('');
}

function renderSubChips(){
  const subRow = document.getElementById('subChipRow');
  const subs = subCategoryOptions[activeCategory];
  if(!subs){
    subRow.style.display = 'none';
    subRow.innerHTML = '';
    return;
  }
  subRow.style.display = 'flex';
  subRow.innerHTML = subs.map(s => `<button class="chip sub-chip ${s===activeSubCategory?'active':''}" onclick="filterBySubCategory('${s}')">${s}</button>`).join('');
}

function filterByCategory(cat){
  activeCategory = cat;
  activeSubCategory = "All";
  renderChips();
  renderSubChips();
  renderProducts();
  scrollToId('shop');
}

function filterBySubCategory(sub){
  activeSubCategory = sub;
  renderSubChips();
  renderProducts();
}

function scrollToId(id){ document.getElementById(id).scrollIntoView({behavior:'smooth', block:'start'}); }

/* ============ RENDER: PRODUCT GRID ============ */
function renderProducts(){
  const grid = document.getElementById('productGrid');
  const query = document.getElementById('searchInput').value.trim().toLowerCase();

  let list = products.filter(p => {
    const catMatch = activeCategory === "All" || p.category === activeCategory;
    const subMatch = !subCategoryOptions[activeCategory] || activeSubCategory === "All" || p.subCategory === activeSubCategory;
    const searchMatch = p.name.toLowerCase().includes(query);
    return catMatch && subMatch && searchMatch;
  });

  if(list.length===0){
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><span>Hmm, nothing here yet</span>Try a different search or browse another category.</div>`;
    return;
  }

  grid.innerHTML = list.map(p => {
    const [c1,c2] = colorMap[p.color];
    const wished = wishlist.has(p.id);
    const catLabel = p.subCategory ? `${p.category} • ${p.subCategory}` : p.category;
    return `
    <div class="card">
      <div class="yarn-tag">
        <span class="price">₹${p.price}${p.was ? `<span class="was">₹${p.was}</span>` : ''}</span>
      </div>
      <div class="card-media" style="background: linear-gradient(135deg, ${c1}, ${c2});">
        <button class="wishlist-btn ${wished?'active':''}" onclick="toggleWishlist(${p.id}, this)" aria-label="Wishlist">
          <svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
        </button>
        ${icons[p.icon]}
      </div>
      <div class="card-body">
        <span class="card-cat">${catLabel}</span>
        <h3>${p.name}</h3>
        <p class="card-caption">${p.caption}</p>
        <div class="card-footer">
          <button class="add-btn" onclick="addToCart(${p.id}, this)">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" width="15" height="15"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/></svg>
            Add to basket
          </button>
          <button class="view-btn" onclick="quickView(${p.id})" aria-label="Quick view">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/></svg>
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function quickView(id){
  const p = products.find(x=>x.id===id);
  showToast(`✦ ${p.name} — ${p.caption}`);
}

/* ============ WISHLIST ============ */
function toggleWishlist(id, btn){
  if(wishlist.has(id)){ wishlist.delete(id); btn.classList.remove('active'); }
  else{ wishlist.add(id); btn.classList.add('active'); showToast('Added to your wishlist ♡'); }
}

/* ============ CART ============ */
function addToCart(id, btn){
  const existing = cart.find(i => i.id===id);
  if(existing){ existing.qty++; }
  else{ const p = products.find(x=>x.id===id); cart.push({...p, qty:1}); }
  renderCart();
  showToast('Added to your basket 🧶');
  if(btn){
    const original = btn.innerHTML;
    btn.classList.add('added');
    btn.innerHTML = '✓ Added';
    setTimeout(()=>{ btn.classList.remove('added'); btn.innerHTML = original; }, 1200);
  }
}

function changeQty(id, delta){
  const item = cart.find(i=>i.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0) cart = cart.filter(i=>i.id!==id);
  renderCart();
}
function removeItem(id){ cart = cart.filter(i=>i.id!==id); renderCart(); }

function renderCart(){
  const itemsEl = document.getElementById('cartItems');
  const footEl = document.getElementById('cartFoot');
  const count = cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cartBadge').textContent = count;

  if(cart.length===0){
    itemsEl.innerHTML = `<div class="cart-empty"><span>🧺</span>Your basket is empty.<br>Time to find something soft.</div>`;
    footEl.innerHTML = '';
    return;
  }

  itemsEl.innerHTML = cart.map(i=>{
    const [c1,c2] = colorMap[i.color];
    return `
    <div class="cart-item">
      <div class="mini-media" style="background:linear-gradient(135deg, ${c1}, ${c2});">${icons[i.icon]}</div>
      <div class="cart-item-info">
        <span class="cat">${i.subCategory ? i.category+' • '+i.subCategory : i.category}</span>
        <h4>${i.name}</h4>
        <div class="qty-row">
          <button class="qty-btn" onclick="changeQty(${i.id},-1)">−</button>
          <span>${i.qty}</span>
          <button class="qty-btn" onclick="changeQty(${i.id},1)">+</button>
          <button class="remove-btn" onclick="removeItem(${i.id})">Remove</button>
        </div>
      </div>
      <div class="item-price">₹${i.price*i.qty}</div>
    </div>`;
  }).join('');

  const subtotal = cart.reduce((s,i)=>s+i.price*i.qty,0);
  footEl.innerHTML = `
    <div class="subtotal-row"><span>Subtotal</span><strong>₹${subtotal}</strong></div>
    <button class="checkout-btn" onclick="checkout()">
      Checkout
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" width="15" height="15"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </button>
    <p class="cart-note">${subtotal>=999 ? 'Your order qualifies for free shipping 🎉' : `Add ₹${999-subtotal} more for free shipping`}</p>
  `;
}

function checkout(){
  showToast(`Order placed! Thank you for supporting handmade 🧡`);
  cart = [];
  renderCart();
  toggleCart(false);
}

function toggleCart(open){
  document.getElementById('cartDrawer').classList.toggle('open', open);
  document.getElementById('overlay').classList.toggle('show', open);
}

/* ============ CUSTOM ORDER ============ */
function submitCustomOrder(){
  const name = document.getElementById('customName').value.trim();
  showToast(name ? `Thanks ${name}! We'll be in touch about your custom piece 🧵` : `Request sent! We'll be in touch soon 🧵`);
}

/* ============ TOAST ============ */
let toastTimer;
function showToast(msg){
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> el.classList.remove('show'), 2600);
}

/* ============ INIT ============ */
renderMarquee();
renderChips();
renderSubChips();
renderProducts();
renderCart();