import React, { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';

class Loading extends Component {
  render() {
    return (
      <div>
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
}

export default Loading;