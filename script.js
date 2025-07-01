const products = {
  men: [
    { img: 'images/men1.jpg', name: 'Formal Shirt', price: '৳1290' },
    { img: 'images/men2.jpg', name: 'T-shirt', price: '৳790' },
    // add up to men8.jpg
  ],
  women: [
    { img: 'images/women1.jpg', name: 'Summer Dress', price: '৳1690' },
    { img: 'images/women2.jpg', name: 'Top', price: '৳990' },
    // add up to women8.jpg
  ],
  kids: [
    { img: 'images/kids1.jpg', name: 'T-shirt', price: '৳590' },
    { img: 'images/kids2.jpg', name: 'Shorts', price: '৳490' },
    // add up to kids8.jpg
  ],
  fragrance: [
    { img: 'images/fragrance1.jpg', name: 'Perfume A', price: '৳890' },
    { img: 'images/fragrance2.jpg', name: 'Perfume B', price: '৳990' },
    // add up to fragrance8.jpg
  ]
};

const container = document.getElementById('product-container');
const tabs = document.querySelectorAll('.tab');

function loadCategory(category) {
  container.innerHTML = '';
  products[category].forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div class="product-info">
        <p>${p.name}</p>
        <span>${p.price}</span>
      </div>
    `;
    container.appendChild(div);
  });
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelector('.tab.active').classList.remove('active');
    tab.classList.add('active');
    loadCategory(tab.dataset.category);
    window.scrollTo(0,0);
  });
});

// Initial load MEN category
loadCategory('men');
document.addEventListener("DOMContentLoaded", function() {
  const searchIcon = document.getElementById("searchIcon");
  const searchInput = document.getElementById("searchInput");
  const productCards = document.querySelectorAll(".product-card");

  searchIcon.addEventListener("click", () => {
    if (searchInput.style.display === "none" || searchInput.style.display === "") {
      searchInput.style.display = "inline-block";
      searchInput.focus();
    } else {
      searchInput.style.display = "none";
    }
  });

  searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();
    let found = false;

    productCards.forEach(card => {
      const name = card.querySelector("p").textContent.toLowerCase();
      if (name.includes(filter)) {
        card.style.display = "";
        found = true;
      } else {
        card.style.display = "none";
      }
    });

    if (!found) {
      if (!document.getElementById("notFound")) {
        const nf = document.createElement("div");
        nf.id = "notFound";
        nf.textContent = "No product found.";
        nf.style.textAlign = "center";
        nf.style.marginTop = "20px";
        document.body.appendChild(nf);
      }
    } else {
      const nf = document.getElementById("notFound");
      if (nf) nf.remove();
    }
  });
});
