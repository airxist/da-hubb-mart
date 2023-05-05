import { useEffect, useState } from 'react';
// import pic from './../images/beverages/beverage0.jfif';
import Item from './Item';

const Showglass = ({information : Data, lookat}) => {
    let todefault = {
        transform: "translateY(0px)",
        transition: ".3s"
    }
    let [condition, setCondition] = useState(true);

    useEffect(()=>{
        setCondition(true);
        setTimeout(() => {
            setCondition(false)
        }, 100);
    },[lookat])

    let availableItems = Data.map(item => {
        let x = Math.floor((Math.random() * 1000) + 500); 
        let y = Math.floor((Math.random() * 1000) + 500); 
        let paint = {
            transform: `translate(${-x}px, ${y}px)`,
        }
        return(
                <Item 
                    key={item.id} 
                    {...item} 
                    styling={condition ? paint : todefault} 
                />
            )  
    })
    for(let i = 0; i < availableItems.length; i++) {
        let random = Math.floor(Math.random() * availableItems.length);
        let tmp = availableItems[i];
        availableItems[i] = availableItems[random];
        availableItems[random] = tmp;
    }
    return (
        <section className="showglass">
            {availableItems}
        </section>
    )
}

export default Showglass;