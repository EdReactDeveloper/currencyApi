import React from 'react';
import { Table, Spinner } from 'react-bootstrap';
import style from './table.module.scss';

const Home = ({ currency, isFetching }) => {

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Валюта</th>
            <th>Код</th>
            <th>Num Code</th>
            <th>Номинал</th>
            <th>Предыдущий курс</th>
            <th>Текущий курс</th>
          </tr>
        </thead>
        <tbody>
          {renderTable(currency)}
        </tbody>
      </Table>

      {renderLoader(currency, isFetching)}

    </>
  );
};

function renderLoader(currency, isFetching) {
  return isFetching && !currency ? <div className={style.loader}>
    <Spinner animation="border" />
  </div> : null
}

function renderTable(currency) {
  if (currency) {
    const { ID, CharCode, NumCode, Previous, Nominal, Value, Name } = currency
    return <tr >
      <td>{Name}</td>
      <td>{CharCode}</td>
      <td>{NumCode}</td>
      <td>{Nominal}</td>
      <td>{Previous}</td>
      <td>{Value}</td>
    </tr>
  }
}

export default Home;