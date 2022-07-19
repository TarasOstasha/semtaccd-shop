const observer = new IntersectionObserver(entries => { // set observer to find every time block text location X/Y
    console.log(entries)
    entries.forEach(entry => {
        if(entry.isIntersecting) { // check if we here
            document.querySelectorAll('.home-instructions-paragraph')[0].classList.add('fade-in');
            document.querySelectorAll('.home-instructions-paragraph')[0].classList.remove('fade-out');
        } else {
            document.querySelectorAll('.home-instructions-paragraph')[0].classList.add('fade-out');
            document.querySelectorAll('.home-instructions-paragraph')[0].classList.remove('fade-in');
        }
    });
});

observer.observe(document.querySelector('.home-introduction-text')); // set observer to parent wrapper