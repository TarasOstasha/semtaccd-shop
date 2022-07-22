const observer = new IntersectionObserver(entries => { // set observer to find every time block text location X/Y
    console.log(entries)
    entries.forEach(entry => {
        if (entry.isIntersecting) { // check if we here
            document.querySelectorAll('.home-instructions-paragraph')[0].classList.add('fade-in');
            document.querySelectorAll('.home-instructions-paragraph')[0].classList.remove('fade-out');
        } else {
            document.querySelectorAll('.home-instructions-paragraph')[0].classList.add('fade-out');
            document.querySelectorAll('.home-instructions-paragraph')[0].classList.remove('fade-in');
        }
    });
});

observer.observe(document.querySelector('.home-introduction-text')); // set observer to parent wrapper

// for tabs menu
let wrapper = document.getElementsByClassName('hsi-background')[0];
let galleryImgArr = [
    { name: 'list item 1', src: '/images/home1.jpg' },
    { name: 'list item 2', src: '/images/home2.jpg' },
    { name: 'list item 3', src: '/images/home3.jpg' },
    { name: 'list item 4', src: '/images/home4.jpg' },
    { name: 'list item 5', src: '/images/home5.jpg' },
    { name: 'list item 6', src: '/images/home6.jpg' }
]
// document.querySelectorAll('.list-item').forEach(element => {
//     wrapper.style.backgroundImage="url(/images/home6.jpg)";
//     console.log(element)
// });

galleryImgArr.forEach(element => {
    console.log(element.name)
    let li = document.createElement('li');
    document.getElementById('tabs-menu').appendChild(li);
    li.innerHTML = element.name;
    li.addEventListener('mouseover', function(event) {
        console.log(element.src)
        changeTo(wrapper, element.src);
    });
    
});
function changeTo(x, img) {
    x.style.backgroundImage = `url(${img})`;
    x.style.transitionDuration = '1s';
}

function changeBack(x, img) {
    x.style.backgroundColor = img;
}
// another way
for (let key of galleryImgArr) {
    //console.log(key.name)
    // li = document.createElement('li');
    // document.getElementById('tabs-menu').appendChild(li);
}
