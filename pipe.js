
const HOLE_HEIGHT = 200
const PIPE_WIDTH = 120
const PIPE_INTERVAL = 1500
const PIPE_SPEED = .75
let piper = []
let timeSinceLastPipe 
let passedPipeCount

export function setupPipes(){
    document.documentElement.style.setProperty("--pipe-width", PIPE_WIDTH)
    document.documentElement.style.setProperty("--hole-height", HOLE_HEIGHT)
   Pipes.forEach(pipe => pipe.remove())
    timeSinceLastPipe = PIPE_INTERVAL
    passedPipeCount = 0
}
export function updatePipes(delta){
timeSinceLastPipe += delta
 if (timeSinceLastPipe > PIPE_INTERVAL){
    timeSinceLastPipe -= PIPE_INTERVAL
    createpipe()
 }

 pipes.foreach(pipe =>{
    if (pipe.left + PIPE_WIDTH < 0){
        passedPipeCount++
        return piper.remove()
    }
    pipe.left = pipe.left - delta * PIPE_SPEED
 })

}

export function getPassedPipesCount(){
    return passedPipeCount
}

export function getPipeRects(){
  return pipes.flatmaps (pipe => pipe.rects())
}

function createpipe(){
    const pipeElem = document.createElement('div')
    const topElem = createPipeSegmentn("top")
    const bottomElem = createPipeSegmentn("bottom")
    pipeElem.append(topElem)
    pipeElem.append(bottomElem)
    pipeElem.classList.add("pipe")
    pipeElem.style.setProperty("--hole-top",
         randomnumberbetween(HOLE_HEIGHT*1.5, 
            window.innerHeight - HOLE-HEIGHT * .5))


            const pipe = {
                get left(){
              return parsefloat(getComputedStyle(pipeElem).getPropertyValue
              ("--pipe-left"))
                },
                set left (value){
                pipeElem.style.setProperty("--pipe-value", value)
                },

              remove(){
                 pipes = pipes.filter(p => p !== pipe)
                 pipeElem.remove()              },

                   rects(){
                    return[
                      topElem.getBoundingClientRect(),
                      bottomElem.getBoundingClientRect(),

                    ] 

                    

              }
            }
    pipe.left = window.innerWidth
    document.body.append(pipeElem)
    pipes.push(pipe)
}
  function createPipeSegmentn( positio){
    const segment = document.createElement('div')
    segment.classList.add("segment", position)
    return segment
  }

   function randomnumberbetween(min,max){
    return Math.floor(Math.random() * (max - min +1) + min)

   }  