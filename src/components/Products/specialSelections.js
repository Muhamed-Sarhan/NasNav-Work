import React, { Component } from 'react'
import ProductCart from './productCart'
import { Link } from 'react-router-dom';

export default class SpecialSelections extends Component {
    constructor({products}) {
        super({products});
    
        this.state = {
          items: products,
          visible: 4,
        };
    
        this.loadMore = this.loadMore.bind(this);
      }

      loadMore() {
        this.setState((prev) => {
          return {visible: prev.visible + 4};
        });
      }
    render() {
        return (
            <div className="feed">
            <div className='bestsellerHeader'>
            <div className='bestsellerTitle'>
            <h1 className='title'>Our Special Selection</h1>
            <h3 className='caption'>Check out our best sellers</h3>
            </div>
            <div className='bestButtons'>
            <div className="custom-select">
            <select className='select-sel'>
              <option className='custom-options' value="all">All</option>
              <option className='custom-options' value="men">Men</option>
              <option className='custom-options' value="women">Women</option>
            </select>
          </div>
          <div className='web-view-all'>
            <Link to='/about'>View All</Link>
            </div>
            </div>
         </div>
                <div className="tiles" aria-live="polite">
          {this.state.items.slice(0, this.state.visible).map((item) => {
              return (
                <div className="tile fade-in" key={item.id}>
                  <ProductCart product={item}/>
                </div>
              );
            })}
          </div>
          {this.state.visible < this.state.items.length &&
            <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
         }
            </div>
        )
    }
}
