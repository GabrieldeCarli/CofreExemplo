# language: en
Feature: 
  Como um usuario
  eu quero Travar o cofre para guardar minhas coisas
  para evitar roubos

  Scenario: Travar Cofre
    Given dado que a porta esta fechada mas a senha nao esta cadastrada e eu quero cadastrar a senha e travar a porta eu digito uma senha
    And apertando o numero 1
    And apertando o numero 1
    And apertando o numero 1
    And apertando o numero 1
    And apertando o numero 1
    And apertando o numero 1
    When eu aperto o botao de OK
    Then a mensagem que apareceu no display foi "Senha salva. Cofre trancado"