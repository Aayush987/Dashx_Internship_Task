"use client";

import Image from "next/image";
import "./InputForm.css";
import updown from "./images/updown.png";
import { useState } from "react";
import CustomDropDown from "./CustomDropDown";

const InputForm = () => {
    const [isInputFilled, setIsInputFilled] = useState(false);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setIsInputFilled(value.trim() !== ""); 
    };

    return (
        <div className="container">
            <div className="slider-btns">
                <button className="active">Swap</button>
                <button>Buy</button>
                <button>Sell</button>
            </div>
            <div className="container-body">
                <div className="items">
                    <div className="item item-1">
                        <div className="payment-select">
                            <CustomDropDown  width={453} height={46} />
                            {/* <select>
                                <option>
                                    Polygon
                                </option>
                            </select> */}
                        </div>
                        <div className="input-val">
                            <input type="text"  onChange={handleInputChange} placeholder="Enter Amount.." />
                            <CustomDropDown width={120} height={46} />
                        </div>
                        <div className="balance">
                            <div className="balance-left">
                                <p>$10,021.00</p>
                            </div>
                            <div className="balance-right">
                                <p>Balance:</p>
                                <p className="amt">1.17459</p>
                            </div>
                        </div>
                    </div>
                    <div className="swap-ruler">
                        <hr />
                        <button className="arrow"><Image src = {updown} width={30} height={30} alt="arrow" /></button>
                        <hr />
                    </div>
                    <div className="item item-2">
                        <div className="payment-select">
                            <CustomDropDown width={453} height={46} />
                        </div>
                        <div className="input-val">
                            <input type="text" onChange={handleInputChange} placeholder="Enter Amount.." />
                            <CustomDropDown width={120} height={46} />
                        </div>
                        <div className="balance">
                            <div className="balance-left">
                                <p>$10,021.00</p>
                            </div>
                            <div className="balance-right">
                                <p>Balance:</p>
                                <p className="amt">1.17459</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details">
                    <div className="detail detail-1">
                        <p>Max. Slippage</p>
                        <p className="amt">0.5%</p>
                    </div>
                    <div className="detail detail-1">
                        <p>Price</p>
                        <p className="amt">1WBTC = XX ETH</p>
                    </div>
                    <div className="detail detail-1">
                        <p>Fee(0.XX%)</p>
                        <p className="amt">$102.34</p>
                    </div>
                    <div className="detail detail-1">
                        <p>Swap Provider</p>
                        <p className="amt">Decent</p>
                    </div>
                </div>
            </div>
            <div className="submit">
            <button className="submit-btn" disabled={!isInputFilled}>Swap</button>
            </div>
        </div>
    );
};

export default InputForm;
