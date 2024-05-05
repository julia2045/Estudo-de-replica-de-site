
document.querySelectorAll('.teste').forEach((e,i) => {
    e.addEventListener("click", e => {
      menu(i);
    });
  });
  let menus = document.querySelectorAll('.solutionsList, .casesList, .insigthsList, .weList')
function menu(i) {
    menus.forEach( e=>{
       e.classList.remove('open');
    });
    menus[i].classList.add('open');
 }

//  Veja que os parâmetros do forEach (e,i) retornam o elemento (e) e o índice (i), 

// e na outra função você usa o i como índice para mostrar a div com respectiva classe que possui o índice [i].


setInterval(() =>{
    nextImg()
}, 5000)

function nextImg(){
    cont++
}