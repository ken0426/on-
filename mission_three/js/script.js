window.addEventListener('load',()=>{
  let app = document.getElementsByClassName("app");
  let op = document.getElementsByClassName("op");
  let text_lg = document.getElementsByClassName("text-lg");
  const btn = document.getElementById("new-task");
  let text_sum = document.getElementById("text-sum");
  let text = document.getElementsByClassName("text");
  let new_text = document.getElementsByClassName("new-text");
  let new_text_span = document.getElementsByClassName("new_text_span");


  let c = [];
  text[c.length].addEventListener('input',()=>{
    new_text[c.length].innerHTML = text[c.length].value;
    let newText = document.getElementsByClassName("new-text");
    let newTextNone = document.createTextNode(", ");
    newText(text)[c.length].appendChild(newTextNone)
  });

  let b = [];
  let d = [0];
  btn.addEventListener('click',()=>{
    op[b.length].style.display ="block";
    clone_element = op[b.length].cloneNode(true);
    let n = b.length;


  let newElement_s = document.createElement("span");
  let newTextNone = document.createTextNode(", ");
  newElement_s.appendChild(newTextNone);
  newElement_s.setAttribute("class", "new_text_span");
  let title = document.getElementById("title");
  title.appendChild(newElement_s);

  let newElement = document.createElement("span");
  let newContent = document.createTextNode("new");
  newElement.appendChild(newContent);
  newElement.setAttribute("class", "new-text");
  title.appendChild(newElement);

  sum = app[n].after(clone_element);
  op[d.length].style.display ="none";
  b.push(sum);
  d.push(0);
  n = b.length;
  minus[n].addEventListener('click',()=>{
    if(text_lg[n].innerHTML > 0)
    text_lg[n].innerHTML--&&text_sum.innerHTML--;;
  });
  plus[n].addEventListener('click',()=>{
    text_lg[n].innerHTML++;
    text_sum.innerHTML++;
  });

  let sum_zero = document.getElementsByClassName("sum-zero");
  sum_zero[n].addEventListener('click',()=>{
    text_sum.innerHTML = text_sum.innerHTML - text_lg[n].innerHTML;
    text_lg[n].innerHTML = 0;
  });

  zero[n].addEventListener('click',()=>{
    b.pop();
    d.pop();
    app[n].style.display ="none";
    text_sum.innerHTML = text_sum.innerHTML - text_lg[n].innerHTML;
    text_lg[n].innerHTML = 0;
    new_text[n].remove();
    let w = n - 1;
    new_text_span[w].remove();
  });

  text[n].addEventListener('input',()=>{
    new_text[n].innerHTML = text[n].value;
  });
  })

  let plus = document.getElementsByClassName("plus");
  plus[c.length].addEventListener('click',()=>{
    text_lg[c.length].innerHTML++;
    text_sum.innerHTML++;
  });

  let minus = document.getElementsByClassName("minus");
  minus[c.length].addEventListener('click',()=>{
  if(text_lg[c.length].innerHTML > 0)
    text_lg[c.length].innerHTML--&&text_sum.innerHTML--;});



  let sum_zero = document.getElementsByClassName("sum-zero");
  sum_zero[c.length].addEventListener('click',()=>{
    text_sum.innerHTML = text_sum.innerHTML - text_lg[c.length].innerHTML;
    text_lg[c.length].innerHTML = 0;
  });

  let zero = document.getElementsByClassName("zero");
  zero[c.length].addEventListener('click',()=>{
    app[c.length].style.display= "none";
    text_sum.innerHTML = text_sum.innerHTML - text_lg[c.length].innerHTML;
    new_text[c.length].innerHTML ="";
  });
  })