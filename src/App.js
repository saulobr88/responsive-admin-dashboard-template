function App() {
  return (
    <div className="App">

      <input type="checkbox" id="sidebar-toggle" />
      <div className="sidebar">

        <div className="sidebar-header">
          <h3 className="brand">
            <span className="ti-star"></span>
            <span className="app-title">App Name</span>
          </h3>
          <label htmlFor="sidebar-toggle" className="ti-menu-alt"></label>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li><a href=""><span className="ti-home"></span><span>Home</span></a></li>
            <li><a href=""><span className="ti-face-smile"></span><span>Team</span></a></li>
            <li><a href=""><span className="ti-agenda"></span><span>Tasks</span></a></li>
            <li><a href=""><span className="ti-clipboard"></span><span>Leaves</span></a></li>
            <li><a href=""><span className="ti-folder"></span><span>Projects</span></a></li>
            <li><a href=""><span className="ti-time"></span><span>Timesheet</span></a></li>
            <li><a href=""><span className="ti-book"></span><span>Contact</span></a></li>
            <li><a href=""><span className="ti-settings"></span><span>Account</span></a></li>
          </ul>
        </div>

      </div>

      <div className="main-content">
        <header>
          <div className="search-wrapper">
            <span className="ti-search"></span>
            <input type="search" placeholder="Search" />
          </div>

          <div className="social-icons">
            <span className="ti-bell"></span>
            <span className="ti-comment"></span>
            <div></div>
          </div>
        </header>

        <main>
          <h2 className="dash-title">Overview</h2>

          <div className="dash-cards">

            <div className="card-single">
              <div className="card-body">
                <span className="ti-briefcase"></span>
                <div>
                  <h5>Account Balance</h5>
                  <h4>R$ 30.659,54</h4>
                </div>
              </div>
              <div className="card-footer">
                <a href="">View All</a>
              </div>
            </div>

            <div className="card-single">
              <div className="card-body">
                <span className="ti-reload"></span>
                <div>
                  <h5>Pending</h5>
                  <h4>R$ 19.500,00</h4>
                </div>
              </div>
              <div className="card-footer">
                <a href="">View All</a>
              </div>
            </div>

            <div className="card-single">
              <div className="card-body">
                <span className="ti-check-box"></span>
                <div>
                  <h5>Processed</h5>
                  <h4>R$ 20.702,38</h4>
                </div>
              </div>
              <div className="card-footer">
                <a href="">View All</a>
              </div>
            </div>

          </div> {/* end dasboard-cards */}

          <section className="recent">
            <div className="activity-grid">
              <div className="activity-card">
                <h3>Recent activity</h3>

                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Project</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Team</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>App Development</td>
                        <td>15 Mar, 2021</td>
                        <td>05 Apr, 2021</td>
                        <td className="td-team">
                          <div className="img-1"></div>
                          <div className="img-2"></div>
                          <div className="img-3"></div>
                        </td>
                        <td>
                          <span className="badge warning">
                            Processing
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Frontend Design</td>
                        <td>15 Mar, 2021</td>
                        <td>05 Apr, 2021</td>
                        <td className="td-team">
                          <div className="img-1"></div>
                          <div className="img-2"></div>
                          <div className="img-3"></div>
                        </td>
                        <td>
                          <span className="badge success">
                            Success
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Web Development</td>
                        <td>15 Mar, 2021</td>
                        <td>05 Apr, 2021</td>
                        <td className="td-team">
                          <div className="img-1"></div>
                          <div className="img-2"></div>
                          <div className="img-3"></div>
                        </td>
                        <td>
                          <span className="badge warning">
                            Processing
                        </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Logo Design</td>
                        <td>15 Mar, 2021</td>
                        <td>05 Apr, 2021</td>
                        <td className="td-team">
                          <div className="img-1"></div>
                          <div className="img-2"></div>
                          <div className="img-3"></div>
                        </td>
                        <td>
                          <span className="badge success">
                            Success
                        </span>
                        </td>
                      </tr>
                      <tr>
                        <td>AWS Server Setup</td>
                        <td>15 Mar, 2021</td>
                        <td>05 Apr, 2021</td>
                        <td className="td-team">
                          <div className="img-1"></div>
                          <div className="img-2"></div>
                          <div className="img-3"></div>
                        </td>
                        <td>
                          <span className="badge success">
                            Success
                        </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                </div> {/* end div table-responsive */}
              </div>

              <div className="summary">
                <div className="sumary-card">
                  <div className="sumary-single">
                    <span className="ti-id-badge"></span>
                    <div>
                      <h5>196</h5>
                      <small>Number of staff</small>
                    </div>
                  </div>

                  <div className="sumary-single">
                    <span className="ti-calendar"></span>
                    <div>
                      <h5>16</h5>
                      <small>Number of leave</small>
                    </div>
                  </div>

                  <div className="sumary-single">
                    <span className="ti-face-smile"></span>
                    <div>
                      <h5>12</h5>
                      <small>Profile update request</small>
                    </div>
                  </div>

                </div>

                <div className="bday-card">
                  <div className="bday-flex">
                    <div className="bday-img"></div>
                    <div className="bday-info">
                      <h5>Dwayne F. Sanders</h5>
                      <small>Birtday Today</small>
                    </div>
                  </div>
                  <div className="text-center">
                    <button>
                      <span className="ti-gift"></span>
                        &nbsp;
                        Wish him
                      </button>
                  </div>
                </div>
              </div>
            </div>


          </section>

        </main>

      </div>

    </div>
  );
}

export default App;
