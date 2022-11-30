import { Carousel } from 'antd';
import React from 'react';
import './index.scss';

// Do cả chương trình chỉ có 1 list carousel
// Nên lưu thẳng vào đây để đỡ tốn chi phí query
const list = [
  '//cdn.tgdd.vn/2022/11/banner/messageImage1669702337231-1920x450.jpg',
  '//cdn.tgdd.vn/2022/11/banner/720-22019-720x220-2.gif',
  '//cdn.tgdd.vn/2022/11/banner/720-220-720x220-11.png',
  
];

function SaleOff() {
  return (
    <Carousel className="Sale-Off" autoplay>
      {list.map((item, index) => (
        <img className="Sale-Off-img" src={item} key={index} />
      ))}
    </Carousel>
  );
}

export default SaleOff;
