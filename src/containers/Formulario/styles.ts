import styled from 'styled-components'
import { Botao } from '../../styles'

export const FormularioStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`

export const Campo = styled.input`
  border: none;
  background-color: rgba(73, 73, 73, 0.2);
  margin-top: 16px;
  height: 40px;
  padding: 16px;
`

export const BotaoSalvar = styled(Botao)`
  padding: 4px 16px;
  margin: 16px 0;
  width: 150px;
`
