document.addEventListener("DOMContentLoaded", function () {
  const toggleDay = document.querySelector(".toggle-day");
  const iframe = document.querySelector('.bruhframe');
  const e = document.querySelector('#d');

  toggleDay.addEventListener("mouseover", function () {
    const randomRotation = (Math.random() * 6 - 3).toFixed(2); 
    toggleDay.style.transform = `scale(1.1) rotate(${randomRotation}deg)`;
    toggleDay.style.opacity = "0.8";
  });

  toggleDay.addEventListener("mouseout", function () {
    toggleDay.style.transform = "scale(1)";
    toggleDay.style.opacity = "1";
  });

  toggleDay.addEventListener("click", function () {
    if (iframe.src.includes("europemc-map-night.pages.dev")) {
      iframe.src = "https://europemc-map.pages.dev";
      e.innerHTML = "Night";
    } else {
      iframe.src = "https://europemc-map-night.pages.dev";
      e.innerHTML = "Day";
    }
  });
});


alert('on Betea Preview')
