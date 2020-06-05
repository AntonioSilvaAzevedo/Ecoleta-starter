function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]")

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  .then( 
    res => res.json())
  .then( states => {

    for(const state of states) {
      ufSelect.innerHTML += `
      <option value="${state.id}">
      ${state.nome}</option>`
    }
  })  
}

populateUFs();

function getCities(event) {
  const citySelect = document.querySelector("[name=city]")
  const stateInput = document.querySelector("[name=state]")


  const ufValue = event.target.value;

  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios` 

  citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
  citySelect.disabled = true;

  fetch(url)
  .then( res => res.json())
  .then( cities => {
    for(const city of cities) {
      citySelect.innerHTML += `
      <option value="${city.nome}">
      ${city.nome}</option>`
    }

    citySelect.disabled = false
  })
}

document.querySelector("select[name=uf]")
.addEventListener("change", getCities)

const itemsToColeect = document.querySelectorAll(".items-grid li")

for (item of itemsToColeect) {
  item.addEventListener("click", hadleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]");

let selectedItems = [];

function hadleSelectedItem(event) {
  const itemLi = event.target

  itemLi.classList.toggle("selected")

  const itemId = itemLi.dataset.id;

  const alereadySelected = selectedItems.findIndex(item => {
    const itemFound = item == itemId // retorna treu ou false
    return itemFound
})

  if( alereadySelected >= 0 ) {
    //tira seleção 
    const filteredItems = selectedItems.filter( item => {
      const itemIsDifferent = item != itemId //false
      return itemIsDifferent;
    })

    selectedItems = filteredItems
  }else{
    //se nao estiver selecionado, adicionar a seleção.
    selectedItems.push(itemId)
  }
    //atualizar o campo esocondido com os itens selecionados
    collectedItems.value = selectedItems;
  

}