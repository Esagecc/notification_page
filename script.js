let mark = document.querySelector('.mark')
let number = document.querySelector('.number')
let dots = document.querySelectorAll('.red-dot')
let unread = document.querySelectorAll('.unread')


mark.addEventListener('click', read)
mark.addEventListener('click', byeDot)

function read(){
    number.innerHTML = 0;

    for (let i = 0; i < dots.length; i++) {
            dots[i].style.display = 'none';
    }

    for (let i = 0; i < unread.length; i++) {
        unread[i].style.background = 'white';
}

}
