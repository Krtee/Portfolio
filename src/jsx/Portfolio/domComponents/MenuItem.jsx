import React, { useState, useEffect } from 'react';

const MenuItem = ({ itemName, active }) => {

    const [anchorTarget, setAnchorTarget] = useState(null);


    useEffect(() => {
        setAnchorTarget(document.getElementById(itemName));
    }, [itemName]);

    const handleClick = event => {
        event.preventDefault();
        anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <li>
            <a href={`#${itemName}`}
               onClick={handleClick}
               className={active}
               aria-label={`Scroll to ${itemName}`}>
                {itemName}
            </a>
        </li>
    );
};

export default MenuItem;
