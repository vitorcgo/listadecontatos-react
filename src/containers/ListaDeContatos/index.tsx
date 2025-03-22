import { useSelector } from 'react-redux'
import Tarefa from '../../components/Contato'
import { RootReducer } from '../../store'
import { useNavigate } from 'react-router-dom'
import { Botao, Content } from '../../styles'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const navigate = useNavigate()
  return (
    <Content>
      <ul>
        {itens.map((c) => (
          <li key={c.id}>
            <Tarefa
              id={c.id}
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </ul>
      <Botao onClick={() => navigate('/novo')}>Adicionar contato</Botao>
    </Content>
  )
}

export default ListaDeTarefas
