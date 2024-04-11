// const circle=document.querySelector('.circle')
// function toggleColor(){
//     circle.classList.toggle('white-circle')
// }

// circcle.addEventListener('click',toggleColor)

// const circle=document.querySelector('.white-cirlce')
// let count=0

// function toggleColor(){
//     circle.classList.toggle('white-circle')
//     count++
//     console.log(count)
//     if (count > 9){
//         circle.removeEventListener('click',toggleColor)
//     }
// }

// circle.addEventListener('click',toggleColor)

const circle=document.querySelector('.circle')
let height = 0

function moveCircle(){
    height += 100 
    circle.style.top = height + 'px'
    if (height > 300){
        circle.removeEventListener('click',moveCircle)
    }
}
circle.addEventListener('click',moveCircle)