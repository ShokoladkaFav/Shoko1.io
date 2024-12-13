// Масив з URL анімованих GIF спрайтів покемонів
const pokemonSprites = [
  'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu-f.gif',   // Pikachu
  'https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif',       // Eevee
  'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',    // Bulbasaur
  'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif',    // Charmander
  'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',      // Squirtle
  'https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif',        // Mewtwo
  'https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif',    // Butterfree
  'https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif',    // Jigglypuff
  'https://img.pokemondb.net/sprites/black-white/anim/normal/machop.gif',        // Machop
  'https://img.pokemondb.net/sprites/black-white/anim/normal/ponyta.gif',       // Ponyta
  'https://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif',     // Growlithe
  'https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif',      // Voltorb
  'https://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif',       // Snorlax
  'https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif',       // Psyduck
  'https://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif',      // Beedrill
  'https://img.pokemondb.net/sprites/black-white/anim/normal/vileplume.gif',     // Vileplume
  'https://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif',        // Golem
  'https://img.pokemondb.net/sprites/black-white/anim/normal/oddish.gif',       // Oddish
  'https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif',      // Alakazam
  'https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-f.gif',     // Nidoran♀
  'https://img.pokemondb.net/sprites/black-white/anim/normal/clefairy.gif',      // Clefairy
  'https://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif',       // Rattata
  'https://img.pokemondb.net/sprites/black-white/anim/normal/tentacool.gif',     // Tentacool
  'https://img.pokemondb.net/sprites/black-white/anim/normal/shelmet.gif'       // Shelmet
];

document.getElementById('spawnButton').addEventListener('click', function() {
  // Створюємо новий елемент img для покемона
  const newPokemon = document.createElement('img');
  
  // Вибираємо випадковий анімований спрайт з масиву
  const randomPokemon = pokemonSprites[Math.floor(Math.random() * pokemonSprites.length)];
  
  // Додаємо клас для відображення та встановлюємо зображення
  newPokemon.classList.add('pokemon');
  newPokemon.src = randomPokemon;

  // Додаємо нового покемона в контейнер
  const pokemonArea = document.getElementById('pokemonArea');
  pokemonArea.appendChild(newPokemon);
});

// Обробник для зміни фону
document.getElementById('changeBackgroundButton').addEventListener('click', function() {
  const backgrounds = [
    'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XQzN6dF3BQTn_yHd03rE7HhZ7rUQS8cxmw&s")',
    'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPSunUhvgCzlZX7Lg47c8PXFFZ4OXUcPr2g&s")',
    'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Fua7vx0tuDnm54Em48PmUGyhtOdL5cj3Tg&s")'
  ];

  // Вибір випадкового фону
  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  // Зміна фону сторінки
  document.body.style.backgroundImage = randomBackground;

// Кнопка для відображення гіфки Порошенка
document.getElementById('porshenkoButton').addEventListener('click', function () {
  const porshenkoGifURL = 'https://i.gifer.com/XYFP.gif'; // Пряме посилання на гіфку
  const porshenkoContainer = document.getElementById('porshenkoGifContainer');

  // Очищуємо попередній вміст контейнера
  porshenkoContainer.innerHTML = '';

  // Додаємо нову гіфку
  const gifImage = document.createElement('img');
  gifImage.src = porshenkoGifURL;
  gifImage.alt = 'Poroshenko';
  gifImage.style.width = '500px'; // Змінено розмір на більший
  gifImage.style.height = 'auto'; // Автоматична пропорція
  porshenkoContainer.appendChild(gifImage);
});

});
