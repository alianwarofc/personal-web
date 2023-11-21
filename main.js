import Typed from 'typed.js';
import Confetti from 'canvas-confetti'

const typed = new Typed('#element', {
  strings: ['Hi Everyone','I am Your', 'Future Developer'],
  typeSpeed: 40,
  backSpeed: 60,
  loop: true,
  cursorChar: "|",
});

const btnClickMe = document.getElementById('confetti-btn');
btnClickMe.addEventListener("click", () => {
    const btnConfetti = new Confetti();
    confetti.addConfetti({
        emojis: ['🤵', '🍕', '💥', '🐱‍🏍', '🎶', '👀', '❤'],
        emojiSize: 30,
        confettiNumber: 100,
    });
});