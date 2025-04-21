const birdElem = document.querySelector('[data-bird]')
const BIRD_SPEED = 0.5
const JUMP_DURATION = 125
let timeSinceLastJump = Number.POSITIVE_INFINITY

export function setupBird(){

    setTop(window.innerheight/2)
    
    document.removeEventListener('keydown, handleJump')
    document.addEventListener('keydown, handleJump')
}

export function updateBird(delta) {
    if (timeSinceLastJump< JUMP_DURATION){
        setTop(getTop()-BIRD_SPEED* delta)
    }
    else{
        setTop(getTop()+ BIRD_SPEED* delta)
    }

    timeSinceLastJump += delta
    

}

export function getBirdrect(){
    return birdElem.getBoundingClientRect()
}


function setTop(top) {
 birdElem.Style.setProperty(--bird-Top, top)

}

function getTop(){

   return parseFloat(getComputedStyle(birdElem).getPropertyValue("--bird-top"))
  

}
function handleJump(e){
    if( e.code !== "space") return

    timeSinceLastJump = 0

}

