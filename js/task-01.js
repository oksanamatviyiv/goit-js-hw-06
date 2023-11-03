const navEl = document.querySelector('#categories');
const navItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${navItems.length}`);

navItems.forEach(item => {
    const itemTitle = item.querySelector('h2').textContent;
    const itemList = item.querySelectorAll('li');

console.log(`Category: ${itemTitle}`); 
console.log(`Elements: ${itemList.length}`);
});