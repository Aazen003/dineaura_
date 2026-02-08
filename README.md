# **Dine Aura – Curated Tableware Gallery**

A single-page React experience showcasing **premium serveware and tableware** in a high-end, editorial-style gallery.  
Designed as a **visual portfolio + lightweight catalog**, Dine Aura focuses on aesthetic impact, smooth interactions, and effortless browsing.

---

## ✨ Overview

**Dine Aura** presents curated tableware collections in a cinematic, luxury-focused interface.  
It’s built for boutique brands that want to **showcase products beautifully** while remaining practical for real-world ordering.

---

## 🌟 Key Highlights

### 🎨 Polished, Luxury Visual Design

-   Dark, cinematic background with subtle animated gradients
    
-   Editorial typography using **Playfair Display** (headings) and **Inter** (body)
    
-   Glass-inspired product cards with soft glows and smooth hover transitions
    
-   Minimal UI that keeps attention on the products and is easy on the eyes
    

---

### 🛍 Elegant Product Browsing

-   Filter collections:
    
    -   **All**
        
    -   **Golden**
        
    -   **Silver**
        
    -   **Wooden**
        
-   Live search with forgiving normalization:
    
    -   Case-insensitive
        
    -   Ignores extra spaces
        
-   Responsive grid that scales cleanly from mobile to large screens
    

---

### 🔍 Immersive Product Zoom (Lightbox)

-   Click any product to open a **full-screen lightbox**
    
-   High-resolution image display
    
-   Multiple close options:
    
    -   Close (×) button
        
    -   **Esc** key
        
    -   Click outside the image
        
-   Reusable `<Lightbox />` component driven by selected product state
    

---

### 🏷 Clear Availability & Pricing Signals

-   Products are data-driven with:
    
    -   `type`
        
    -   `price`
        
    -   `available` status
        
-   **Out-of-stock items** are visually distinguished:
    
    -   Desaturated card styling
        
    -   “Out of stock” badges (card + lightbox)
        
    -   Price hidden to avoid misleading users
        
-   Makes the catalog feel **shop-ready and realistic**
    

---

### 🗂 Simple, Data-Driven Content Model

-   All products live in a flat **JSON file**
    
-   No React code changes needed to:
    
    -   Add products
        
    -   Remove products
        
    -   Update pricing or availability
        
-   Ideal for small brands or rapid updates
    

Each product includes:

```json
{
  "name": "Product Name",
  "price": "10,000 RS",
  "image": "/assets/product.jpg",
  "type": "golden",
  "available": "yes"
}
```

---

### 📱 Responsive & Mobile-Friendly

-   Flexible grid and spacing for all screen sizes
    
-   Touch-friendly filters and search
    
-   Adaptive padding for hero and catalog sections
    
-   Smooth experience across mobile, tablet, and desktop
    

---

### 📦 Contact & Ordering Section

Footer includes clear call-to-actions:

-   **DM to place your orders**
    
-   Delivery availability: 🇵🇰 Pakistan
    
-   Physical location details
    
-   WhatsApp contact number
    

Positions the site as a **practical sales tool**, not just a showcase.

---

## 🛠 Tech Stack

-   **Frontend:** React 18
    
-   **Build Tool:** Vite 5
    
-   **Styling:** Handcrafted CSS (`src/styles.css`)
    
-   **Data:** Static JSON (`products.json`)
    

---

## 📁 Project Structure

```plaintext
├── index.html              # Base HTML shell
├── src/
│   ├── main.jsx            # React root entry
│   ├── App.jsx             # Main application logic
│   └── styles.css          # Core UI styling
├── public/
│   ├── assets/             # Product images & brand assets
│   └── products.json       # Product data (used by the app)
├── products.json           # Mirrored data file (root-level)
├── vite.config.js          # Vite configuration
└── styles.css              # Legacy/alternate CSS
```

---

## 🚀 Getting Started

### Prerequisites

-   **Node.js** (LTS recommended)
    
-   **npm** or another Node package manager
    

---

### Install Dependencies

```bash
npm install
```

---

### Run in Development

```bash
npm run dev
```

Open the local URL shown in the terminal  
(usually `http://localhost:5173`)

---

### Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🎛 Customization

### Add or Update Products

Edit:

```plaintext
public/products.json
```

-   Ensure image paths exist under `/public/assets`
    
-   Set `type` correctly for filtering
    
-   Use:
    
    ```json
    "available": "no"
    ```
    
    for out-of-stock items
    

---

### Adjust Visual Theme

Modify CSS variables in:

```plaintext
src/styles.css
```

Core theme variables:

```css
--bg
--accent
--text
--muted
--shadow
```

---

### Modify Filters

Update the filter button array inside `App.jsx` to add or remove collections.

---

## 🎯 Intended Use

This project is ideal as:

-   A **portfolio-style catalog** for boutique brands
    
-   A **product showcase** linked from Instagram or WhatsApp
    
-   A **design + engineering portfolio project**
    
-   A foundation for future e-commerce expansion
    

---

