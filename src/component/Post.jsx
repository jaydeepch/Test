import React from "react";
class Post extends React.Component {
  constructor() {
    super();

    this.state = {
      post: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/post")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          post: result.data,
        });
      });
  }
  render() {
    const { post } = this.state;

    return (
      <div>
        <section class="our-blog-wrapper">
          <div class="container">
            <div class="row">
              {post.map((posts) => (
                <div class="col-md-4">
                  <div class="blog-box">
                    <figure class="blog-img">
                      <img
                        src="images/blog-img-1.jpg"
                        class="img-fluid"
                        alt=""
                      />
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
      </div>
    );
  }
}

export default Post;
