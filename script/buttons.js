const secButCandidatar = document.querySelectorAll(".secButCandidatar")
const butLixo = document.querySelectorAll(".butLixo")



let jobsDataVerify = []




const butCandidatar = secButCandidatar.forEach(button => {
    
    if(jsonAnalysis()){
        const analyzer = jsonAnalysis().forEach(element => {
            if(element.id == button.id){
                button.innerHTML = "Remover candidatura"
            }
        })
    }

    button.addEventListener("click", () => {
        let butText = button.innerHTML
        if(butText == "Candidatar"){
            const jobsVerify = jobsData.forEach(element => {
                if(element.id == button.id){
                    console.log(element)
                    jobsDataVerify.push(element)
                    button.innerHTML = "Remover candidatura"
                }
            })
        }

        const id = button.id
        if(butText == "Remover candidatura"){
            const jobsVerify = jobsDataVerify.forEach(element => {
                jobsDataVerify.splice(id, 1)
                button.innerHTML = "Candidatar"
            })
        }
        const productJson = JSON.stringify(jobsDataVerify) 
        localStorage.setItem("vagas", productJson)
        renderVagasCandidatadas(jobsDataVerify)

    })

})
