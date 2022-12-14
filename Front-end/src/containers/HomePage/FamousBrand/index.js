import { Col, Row } from 'antd';
import React from 'react';
import './index.scss';

// fn: hiển thị danh sách thương hiệu
function showBrandList(list) {
  return list.map((item, index) => (
    <Col span={12} md={6} key={index}>
      <div className="brand-item t-center">
        <a href={item.link} target="blank">
          <img className="bor-rad-8" width="100%" src={item.src} alt="Photo" />
        </a>
        <h4 className="font-size-18px">{item.title}</h4>
        <span className="font-size-16px">{item.desc}</span>
      </div>
    </Col>
  ));
}

// danh sách thương hiệu
const list = [
  {
    link: '',
    src:
      '//cdn.tgdd.vn/2022/06/banner/EXB-500k-380x200.png',
    title: 'EXIMBANK',
    desc: 'MUA TRẢ GÓP',
  },
  {
    link: '',
    src:
      '//cdn.tgdd.vn/2022/06/banner/VNPay-Toan-bo-san-pham-380x200.png',
    title: 'VNPAY',
    desc: 'THANH TOÁN ONLIEN',
  },
  {
    link: '',
    src:
      '//cdn.tgdd.vn/2022/10/banner/TGDD-380x200-380x200.jpg',
    title: 'VNPAY',
    desc: 'Siêu ưu đãi cùng với VNPAY',
  },
  {
    link: '',
    src:
      '//cdn.tgdd.vn/2022/11/banner/VNPay-Apple-Watch-380x200-1.png',
    title: 'VNPAY',
    desc: 'Sản phẩm siêu chất lượng',
  },
];

// rendering ...
function FamousBrand() {
  return (
    <div className="p-16 Famous-Brand">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h2 className="font-weight-700">Thương hiệu nổi bật</h2>
          <div className="underline-title"></div>
        </Col>
        {showBrandList(list)}
      </Row>
    </div>
  );
}

export default FamousBrand;
