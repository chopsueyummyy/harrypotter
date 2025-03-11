function assignHouse() {
  const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
  const randomHouse = houses[Math.floor(Math.random() * houses.length)];
  alert(`The Sorting Hat has spoken! You belong to ${randomHouse}!`);
}

document.addEventListener("DOMContentLoaded", () => {
  const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  const button = document.createElement("button");
  button.textContent = "Find Your Hogwarts House";
  button.style.display = "block";
  button.style.margin = "20px auto";
  button.style.padding = "10px";
  button.style.fontSize = "1.2em";
  button.style.cursor = "pointer";
  
  const housesSection = document.getElementById("houses");
  housesSection.appendChild(button);
  
  button.addEventListener("click", () => {
      const randomHouse = houses[Math.floor(Math.random() * houses.length)];
      alert(`Congratulations! You have been sorted into ${randomHouse}.`);
  });

  // ✨ Magical Hover Effect (Spells & Creatures)
  document.querySelectorAll(".spell-card, .creature-card").forEach((card) => {
      card.addEventListener("mouseenter", function () {
          this.style.transform = "translateY(-10px) scale(1.05)";
          this.style.boxShadow = "0 0 20px gold";
          this.style.transition = "0.3s ease-in-out";
      });
      card.addEventListener("mouseleave", function () {
          this.style.transform = "translateY(0) scale(1)";
          this.style.boxShadow = "none";
      });
  });

  // 📜 Owl Post Animation
  document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents actual form submission

      const form = this;
      const owl = document.createElement("img");
      owl.src = "200w.gif"; // Replace with an owl GIF or animated image
      owl.style.position = "fixed";
      owl.style.bottom = "0px";
      owl.style.left = "50%";
      owl.style.transform = "translateX(-50%)";
      owl.style.width = "100px";
      owl.style.transition = "bottom 3s ease-in-out";

      document.body.appendChild(owl);

      setTimeout(() => {
          owl.style.bottom = "100vh"; // Makes the owl fly away
      }, 100);

      setTimeout(() => {
          alert("Your message has been sent via Owl Post!");
          document.body.removeChild(owl);
          form.reset(); // Clears the form after submission
      }, 3000);
  });
});