# language: en
Feature: 
  Como um usuario
  eu quero travar o cofre para guardar meus objetos
  para evitar furtos

  Scenario: Porta Tracanda Senha Valida
    Given dado que a porta esta fechada e o cofre destravado precisamos salvar uma senha valida
    And o botao com o numero 1
    And o botao com o numero 9
    And o botao com o numero 3
    And o botao com o numero 5
    And o botao com o numero 6
    And o botao com o numero 6
    When eu precionei o ok
    Then a mensagem que dada foi "Senha salva. Cofre trancado" 

