const ulCards = document.getElementById("ulCards")
const ulVagas = document.getElementById("ulVagas")

function jsonAnalysis(){
    const jsonLocalStorage = localStorage.getItem("vagas")

    if(jsonLocalStorage){
        const localStorage = JSON.parse(jsonLocalStorage)

        
        //console.log(localStorage)
        return localStorage
    }
    
}

if(jsonAnalysis()){
    renderVagasCandidatadas(jsonAnalysis())
}


function renderCardsMain (arr){
    const renderArray = arr.forEach(element => {
        let li = document.createElement("li")
        let section1 = document.createElement("section")
        let h2 = document.createElement("h2")
        let section2 = document.createElement("section")
        let span1 = document.createElement("span")
        let span2 = document.createElement("span")
        let section3 = document.createElement("section")
        let p1 = document.createElement("p")
        let section4 = document.createElement("section")
        let p2 = document.createElement("p")
        let button = document.createElement("button")

        button.id = element.id
        
        h2.innerText = element.title
        span1.innerText = element.enterprise
        span2.innerText = element.location
        p1.innerText = element.descrition
        p2.innerText = element.modalities[0]
        button.innerText = element.requerente

        li.classList.add("liCard")
        section2.classList = ("sec2 flex justifyBet")
        section4.classList = ("secButCard flex justifyBet")
        p2.classList.add("classWork")
        button.classList.add("secButCandidatar")

        section1.appendChild(h2)
        section2.append(span1, span2)
        section3.appendChild(p1)
        section4.append(p2, button)
        li.append(section1, section2, section3, section4)
        ulCards.appendChild(li)

        
    });
}
renderCardsMain(jobsData)

if(jsonAnalysis()){
    const verify = jsonAnalysis().forEach(element => {
        if(element.requerente === "Candidatar"){
            element.requerente === "Remover candidatura"
        }
    })
}


function renderVagasCandidatadas(arr){
    ulVagas.innerHTML = ""

    const renderCandidaturas = arr.forEach(element => {
        
        let li = document.createElement("li")
        let section1 = document.createElement("section")
        let h3 = document.createElement("h3")
        let button = document.createElement("button")
        let img = document.createElement("img")
        let section2 = document.createElement("section")
        let span1 = document.createElement("span")
        let span2 = document.createElement("span")

        button.id = `id_${element.id}`

        h3.innerText = element.title
        img.src = "./assets/img/trash.svg"
        span1.innerText = element.enterprise
        span2.innerText = element.location

        li.classList = ("flex column gap32")
        if(arr.length > 1){li.classList.add("liVagas")}
        section1.classList.add("secAside3")
        section2.classList = ("sec2 secAside4")
        button.classList.add("butLixo")

        removeLixo(button)

        button.appendChild(img)
        section1.append(h3, button)
        section2.append(span1, span2)
        li.append(section1, section2)
        ulVagas.appendChild(li)



        
    })
}
//renderVagasCandidatadas(jobsData)

function render0(){
    let li = document.createElement("li")
    let section1 = document.createElement("section")
    let p = document.createElement("p")
    let section2 = document.createElement("section")
    let img = document.createElement("img")

    p.innerText = "Você ainda não aplicou para nenhuma vaga"
    img.src = "./assets/img/no-items.svg" 

    li.classList = ("flex column gap32")
    section1.classList.add("secAside2")
    section2.classList.add("secAside2")
}

function removeLixo(button){
    let id = button.id.slice(3)
    button.addEventListener("click", () => {
        jobsDataVerify.splice(id, 1)
        renderVagasCandidatadas(jobsDataVerify)
        const trocaButText = secButCandidatar.forEach(buttonText => {
            if(buttonText.id == id){
                buttonText.innerText = "Candidatar"
            }
        }) 
    })
}






