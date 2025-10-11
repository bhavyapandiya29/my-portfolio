
const words = ["Coder","Youtuber", "Artist", ];
let i = 0;
const textElement = document.querySelector(".changing-text");

// function changeWord() {
//   textElement.classList.add("slide");
//   setTimeout(() => {
//     textElement.textContent = words[i];
//     textElement.classList.remove("slide");
//     i = (i + 1) % words.length;
//   }, 600);
// }
const colors = ["#00ffcc","#ff3366","#ffee32"];

function changeWord() {
  textElement.textContent = words[i];
  textElement.style.color = colors[i];
  i = (i + 1) % words.length;
}




changeWord();


setInterval(changeWord, 1000);




  let index = 0;
  const slides = document.querySelectorAll(".certificate_item");
  const total = slides.length;

  function showSlide(newIndex) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active", "prev");
      if (i === newIndex) {
        slide.classList.add("active");
      } else if (i === (newIndex - 1 + total) % total) {
        slide.classList.add("prev");
      }
    });
  }

  function nextSlide() {
    index = (index + 1) % total;
    showSlide(index);
  }

  
  showSlide(index);

  
  setInterval(nextSlide, 2000);



  



