const card = document.querySelector('.card');
      card.addEventListener('click', changeCard);

let isExplorer = true;

function changeCard(event){
    const cardSelected = event.currentTarget;
    const image = isExplorer ? "card-ignite" : "card-explore";
    isExplorer = !isExplorer;
    cardSelected.style.backgroundImage = `url(../images/${image}.svg)`;
}
