import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from "../../redux/iceCream/IceCreamAction";
import { useLanguage } from "../Language/hooks";

export default function IceCreamContainer() {
    const numofIceCream = useSelector(state => state.numofIceCream);
    const dispatch = useDispatch();
    const { t } = useLanguage();

    return (
        <div className="container mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl font-bold mb-8">
                {t("iceCream.count_title")} <span className="text-yellow-400">{numofIceCream}</span>
            </h1>
            <button 
                onClick={() => dispatch(buyIceCream())}
                className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black text-xl hover:bg-yellow-500 transition-all active:scale-95 shadow-lg shadow-yellow-400/20"
            >
                {t("iceCream.buy_button")}
            </button>
        </div>
    );
}
