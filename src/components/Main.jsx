import React, { useEffect, useState } from "react";
import Button from "./Button"
import Showglass from "./Showglass";
import { Data } from "./Data";
import { FaChevronDown } from 'react-icons/fa';

let availCategory = ["all", ...new Set(Data.map(item => item.category)) ];

const Main = () => {
    const [menu, setMenu] = useState(Data);
    const [truthy] = useState(true);
    const [category] = useState([...availCategory])
    const [condition, setCondition] = useState(false);

    // filtering items
    const filtering = (event) => {
            let {id} = event.currentTarget.dataset;
            setMenu(prevMenu => {
                return id === "all" ? Data : Data.filter(item => item.category === id);
            })
    }

    // get the reference for the toggle of the button

    useEffect(()=>{
        const btns = document.querySelectorAll(".btn");
        const showMenu = document.querySelector(".show-selection");
        const select = document.querySelector(".select");
        let singleBtnHeight = btns[0].clientHeight;

        showMenu.addEventListener("click", ()=> {
            if(select.clientHeight === 0) {
                select.style.height = singleBtnHeight * btns.length + "px";
            }else {
                select.style.height = 0 + 'px';
            }
        })

        btns.forEach(btn => {
            btn.addEventListener("click", ()=>{
                select.style.height = 0 + "px";
            })
        })
        return ()=> {showMenu.removeEventListener("click")};
    }, [])


    return (
        <main className="sub">
            <div className="selection">
                <h2 className="sub-t">Our Menu</h2>
                <Button click={filtering} category={category}/>
                <button className="show-selection"
                    onClick={()=>{
                        setCondition(!condition);
                    }}
                ><FaChevronDown /></button>
            </div>
            <Showglass information={menu} lookat={truthy} />
        </main>
    )
}

export default Main;