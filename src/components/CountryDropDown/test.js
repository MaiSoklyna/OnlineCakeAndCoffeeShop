import React from "react";
import Button from "@mui/material/Button";
const Test = () => {
const [isOpen, setIsOpen] = React.useState(false);
const [selectedCountry, setSelectedCountry] = React.useState("Select Country");
const countries = ["USA", "Canada", "Mexico"];
return (
    <div
        className="dropdown"
        style={{ position: "relative", display: "inline-block" }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
    >
        <button
            className="dropbtn"
            style={{
                display: "flex",
                color: "blue",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                padding: "12px 24px", // Increased size
                fontSize: "18px", // Larger text
                border: "1px solid #ccc",
                background: "#fff",
            }}
        >
            {selectedCountry}
            <span style={{ marginLeft: "8px", fontSize: "16px" }}>{">"}</span>
            <span style={{ marginLeft: "16px", fontWeight: "bold" }}>Search</span>
        </button>
        {isOpen && (
            <div
                className="dropdown-content"
                style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    background: "blue",
                    border: "1px solid #ccc",
                    minWidth: "160px",
                    zIndex: 1,
                }}
            >
                {countries.map((country) => (
                    <button
                        key={country}
                        type="button"
                        className="dropdown-item"
                        style={{
                            display: "block",
                            width: "100%",
                            padding: "8px 16px",
                            background: "violet",
                            border: "none",
                            textAlign: "left",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            setSelectedCountry(country);
                            setIsOpen(false);
                        }}
                    >
                        {country}
                    </button>
                ))}
            </div>
        )}
    </div>
);
};
export default Test();

