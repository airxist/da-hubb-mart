import { FaCartArrowDown, FaCartPlus } from "react-icons/fa";
import {motion} from 'framer-motion';

const Item = ({image :  picture, title, price, styling, look}) => {
    return (
        <motion.div className="item" style={styling}
            animate={{scale: look ? 1 : 0, opacity : 1, x : [-100, 50, 0]}}
            initial={{scale: 0, opacity : 0, x : "1000px"}}
        >
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
        </motion.div>
    )
}

export default Item;