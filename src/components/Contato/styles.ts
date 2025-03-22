import styled from 'styled-components'
import _var from '../../styles/var'

export const ListaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${_var.cinza};
  padding-bottom: 16px;
  width: 100%;
`

export const TituloMenor = styled.h2`
  font-size: 24px;
  font-weight: bold;
  border-left: 4px solid black;
  padding-left: 8px;
  margin-top: 16px;
`

export const ContainerBotao = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  gap: 8px;
`

export const ContainerDados = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`

export const Dado = styled.textarea`
  background-color: transparent;
  resize: none;
  border: none;
  font-size: 18px;
  height: 30px;
  width: 400px;
  color: black;
  margin-left: 8px;
  padding-left: 8px;

  &:enabled {
    background-color: white;
  }
`

export const BotaoEditar = styled.button`
  border-radius: 24px;
  border: none;
  color: white;
  padding: 4px 16px;
  background-color: ${_var.verde};
  cursor: pointer;
`

export const BotaoRemover = styled(BotaoEditar)`
  background-color: ${_var.vermelho};
`
