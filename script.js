console.log('connecté !');

// 3S : Au clic sur la flèche, la flèche devient un bouton fermer le question-container s'étend et la réponse apparaît

//break problem down

const downArrow = document.querySelectorAll('.fa-arrow-down');
console.log(downArrow);

downArrow.forEach((arrow) => {
    arrow.addEventListener('click', ()=> {
        console.log('arrow clicked')
        arrow.classList.toggle('fa-circle-xmark');
        console.log('close button ok');
        const parent = arrow.closest('.question-container');
        console.log(parent);
        const reponse = parent.lastElementChild;
        console.log(reponse);
        reponse.classList.toggle('active');
    })
})