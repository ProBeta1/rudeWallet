import React from 'react'
import styled, {css} from 'styled-components'
import bag from '../assets/img/bag-09.svg'
import pencil from '../assets/img/pencil.svg'
import trash from '../assets/img/trash-simple.svg'

const ProgressBar = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: 0%;
  width: 0%;
  height: 5px;
  background-color: #51aef2;
   ${props => props.per && css`
    width: ${props.per}

  `}
`;

const CardStyles = styled.div`
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image-2 {
  width: 70%;
  height: auto;
}

.image-3 {
  width: 70%;
}

`;

const Card = ({spent, budget, title, percentage}) => (
  <CardStyles>
    <div class="dashboard-section">
      <div class="card">
        <div class="card-grid">
          <div class="card-icon-wrapper">
            <img src={bag} width="66" alt="" />
          </div>
          <div class="progress-bar-wrapper">
            <h4 class="card-title">{title}</h4>
            <div class="progress-bar-bg">
              <ProgressBar per={percentage + '%'}></ProgressBar>
            </div>
            <div class="spent-text">
              Spent: <span class="money-card-text">${spent}</span>
            </div>
            <div class="budget-text">
              Budget: <span class="money-card-text">${budget}</span>
            </div>
          </div>
          <div class="edit-wrapper">
            <a href="#" class="icon-link w-inline-block"
            ><img
                src={pencil}
                width="60"
                alt=""
                class="image-2" /></a
            ><a href="#" class="icon-link w-inline-block"
            ><img
                src={trash}
                width="67"
                alt=""
                class="image-3"
              /></a>
          </div>
        </div>
      </div>
    </div>
  </CardStyles>
);

export default Card;