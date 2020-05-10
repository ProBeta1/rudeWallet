export default Card = () => (
      <Card>
        <div class="dashboard-section">
          <div class="card">
            <div class="card-grid">
              <div class="card-icon-wrapper">
                <img src={bag} width="66" alt="" />
              </div>
              <div class="progress-bar-wrapper">
                <h4 class="card-title">Shopping</h4>
                <div class="progress-bar-bg">
                  <div class="progress-bar"></div>
                </div>
                <div class="spent-text">
                  Spent: <span class="money-card-text">$280</span>
                </div>
                <div class="budget-text">
                  Budget: <span class="money-card-text">$520</span>
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
      </Card>
)
