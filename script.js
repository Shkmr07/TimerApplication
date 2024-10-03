let [minutesMM,secondSS] = [document.getElementById('MM'),document.getElementById('SS')]

let timerInterval;


document.getElementById('start').addEventListener('click',()=>{
    
    let [minutes,second] = [parseInt(minutesMM.textContent),parseInt(secondSS.textContent)]

    if(!timerInterval){
        timerInterval = setInterval(()=>{
            second++
            if(second == 60){
                second = 0
                minutes++
                minutesMM.textContent = minutes < 10?'0'+minutes:minutes
            }
            secondSS.textContent = second < 10? '0'+second:second

            document.getElementById('stop').addEventListener('click',(e)=>{
                e.preventDefault()
                clearInterval(timerInterval)
                timerInterval = null
            })
        },1000)
}
            
})

document.getElementById('reset').addEventListener('click',()=>{
    clearInterval(timerInterval)
    timerInterval = null
    minutesMM.textContent = '00'
    secondSS.textContent = '00'
})



