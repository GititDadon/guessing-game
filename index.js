const guess=document.getElementById('guess')
 const number=Math.floor(Math.random()*100)+1;
const lbl=document.getElementById('lbl')
const btn=document.getElementById('submit')

btn.addEventListener('click',(event)=>{
    event.preventDefault()
    const numberGuess=Number(guess.value)
    lbl.classList.remove('high', 'low', 'correct');
    void lbl.offsetWidth;


if(numberGuess===number){
    lbl.textContent='CORRECT! 🎉'
   
    lbl.classList.add('correct')
}
else if(numberGuess>number){
    lbl.textContent='Too High'
    lbl.classList.add('high')

}
else if(numberGuess<number){
    lbl.textContent='Too Low'
    lbl.classList.add('low')

}
})
