// import React from 'react'
// import '../styles/scrollbar.scss'

// const scrollbar = () => {
//     const progressBar = document.querySelector('.scrollbar');

// let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

// window.addEventListener('scroll', () => {
//   // Calcul scroll progress from top
//   let progress = (document.documentElement.scrollTop / totalHeight) * 100;
//   // Apply style according to scroll position
//   progressBar.style.height = `${progress}%`;
//   progressBar.style.opacity = `${progress}%`;
// })

// const progressBarClick = document.querySelector('.clickScrollbar');

// progressBarClick.addEventListener('click', (e) => {
//   // Clic position on scrollbar
//   let newPageScroll = e.clientY / progressBarClick.offsetHeight * totalHeight;
  
//   // Scroll of the page to clic position
//   window.scrollTo({
//     top: newPageScroll,
//     // smooth = light scroll (slow)
//     behavior: 'smooth'
//   })

  
// })
//     return(
//         <div className="scrollbar">
//             <div className="clickScrollbar"></div>
//         </div>
//     )
// }

// export default scrollbar