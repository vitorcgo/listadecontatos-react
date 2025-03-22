import styled, { createGlobalStyle } from 'styled-components'
import img from '../assets/background.jpg'
import _var from './var'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    list-style: none;
  }
  body{
    background-image: url(${img})
  }

`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const Titulo = styled.h1`
  font-weight: normal;
  font-size: 56px;
  text-align: center;
  margin: 56px 0;
  color: #fff;
  font-weight: 800;
`

export const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 32px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 24px;
`

export const Botao = styled.button`
  border-radius: 32px;
  border: none;
  color: white;
  padding: 16px;
  background-color: ${_var.verde};
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  margin: 24px auto 0;
`

export default EstiloGlobal
