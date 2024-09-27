import React from "react";
import styled from "styled-components";
import { FaEnvelope } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const CardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #f4f4f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px;
  overflow: hidden;
  border: 1px solid #777;
`;

// #region HEADER
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #fff;
`;


const ProfileImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Nome = styled.h1`
  margin:0;
  padding:0;
  font-size: 3em;
  padding-top: 5px;
`;

const Data = styled.p`
  margin:0;
  padding:0;
  font-size: 2em;
  color: #777;
  padding-bottom: 5px;
`;

const InfoSub = styled.p`
  margin:0;
  padding:0;
  font-size: 2em;
  color: #777;
  text-align: left;
  padding-bottom: 5px;
`;
// #endregion HEADER

// #region ICONS
const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Linha = styled.hr`
  margin: 10px 0;
  border: 1px solid #777;
  width: 100%;
`;
// #endregion ICONS


// #region TABELA
const TableContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

const TaskTable = styled.table`
  width: 100%;
  border: 1px solid #777;

  th, tr{
    padding: 10px;
  }
  th, td{
    text-align: center;
  }

  th {
    background-color: #f0f0f5;
    color: #777;
  }

  td {
    border-bottom: 1px solid #ddd;
  }
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
// #endregion TABELA

export function TaskCard () {
  return (
    <CardContainer>
      <Header>
        <ProfileImage
          src="https://cadis.com.br/wp-content/uploads/2023/07/riscos-funcionario-sem-registro-blog-cadis-01.jpg"
          alt="Foto do Funcionário"
          />
        <Info>
          <Nome>João da Silva</Nome>
          <Data>10/01/1990</Data>
          <InfoSub>Engenharia</InfoSub>
          <InfoSub>Engenheiro de Software</InfoSub>
        </Info>
        <Linha />
        <Icons>
          <IoCall style={{ cursor: "pointer"}} size={50}/>
          <FaEnvelope style={{ cursor: "pointer" }} size={50}/>
          <FaLocationDot style={{ cursor: "pointer" }} size={50}/>
        </Icons>
        <Linha />
      </Header>
      <TableContainer>
        <TaskTable>
          <thead>
            <tr>
              <th>Estado</th>
              <th>Tarefas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Checkbox /></td>
              <td>Implementar Layout Mobile</td>
            </tr>
            <tr>
              <td><Checkbox /></td>
              <td>Corrigir Bugs de Produção</td>
            </tr>
            <tr>
              <td><Checkbox /></td>
              <td>Revisar Código de Outros Desenvolvedores</td>
            </tr>
          </tbody>
        </TaskTable>
      </TableContainer>
    </CardContainer>
  );
};