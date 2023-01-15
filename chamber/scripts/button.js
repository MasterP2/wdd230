const mybtn = document.querySelector('header button')
const mynav = document.querySelector('nav')
// console.log(mybtn)
// console.log(mynav)

mybtn.addEventListener('click', ()=>{
    mynav.classList.toggle('open')
    // mynav.classList.toggle('open')
})