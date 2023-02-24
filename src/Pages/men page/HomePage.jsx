import React from "react";
import Sort from "../components/Sort/Sort";
import Cards from "../components/Product/Cards";

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