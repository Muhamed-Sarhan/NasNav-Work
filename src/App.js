import React,{ Component , lazy , Suspense } from 'react';
import './styles/app.scss'
import Navs from './components/Nav'
import Slider from './components/Slider';
import data from './services/data';


const AllProducts = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./components/Products')), 1500);
  });
});

const { products , category , offers } = data;
class App extends Component {
  constructor(){
    super();
    this.myRef = React.createRef(null);
    this.onSaleRef = React.createRef(null);
    this.cateRef = React.createRef(null);
    this.bestRef = React.createRef(null);
    this.state={
      products,
      category,
      offers,
      gender:'',
      filteredData:products,
      filteredDataOnSale:products
   }
  }
  
  


  filterByGender = (e) => {
    let genderValue = e.target.value;
    switch(genderValue){
      case('men'):
      this.setState({
        gender:genderValue,
        filteredData: products.filter((menP)=>{
          return menP.gender === 'Men';
        })
      })
      break;
      case('women'):
      this.setState({
        gender:genderValue,
        filteredData: products.filter((menP)=>{
          return menP.gender === 'Women';
        })
      })
      break;
      default:
        this.setState({
          gender:genderValue,
          filteredData: products,
        })
        break
    }
    }


    filterOnSaleSection = (e) => {
      let genderValue = e.target.value;
      switch(genderValue){
        case('men'):
        this.setState({
          gender:genderValue,
          filteredDataOnSale: products.filter((menP)=>{
            return menP.gender === 'Men';
          })
        })
        break;
        case('women'):
        this.setState({
          gender:genderValue,
          filteredDataOnSale: products.filter((menP)=>{
            return menP.gender === 'Women';
          })
        })
        break;
        default:
          this.setState({
            gender:genderValue,
            filteredDataOnSale: products,
          })
          break
      }
      }

   
  

 

  render(){
    const { products , gender ,filteredData , filteredDataOnSale , category , offers} = this.state;


  return (
    
    <div className="App">
    <Suspense fallback={<div className='loadingNasNav'><h4>Loading ...</h4></div>}>
      <Navs/>
      <Slider/>
      
      <div className='container'>
         <AllProducts bestRef={this.bestRef} cateRef={this.cateRef} onSaleRef={this.onSaleRef} myRef={this.myRef} products={products} category={category} offers={offers} gender={gender} filteredData={filteredData} filteredDataOnSale={filteredDataOnSale} filterOnSaleSection={this.filterOnSaleSection}  filterByGender={this.filterByGender} />
      </div>
      </Suspense>
    </div>
    
    
  );
  }
}

export default App;
