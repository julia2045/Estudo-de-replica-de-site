function menuSolutions() {
    let solutionsList = document.querySelector('.solutionsList')
    if (solutionsList.classList.contains('open')) {
        solutionsList.classList.remove('open');
    } else{
        solutionsList.classList.add('open')
    }
}

function menuCases() {
    let casesList = document.querySelector('.casesList')
    if (casesList.classList.contains('open')) {
        casesList.classList.remove('open');
    } else{
        casesList.classList.add('open')
    }
}

function menuInsigths() {
    let insigthsList = document.querySelector('.insigthsList')
    if (insigthsList.classList.contains('open')) {
        insigthsList.classList.remove('open');
    } else{
        insigthsList.classList.add('open')
    }
}

function menuWe() {
    let weList = document.querySelector('.weList')
    if (weList.classList.contains('open')) {
        weList.classList.remove('open');
    } else{
        weList.classList.add('open')
    }
}