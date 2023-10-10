const roller = document.getElementsByClassName('rolling-text-container')[0]
const value = document.querySelector('.rolling-text-one')
function runScroller() {
   console.log(roller.offsetWidth)
   roller.scrollBy({
         left: 10,
         behavior: 'smooth'
   })
   setInterval(() => {
      roller.scrollBy({
         left: 10,
         behavior: 'smooth'
      })
      console.log(roller.scrollLeft)
      if(roller.scrollLeft >= roller.offsetWidth+500){
        roller.removeChild(roller.firstElementChild)
        roller.append(value)
        roller.scrollLeft = 0
      }
   }, 100)
}
runScroller()