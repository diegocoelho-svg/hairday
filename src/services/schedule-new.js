import { apiConfig } from "./api-config.js"

export async function scheduleNew({ id, name, when }) {

  try { 
    // Faz a requisição para enviar os dados de agendamento.
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, name, when }),
    })

    // Exibe mensagem de agendamento realizado.
    alert("Agendamento confirmado com sucesso!")
  } catch (error) {
    console.log(error)
    alert("Não foi possível agendar, tente novamente mais tarde.")
  }
}