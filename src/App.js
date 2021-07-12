import React, { Component, lazy, Suspense } from "react";
import "./styles/app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navs from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import data from "./services/data";

const FirstPage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/Default Page/firstPage")), 1500);
  });
});

const { products, category, offers } = data;
class App extends Component {
  constructor() {
    super();
    this.myRef = React.createRef(null);
    this.onSaleRef = React.createRef(null);
    this.cateRef = React.createRef(null);
    this.bestRef = React.createRef(null);
    this.state = {
      products,
      category,
      offers,
      gender: "",
      filteredData: products,
      filteredDataOnSale: products,
    };
  }

  filterByGender = (e) => {
    let genderValue = e.target.value;
    switch (genderValue) {
      case "men":
        this.setState({
          gender: genderValue,
          filteredData: products.filter((menP) => {
            return menP.gender === "Men";
          }),
        });
        break;
      case "women":
        this.setState({
          gender: genderValue,
          filteredData: products.filter((menP) => {
            return menP.gender === "Women";
          }),
        });
        break;
      default:
        this.setState({
          gender: genderValue,
          filteredData: products,
        });
        break;
    }
  };

  filterOnSaleSection = (e) => {
    let genderValue = e.target.value;
    switch (genderValue) {
      case "men":
        this.setState({
          gender: genderValue,
          filteredDataOnSale: products.filter((menP) => {
            return menP.gender === "Men";
          }),
        });
        break;
      case "women":
        this.setState({
          gender: genderValue,
          filteredDataOnSale: products.filter((menP) => {
            return menP.gender === "Women";
          }),
        });
        break;
      default:
        this.setState({
          gender: genderValue,
          filteredDataOnSale: products,
        });
        break;
    }
  };

  render() {
    const {
      products,
      gender,
      filteredData,
      filteredDataOnSale,
      category,
      offers,
    } = this.state;

    return (
      <Router>
        <div className="App">
          <Suspense
            fallback={
              <div className="loadingNasNav">
                <h4>Loading ...</h4>
              </div>
            }
          >
            <Navs />

            <Route
              path="/"
              exact
              component={() => (
                <FirstPage
                  bestRef={this.bestRef}
                  cateRef={this.cateRef}
                  onSaleRef={this.onSaleRef}
                  myRef={this.myRef}
                  products={products}
                  category={category}
                  offers={offers}
                  gender={gender}
                  filteredData={filteredData}
                  filteredDataOnSale={filteredDataOnSale}
                  filterOnSaleSection={this.filterOnSaleSection}
                  filterByGender={this.filterByGender}
                />
              )}
            />
            <Route path="/about" component={HomePage} />
            <Route path="/services" component={HomePage} />
            <Route path="/contact" component={HomePage} />
            <Route path="/shoppingNow" component={HomePage} />

            <Footer />
          </Suspense>
        </div>
      </Router>
    );
  }
}

export default App;
