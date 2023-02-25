import React from "react";
import Sort from "../../Components/mensPage/Sort/Sort";
import Cards from "../../Components/mensPage/Product/Cards";

const HomePage = () => {
    return(
        <>
            <Sort />
            <div className="outer-wrapper">
                <Cards />
            </div>
        </>
    )
}

export default HomePage;