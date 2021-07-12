import React, { Component } from "react";
import ProductCart from "./productCart";
import Prev from "../Icons/Prev";
import { Link } from "react-router-dom";

export default class SpecialSelections extends Component {
  constructor({ products }) {
    super({ products });
    this.specialRef = React.createRef(null);
    this.state = {
      items: products,
      visible: 4,
      gender: "",
      specialData: products,
    };
    this.loadMore = this.loadMore.bind(this);
  }

  filterSpecialSelection = (e) => {
    let genderValue = e.target.value;
    switch (genderValue) {
      case "men":
        this.setState({
          gender: genderValue,
          items: this.state.specialData.filter((menP) => {
            return menP.gender === "Men";
          }),
        });
        break;
      case "women":
        this.setState({
          gender: genderValue,
          items: this.state.specialData.filter((menP) => {
            return menP.gender === "Women";
          }),
        });
        break;
      default:
        this.setState({
          gender: genderValue,
          items: this.state.specialData,
        });
        break;
    }
  };

  scroll = (scrollOffset) => {
    this.specialRef.current.scrollLeft += scrollOffset;
  };

  loadMore() {
    this.setState((prev) => {
      return { visible: prev.visible + 4 };
    });
  }

  render() {
    return (
      <div className="feed">
        <div className="bestsellerHeader">
          <div className="bestsellerTitleS">
            <h1 className="title">Our Special Selection</h1>
            <h3 className="caption">Check out our best sellers</h3>
          </div>
          <div className="bestButtons">
            <div className="custom-select">
              <select
                className="select-sel"
                value={this.state.gender}
                onChange={this.filterSpecialSelection}
              >
                <option className="custom-options" value="all">
                  All
                </option>
                <option className="custom-options" value="men">
                  Men
                </option>
                <option className="custom-options" value="women">
                  Women
                </option>
              </select>
            </div>
            <div className="web-view-all">
              <Link to="/about">View All</Link>
            </div>
          </div>
        </div>
        <div className="productLoadMore">
          <div className="tiles" aria-live="polite">
            {this.state.items.slice(0, this.state.visible).map((item) => {
              return (
                <div className="tile fade-in" key={item.id}>
                  <ProductCart product={item} />
                </div>
              );
            })}
          </div>

          {this.state.visible < this.state.items.length && (
            <button onClick={this.loadMore} type="button" className="load-more">
              Load more
            </button>
          )}
        </div>

        <div className="productListSpecial">
          <div className="prevDiv" ref={this.specialRef}>
            <button onClick={() => this.scroll(-345)} className="prev">
              <Prev />
            </button>
            {this.state.items.map((item) => (
              <ProductCart key={item.id} product={item} />
            ))}
            <button onClick={() => this.scroll(345)} className="next">
              <Prev />
            </button>
          </div>
        </div>

        <div className="mobile-view-all">
          <Link to="/about">View All</Link>
        </div>
      </div>
    );
  }
}
