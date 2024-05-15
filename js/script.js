document.getElementById('header-menu').addEventListener('click', function() {
    let el = document.getElementById('header-menu')
    if (el.classList.contains('active')) {
        el.classList.remove('active')
    } else {
        el.classList.add('active')
    }
});

var elements = document.getElementsByClassName('header-item');

const title = ['', 'card-online', 'card-cashback', 'card-livefree', 'card-travel']

for (var i = 1; i < elements.length; i++) {
    elements[i].addEventListener('click', function(e) {
        let el = document.getElementById(title[i])
        el.scrollIntoView({behavior: 'smooth'})
        // window.scrollTo({
        //     top: el.getBoundingClientRect().top + window.scrollY - 80,
        //     behavior: 'smooth',
        // })
    });
}

document.addEventListener('click', function(e) {
    let result = false
    let el = document.getElementById('header-menu')
    let el1 = document.getElementById('open')
    let el2 = document.getElementById('close')
    if ((e.target === el) || (e.target === el1) || (e.target === el2)) {
        result = true
    }
    for (var i = 0; i < elements.length; i++) {
        if (e.target === elements[i]) {
            result = true
        }
    }
    if (!result) {
        el.classList.remove('active')
    }
})

document.getElementById('content').addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active')
    } else {
        this.classList.add('active')
    }
});

var elements1 = document.getElementsByClassName('to-content');

for (var i = 0; i < elements1.length; i++) {
    elements1[i].addEventListener('click', function() {
        if (!document.getElementById('content').classList.contains('active')) {
            document.getElementById('content').classList.add('active')
        }
        document.getElementById('content').scrollIntoView({behavior: 'smooth'})
    });
}