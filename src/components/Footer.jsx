import React from 'react';


const customStyles = {
    
    footerBackground: {
        backgroundColor: '#300000', 
        color: 'white',
        borderTop: '5px solid #FFD700', 
    },
    
    goldenText: {
        color: '#FFD700', 
        fontWeight: '700',
    },
   
    linkHover: {
        transition: 'color 0.3s',
    },
    
    iconSize: {
        width: '30px',
        height: '30px',
        margin: '0 15px',
        minWidth: '30px',
    }
};

const Footer = () => {
    
   
    const HogwartsIcon = () => (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill={customStyles.goldenText.color} 
            style={customStyles.iconSize}
            className="d-none d-md-block"
        >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.416 3.967 1.48-8.279-6.064-5.828 8.332-1.151z"/>
        </svg>
    );

    return (
        <footer style={customStyles.footerBackground} className="py-4 mt-auto">
            <div className="container">
                <div 
                    className="d-flex flex-column flex-md-row justify-content-center align-items-center"
                >
                    <HogwartsIcon />
                    <div className="text-center mx-4 my-2 my-md-0">
                       
                        <p className="mb-1 small text-white-50">
                            © {new Date().getFullYear()} Tarjeta Mágica. Creado por AntonioAraujo-CoderHouse.
                        </p>
                    </div>
                    <HogwartsIcon />
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;