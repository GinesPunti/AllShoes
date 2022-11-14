import React from "react";
import { useDispatch } from "react-redux";
import { selectCategorie } from "../../redux/categories/categories-action";
import { CategoriesStyled } from "./ShopStyled";

export default function Categoria({ id, img, category }) {
  const dispatch = useDispatch();
  return (
    <CategoriesStyled onClick={(e) => dispatch(selectCategorie(category))}>
      <img src={img} alt={category} />
    </CategoriesStyled>
  );
}
