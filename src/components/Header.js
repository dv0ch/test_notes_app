import React from "react";

const headerStyle = {
    color: '#6e6e6e',
    fontFamily: 'Fira Sans',
  };
const Header = () => {
    return(
        <div className="header">
            <h1 style={headerStyle}>Notes</h1>

        </div>
    );
};

export default Header;