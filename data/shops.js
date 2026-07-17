/* ==========================================================================
   Bayshore Plaza — shop directory data
   --------------------------------------------------------------------------
   HOW TO EDIT: each entry below is one card on directory.html.
   After the tenant walk-through, replace the generic names, add real unit
   numbers and phone numbers, and set `whatsapp` to the shop's WhatsApp
   number in international format WITHOUT "+" or spaces (e.g. "18768299889")
   to show a "Message" button. Leave `whatsapp: ""` to hide the button.

   PLACEHOLDER: every entry marked `placeholder: true` is a GENERIC seed
   based on the plaza's known amenity mix — NOT a real business name.
   The four entries marked `placeholder: false` (Knutsford Express, Shipwize,
   NCB ATM, Scotiabank ATM) are publicly known tenants/amenities, but their
   unit numbers and phones still need confirming.
   ========================================================================== */

const SHOP_CATEGORIES = [
  "Food & Groceries",
  "Health",
  "Fashion",
  "Electronics & Home",
  "Beauty & Barbering",
  "Banking & ATMs",
  "Travel & Shipping",
  // Add more categories here as real tenants are confirmed, e.g. "Services"
];

const SHOPS = [
  // PLACEHOLDER: generic entries — replace with real tenant names
  {
    name: "Supermarket",
    category: "Food & Groceries",
    unit: "Unit —", // PLACEHOLDER: unit number
    phone: "", // PLACEHOLDER: phone
    whatsapp: "",
    blurb: "Groceries, household goods and fresh produce.",
    placeholder: true,
  },
  {
    name: "Restaurant & Food Spot",
    category: "Food & Groceries",
    unit: "Unit —", // PLACEHOLDER: unit number
    phone: "", // PLACEHOLDER: phone
    whatsapp: "",
    blurb: "Cooked meals, Jamaican favourites and quick bites.",
    placeholder: true,
  },
  {
    name: "Farmers Market",
    category: "Food & Groceries",
    unit: "Plaza grounds", // PLACEHOLDER: confirm location/days
    phone: "",
    whatsapp: "",
    blurb: "Fresh fruits, vegetables and local produce.",
    placeholder: true,
  },
  {
    name: "Pharmacy",
    category: "Health",
    unit: "Unit —", // PLACEHOLDER: unit number
    phone: "", // PLACEHOLDER: phone
    whatsapp: "",
    blurb: "Prescriptions, over-the-counter medicine and personal care.",
    placeholder: true,
  },
  {
    name: "Doctors' Offices",
    category: "Health",
    unit: "Unit —", // PLACEHOLDER: unit number
    phone: "", // PLACEHOLDER: phone
    whatsapp: "",
    blurb: "Medical practitioners in the plaza.",
    placeholder: true,
  },
  {
    name: "Clothing Store",
    category: "Fashion",
    unit: "Unit —", // PLACEHOLDER: unit number
    phone: "", // PLACEHOLDER: phone
    whatsapp: "",
    blurb: "Clothes and fashion for the whole family.",
    placeholder: true,
  },
  {
    name: "Bridal Shop",
    category: "Fashion",
    unit: "Unit —", // PLACEHOLDER: unit number
    phone: "", // PLACEHOLDER: phone
    whatsapp: "",
    blurb: "Wedding gowns, formal wear and accessories.",
    placeholder: true,
  },
  {
    name: "Haberdashery",
    category: "Fashion",
    unit: "Unit —", // PLACEHOLDER: unit number
    phone: "", // PLACEHOLDER: phone
    whatsapp: "",
    blurb: "Fabric, sewing supplies and notions.",
    placeholder: true,
  },
  {
    name: "Electronics Store",
    category: "Electronics & Home",
    unit: "Unit —", // PLACEHOLDER: unit number
    phone: "", // PLACEHOLDER: phone
    whatsapp: "",
    blurb: "Phones, accessories and electronics.",
    placeholder: true,
  },
  {
    name: "Furniture & Appliance Store",
    category: "Electronics & Home",
    unit: "Unit —", // PLACEHOLDER: unit number
    phone: "", // PLACEHOLDER: phone
    whatsapp: "",
    blurb: "Furniture, appliances and home goods.",
    placeholder: true,
  },
  {
    name: "Barber Shop",
    category: "Beauty & Barbering",
    unit: "Unit —", // PLACEHOLDER: unit number
    phone: "", // PLACEHOLDER: phone
    whatsapp: "",
    blurb: "Cuts, trims and grooming.",
    placeholder: true,
  },
  {
    name: "Beauty Salon",
    category: "Beauty & Barbering",
    unit: "Unit —", // PLACEHOLDER: unit number
    phone: "", // PLACEHOLDER: phone
    whatsapp: "",
    blurb: "Hair, nails and beauty services.",
    placeholder: true,
  },

  // Publicly known tenants/amenities — details still to confirm
  {
    name: "NCB ATM",
    category: "Banking & ATMs",
    unit: "Plaza grounds", // PLACEHOLDER: confirm exact spot
    phone: "",
    whatsapp: "",
    blurb: "National Commercial Bank automated teller machine.",
    placeholder: false,
  },
  {
    name: "Scotiabank ATM",
    category: "Banking & ATMs",
    unit: "Plaza grounds", // PLACEHOLDER: confirm exact spot
    phone: "",
    whatsapp: "",
    blurb: "Scotiabank automated teller machine.",
    placeholder: false,
  },
  {
    name: "Knutsford Express Depot",
    category: "Travel & Shipping",
    unit: "Plaza grounds", // PLACEHOLDER: confirm exact spot
    phone: "", // PLACEHOLDER: depot phone
    whatsapp: "",
    blurb: "Coach service connecting Port Antonio island-wide.",
    placeholder: false,
  },
  {
    name: "Shipwize Shipping Office",
    category: "Travel & Shipping",
    unit: "Unit —", // PLACEHOLDER: unit number
    phone: "", // PLACEHOLDER: phone
    whatsapp: "",
    blurb: "Package shipping and courier services.",
    placeholder: false,
  },
];
