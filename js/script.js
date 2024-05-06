document.getElementById('header-menu').addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active')
    } else {
        this.classList.add('active')
    }
});

var elements = document.getElementsByClassName('header-item');

for (var i = 1; i < elements.length; i++) {
    elements[i].addEventListener('click', function(e) {
        let el = document.getElementById(e.target.getAttribute('name'))
        console.log(el.getBoundingClientRect().top)
        window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth',
        })
    });
}

document.getElementById('content').addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active')
    } else {
        this.classList.add('active')
    }
});