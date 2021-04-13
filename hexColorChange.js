 (function (){
     const btn = document.querySelector('button');
     const body = document.querySelector('body');
     const color = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
    
     btn.addEventListener('click', hexColor)

     function hexColor() {
          let hex = '#';
            for(let i = 0; i < 6; i++) {
              let randNum = Math.floor(Math.random() * color.length);
              hex+=color[randNum];
           }
           console.log(hex)
          body.style.background = hex;
     }
 })()