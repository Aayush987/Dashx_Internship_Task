import polygon from "./images/polygon.png";
import eth from "./images/eth.png";
import bitcoin from "./images/bitcoin.png";
import { useState } from "react";
import "./CustomDropDown.css";
import Image from "next/image";

const CustomDropDown = ({width, height}) => {
    const [selectedOption, setSelectedOption] = useState({
        icon: polygon,
        label: "Polygon",
    });
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const options = [
        { icon: polygon, label: "Polygon" },
        { icon: eth, label: "ETH" },
        { icon: bitcoin, label: "WBTC" },
    ];
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setDropdownOpen(false);
    };
    return (
        <div className="custom-dropdown" style={{width: `${width}px`, height: `${height}px`}}>
            <div
                className="dropdown-header"
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                <Image width={40} height={40} src={selectedOption.icon} alt={selectedOption.label} />
                <p>{selectedOption.label}</p>
                <span className="arrow">{dropdownOpen ? "▲" : "▼"}</span>
            </div>
            {dropdownOpen && (
                <div className="dropdown-options">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="dropdown-option"
                            onClick={() => handleOptionClick(option)}
                        >
                            <Image width={40} height={40} src={option.icon} alt={option.label} />
                            <p>{option.label}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropDown;