import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})




export async function InserirAgendamento(nome,idade,nasc,CPF,RG,doutor,servico,datadoagendamento,valordoagendamento,formapag,datapag) {
    const resposta =   await api.post('/agendar', {
      
            "nome":"nome",
            "idade":"idade",
            "nasc ":"nasc",
            "cpf ":"cpf",
            "rg":"rg",
            "doutor":"doutor",
            "servico":"servico",
            "agendamento":"agendamento",
            "vl do agendamento":"vl do agendamento",
            "forma pag":"forma pag",
            "data pag":"data pag"

        })
        return agendar;
    
    }

    export async function excluirconsulta(id) {
        const resposta = await api.get(agendamentoExcluir/id, {

        })   
        return resposta;
    }
    
        
        
    