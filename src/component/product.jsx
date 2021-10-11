import React, { Component } from "react";
import { catproduct } from "../services/catproductservice";

class Product extends Component {
  constructor(props) {
    super();
    this.state = {
      product: [],
    };
  }
  async componentDidMount() {
    const { data: datas } = await catproduct(this.props.match.params.id);
    this.setState({ product: datas });
  }
  render() {
    return (
      <div>
        <section class="featured-products-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title-wrapper">
                  <h3>Featured Products</h3>
                </div>
              </div>
            </div>
            <div class="row">
              {this.state.product.map((products) => (
                <div class="col-md-3">
                  <div class="feature-product-box">
                    <figure class="feature-product-img">
                      <img
                        src={"http://127.0.0.1:8000/" + products.image}
                        class="img-fluid"
                        alt=""
                      />
                    </figure>
                    <div class="feature-text">
                      <h3>{products.name}</h3>
                      <span>$50</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Product;
