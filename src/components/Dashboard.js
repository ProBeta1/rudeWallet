import React from 'react';
import styled from 'styled-components'
import Cards from './Cards'

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

const Wrapper = styled.div`
background: #f4f4f4;
height: 100vh;
margin: auto;
overflow: hidden;
padding-top: 3rem;
`;


function App( {items} ) {
  return (
    <div className="App">
      <Wrapper>
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
        </Test>
      <Cards items={items} />
    </Wrapper>
  </div>
  );
}

export default App;
