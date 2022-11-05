import './style.css';
import showFoods from './modules/showMeals.js';
import showMe from './modules/showLike.js';
import mealsTab from './modules/mealsCounter.js';
import populateTalk from './modules/populateComment.js';

// Constants
const urls = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N317ounBUtSwOefLVAgO/comments';
const mealsListContainer = document.querySelector('.f-list');

// Populate the meals cards items
document.addEventListener('DOMContentLoaded', async () => {
  await showFoods(mealsListContainer);
  // Selecet meals items
  const meals = document.getElementsByClassName('meal-card');
  const counterContentText = document.querySelector('.meals-counts');
  counterContentText.textContent = mealsTab([...meals]);
  
  const textLikes = document.getElementsByClassName('card-likes-txt');
  [...textLikes].forEach(async (textLike) => {
    await showMe(textLike);
  });
});

window.addEventListener('click', async (e) => {
  
  const likeBtn = e.target;
  if (likeBtn.classList.contains('card-likes')) {
    
    const mealId = likeBtn.getAttribute('data-id');
    await addPlus(mealId);
    
    const txtlike = likeBtn.parentElement.previousElementSibling.lastChild.previousSibling;
    await showMe(txtlike);
  }
});

const handleCommentClick = async (meals) => {
  const [id, name, category, image, origin] = meals;
  await populateTalk(id, name, category, image, origin, urls);
  const thepopup = document.getElementById('popup');
  document.body.classList.add('body-y-scroll');
  thepopup.classList.add('popup2');
};

window.handleCommentClick = handleCommentClick;