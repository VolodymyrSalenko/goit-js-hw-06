const categoriesEl = document.querySelector('#categories').children;
const numberOfCategories = categoriesEl.length;

console.log('Number of categories:', numberOfCategories);


[...categoriesEl].forEach(element => {

    const category = element.firstElementChild.textContent;
    const listOfElements = element.lastElementChild.children;
    const numberOfElements = listOfElements.length;

    console.log('Category: ', category);
    console.log('Elements: ', numberOfElements); 
    
});