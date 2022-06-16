  
# ESTUDO DOS ENDPOINTS
<hr/>

### (1° CASO DE USO) => _LOGIN_

/POST   /usuario/login

_request_

```
{
  "email": "?"
  "senha": "?"
}
```

_response_
```
{
  "id":0,
  "email": "",
  "senha": ""
}
```
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
<hr/>

### (2° CASO DE USO) => _AGENDAR CONSULTA_ 

/POST      /agendamento

_request_

```
{
  "nome":"",
  "idade":"",
  "nascimento":"",
  "cpf":"",
  "rg":"",
  "doutor":"",
  "servico":"",
  "data":"",
  "preco":"",
  "formaPagamento":"",
  "dataPagamento":""
}
```
_response_
```
{
  "id":1,
  "nome":"",
  "idade":"",
  "nascimento":"",
  "cpf":"",
  "rg":"",
  "doutor":"",
  "servico":"",
  "data":"",
  "preco":"",
  "formaPagamento":"",
  "dataPagamento":""
}
```

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
<hr/>

### (3° CASO DE USO) => CONSULTAR TODAS CONSULTAS


/GET     /consultas

_response_
```
[
  {
    "nome":"",
    "idade":"",
    "nascimento":"",
    "cpf":"",
    "rg":"",
    "doutor":"",
    "servico":"",
    "data":"",
    "preco":"",
    "formaPagamento":"",
    "dataPagamento":""
  }
]
```
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
<hr/>

### (4° CASO DE USO) => EXCLUIR CONSULTAS

/delete    /agendamento/:id             

_request_
```
204 no content
```

_response_
```
-no response
```
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
<hr/>

### (5° CASO DE USO) => PESQUISAR DATA DA CONSULTA
/GET   /consultar/data         

_response_
```[
  {
    "id": "?",
    "nome": "?",
    "CPF": "?",
    "servico":"?",
    "data":"?"
  }
]
```
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
<hr/>

### (6° CASO DE USO) => ALTERAR DADOS DA CONSULTA

/PUT     /agendamento/:id

_request_
```
{   
  "nome": "?",
  "servico":"?",
  "novo_agendamento":"?"
}
```
_response_
```
204 no content
-no response
```
