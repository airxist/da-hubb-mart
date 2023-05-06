import Button from "./Button"
import Showglass from "./Showglass";
import { Data } from "./Data";
import { useEffect, useState } from "react";

let availCategory = ["all", ...new Set(Data.map(item => item.category)) ];

const Main = () => {
    const [menu, setMenu] = useState(Data);
    const [truthy] = useState(true);
    const [category, {/*setCategory*/}] = useState([...availCategory])

    // filtering items
    const filtering = (event) => {
            let {id} = event.currentTarget.dataset;
            setMenu(prevMenu => {
                return id === "all" ? Data : Data.filter(item => item.category === id);
            })
        
    }
    return (
        <main className="sub">
            <div className="selection">
                <h2 className="sub-t">Our Menu</h2>
                <Button click={filtering} category={category}/>
            </div>
            <Showglass information={menu} lookat={truthy} />
        </main>
    )
}

export default Main;