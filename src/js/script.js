//testando 

let pets = {
    pet01 : {'nome':'Luke', 'data': '25/10/2022'},
    pet02 : {'nome':'Enzo', 'data':'14/12/2021'},
    pet03 : {'nome':'Cleo', 'data':'03/03/2022'}
}

Object.keys(pets).forEach((key, i) =>{
    document.querySelector(`.pet-${i} .pet-nome span`).innerText = pets[key].nome
    document.querySelector(`.pet-${i} .pet-ultima span`).innerText = pets[key].data
    const lastYear = pets[key].data.substring(6)
    const nextYear = (parseInt(pets[key].data.substring(6)) +1).toString()
    const nextVac = pets[key].data.replace(`${lastYear}`, `${nextYear}`)
    document.querySelector(`.pet-${i} .pet-proxima span`).innerText = nextVac
    
})
let tabela = document.querySelector(".tabela")


//próxima etapa - trabalhe esse código pra buscar do form e inserir novas linhas na table"
/* let addPet = document.getElementById('addPet') */
/* addPet.addEventListener('click', () =>{
    const oneMoreRow = document.createElement('div')
    oneMoreRow.classList.add("box-row")
    tabela.appendChild(oneMoreRow)
}) */
