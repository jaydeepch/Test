import React, { Component } from "react";
import { Link } from "react-router-dom";
import { product } from "../services/productservice";
import { category } from "../services/productservice";
import { post } from "../services/productservice";

import config from "../component/config.json";
class Content extends Component {
  constructor() {
    super();

    this.state = {
      category: [],
      post: [],
      product: [],
      limit: 4,
      status: 1,
      order: "asc",
    };
  }

  // componentDidMount() {
  //   fetch(config.baseapipath + "category")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       this.setState({
  //         category: result.data,
  //       });
  //     });
  //   fetch(config.baseapipath + "post")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       this.setState({
  //         post: result.data,
  //       });
  //     });
  // }

  async componentDidMount() {
    const { data: cat } = await category();
    const { data: posts } = await post();
    const { data: datas } = await product(
      this.props.match.params.id,
      this.state.limit,
      this.state.status,
      this.state.order
    );
    this.setState({ product: datas });
    this.setState({ category: cat });
    this.setState({ post: posts });
  }
  render() {
    const { category } = this.state;
    const { post } = this.state;
    const { product } = this.state;

    return (
      <div>
        <section class="slider-wrapper">
          <div class="main-slider">
            <div class="slide-item slide-one">
              <div class="main_slider_content">
                <h3>Pure CBD</h3>
                <h3>Pure Results</h3>
              </div>
            </div>
            <div class="slide-item slide-one">
              <div class="main_slider_content">
                <h3>Pure CBD</h3>
                <h3>Pure Results</h3>
              </div>
            </div>
            <div class="slide-item slide-one">
              <div class="main_slider_content">
                <h3>Pure CBD</h3>
                <h3>Pure Results</h3>
              </div>
            </div>
          </div>
        </section>
        <section class="middle-container">
          <section class="three-boxes-wrapper">
            <div class="container">
              <div class="row">
                {category.map((cat) => (
                  <div class="col-md-4 text-center">
                    <div class="box-col box-one">
                      <div class="box-text">
                        <h4>{cat.name}</h4>
                      </div>
                      <figure class="box-img">
                        <Link to={"/fetchproduct/" + cat.id}>
                          <img
                            src={config.baseUrl + cat.image}
                            class="img-fluid"
                            alt=""
                          />
                        </Link>
                      </figure>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
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
                {product.map((products) => (
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
                        <h3>{products.name}</h3>
                        <span>$50</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section class="our-blog-wrapper">
            <div class="container">
              <div class="row">
                {post.map((posts) => (
                  <div class="col-md-4">
                    <div class="blog-box">
                      <figure class="blog-img">
                        <Link to={"/postdetail/" + posts.slug}>
                          <img
                            src={"http://127.0.0.1:8000/" + posts.thumbnail}
                            class="img-fluid"
                            alt=""
                          />
                        </Link>
                      </figure>
                      <div class="blog-text">
                        <div class="blog-date">Jan 02, 2020</div>
                        <h3 class="blog-heading">
                          <a href=" ">{posts.title}</a>
                        </h3>
                        <a href="javascrpit:void(0);" class="read-more">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                {/* <div class="col-md-4">
                  <div class="blog-box">
                    <figure class="blog-img">
                      <img
                        src="images/blog-img-2.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </figure>
                    <div class="blog-text">
                      <div class="blog-date">Jan 02, 2020</div>
                      <h3 class="blog-heading">
                        <a href=" ">What are CBD Lollipips?</a>
                      </h3>
                      <a href="javascrpit:void(0);" class="read-more">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="blog-box">
                    <figure class="blog-img">
                      <img
                        src="images/blog-img-3.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </figure>
                    <div class="blog-text">
                      <div class="blog-date">Jan 02, 2020</div>
                      <h3 class="blog-heading">
                        <a href=" ">
                          CBD Candy: Why Are These Edibles Becoming So Popular?
                        </a>
                      </h3>
                      <a href="javascrpit:void(0);" class="read-more">
                        Read More
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
          <section class="instagram-wrapper">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="title-wrapper">
                    <h3 class="title">#Instagram Feed</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-fluid">
              <div class="instagram-slider">
                <img src="images/insta-img-1.jpg" alt="" class="img-fluid" />
                <img src="images/insta-img-2.jpg" alt="" class="img-fluid" />
                <img src="images/insta-img-3.jpg" alt="" class="img-fluid" />
                <img src="images/insta-img-4.jpg" alt="" class="img-fluid" />
                <img src="images/insta-img-1.jpg" alt="" class="img-fluid" />
                <img src="images/insta-img-2.jpg" alt="" class="img-fluid" />
                <img src="images/insta-img-3.jpg" alt="" class="img-fluid" />
                <img src="images/insta-img-4.jpg" alt="" class="img-fluid" />
                <img src="images/insta-img-1.jpg" alt="" class="img-fluid" />
                <img src="images/insta-img-2.jpg" alt="" class="img-fluid" />
                <img src="images/insta-img-3.jpg" alt="" class="img-fluid" />
                <img src="images/insta-img-4.jpg" alt="" class="img-fluid" />
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Content;
