# language: en
Feature: 
  Como um usuario
  eu quero destravar o cofre para pegar meus objetos
  para 

  Scenario: Senha Invalida
    Given dado que a porta esta fechada e travada e a senha cadastrada na memoria eh "123456"
    And o numero 1
    And o numero 2
    And o numero 3
    And o numero 4
    And o numero 6
    And o numero 6
    When eu apertei o ok
    Then a mensagem que apareceu foi "senha errada. Tente novamente" 