import "../styles/HomeStyle.css";
import Layout from '../component/Layout'
import { Link } from 'react-router-dom'
import HomeImage from "../images/banner.jpeg"
function Home() {
  return (
    <Layout>
      <div className='home' style={{ backgroundImage: `url(${HomeImage})` }}>
        <div className='headercontaint'>
          <h1>Healthy Food</h1>
          <p>Best Food In the World</p>
          <Link to={"/menu"}>
            <button>
              ORDER NOW
            </button>
          </Link>


        </div>


      </div>
    </Layout >
  )
}

export default Home
