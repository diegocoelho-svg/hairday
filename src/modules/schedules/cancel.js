const periods = document.querySelectorAll(".period")

// Gera evento de clique para cada lista (manhã, tarde e noite)
periods.forEach((periods) => {
  // Captura o evento de clique na lista.
  periods.addEventListener("click", (event) => {
    if(event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado.
      const item = event.target.closest("li")
      const { id } = item.dataset
      
      if(id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

        if(isConfirm) {
          console.log("REMOVER!")
        }
      }
    }
  })
})