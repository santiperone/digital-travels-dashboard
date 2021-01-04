import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Card from './components/Card';
import ContentCard from './components/ContentCard';
import CategoryCard from './components/CategoryCard';
import Footer from './components/Footer';

const categories = ['01','02','03','04','05','06'];

function App() {
  return (
    <>
      <div id="root">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
              </div>
              <div className="row">
                <Card title="Products in Data Base" data="325" icon="clipboard-list" />
                <Card title="Amount in products" data="$546.456" icon="dollar-sign" status="success"/>
                <Card title="Users quantity" data="35" icon="user-check" status="warning"/>
              </div>
              <div className="row">
                <ContentCard title="Last product in Data Dase">                
                  <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src="images/product_dummy.svg" alt="dummy"/>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                  <a target="_blank" rel="nofollow" href="/">View product detail</a>
                </ContentCard>
                <ContentCard title="Categories in Database">
                  <div className="row">
                    {categories.map(cat => <CategoryCard title={`Category ${cat}`} key={cat} /> )}
                  </div>
                </ContentCard>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">All products in the Database</h1>
                </div>
              </div>
            </div>
          </div>        
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
