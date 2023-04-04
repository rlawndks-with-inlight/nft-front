import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { commarNumber } from "../../functions/utils";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

const CardModal = (props) => {
  const { item, onHide } = props;
  const defaultObj = {
    price: "",
  };
  const [values, setValues] = useState(defaultObj);
  const addAuction = async () => {
    onHide();
    const { data: response } = await axios.post("/api/auction", {
      item_pk: item?.pk,
      price: values.price,
    });
    if (response?.result > 0) {
      toast.success("성공적으로 경매 되었습니다.");
      window.location.reload();
    } else {
      toast.error(response?.message);
    }
  };
  const onChangeValues = (event) => {
    let { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>

      <div className="modal-body space-y-20 pd-40">
        <h3>입찰하기</h3>
        <p className="text-center sub-heading">
          최소{" "}
          <span className="price color-popup">
            {commarNumber(item?.price)} {item?.wallet?.unit}
          </span>
          를 입찰해야 합니다.
        </p>
        <input
          type="number"
          className="form-control"
          name="price"
          placeholder={`00.00`}
          onChange={onChangeValues}
          value={values.price}
        />
        <p className="label-1" />
        <div className="d-flex justify-content-between detail-1">
          <p> 최소 입찰 가격:</p>
          <p className="text-right price color-popup">
            {" "}
            {commarNumber(item?.price)} {item?.wallet?.unit}
          </p>
        </div>
        <div className="d-flex justify-content-between detail-2">
          <p> 현재 최고 입찰가:</p>
          <p className="text-right price color-popup">
            {commarNumber(item?.max_price??0)} {item?.wallet?.unit}{" "}
          </p>
        </div>
        <div className="d-flex justify-content-between detail-3">
          <p> 총 입찰 금액:</p>
          <p className="text-right price color-popup">
            {" "}
            {commarNumber(values.price ?? 0)} {item?.wallet?.unit}{" "}
          </p>
        </div>
        <div
          style={{ cursor: "pointer" }}
          className="button-popup"
          data-toggle="modal"
          data-target="#popup_bid_success"
          data-dismiss="modal"
          aria-label="Close"
          onClick={addAuction}
        >
          {" "}
          입찰하기
        </div>
      </div>
    </Modal>
  );
};

export default CardModal;
