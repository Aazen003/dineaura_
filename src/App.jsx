import React, { useEffect, useState } from "react";

const productsEndpoint = "/products.json";

function Lightbox({ isOpen, onClose, item }) {
  if (!isOpen || !item) return null;
  const isAvailable = (item.available || "yes").toLowerCase() === "yes";

  return (
    <div className="lightbox lightbox--open" onClick={onClose}>
      <button className="lightbox__close" aria-label="Close zoomed image" onClick={onClose}>
        &times;
      </button>
      <div className="lightbox__image-wrap">
        <img src={item.image} alt={item.name} />
        {!isAvailable && <div className="lightbox__badge">Out of stock</div>}
      </div>
    </div>
  );
}

function ProductCard({ item, onZoom }) {
  const isAvailable = (item.available || "yes").toLowerCase() === "yes";

  return (
    <article className={`card ${isAvailable ? "" : "card--unavailable"}`} data-name={item.name} data-price={item.price}>
      <figure>
        <img src={item.image} alt={item.name} loading="lazy" onClick={() => onZoom(item)} />
        {!isAvailable && <div className="card__badge">Out of stock</div>}
      </figure>
      <div className="card__meta">
        <h3>{item.name}</h3>
        {isAvailable ? <p className="price">{item.price}</p> : <p className="price price--hidden"></p>}
      </div>
    </article>
  );
}

export default function App() {
  const [products, setProducts] = useState([]);
  const [lightboxItem, setLightboxItem] = useState(null);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(productsEndpoint);
        if (!res.ok) throw new Error(`Failed to load products: ${res.status}`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.error(err);
        setProducts([]);
      }
    };
    load();
  }, []);

  const normalize = (value = "") => value.toLowerCase().replace(/\s+/g, "");

  const normalizedFilter = filter.toLowerCase();
  const filteredByType =
    normalizedFilter === "all"
      ? products
      : products.filter((p) => (p.type || "").toLowerCase() === normalizedFilter);

  const normalizedQuery = normalize(query);
  const filteredProducts = normalizedQuery
    ? filteredByType.filter((p) => normalize(p.name).includes(normalizedQuery))
    : filteredByType;

  return (
    <>
      <header className="hero">
        <div className="hero__content">
          <p className="eyebrow">Welcome to</p>
          <h1 className="title">Dine Aura</h1>
          <p className="subtitle">Where modern meets timeless</p>
        </div>
        <div className="hero__logo">
          <img src="/assets/logo2.png" alt="Dine Aura logo" loading="lazy" />
        </div>
      </header>

      <main className="catalog">
        <div className="catalog__intro">
          <h2>Featured Collection</h2>
        </div>

        <div className="controls">
          <div className="filters">
            {["all", "golden", "silver", "wooden"].map((key) => (
              <button
                key={key}
                className={`filter-btn ${filter === key ? "is-active" : ""}`}
                onClick={() => setFilter(key)}
                type="button"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
          <div className="search">
            <input
              type="search"
              placeholder="Search pieces"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <section className="grid">
          {filteredProducts.length === 0 ? (
            <p className="empty-state">No products yet.</p>
          ) : (
            filteredProducts.map((item) => <ProductCard key={item.name} item={item} onZoom={setLightboxItem} />)
          )}
        </section>
      </main>

      <footer className="footer">
        <p className="footer__cta">DM to place your orders</p>
        <p>Delivery all over 🇵🇰</p>
        <p>📍 Lahore, Pakistan</p>
        <p>📞 WhatsApp: +92 329 0114211</p>
      </footer>

      <Lightbox isOpen={!!lightboxItem} item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </>
  );
}

