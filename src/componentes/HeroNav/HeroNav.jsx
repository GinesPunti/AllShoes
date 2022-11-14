import React from "react";
import { IoIosCart } from "react-icons/io";
import {
  NavUlStyled,
  NavLiStyled,
  HeroNavStyled,
  NavAStyled,
} from "./HeronNavStiled";
import ModalCart from "../ModalCart/ModalCart";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisibleCart } from "../../redux/cart/cart-action";
import { Link } from "react-router-dom";

function HeroNav() {
  const { visible } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  return (
    <HeroNavStyled>
      <NavUlStyled>
        <NavLiStyled>
          <NavAStyled href="">Home</NavAStyled>
        </NavLiStyled>
        <Link to="/Login" style={{ textDecoration: "none", color: "white" }}>
          <NavLiStyled>Inicia Sesión</NavLiStyled>
        </Link>
        <NavLiStyled>
          <IoIosCart
            fontSize="1.3rem"
            cursor="pointer"
            onClick={(e) => {
              dispatch(toggleVisibleCart());
            }}
          />
        </NavLiStyled>
      </NavUlStyled>
      {visible && <ModalCart isHidden={!visible} />}
    </HeroNavStyled>
  );
}

export default HeroNav;
