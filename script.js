       const display=document.querySelector("#result")
      const actbtn=document.querySelectorAll(".del")
      actbtn.forEach((actbtn) => {
          actbtn.addEventListener('click', ()=> {
            if (actbtn.innerHTML === 'C') {
              display.value = ''
              return
            }
            if (actbtn.innerHTML === '❎') {
              display.value = display.value.slice(0, -1)
              return
            }
            if (actbtn.innerHTML === '=') {
              display.value = eval(display.value)
              return
            }
             display.value += actbtn.innerHTML
          })
      });