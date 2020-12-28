import React from 'react';
import { Table } from 'reactstrap';

const Example = (props) => {
    return (

        <div className="price">

            {/*<p>Наши Тарифы</p>*/}
            <h1>Безлимитные Тарифные Планы</h1>
            <img src="./img/fon3.png" alt=""/>
          <div className="mainTable">
              <Table striped>
                  <thead>
                  <tr>
                      <th>Название Тарифа</th>
                      <th>Скорость</th>
                      <th>Стоимость</th>
                      <th>Заказать</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <th  scope="row">NEXT</th>
                      <td>6 Мбит/с</td>
                      <td>95000 Сум</td>
                      <td><button>ЗАКАЗАТЬ</button></td>
                  </tr>
                  <tr>
                      <th  scope="row">OPTIMUM</th>
                      <td>10 Мбит/с</td>
                      <td>115000 Сум</td>
                      <td><button>ЗАКАЗАТЬ</button></td>
                  </tr>


                  <tr>
                      <th  scope="row">COMFORT</th>
                      <td>20 Мбит/с</td>
                      <td>145000 Сум</td>
                      <td><button>ЗАКАЗАТЬ</button></td>
                  </tr>



                  <tr>
                      <th  scope="row">EXCLUSIVE</th>
                      <td>30 Мбит/с</td>
                      <td>195000 Сум</td>
                      <td><button>ЗАКАЗАТЬ</button></td>
                  </tr>


                  <tr>
                      <th  scope="row">PREMIUM</th>
                      <td>40 Мбит/с</td>
                      <td>249000 Сум</td>
                      <td><button>ЗАКАЗАТЬ</button></td>
                  </tr>



                  </tbody>
              </Table>
          </div>
            <a className="priceButton">Узнать Больше</a>

        </div>

    );
}

export default Example;