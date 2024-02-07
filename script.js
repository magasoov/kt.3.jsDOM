function addDiv (){
    let div1 = document.getElementById("abc")
    let btn1 = document.getElementById("btn1")

    var currentClass = div1.className;
    if (currentClass === "bca") {
        div1.className = "abc";
      } else {
        div1.className = "bca";
      }

    btn1.innerText = btn1.innerText == "+"  ? "-" : "+"
}
function addDiv1 (){
    let div2 = document.getElementById("detectivyId")
    let btnZarubej = document.getElementById("btnZarubej")

    var currentClass = div2.className;
    if (currentClass === "detectivy") {
        div2.className = "detectivyBlock";
      } else {
        div2.className = "detectivy";
      }
   
    btnZarubej.innerText = btnZarubej.innerText == "+"  ? "-" : "+"
}


function addDiv2 (){
    let div1 = document.getElementById("div1_2")
    let btn1 = document.getElementById("div-d-2")

   
    div1.classList.add("div-2-2_1")
    btn2.innerText = btn2.innerText == "+"  ? "-" : "+"
}


function addDiv3 (){
    let div3 = document.getElementById("abc1")
    let btnDvd = document.getElementById("btnDvd")

    var currentClass = div3.className;
    if (currentClass === "bca1") {
        div3.className = "abc1";
      } else {
        div3.className = "bca1";
      }
    btnDvd.innerText = btnDvd.innerText == "+"  ? "-" : "+"
}

function addDiv4 (){
    let div11 = document.getElementById("div-2-2_11")
    let btnOtec = document.getElementById("btnOtec")

    var currentClass = div11.className;
    if (currentClass === "div-2-21") {
        div11.className = "div-2-2_11";
      } else {
        div11.className = "div-2-21";
      }
   
    btnOtec.innerText = btnOtec.innerText == "+"  ? "-" : "+"
}

function changeClass() {
    let text = document.getElementById("text");
    
    // Получение текущего класса элемента
    var currentClass = text.className;
    
    // Проверка текущего класса и изменение на другой
    if (currentClass === "red") {
      text.className = "blue";
    } else {
      text.className = "red";
    }
  }