import React, { Component } from "react";
import { Link } from "react-router-dom";
import { allproduct } from "../services/productdetail";
//import Pagination from "./Pagination";
import ReactPaginate from "react-js-pagination";
import axios from "axios";
class Allproducts extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      current_page: 1,
      count_per_page: 1,
      item_count: 4,
      range: 3,
      activePage: "",
    };
  }
  async componentDidMount() {
    await this.getUserData();
  }
  async getUserData(pageNumber = 1) {
    const url = `http://127.0.0.1:8000/api/allproduct/?page=${pageNumber}`;
    const { data: response } = await axios.get(url);

    this.setState({ product: response.data });
  }
  render() {
    console.log(this.state.product);
    const { current_page, per_page, total, pageRange } = this.state.product;
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
              {this.state.product.map((products, index) => (
                <div class="col-md-3">
                  <div class="feature-product-box">
                    <figure class="feature-product-img">
                      <Link to={"/productdetail/" + products.id}>
                        <img
                          src={"http://127.0.0.1:8000/" + products.image}
                          class="img-fluid"
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div class="feature-text">
                      <h3 key={index}>{products.name}</h3>
                      <span>$50</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div>
          <ReactPaginate
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.count_per_page}
            totalItemsCount={this.state.item_count}
            pageRangeDisplayed={this.state.range}
            onChange={(pageNumber) => this.getUserData(pageNumber)}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      </div>
    );
  }
}
export default Allproducts;
