import { updateBird,setupBird, getBirdrect} from "./bird.js"
import { updatePipes, setupPipes, getPassedPipesCount, getPipeRects} from "./pipe.js"

document.addEventListener("keypress" , handleStart,{once:true} )
const subtitle = document.querySelector("[data-subtitle]");
const title = document.querySelector("[data-title]");

let lastTime 
function updateloop(time){
   if (lastTime == null ){
    lastTime = time
    window.requestAnimationFrame(updateloop)
    return
}
   
    const delta = time- lastTime
    updateBird(delta)
    updatePipes(delta)
    if(checklose()) return HandleLoose()
    lastTime = time
    window.requestAnimationFrame(updateloop)
}

function checkLose(){
    const birdRect = getBirdrect()
    const insidePIpe = getPipeRects().some(rect => isCollision(birdRect, rect))

    const outsideworld =  birdRect.top < 0 || birdRect> window.innerHeight
    return outsideworld || insidePipe
}

function isCollision( rect1 , rect2){
    return(
        
        rect1.left < rect2.right &&
        rect1.top < rect2.bottom &&
        rect1.right > rect2.left &&
        rect1.bottom >  rect2.top 
        
    )
}

function handleStart() {
    title.classList.add("hide")
    setupBird()
    setupPipes()
    lastTime = null
    window.requestAnimationFrame(updateloop)
}



 function HandleLoose() {

    setTimeout(() => {
    title.classList.remove("hide")
    subtitle.classList.remove("hide")
    subtitle.textcontent = `${getPassedPipesCount()} pipes`
    document.addEventListener("keypress" , handleStart,{once:true} )
        
    }, 100);
     
 }