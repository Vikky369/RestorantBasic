import React, { useState } from 'react';
import "./style.css";
import MenuCard from './MenuCard';
import Menu from './menuApi';
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),"All", 
]
console.log(uniqueList);
const Resturant = () => {
    //state Variable
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList)

    const filterItem = (category) => {


        if(category==="All"){
            setMenuData(Menu);
            return;
        }


        const updatedListt = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedListt);
    };
    return (
        <>
           <Navbar filterItem={filterItem} menuList={menuList}/>
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant
