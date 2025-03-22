import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/contatos'
import TarefaClasse from '../../models/Contato'
import * as S from './styles'
import { IoMdMail } from 'react-icons/io'
import { BsFillTelephoneFill } from 'react-icons/bs'

type Props = TarefaClasse

const Tarefa = ({
  nome,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [emailOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
  }

  return (
    <>
      <S.TituloMenor>{nome}</S.TituloMenor>
      <S.ListaContainer>
        <div>
          <S.ContainerDados>
            <IoMdMail />
            <S.Dado
              disabled={!estaEditando}
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />
          </S.ContainerDados>
          <S.ContainerDados>
            <BsFillTelephoneFill />
            <S.Dado
              disabled={!estaEditando}
              value={telefone}
              onChange={(evento) => setTelefone(evento.target.value)}
            />
          </S.ContainerDados>
        </div>
        <S.ContainerBotao>
          {estaEditando ? (
            <>
              <S.BotaoEditar
                onClick={() => {
                  dispatch(editar({ nome, email, telefone, id }))
                  setEstaEditando(false)
                }}
              >
                Salvar
              </S.BotaoEditar>
              <S.BotaoRemover onClick={cancelarEdicao}>Cancelar</S.BotaoRemover>
            </>
          ) : (
            <>
              <S.BotaoEditar onClick={() => setEstaEditando(true)}>
                Editar
              </S.BotaoEditar>
              <S.BotaoRemover onClick={() => dispatch(remover(id))}>
                Excluir
              </S.BotaoRemover>
            </>
          )}
        </S.ContainerBotao>
      </S.ListaContainer>
    </>
  )
}

export default Tarefa
