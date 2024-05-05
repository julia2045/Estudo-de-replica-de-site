//fazer estrutura
//fazer com que a div e o button tenham a mesma identificação
//fazer com que as segundas divs saiam da tela e somente a primeira apareça
//adicionar um evento de click ao cada botão para que corresponda com o conteudo que precisa ser mostrado
//concatenar a data id com o id para corresponder

// 1 buscar os elementos de botão 
let buttonsTab = document.querySelectorAll('.buttonTab');

//fazer com que cada botão separado tenha um evento de click
buttonsTab.forEach((el)=> {
    el.addEventListener('click', function(){
        //dizer o que o evento resulta
        //criar uma concatenação entre o id e o data id (`[data-id="${el.id}"]`);
       // const tabNote = document.querySelector(`[data-id="${el.id}"]`);
        const tabNote =  document.querySelector(`[data-id="${el.id}"]`);
        //fazer que quando se clicar em outro elemento retire o primeiro antes
        
        if(document.querySelector('.open')){
            document.querySelector('.open').classList.remove('open')
        }
        tabNote.classList.add('open');
        console.log(tabNote);
    }) 
       
    
})