import './App.css'
import Sidebar from './componet/Sidebar'
import data from '../public/data'

function App() {
  return (
    <div>
      <Sidebar />
      <main className='main container'>
        <div className="dis">
          <h1>Hello Evano 👋🏼,</h1>

          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="What are you looking for?" />
          </div>

        </div>
        <div className="box">
          <div className="dis2">
            <div className="hh">
              <h1>All Customers</h1>
              <h3>Active Members</h3>
            </div>
            <div className="search-box">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="What are you looking for?" />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Company</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Country</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((o, i) => {
                return <tr key={i}>
                  <td>{o.customer_name}</td>
                  <td>{o.Company}</td>
                  <td>{o.phoneNumber}</td>
                  <td>{o.Email}</td>
                  <td>{o.Country}</td>
                  <td><button
                    style={{
                      backgroundColor:
                        o.Status == "Inactive" ? "#FFC5C5" : "#16C09861",
                      color:
                        o.Status == "Inactive" ? "#DF0404" : "#008767",
                      borderColor:
                        o.Status == "Inactive" ? "#DF0404" : "#00B087",

                    }}
                  >
                    {o.Status}
                  </button></td>
                </tr>
              })}

            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default App
