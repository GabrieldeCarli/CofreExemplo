package cofre;

import cucumber.api.java.en.*;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.BeforeClass;
import static org.mockito.Mockito.*;

/**
 *
 * @author gabriel de carli
 */
public class DestravadoCofreSteps extends CofrePMTest  {

    @Given("^dado que a porta esta fechada e o cofre destravado precisamos salvar uma senha valida$")
    public void dado_que_a_porta_esta_fechada_e_o_cofre_destravado_precisamos_salvar_uma_senha_valida() throws Exception {
        
        sensorMock = mock(SensorPorta.class);
        memoriaMock = mock(Memoria.class);
        cofrePM = new CofrePM(sensorMock, memoriaMock);

        when(sensorMock.fechada())
                .thenReturn(Boolean.TRUE);
        when(sensorMock.travada())
                .thenReturn(Boolean.FALSE);
    }
    @Given("^o botao com o numero (\\d+)$")
    public void o_numero(int num) throws Exception {
        cofrePM.pressButton(num);
    }

    @When("^eu precionei o ok$")
    public void eu_precionei_o_ok() throws Exception {
        cofrePM.ok();
    }

    @Then("^a mensagem que dada foi \"([^\"]*)\"$")
    public void a_mensagem_que_dada_foi(String arg1) throws Exception {
        assertEquals("Senha salva. Cofre trancado", cofrePM.getDisplay());
    }
}
