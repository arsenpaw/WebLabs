const element = document.querySelector('.header__nav');
const onClick = () => {
  if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

const scrollBtn = document.getElementById('scrollBtn');
const targetSection = document.getElementById('targetSection');

scrollBtn.addEventListener('click', () => {
  targetSection.scrollIntoView({ behavior: 'smooth' });
});
