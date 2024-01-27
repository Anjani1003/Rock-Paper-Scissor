const rulesection = document.querySelector('.rule-section')
const ruleclose = document.querySelector('#rule-x')
const ruleshow = document.querySelector('.rule-show')

rulesection.style.display = 'none'
ruleclose.style.display = 'none'

ruleshow.addEventListener('click',()=>{
    rulesection.style.display = "block"
   ruleclose.style.display = "block"
})

ruleclose.addEventListener('click',()=>{
    rulesection.style.display = "none"
   ruleclose.style.display = "none"
})


