let scrollInterval;

function startScroll() {
  scrollInterval = setInterval(() => {
    document.querySelector('.gallery').scrollLeft += 10;
  }, 10);
}

function stopScroll() {
  clearInterval(scrollInterval);
}