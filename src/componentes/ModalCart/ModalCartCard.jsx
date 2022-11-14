import React from "react";
import { ModalCardCont, ModalCardName, ModalCardPrice, ModalCardQuantity} from "./ModalCartStyled";

export default function ModalCartCard({ id, name, price, category, img, quantity }) {
  return (
    <ModalCardCont>
      <img src={img} alt={name} />
      <ModalCardName>{name}</ModalCardName>
      <ModalCardPrice style={{ color: "#8AC926" }}>{price} USD</ModalCardPrice>
      <ModalCardQuantity>{quantity}</ModalCardQuantity>
    </ModalCardCont>
  );
}
