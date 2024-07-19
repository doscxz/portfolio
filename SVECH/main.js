let horizontScroll = document.querySelector('.container_scroll1');
let leftbtn = document.getElementById ('leftbtn');
let rightbtn = document.getElementById ('rightbtn');

rightbtn.addEventListener('click' , ()=> {
    horizontScroll.style.scrollBehavior = 'smooth';
    horizontScroll.scrollLeft += 1900; 
});

leftbtn.addEventListener('click' , ()=> {
    horizontScroll.style.scrollBehavior = 'smooth';
    horizontScroll.scrollLeft -= 1900; 
});