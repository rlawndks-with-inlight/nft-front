import React from 'react';
import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap";

const CardModal = (props) => {
    
return (

    <Modal
    show={props.show}
    onHide={props.onHide}
  >
    <Modal.Header closeButton></Modal.Header>

    <div className="modal-body space-y-20 pd-40">
        <h3>입찰하기</h3>
        <p className="text-center sub-heading">최소 <span className="price color-popup">4.89 ETH</span>를 입찰해야 합니다.</p>
        <input type="text" className="form-control" placeholder="00.00 ETH" />
        <p className="label-1">수량을 입력합니다. <span className="color-popup">5개 가능</span>
        </p>
        <input type="text" className="form-control quantity form-bottom" />
        <div className="d-flex justify-content-between detail-1">
            <p> 최소 입찰 가격:</p>
            <p className="text-right price color-popup"> 4.89 ETH </p>
        </div>
        <div className="d-flex justify-content-between detail-2">
            <p> 서비스 무료:</p>
            <p className="text-right price color-popup"> 0,89 ETH </p>
        </div>
        <div className="d-flex justify-content-between detail-3">
            <p> 총 입찰 금액:</p>
            <p className="text-right price color-popup"> 4 ETH </p>
        </div>
        <Link to="/wallet" className="button-popup" data-toggle="modal" data-target="#popup_bid_success" data-dismiss="modal" aria-label="Close"> 입찰하기</Link>
    </div>
    </Modal>
    
  );
};

export default CardModal;
