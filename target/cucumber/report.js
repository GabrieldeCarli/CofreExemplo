$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cofre/DestravarCofreTest.feature");
formatter.feature({
  "name": "",
  "description": "  Como um usuario\n  eu quero travar o cofre para guardar meus objetos\n  para evitar furtos",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Porta Tracanda Senha Valida",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "dado que a porta esta fechada e o cofre destravado precisamos salvar uma senha valida",
  "keyword": "Given "
});
formatter.match({
  "location": "DestravadoCofreSteps.dado_que_a_porta_esta_fechada_e_o_cofre_destravado_precisamos_salvar_uma_senha_valida()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o botao com o numero 1",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoCofreSteps.o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o botao com o numero 9",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoCofreSteps.o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o botao com o numero 3",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoCofreSteps.o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o botao com o numero 5",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoCofreSteps.o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o botao com o numero 6",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoCofreSteps.o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o botao com o numero 6",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoCofreSteps.o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu precionei o ok",
  "keyword": "When "
});
formatter.match({
  "location": "DestravadoCofreSteps.eu_precionei_o_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mensagem que dada foi \"Senha salva. Cofre trancado\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DestravadoCofreSteps.a_mensagem_que_dada_foi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("cofre/SenhaInvalidaTest.feature");
formatter.feature({
  "name": "",
  "description": "  Como um usuario\n  eu quero destravar o cofre para pegar meus objetos\n  para ",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Senha Invalida",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "dado que a porta esta fechada e travada e a senha cadastrada na memoria eh \"123456\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SenhaInvalidaSteps.dado_que_a_porta_esta_fechada_e_travada_e_a_senha_cadastrada_na_memoria_eh(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o numero 1",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaInvalidaSteps.o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o numero 2",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaInvalidaSteps.o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o numero 3",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaInvalidaSteps.o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o numero 4",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaInvalidaSteps.o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o numero 6",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaInvalidaSteps.o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o numero 6",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaInvalidaSteps.o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu apertei o ok",
  "keyword": "When "
});
formatter.match({
  "location": "SenhaInvalidaSteps.eu_apertei_o_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mensagem que apareceu foi \"senha errada. Tente novamente\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SenhaInvalidaSteps.a_mensagem_que_apareceu_foi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("cofre/TravarCofreSenhaCorreta.feature");
formatter.feature({
  "name": "",
  "description": "  Como um usuario\n  eu quero Travar o cofre para guardar minhas coisas\n  para evitar roubos",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Travar Cofre",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "dado que a porta esta fechada mas a senha nao esta cadastrada e eu quero cadastrar a senha e travar a porta eu digito uma senha",
  "keyword": "Given "
});
formatter.match({
  "location": "TravarCofreSenhaCorretaSteps.dado_que_a_porta_esta_fechada_mas_a_senha_nao_esta_cadastrada_e_eu_quero_cadastrar_a_senha_e_travar_a_porta_eu_digito_uma_senha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apertando o numero 1",
  "keyword": "And "
});
formatter.match({
  "location": "TravarCofreSenhaCorretaSteps.apertando_o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apertando o numero 1",
  "keyword": "And "
});
formatter.match({
  "location": "TravarCofreSenhaCorretaSteps.apertando_o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apertando o numero 1",
  "keyword": "And "
});
formatter.match({
  "location": "TravarCofreSenhaCorretaSteps.apertando_o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apertando o numero 1",
  "keyword": "And "
});
formatter.match({
  "location": "TravarCofreSenhaCorretaSteps.apertando_o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apertando o numero 1",
  "keyword": "And "
});
formatter.match({
  "location": "TravarCofreSenhaCorretaSteps.apertando_o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apertando o numero 1",
  "keyword": "And "
});
formatter.match({
  "location": "TravarCofreSenhaCorretaSteps.apertando_o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aperto o botao de OK",
  "keyword": "When "
});
formatter.match({
  "location": "TravarCofreSenhaCorretaSteps.eu_aperto_o_botao_de_OK()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mensagem que apareceu no display foi \"Senha salva. Cofre trancado\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TravarCofreSenhaCorretaSteps.a_mensagem_que_apareceu_no_display_foi(String)"
});
formatter.result({
  "status": "passed"
});
});