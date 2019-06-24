let randFig = document.querySelector(".randFig")
let timer = document.querySelector("#time")
let randColor = ["brown", "blue", "yellow", "red", "green", "grey"]
let randBorder = [0, 50];
// let figSpace = document.querySelector(".figSpace")
let start = new Date().getTime()


const showFigure = () => {
    let figPositionLeft = Math.floor(Math.random()*901)
    let figPositionTop = Math.floor(Math.random()*451)
    let randTime = Math.floor(Math.random()*2001)
    let randColorNum = Math.floor(Math.random()*randColor.length)
    let randFigNum = Math.floor(Math.random()*201) + 100
    setTimeout(() => {
        randFig.style.background = randColor[randColorNum]
        randFig.style.height = String(randFigNum) + "px"
        randFig.style.width = String(randFigNum) + "px"
        randFig.style.borderRadius = String(randBorder[Math.floor(Math.random()*2)]) + "%"
        randFig.style.position = "absolute"
        randFig.style.left = String(figPositionLeft) + "px"
        randFig.style.top = String(figPositionTop) + "px"
        randFig.style.display = "block"
        start = new Date().getTime()
    }, randTime)
}


window.onload = () => {

    showFigure()
}

randFig.addEventListener("click", () => {

    randFig.style.display = "none"
    showFigure()
    let end = new Date().getTime()
    let timeTaken = (end - start) / 1000
    timer.textContent = String(timeTaken) + "s"
})
