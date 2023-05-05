import { FaCartArrowDown, FaCartPlus } from "react-icons/fa";

const Item = ({image :  picture, title, price, styling}) => {
    return (
        <div className="item" style={styling}>
            <span className="pt-1">
                <img src={picture} alt="" />
            </span>
            <h2>{title}</h2>
            <p className="price">${price}</p>
            <button className="order">
                <FaCartArrowDown className="order-svg" />
            </button>
            <svg className="item-svg">
                <rect></rect>
            </svg>
        </div>
    )
}

export default Item;