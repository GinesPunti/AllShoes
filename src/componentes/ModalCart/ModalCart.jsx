import {
  ModalCartStyle,
  ModalCartType,
  ModalCartClean,
  ModalCartProducts,
  ModalCarFoot,
  Button,
  ModalCartClose,
  ModalCartPrice,
  ModalCartPriceSpan,
} from "./ModalCartStyled";
import { BsTrash } from "react-icons/bs";
import ModalCartCard from "./ModalCartCard";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { cleanCart, toggleVisibleCart } from "../../redux/cart/cart-action";

function ModalCart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const subtotal = items.reduce((sub, item) => (sub += item.price), 0);
  return (
    <ModalCartStyle>
      <ModalCartClose>
        <IoMdCloseCircleOutline
          fontSize={`1.3rem`}
          color="white"
          onClick={() => {
            dispatch(toggleVisibleCart());
          }}
          cursor={`pointer`}
        />
      </ModalCartClose>
      <ModalCartType>
        <p>Producto</p>
        <ModalCartClean>
          <BsTrash
            disabled={!items.length}
            color="white"
            fontSize={`1.3rem`}
            cursor={`pointer`}
            onClick={() => {
              dispatch(cleanCart());
            }}
          />
        </ModalCartClean>
      </ModalCartType>
      <ModalCartProducts>
        {items.length ? (
          items.map((item) => <ModalCartCard {...item} />)
        ) : (
          <p>Por favor agregue un producto</p>
        )}
      </ModalCartProducts>
      <ModalCartPrice>
        <p>
          Monto Subtotal:{" "}
          <ModalCartPriceSpan color="#8AC926">{subtotal}</ModalCartPriceSpan>USD
        </p>
        <p>
          Precio de envio:{" "}
          <ModalCartPriceSpan color="#8AC926">10 </ModalCartPriceSpan>USD
        </p>
      </ModalCartPrice>
      <ModalCarFoot>
        <Button>Ir al pago </Button>
      </ModalCarFoot>
    </ModalCartStyle>
  );
}

export default ModalCart;
