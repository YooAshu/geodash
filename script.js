let speed = 0
let lastRenderTime = 0
let box = document.getElementsByClassName('box')[0]
let state = document.getElementsByClassName('state')[0]
let jumpsound = new Audio('./jump.mp3')
let gamoversound = new Audio("./mixkit-arcade-retro-game-over-213.wav")
let main1 = document.getElementById('main')
let mainstyle = getComputedStyle(main1)
let scoreboard = document.getElementsByClassName('scoreboard')[0]
let backg1 = document.getElementsByClassName('backg1')[0]
let backg2 = document.getElementsByClassName('backg2')[0]
let backstyle1 = getComputedStyle(backg1)
let backstyle2 = getComputedStyle(backg2)
let score = 0
let t = 0
let incscore = false
let gamestart = false
let gamerestart = false
scoreboard.innerHTML = `your score is :0`

let spike1 = document.getElementsByClassName('spike1')[0]
let spike2 = document.getElementsByClassName('spike2')[0]
let spike3 = document.getElementsByClassName('spike3')[0]
let spike1style = getComputedStyle(spike1)
let spike2style = getComputedStyle(spike2)
let spike3style = getComputedStyle(spike3)
let boxstyle = getComputedStyle(box)
let boxbottom = boxstyle.bottom
let boxBottom1 = parseInt(boxstyle.bottom, 10)

if (window.innerWidth >= 500) {
  state.innerHTML = 'press space-bar to start'
} else {
  state.innerHTML = 'click anywhere to start'
}
document.body.onkeyup = function(e) {
  if (e.key == " " ||
    e.code == "Space" ||
    e.keyCode == 32
  ) {
    
    if (parseInt(boxstyle.bottom, 10) == 0) {
      if (!gamerestart) {
        box.style.animation = "jump .4s linear"
        jumpsound.play()
        setTimeout(function() {
          box.style.animation = "unset"
        }, 400)
      }
      else {
        box.style.animation = "unset"
      }
    }
    if (!gamestart) {
      incscore = true
      speed = 60
      gamestart = true
      state.innerHTML = ''
    }
  }
}
window.addEventListener("click", function() {
  if (parseInt(boxstyle.bottom, 10) == 0) {
    if (!gamerestart) {
      box.style.animation = "jump .4s linear"
      jumpsound.play()
      setTimeout(function() {
        box.style.animation = "unset"
      }, 400)
    } else {
      box.style.animation = "unset"
    }
  }
  if (window.innerWidth >= 500) {
    if (!gamestart) {
      incscore = true
      speed = 60
      gamestart = true
      state.innerHTML = ''
    }
  } else {
    if (!gamestart) {
      incscore = true
      speed = 90
      gamestart = true
      state.innerHTML = ''
    }
  }


})
let s1 = 100
let s2 = 100
let s3 = 100
let b1 = 0
let b2 = 100
function main(currentTime) {
  window.requestAnimationFrame(main)
  const differncebtwneachrender = (currentTime - lastRenderTime) / 1000
  if (differncebtwneachrender < 1 / speed) return
  lastRenderTime = currentTime
  console.log(speed)



  spike1.style.left = `${s1}%`
  spike2.style.left = `${s2}%`
  spike3.style.left = `${s3}%`
  if (t >= 0 && t < 0.4) {
    s1 -= 1.1
    s2 -= 1.1
    s3 -= 1.1
  }
  else if (t >= 0.4 && t < 0.9) {
    s1 -= 1.2
    s2 -= 1.2
    s3 -= 1.2
  }
  else if (t >= 0.9 && t < 1.4) {
    s1 -= 1.3
    s2 -= 1.3
    s3 -= 1.3
  }
  else if (t >= 1.4 && t < 2) {
    s1 -= 1.5
    s2 -= 1.5
    s3 -= 1.5
  }
  else if (t >= 2 && t < 2.8) {
    s1 -= 1.6
    s2 -= 1.6
    s3 -= 1.6
  }
  else if (t >= 2.8 && t < 3.5) {
    s1 -= 1.7
    s2 -= 1.7
    s3 -= 1.7
  }
  else if (t >= 3.5) {
    s1 -= 1.8
    s2 -= 1.8
    s3 -= 1.8
  }




  if (s1 <= -15) {
    let option = [100, 100, 160, 210]
    let comps1 = Math.floor(Math.random() * option.length)
    s1 = option[comps1]
  }
  if (s2 <= -15) {

    let option = [100, 160, 160, 210]
    let comps2 = Math.floor(Math.random() * option.length)
    s2 = option[comps2]
  }
  if (s3 <= -15) {
    let option = [100, 160, 210]
    let comps3 = Math.floor(Math.random() * option.length)
    s3 = option[comps3]
  }



  if ((s1 - s2 > 0 && s1 - s2 < 50) || (s2 - s1 > 0 && s2 - s1 < 50)) {
    s1 = s2
  }
  if ((s2 - s3 > 0 && s2 - s3 < 650) || (s3 - s2 > 0 && s3 - s2 < 50)) {
    s3 = s2
  }
  if ((s3 - s1 > 0 && s3 - s1 < 50) || (s1 - s3 > 0 && s1 - s3 < 50)) {
    s1 = s3
  }
  // if(parseInt(spike1style.left))
  // let s1left = parseInt(parseInt(spike1style.left)*100/parseInt(mainstyle.width))
  if ((parseInt(spike1style.left) > 0 && parseInt(spike1style.left) < (2 * parseInt(mainstyle.width) / 100 + parseInt(boxstyle.width))) ||
    (parseInt(spike2style.left) > 0 && parseInt(spike2style.left) < (2 * parseInt(mainstyle.width) / 100 + parseInt(boxstyle.width))) ||
    (parseInt(spike3style.left) > 0 && parseInt(spike3style.left) < (2 * parseInt(mainstyle.width) / 100 + parseInt(boxstyle.width)))) {


    if (parseInt(boxstyle.bottom) <= parseInt(spike1style.height)) {
      console.log(22)
      // alert(22)
      state.innerHTML = 'game over <br> <span class="material-symbols-outlined">restart_alt</span>'
      incscore = false
      gamoversound.play()
      gamerestart = true
      speed = 0
      t = 0
      score = 0
      s1 = 100
      s2 = 100
      s3 = 100
    }
    
  }

  if (gamerestart) t += 0.001
  else if (gamestart) t += 0.001

  backg1.style.left = `${b1}%`
  backg2.style.left = `${b2}%`
  b1--
  b2--
  if(b1==-100 && b2 == 0){
    b1 = 100
    b2 = 0
  }
  if(b2==-100 && b1 ==0){
    b2 = 100
    b1 = 0
  }
  
}
state.addEventListener("click", function() {
  if (gamerestart) {
    incscore = true
    gamerestart = false
    state.innerHTML = ""
    scoreboard.innerHTML = `your score is : ${score}`
    if (window.innerWidth >= 500) {
      speed = 60
    }
    else {
      speed = 90
    }
  }
})
setInterval(function() {
  if (incscore) {
    score += 1
    scoreboard.innerHTML = `your score is : ${score}`

  }
}, 300)
window.requestAnimationFrame(main);

