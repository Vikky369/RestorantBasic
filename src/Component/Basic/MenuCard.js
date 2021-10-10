import React from 'react';
import "./style.css";
const MenuCard = ({ menuData }) => {
    return (
        <>
        <section className="main-card--cointainer">
           { menuData.map((curElem)=>{
    //Distructoring
            const {id,name,category,image,description}=curElem;
 
                return(
                    <>
                    <div className="card-container" key={id}>
                    <div className="card">
                        <div className="card-body">
                            <span className="card-number card-circle subtle">{id}</span>
                            <span className="card-author subtel" >{category}</span>
                            <h2 className="card-title">{name}</h2>
                            <span className="card-description subtel">
                            {description}
                            </span>
                            <div className="card-read">Read</div>
                        </div>
                        <img src={image} alt="images" className="card-media" width="100%" height="100%"/>
                        <span className="card-tag subtel"> Order Now</span>
                    </div>
    
                </div> 
                </>
                );
               })}
           </section>
        </>
    )
}

export default MenuCard;
