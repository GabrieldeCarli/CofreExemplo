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
public class TravadoCofreSteps extends CofrePMTest {

    @Given("^dado que a porta esta fechada e travada e a senha cadastrada na memoria eh \"([^\"]*)\"$")
    public void dado_que_a_porta_esta_fechada_e_travada_e_a_senha_cadastrada_na_memoria_eh(String arg1) throws Exception {
        
        sensorMock = mock(SensorPorta.class);
        memoriaMock = mock(Memoria.class);
        cofrePM = new CofrePM(sensorMock, memoriaMock);

        when(sensorMock.fechada())
                .thenReturn(Boolean.TRUE);
        when(sensorMock.travada())
                .thenReturn(Boolean.TRUE);
        when(memoriaMock.getSenha())
                .thenReturn(arg1);
    }

    @Given("^o numero (\\d+)$")
    public void o_numero(int num) throws Exception {
        cofrePM.pressButton(num);
    }

    @When("^eu apertei o ok$")
    public void eu_apertei_o_ok() throws Exception {
        cofrePM.ok();
    }

    @Then("^a mensagem que apareceu foi \"([^\"]*)\"$")
    public void a_mensagem_que_apareceu_foi(String srt) throws Exception {
        assertEquals(srt, cofrePM.getDisplay());
    }
}
