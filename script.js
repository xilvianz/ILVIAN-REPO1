function loopCarousel(id) {
  const row = document.getElementById(id);
  const clone = row.innerHTML;
  row.innerHTML += clone;
}

loopCarousel('men-row');
loopCarousel('women-row');
loopCarousel('kids-row');
loopCarousel('fragrance-row');
