import React from 'react';
import styled from 'styled-components'
import img from './assets/img/4-safes-bg.svg'
import bag from './assets/img/bag-09.svg'
import pencil from './assets/img/pencil.svg'
import trash from './assets/img/trash-simple.svg'

const Test = styled.div`  
background: #f4f4f4;
.dashboard-section {
  display: flex;
  width: 100vw;
  margin-top: 0px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.card {
  display: flex;
  overflow: auto;
  width: 80vw;
  height: 170px;
  max-width: 900px;
  padding: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.columns {
  height: 100%;
}

.card-grid {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  h3 {
    font-size: 18px;
    color: #499EF8;
    font-weight: 500;
  }
  h1 {
    font-size: 35px;
    font-weight: 500;
    color: #383838;
  }
  h4 {
    color:#777777;
    span {
      color: #383838;
      font-weight: 600;
    }
  }
  
  .col-2 {
    align-self: flex-end;
    margin-bottom: 38px
  }
}

.progress-bar-bg {
  position: relative;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: 0%;
  height: 5px;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  -ms-grid-row-align: auto;
  align-self: auto;
  -webkit-box-flex: 0;
  -webkit-flex: 0 auto;
  -ms-flex: 0 auto;
  flex: 0 auto;
  background-color: #e8e8e8;
}

.progress-bar {
  position: absolute;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: 0%;
  width: 40%;
  height: 5px;
  background-color: #34EF6F;
}
.progress-bar-wrapper {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
`;

const Card = styled.div`
.dashboard-section {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100vw;
  margin-top: 0px;
  padding: 20px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.body {
  background-color: #f1f2f7;
}

.card {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: auto;
  width: 80vw;
  height: 120px;
  max-width: 900px;
  padding: 0px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
}

.columns {
  height: 100%;
}

.card-grid {
  display: -ms-grid;
  display: grid;
  width: 100%;
  height: 100%;
  grid-auto-columns: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  -ms-grid-columns: 0.25fr 1fr 0.25fr;
  grid-template-columns: 0.25fr 1fr 0.25fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}

.card-icon-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.progress-bar-wrapper {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.edit-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.progress-bar-bg {
  position: relative;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: 0%;
  height: 5px;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  -ms-grid-row-align: auto;
  align-self: auto;
  -webkit-box-flex: 0;
  -webkit-flex: 0 auto;
  -ms-flex: 0 auto;
  flex: 0 auto;
  background-color: #e8e8e8;
}

.progress-bar {
  position: absolute;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: 0%;
  width: 40%;
  height: 5px;
  background-color: #51aef2;
}

.card-title {
  position: absolute;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: auto;
  margin-top: 20px;
  margin-bottom: 15px;
}

.spent-text {
  position: absolute;
  left: auto;
  top: 0%;
  right: 2%;
  bottom: auto;
  margin-top: 20px;
  margin-bottom: 15px;
  color: #838383;
  font-size: 1.1rem;
}

.money-card-text {
  color: #383838;
  font-weight: 700;
}

.budget-text {
  position: absolute;
  left: auto;
  top: auto;
  right: 2%;
  bottom: 0%;
  margin-top: 15px;
  margin-bottom: 19px;
  color: #838383;
  font-size: 1.1rem;
}

.icon-link {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 30%;
  height: 30%;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
}

.image-2 {
  width: 70%;
  height: auto;
}

.image-3 {
  width: 70%;
}

`;

function App() {
  return (
    <div className="App">
      <Test>
        <div class="dashboard-section">
          <div class="card">
            <div class="card-grid">
             <div className="col">
                <h3>Account Balance</h3>
                <h1>$210</h1>
             </div>
             <div className="col-2">
                <h4>Spent: <span>$1590</span></h4>
                <h4>Total budget: <span>$1800</span></h4>
             </div>
            </div>
            <div class="progress-bar-wrapper">
            <div class="progress-bar-bg">
              <div class="progress-bar"></div>
            </div>
            </div>
          </div>
        </div>
        <Card />
      </Test>
    </div>
  );
}

export default App;
