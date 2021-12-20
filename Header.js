import React from 'react';

export default function Header(){
    return(
        <nav>
            <div className='logo'>Cars</div>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
            <div className="search">
                <i className='fa fa-search'></i>
                <i className='fa fa-shopping-basket'></i> 
           </div>
                   </nav>
        
    );
}


