import { useState } from 'react'
import Questao from '../components/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

const questaoMock = new QuestaoModel(1, "Qual é a Melhor cor?", [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta')
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)


  //Pega o indice da resposta escolhida e muda o estado da questão
  function respostaFornecida(indice: number) {
    //console.log(indice)
    setQuestao(questao.respoderCom(indice))
  }

  //Após o temporizador terminar executa esse método
  function tempoEsgotado() {
    if(questao.naoRespondida) {
      setQuestao(questao.respoderCom(-1))//Após tempo esgotado mostra a resposta correta
    }    
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      //backgroundColor: 'blue'
    }}>
      <Questao valor={questao} 
        respostaFornecida={respostaFornecida} 
        tempoEsgotado={tempoEsgotado} />
    </div>
    
  )
}
