import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { cadastrar } from '../../store/reducers/contatos'
import { Content } from '../../styles'
import { TituloMenor } from '../../components/Contato/styles'
import { BotaoSalvar, Campo, FormularioStyle } from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <Content>
      <TituloMenor>Adicionar novo contato</TituloMenor>
      <FormularioStyle onSubmit={cadastrarTarefa}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome completo"
          required
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          placeholder="E-mail"
          required
        />
        <Campo
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          placeholder="Telefone"
          required
        />
        <BotaoSalvar type="submit">Salvar</BotaoSalvar>
      </FormularioStyle>
    </Content>
  )
}

export default Formulario
