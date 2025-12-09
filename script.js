const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.querySelector(".lightbox__close");
const grid = document.getElementById("product-grid");

const productsEndpoint = "products.json";

const openLightbox = (imgEl) => {
  const card = imgEl.closest(".card");
  const name = card?.dataset.name || "";
  const price = card?.dataset.price || "";

  lightboxImg.src = imgEl.src;
  lightboxImg.alt = imgEl.alt;
  lightboxCaption.textContent = `${name}${price ? " · " + price : ""}`;
  lightbox.classList.add("lightbox--open");
};

const renderProducts = (items = []) => {
  if (!grid) return;

  if (!items.length) {
    grid.innerHTML = `<p class="empty-state">No products yet.</p>`;
    return;
  }

  grid.innerHTML = items
    .map(
      (item) => `
        <article class="card" data-name="${item.name}" data-price="${item.price}">
          <figure>
            <img src="${item.image}" alt="${item.name}" loading="lazy">
          </figure>
          <div class="card__meta">
            <h3>${item.name}</h3>
            <p class="price">${item.price}</p>
          </div>
        </article>
      `
    )
    .join("");
};

const loadProducts = async () => {
  try {
    const res = await fetch(productsEndpoint);
    if (!res.ok) throw new Error(`Failed to load products: ${res.status}`);
    const data = await res.json();
    if (Array.isArray(data)) {
      renderProducts(data);
    } else {
      renderProducts([]);
    }
  } catch (err) {
    console.error(err);
    renderProducts([]);
  }
};

grid?.addEventListener("click", (evt) => {
  const target = evt.target;
  if (target && target.tagName === "IMG") {
    openLightbox(target);
  }
});

loadProducts();

const closeLightbox = () => {
  lightbox.classList.remove("lightbox--open");
  lightboxImg.src = "";
};

closeBtn?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", (evt) => {
  if (evt.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape" && lightbox.classList.contains("lightbox--open")) {
    closeLightbox();
  }
});

