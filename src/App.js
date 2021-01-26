import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Card from './components/Card';
import ContentCard from './components/ContentCard';
import CategoryCard from './components/CategoryCard';
import Table from './components/Table';
import Footer from './components/Footer';
const axios = require('axios');

const categories = ['Paquetes','Hoteles','Traslados','Excursiones'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: [],
        users: [],
        lastProduct: null,
        loggedUser: false,
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/all')
         .then(items => this.setState({items: items.data.products}))
    axios.get('http://localhost:5000/api/users/all')
         .then(users => this.setState({users: users.data.users}))
    axios.get('http://localhost:5000/api/paquetes/last')
         .then(last => this.setState({lastProduct: last.data.product}))
    axios.get('http://localhost:5000/api/users/current')
         .then(user => this.setState({loggedUser: user}))

  }
  render() {
    console.log(this.state.loggedUser);
    return (
      <React.Fragment>
        <div id="root">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar user={this.state.loggedUser}/>
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>
                <div className="row">
                  <Card title="Products in Data Base" data={this.state.items.length} icon="clipboard-list" />
                  <Card title="Amount in products" data={'$'+this.state.items.reduce((a, b) => a + b.price, 0)} icon="dollar-sign" status="success"/>
                  <Card title="Users quantity" data={this.state.users.length} icon="user-check" status="warning"/>
                </div>
                <div className="row">
                  <ContentCard title="Last product in Data Dase" fullWidth="False">                
                    <div className="text-center">
                      {
                        this.state.lastProduct
                        ? <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src={`http://localhost:5000/img/img_travels/${this.state.lastProduct.image}`} alt="last-product"/>
                        : <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src="images/product_dummy.svg" alt="dummy"/>
                      }                      
                    </div>
                    <p>{
                      this.state.lastProduct
                      ? this.state.lastProduct.description
                      : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis arcu est, in malesuada est volutpat a. In euismod erat eget nisl iaculis volutpat. Nunc fermentum nec purus nec lacinia. Pellentesque at ex elit. Nam mi nunc, egestas id elit maximus, facilisis consectetur sapien. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque commodo sem tellus, et sagittis eros aliquet a. In ut dui tellus. Nulla elementum vel lectus in congue.'
                    }</p>
                    <a target="_blank" rel="noreferrer" href={this.state.lastProduct ? `/paquetes/${this.state.lastProduct.id}` : "/"}>View product detail</a>
                  </ContentCard>
                  <ContentCard title="Categories in Database" fullWidth="False">
                    <div className="row">
                      {categories.map((cat, index) => <CategoryCard title={cat} key={index} /> )}
                    </div>
                  </ContentCard>
                  <ContentCard title="All products in the Database" fullWidth="True">
                    <Table products={this.state.items} />
                  </ContentCard>
                </div>
              </div>
            </div>        
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )};
}

export default App;
