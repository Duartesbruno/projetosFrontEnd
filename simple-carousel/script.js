const dots = document.querySelector('.dots')
const imagens = document.querySelectorAll('.slides .slide')
let current = 0
const currentImg = document.getElementById('currentImg')
const slideNext = document.getElementById('slide-next')
const slideBack = document.getElementById('slide-back')
let roll = true

for(let i=0; i < imagens.length; i++) {
  const div = document.createElement('div')
  div.id = i
  dots.appendChild(div)
}
document.getElementById('0').classList.add('active-dot')

const newDivs = document.querySelectorAll('.dots div')
for(let i=0; i < newDivs.length; i++) {
  newDivs[i].addEventListener('click', ()=> {
    current = newDivs[i].id
    roll = false
    slide()
  })
}

slideBack.addEventListener('click', ()=> {
  current--
  roll = false
  slide()
})

slideNext.addEventListener('click', ()=> {
  current++
  roll = false
  slide()
})

document.addEventListener('keyup', (e)=>{
  if(e.key == 'ArrowLeft'){
      current--
      slide()
  } else
  if(e.key == 'ArrowRight'){
      current++
      slide()
  }
})

function slide() {
  if(current >= imagens.length) {
    current = 0
  } else if(current < 0) {
    current = imagens.length-1
  }
  
  const screenWidth = window.innerWidth
  let value = -800

  if(screenWidth <= 840) {
    value = -400
  }

  document.querySelector('.active-dot').classList.remove('active-dot')
  currentImg.style.marginLeft = value * current + 'px'
  document.getElementById(current).classList.add('active-dot')
}
setInterval( ()=>{
  if(roll) {
    current++
    slide()
  } else {
    roll = true
  }
}, 4000)
slide()

