import { useState } from 'react'
import Questionario from '../components/Questionario'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

const questaoMock = new QuestaoModel(1, "Qual é a Melhor cor?", [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta')
])

const BASE_URL = 'http://localhost:300/api'

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)
  

  function questaoRespondida(questao: QuestaoModel) {
    
  }

  function irPraProximoPasso() {

  }

  return (
      <Questionario
      questao={questao}
      ultima={false}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
      />    
  )
}
