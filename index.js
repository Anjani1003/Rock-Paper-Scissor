const cpuscore = document.querySelector('#cpu-score')
const playerscore = document.querySelector('#player-score')
const rulesection = document.querySelector('.rule-section')
const ruleclose = document.querySelector('#rule-x')
const ruleshow = document.querySelectorAll('.rule-show')
const resultshow = document.querySelector('#result-show')
const rulebuttonwin=document.querySelector('.rule-buttons-win')
const rulebuttonloss=document.querySelector('.rule-buttons-loss')
const user_rock = document.querySelector('#rock')
const user_paper = document.querySelector('#paper')
const user_scissor = document.querySelector('#scissor')
const play_section=document.querySelector('.play-section')
const win_section=document.querySelector('.win-section')
const loss_section=document.querySelector('.loss-section')
const tie_section=document.querySelector('.tie-section')
const replaybtn=document.querySelectorAll('.replay')
const userimg=document.querySelectorAll('.user-img')
const pcimg=document.querySelectorAll('.pc-img')
const userbord = document.querySelectorAll('.user-bord')
const pcbord = document.querySelectorAll('.pc-bord')

let userinput = ""
let pcinput = ""
const choices = ['rock','paper','scissor']
let userdisplayscore = parseInt(localStorage.getItem('userdisplayscore'))||0;
let cpudisplayscore = parseInt(localStorage.getItem('cpudisplayscore'))||0;
cpuscore.innerHTML = parseInt(localStorage.getItem('cpudisplayscore'))||0;
playerscore.innerHTML = parseInt(localStorage.getItem('userdisplayscore'))||0;

