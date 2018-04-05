/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cofre;

import cucumber.api.java.en.*;
import org.junit.Test;
import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 *
 * @author gabriel de carli
 */
public class TravarCofreSenhaCorretaSteps extends CofrePMTest {

    @Given("^dado que a porta esta fechada mas a senha nao esta cadastrada e eu quero cadastrar a senha e travar a porta eu digito uma senha$")
    public void dado_que_a_porta_esta_fechada_mas_a_senha_nao_esta_cadastrada_e_eu_quero_cadastrar_a_senha_e_travar_a_porta_eu_digito_uma_senha() throws Exception {
                sensorMock = mock(SensorPorta.class);
        memoriaMock = mock(Memoria.class);
        cofrePM = new CofrePM(sensorMock, memoriaMock);

        when(sensorMock.fechada())
                .thenReturn(Boolean.TRUE);
        when(sensorMock.travada())
                .thenReturn(Boolean.FALSE);

    }

    @Given("^apertando o numero (\\d+)$")
    public void apertando_o_numero(int num) throws Exception {
        cofrePM.pressButton(num);
    }

    @When("^eu aperto o botao de OK$")
    public void eu_aperto_o_botao_de_OK() throws Exception {
        cofrePM.ok();
    }

    @Then("^a mensagem que apareceu no display foi \"([^\"]*)\"$")
    public void a_mensagem_que_apareceu_no_display_foi(String arg1) throws Exception {
        assertEquals("Senha salva. Cofre trancado", cofrePM.getDisplay());
    }

}
