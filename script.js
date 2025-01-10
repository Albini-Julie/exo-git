document.addEventListener('DOMContentLoaded', () => {
  console.log('Script chargé')

  const yearSpan = document.querySelector('.year')
  yearSpan.textContent = new Date().getFullYear()

  const socialBtns = document.querySelectorAll('.social-btn')
  const emojis = ['🌟', '🚀', '🎮', '🎨', '🎯', '🎪']

  socialBtns.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
      btn.style.transform = 'scale(1.3) rotate(15deg)'
      setTimeout(() => {
        btn.textContent = randomEmoji
      }, 150)
    })

    btn.addEventListener('mouseout', () => {
      btn.style.transform = 'scale(1) rotate(0deg)'
    })
  })

  const footerWave = document.querySelector('.footer-wave')
  document.querySelector('footer').addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100
    footerWave.style.background = `linear-gradient(90deg, 
            #ff6b6b ${x - 20}%, 
            #4ecdc4 ${x}%, 
            #45b7d1 ${x + 20}%)`
  })
})

var navigation = document.querySelector("#navigation");

document.querySelector("#menu").addEventListener('click', () => {
    console.log('coucou')
    if(navigation.style.display=="block"){
            navigation.style.display="none";
        }else{
            navigation.style.display="block";
        }
});
