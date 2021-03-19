import React from 'react';

const Header = ({name}) => {
    return (
        <div style={{backgroundColor:	'#383838'}} className="text-center font-weight-bolder ">
            <h1 style={{color:'	#A0A0A0'}}>Welcome To Test Application <i className="fas fa-book-reader" style={{color:'blue'}}></i></h1>
            {/* <h1>Tis is a hd by {name}</h1> */}
        </div>
    );
}

export default Header;
