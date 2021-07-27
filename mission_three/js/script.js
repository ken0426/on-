window.addEventListener('load',()=>{
  // const puls = document.getElementById("plus");
  const plus = document.getElementsByClassName("plus");
  // const minus = document.getElementById("minus");
  const minus = document.getElementsByClassName("minus");
  const zero = document.getElementsByClassName("zero");
  let text_lg = document.getElementsByClassName("text-lg");
  const sum_zero = document.getElementsByClassName("sum-zero");
  const text_sum = document.getElementsByClassName("text-sum");
  const new_task = document.getElementById("new-task");
  const center = document.getElementById("center");
  const app = document.getElementsByClassName("app");



  for(let i = 0; i < plus.length; i++){
    for(let i = 0; i < plus.length; i++){
      plus[i].addEventListener('click',()=>{
        text_lg[i].innerHTML++;
      });
    }


    for(let i = 0; i < minus.length; i++){
      minus[i].addEventListener('click',()=>{
        if(text_lg[i].innerHTML > 0)
        text_lg[i].innerHTML--;
      });
    }

    for(let i = 0; i < sum_zero.length; i++){
      sum_zero[i].addEventListener('click',()=>{
        text_lg[i].innerHTML = 0;
      })
    }

    for(let i = 0; i<zero.length; i++){
      zero[i].addEventListener('click',()=>{
        for(let i = 0; i<app.length; i++){
          if(app.length > 1){
            app[i].remove();
          }else{
            app[0].style.display ="none";
            text_lg[i].innerHTML = 0;
          }
        }
      })
    }
  }
  new_task.addEventListener('click',()=>{
      clone_element = app[0].cloneNode(true);
      if(app.length =! 0){
        app[0].style.display ="block";
        // app[i].remove();
      }
      app[0].after(clone_element);
      for(let i = 1; i <text_lg.length; i++){
        text_lg[i].innerHTML = 0;
      }
    })


});