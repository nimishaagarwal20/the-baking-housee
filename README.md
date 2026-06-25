# The Baking House by Tanisha Agarwal

A beautiful, responsive, and modern bakery website for **The Baking House by Tanisha Agarwal**, a homegrown **100% eggless bakery** offering cakes, cupcakes, tea cakes, cookies, doughnuts, brownies, cookie dough cups, customised hampers, and muffins.

The website is designed with a soft purple brand theme, warm bakery-inspired visuals, clean navigation, product sections, enquiry forms, testimonials, FAQs, and WhatsApp-based ordering functionality.

---

## Project Overview

**The Baking House by Tanisha Agarwal** is a homegrown eggless bakery brand focused on freshly baked desserts for celebrations, gifting, and everyday cravings.

This website helps customers:

* Explore available bakery products
* Learn about the brand
* View customer favourites
* Submit custom order enquiries
* Request customised dessert hampers
* Contact the bakery through WhatsApp
* Follow the brand on Instagram

The website is built to be simple, aesthetic, mobile-friendly, and easy to maintain.

---

## Brand Details

**Brand Name:** The Baking House by Tanisha Agarwal
**Business Type:** Homegrown 100% Eggless Bakery
**Primary Theme:** Shades of Purple
**Brand Feel:** Warm, premium, homemade, elegant, friendly, and trustworthy

### Products Offered

* Cakes
* Cupcakes
* Tea Cakes
* Cookies
* Doughnuts
* Brownies
* Cookie Dough Cups
* Customised Hampers
* Muffins

---

## Tech Stack

This project is built using:

* **React**
* **Vite**
* **JavaScript**
* **Tailwind CSS**
* **HTML5**
* **CSS3**
* **WhatsApp Click-to-Chat Integration**

---

## Features

### Responsive Website

The website is fully responsive and works smoothly on:

* Mobile devices
* Tablets
* Laptops
* Desktop screens

### Website Sections

The website includes the following sections:

* Home
* About
* Menu / Products
* Customer Favourites
* Custom Orders
* Customised Hampers
* Why Choose Us
* Gallery
* Testimonials
* FAQ
* Contact
* Footer

### WhatsApp Ordering

Customers can submit their order details through the enquiry form. The form creates a formatted WhatsApp message and opens WhatsApp for direct communication.

Example enquiry details collected:

* Name
* Phone number
* Occasion
* Product type
* Date required
* Quantity
* Flavour preference
* Customisation details
* Message

### Product Cards

The product section displays bakery categories in attractive cards with descriptions and enquiry buttons.

### Custom Order Form

The custom order section allows customers to share their cake, hamper, or dessert requirements directly.

### Testimonials

Customer review cards are included to build trust and social proof.

### FAQ Accordion

A frequently asked questions section helps customers understand order process, customisation, eggless products, and delivery details.

### Gallery

The gallery section is designed to showcase bakery products such as cakes, cupcakes, brownies, cookies, doughnuts, muffins, tea cakes, and hampers.

---

## Color Palette

The website uses a soft purple-inspired brand palette.

| Color Name    | Hex Code  |
| ------------- | --------- |
| Deep Purple   | `#5B2A86` |
| Medium Purple | `#8E44AD` |
| Lavender      | `#C8A2C8` |
| Soft Lilac    | `#EBD7F4` |
| Pastel Pink   | `#F2CDEB` |
| Cream White   | `#FFF8F2` |
| Dark Text     | `#2C1B35` |

---

## Suggested Folder Structure

```bash
the-baking-house/
│
├── public/
│   ├── logo.jpeg
│   └── images/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── ProductMenu.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── CustomOrders.jsx
│   │   ├── Hampers.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/the-baking-house.git
```

### 2. Navigate to the Project Folder

```bash
cd the-baking-house
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open in Browser

Visit:

```bash
http://localhost:5173
```

---

## Running the Project on Replit

To run this project on Replit:

1. Open Replit
2. Create a new React or Vite project
3. Upload or paste the project files
4. Install dependencies
5. Add the bakery logo inside the `public` or `src/assets` folder
6. Run the project
7. Update the WhatsApp number, Instagram link, and contact details

---

## Customization Guide

### Update WhatsApp Number

Find the WhatsApp number variable in the code:

```javascript
const whatsappNumber = "91XXXXXXXXXX";
```

Replace it with the actual business WhatsApp number.

Example:

```javascript
const whatsappNumber = "919876543210";
```

Do not include `+`, spaces, or special characters.

---

### Update Instagram Handle

Replace the placeholder Instagram handle:

```text
@thebakinghouse
```

With the actual Instagram username.

---

### Update Location

Replace:

```text
Add city/local area here
```

With the bakery’s actual service location.

---

### Update Logo

Add the logo file inside the `public` folder or `src/assets` folder and update the image path wherever the logo is used.

Example:

```jsx
<img src="/logo.jpeg" alt="The Baking House by Tanisha Agarwal Logo" />
```

---

### Update Product Images

Replace placeholder gallery images with real product photos.

Recommended image categories:

* Cakes
* Cupcakes
* Brownies
* Cookies
* Doughnuts
* Muffins
* Tea cakes
* Hampers

---

## SEO Details

The website includes basic SEO-friendly content.

Recommended page title:

```text
The Baking House by Tanisha Agarwal | 100% Eggless Homegrown Bakery
```

Recommended meta description:

```text
Freshly baked 100% eggless cakes, cupcakes, brownies, cookies, muffins, doughnuts, tea cakes, cookie dough cups, and customised hampers by The Baking House by Tanisha Agarwal.
```

---

## Accessibility Features

The website should include:

* Clear heading hierarchy
* Alt text for images
* Accessible form labels
* Keyboard-friendly buttons
* Good color contrast
* Responsive font sizes
* Clear call-to-action buttons

---

## Deployment

This project can be deployed using:

* Replit
* Vercel
* Netlify
* GitHub Pages
* Render

### Build Command

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

---

## Future Enhancements

Possible future improvements:

* Add online payment integration
* Add product pricing
* Add admin dashboard for menu updates
* Add real customer reviews
* Add Instagram feed integration
* Add order tracking
* Add delivery area checker
* Add seasonal menu section
* Add festival hamper catalogue
* Add product filtering by category
* Add photo gallery lightbox

---

## License

This project is created for **The Baking House by Tanisha Agarwal**.

All brand assets, logo, content, and images belong to the brand owner. Do not reuse them without permission.

---

## Author

Created for:

**The Baking House by Tanisha Agarwal**
A homegrown 100% eggless bakery.

---

## Project Status

Current status: **In Development**

The website structure, design, and content are ready to be customised with real product images, contact details, WhatsApp number, Instagram link, and bakery location.
