// import {  useState } from 'react';
import Item from './Item';

const Showglass = ({information : Data, lookat}) => {

    let availableItems = Data.map(item => {
        return(
                <Item 
                    key={item.id} 
                    {...item} 
                    look = {lookat}
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