const result = function(input){
userinput=input
let random = Math.floor(Math.random() * (2  + 1))
pcinput=choices[random]
userimg.forEach((n)=>{n.setAttribute("src" , `./${input}.png`)})
pcimg.forEach((n)=>{n.setAttribute("src" , `./${pcinput}.png`)})
switch (userinput) {
    case 'rock':
        if (pcinput === 'scissor') {
            play_section.style.display = 'none';
            win_section.style.display = 'flex'
            loss_section.style.display = 'none'
            tie_section.style.display = 'none'
            userdisplayscore =  userdisplayscore+1
            localStorage.setItem('userdisplayscore', userdisplayscore)
            playerscore.innerHTML = localStorage.getItem('userdisplayscore')
            rulebuttonwin.style.display = 'flex'
            rulebuttonloss.style.display='none'
            userbord.forEach((n)=>{n.style.borderColor = '#0074B6'})
            pcbord.forEach((n)=>{n.style.borderColor = '#BD00FF'})
        } else if (pcinput === 'paper') {
            play_section.style.display = 'none';
            win_section.style.display = 'none'
            loss_section.style.display = 'flex'
            tie_section.style.display = 'none'
            rulebuttonwin.style.display = 'none'
            rulebuttonloss.style.display='flex'
            cpudisplayscore =  cpudisplayscore+1
            localStorage.setItem('cpudisplayscore', cpudisplayscore)
            cpuscore.innerHTML = localStorage.getItem('cpudisplayscore')
            userbord.forEach((n)=>{n.style.borderColor = '#0074B6'})
            pcbord.forEach((n)=>{n.style.borderColor = '#FFA943'})
        } else {
            play_section.style.display = 'none';
            win_section.style.display = 'none'
            loss_section.style.display = 'none'
            tie_section.style.display = 'flex'
            rulebuttonwin.style.display = 'none'
            rulebuttonloss.style.display='flex'
            userbord.forEach((n)=>{n.style.borderColor = '#0074B6'})
            pcbord.forEach((n)=>{n.style.borderColor = '#0074B6'})
        }
        break;
        
    case 'paper':
        if (pcinput === 'rock') {
            play_section.style.display = 'none';
            win_section.style.display = 'flex'
            loss_section.style.display = 'none'
            tie_section.style.display = 'none'
            userdisplayscore =  userdisplayscore+1
            localStorage.setItem('userdisplayscore', userdisplayscore)
            playerscore.innerHTML = localStorage.getItem('userdisplayscore')
            rulebuttonwin.style.display = 'flex'
            rulebuttonloss.style.display='none'
            userbord.forEach((n)=>{n.style.borderColor = '#FFA943'})
            pcbord.forEach((n)=>{n.style.borderColor = '#0074B6'})
        } else if (pcinput === 'scissor') {
            play_section.style.display = 'none';
            win_section.style.display = 'none'
            loss_section.style.display = 'flex'
            tie_section.style.display = 'none'
            cpudisplayscore =  cpudisplayscore+1
            localStorage.setItem('cpudisplayscore', cpudisplayscore)
            cpuscore.innerHTML = localStorage.getItem('cpudisplayscore')
            rulebuttonwin.style.display = 'none'
            rulebuttonloss.style.display='flex'
            userbord.forEach((n)=>{n.style.borderColor = '#FFA943'})
            pcbord.forEach((n)=>{n.style.borderColor = '#BD00FF'})
        } else {
            play_section.style.display = 'none';
            win_section.style.display = 'none'
            loss_section.style.display = 'none'
            tie_section.style.display = 'flex'
            rulebuttonwin.style.display = 'none'
            rulebuttonloss.style.display='flex'
            userbord.forEach((n)=>{n.style.borderColor = '#FFA943'})
            pcbord.forEach((n)=>{n.style.borderColor = '#FFA943'})
        }
        break;
    case 'scissor':
        if (pcinput === 'paper') {
            play_section.style.display = 'none';
            win_section.style.display = 'flex'
            loss_section.style.display = 'none'
            tie_section.style.display = 'none'
            userdisplayscore =  userdisplayscore+1
            localStorage.setItem('userdisplayscore', userdisplayscore)
            playerscore.innerHTML = localStorage.getItem('userdisplayscore')
            rulebuttonwin.style.display = 'flex'
            rulebuttonloss.style.display='none'
            userbord.forEach((n)=>{n.style.borderColor = '#BD00FF'})
            pcbord.forEach((n)=>{n.style.borderColor = '#FFA943'})
        } else if (pcinput === 'rock') {
            play_section.style.display = 'none';
            win_section.style.display = 'none'
            loss_section.style.display = 'flex'
            tie_section.style.display = 'none'
            cpudisplayscore =  cpudisplayscore+1
            localStorage.setItem('cpudisplayscore', cpudisplayscore)
            cpuscore.innerHTML = localStorage.getItem('cpudisplayscore')
            rulebuttonwin.style.display = 'none'
            rulebuttonloss.style.display='flex'
            userbord.forEach((n)=>{n.style.borderColor = '#BD00FF'})
            pcbord.forEach((n)=>{n.style.borderColor = '#0074B6'})
        } else {
            play_section.style.display = 'none';
            win_section.style.display = 'none'
            loss_section.style.display = 'none'
            tie_section.style.display = 'flex'
            rulebuttonwin.style.display = 'none'
            rulebuttonloss.style.display='flex'
            userbord.forEach((n)=>{n.style.borderColor = '#BD00FF'})
            pcbord.forEach((n)=>{n.style.borderColor = '#BD00FF'})
        }
        break;
}
}


rulebuttonwin.style.display='none'
win_section.style.display='none'
loss_section.style.display='none'
tie_section.style.display='none'

ruleclose.addEventListener('click',()=>{
   rulesection.style.display = "none"
   ruleclose.style.display = "none"
})

ruleshow.forEach((n)=>{
    n.addEventListener('click',()=>{
        rulesection.style.display = "block"
       ruleclose.style.display = "block"
    })
})

replaybtn.forEach((n)=>{
    n.addEventListener('click',()=>{
        play_section.style.display = 'block';
        win_section.style.display = 'none'
        loss_section.style.display = 'none'
        tie_section.style.display = 'none'
    })
})



user_rock.addEventListener('click',()=>{
    input = 'rock'
    result(input)

})
user_scissor.addEventListener('click',()=>{
    input = 'scissor'
    result(input)
})
user_paper.addEventListener('click',()=>{
    input = 'paper'
    result(input)
})



