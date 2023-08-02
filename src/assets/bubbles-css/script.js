function createBubble() {
  const bubblesContainer = document.querySelector(".bubbles-container");
  const spanEl = document.createElement("span");

  // set properties
  let params = {
    size: Math.random() * 30 + 20,
    x: Math.random() * 10000,
    y: Math.random() * 10000,
  };

  spanEl.classList.add("bubble");
  spanEl.style.width = `${params.size}px`;
  spanEl.style.height = `${params.size}px`;

  //  animate the element
  const frames = [
    { transform: `translate(-${params.x}%, 100%)` },
    { transform: `translate(-${params.x}%,-${params.y}%)` },
  ];

  const timing = {
    duration: 20000,
    iterations: 1,
  };

  spanEl.animate(frames, timing);

  bubblesContainer.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 20000);
}
setInterval(createBubble, 500);
