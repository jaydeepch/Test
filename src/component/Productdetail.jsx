import React, { Component } from "react";
import { product } from "../services/productdetail";
class Productdetail extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  async componentDidMount() {
    const { data: datas } = await product(this.props.match.params.id);
    this.setState({ products: datas });
    // console.log(this.state.products);

    // fetch("http://127.0.0.1:8000/api/products/" + this.props.match.params.id)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     this.setState({
    //       products: result,
    //     });
    //   });
  }
  render() {
    const { products } = this.state;
    console.log(this.state.products);
    return (
      <div>
        <section class="featured-products-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title-wrapper">
                  <h3>Product Details</h3>
                </div>
              </div>
            </div>
            <div class="row" style={{ marginLeft: 390 }}>
              {this.state.products.map((tata) => (
                <div class="col-md-6">
                  <div class="feature-product-box">
                    <figure class="feature-product-img">
                      <img
                        style={{ width: 200 }}
                        src={"http://127.0.0.1:8000/" + tata.image}
                        class="img-fluid"
                        alt=""
                      />
                    </figure>
                    <div class="feature-text">
                      <h3 style={{ fontsize: 45 }}>{tata.name}</h3>
                      <span>$50</span>
                      <br />
                      <h3>Description:{tata.description}</h3>
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

export default Productdetail;
