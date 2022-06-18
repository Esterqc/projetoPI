import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function inserirAgendamento(nome, idade, nasc, cpf, rg, doutor, servico, dataAgendamento, valorAgendamento, forma_pag, data_pag) {
    const resposta =   await api.post('/agendamento', {
        nome:nome,
        idade:idade,
        nasc:nasc,
        cpf:cpf,
        rg:rg,
        doutor:doutor,
        servico:servico,
        dataAgendamento:dataAgendamento,
        valorAgendamento:valorAgendamento,
        forma_pag:forma_pag,
        data_pag:data_pag
        })
    return resposta.data;
}
        
        
    