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
        

export async function listarTodasConsultas() {
    const resposta = await api.get('/consultas');
    return resposta.data;
}


export async function consultarData(data) {
    const resposta = await api.get(`/consultas/busca?data=${data}`);
    return resposta.data;
}       


export async function removerConsulta(id) {
    const resposta = await api.delete(`/agendamento/${id}`);
    return resposta.status;
}


export async function alterardadosdaconsulta(id) {
    const resposta = await api.get(`/agendamento/${id}`);
    return resposta.data;
}
    