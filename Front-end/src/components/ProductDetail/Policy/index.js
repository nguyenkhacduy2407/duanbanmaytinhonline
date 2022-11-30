import React from 'react';
import truckIcon from 'assets/icon/truck_24px.png';
import okIcon from 'assets/icon/ok_24px.png';
import returnProductIcon from 'assets/icon/return-product_24px.png';
import truckIcon_2 from 'assets/icon/truck-2_24px.png';
import wrenchIcon from 'assets/icon/wrench_24px.png';
import guaranteeIcon from 'assets/icon/guarantee_24px.png';

function ProductPolicy() {
  return (
    <div className="bg-white p-12 policy">
      <div style={{ color: '#53C303' }} className="m-b-4">
        <img src={truckIcon} className="m-r-4" />
        Sản phẩm được miến phí giao hàng
      </div>
      <h3 className="font-weight-700 m-tb-8">Chính sách bán hàng</h3>
      <div className="m-b-12">
        <img src={okIcon} className="m-r-4" />
        Cam kết chính hãng 100%
      </div>
      <div className="m-b-12">
        <img src={truckIcon_2} className="m-r-4" />
        Miễn phí giao hàng từ 1tr.
      </div>
      <div className="m-b-12">
        <img src={returnProductIcon} className="m-r-4" />
        Đổi trả miễn phí trong 30 ngày
      </div>
      <h3 className="font-weight-700 m-tb-12">Dịch vụ thêm</h3>
      <div className="m-b-12">
        <img src={guaranteeIcon} className="m-r-4" />
        Miễn phí bảo hành tại nhà
      </div>
      <div className="m-b-12">
        <img src={wrenchIcon} className="m-r-4" />
        Sửa chữa bảo hành tận nhà
      </div>
    </div>
  );
}

export default ProductPolicy;
