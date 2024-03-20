import React from 'react';
import './product.css';

class Product extends React.Component {
  state = {
    mainImage: 'https://th.bing.com/th/id/R.2358b9f9cae60378d9f84503ce9af35b?rik=wStHg5QhPvO9sA&pid=ImgRaw&r=0',
    thumbnailImages: [
      'https://th.bing.com/th/id/R.90ee13cc19d0a0dbf9584677b8db1a95?rik=Sa5fNWrMd23HiQ&riu=http%3a%2f%2f4.imimg.com%2fdata4%2fTK%2fAT%2fMY-27756634%2fsugarcane-molasses-250x250.jpg&ehk=LwLkob9%2ffQ3FL%2fCkHqNFl%2fv2hh4bw5QdWdeTOmo%2birY%3d&risl=&pid=ImgRaw&r=0',
      'https://5.imimg.com/data5/LP/KF/BI/SELLER-33652371/liquid-animal-feed-molasses-500x500.jpg',
      'https://static.scientificamerican.com/blogs/cache/file/7526D1F9-CC88-43F1-A54731E69B50D041.jpg',
      'https://th.bing.com/th/id/R.3adea28a03ffcbc9efa73f6271038fea?rik=VUKn%2ftOZQiOOdA&riu=http%3a%2f%2fwww.qraamen.com%2fcdn%2fshop%2farticles%2fShilajit.png%3fv%3d1674476023&ehk=DlT7Slp%2b2d3Edcbkmn8VCPDyeSc0a%2fc4wdBfR5DOJWk%3d&risl=&pid=ImgRaw&r=0'
    ],
    productName: "Premium Organic Aftabi Silajeet",
    shortDescription: "Boost your energy and vitality with our premium organic aftabi silajeet.",
    discountedPrices: [
      { size: "10g", price: "1599 PKR" },
      { size: "20g", price: "1899 PKR" },
      { size: "30g", price: "2100 PKR" }
    ],
    selectedPackaging: "",
    packagings: ["Jar", "Plastic Bag"],
    selectedSize: "",
    sizes: ["10g", "20g", "30g"],
    quantity: 1,
  };

  changeImage = (image) => {
    this.setState({ mainImage: image });
  };

  handlePackagingChange = (packaging) => {
    this.setState({ selectedPackaging: packaging });
  };

  handleSizeChange = (size) => {
    this.setState({ selectedSize: size });
  };

  handleQuantityChange = (event) => {
    this.setState({ quantity: event.target.value });
  };

  render() {
    const { productName, shortDescription, discountedPrices, mainImage, thumbnailImages, sizes, selectedSize, quantity } = this.state;

    return (
      <div className="container mt-5 mb-5">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-6 border-end">
              <div className="d-flex flex-column justify-content-center">
                <div className="main_image">
                  <img src={mainImage} id="main_product_image" width="350" alt="Main Product" />
                </div>
                <div className="thumbnail_images">
                  <ul id="thumbnail">
                    {thumbnailImages.map((image, index) => (
                      <li key={index}>
                        <img onClick={() => this.changeImage(image)} src={image} width="70" alt={`Thumbnail ${index}`} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 right-side">
                <div className="d-flex justify-content-between align-items-center">
                  <h3>{productName}</h3>
                  <span className="heart"><i className='bx bx-heart'></i></span>
                </div>
                <p className="text-muted">{shortDescription}</p>
                {discountedPrices.map((offer, index) => (
                  <div key={index}>
                    <h4 className="text-danger">{offer.price} for {offer.size}</h4>
                  </div>
                ))}
                <div className="sizes">
                  <span className="fw-bold">Size:</span>
                  <div>
                    {sizes.map((size, index) => (
                      <span
                        key={index}
                        className={`size ${selectedSize === size ? 'selected' : ''}`}
                        onClick={() => this.handleSizeChange(size)}
                      >{size}</span>
                    ))}
                  </div>
                </div>
                <div className="quantity">
                  <span className="fw-bold">Quantity:</span>
                  <input
                    type="number"
                    value={quantity}
                    onChange={this.handleQuantityChange}
                    min="1"
                  />
                </div>
                <div className="buttons d-flex flex-row mt-5 gap-3">
                  <button className="btn btn-outline-dark">Buy Now</button>
                  <button className="btn btn-dark">Add to Basket</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;