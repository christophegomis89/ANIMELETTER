
//Je récupére la balise h3
const target = document.getElementById("target");
//Création du tableau avec tous mes mots
let array = ["JEAN CHRISTOPHE GOMIS", "DÉVELOPPEUR WEB", "JAVASCRIPT/ REACT/ JQUERY", "PHP/SYMFONY"];
//initialisation du premier mot du tableau
let wordIndex = 0;
//initialisation de la premiére lettre
let letterIndex = 0;

const createLetter = () => {

      const letter = document.createElement("span");
      target.appendChild(letter);

      letter.classList.add("letter");
      letter.style.opacity = '0';
      letter.style.animation = "anim 5s ease forwards";
      letter.textContent = array[wordIndex][letterIndex];

      setTimeout(() => {
            letter.remove();
      }, 2000);
};

const loop = () => {
      setTimeout(() => {
            if (wordIndex >= array.length) {
                  wordIndex = 0;
                  letterIndex = 0;
                  loop();

            } else if (letterIndex < array[wordIndex].length) {
                  createLetter();
                  letterIndex++;
                  loop();

            } else {
                  letterIndex = 0;
                  wordIndex++;
                  setTimeout(() => {
                        loop();
                  }, 2000);
            }
      }, 80);
}
loop();