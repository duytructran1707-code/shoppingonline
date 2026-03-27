import { Component } from 'react';
import home_img from '../../src/asset/imgs/home_img.jpeg'
class Home extends Component {
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">ADMIN HOME</h2>
        <img
          src={home_img}
          width="800"
          height="600"
          alt=""
        />
      </div>
    );
  }
}

export default Home;
