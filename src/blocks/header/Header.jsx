import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.header}>
            <img className={classes.logo} src="https://i.pinimg.com/originals/d1/2b/cf/d12bcf726d8683c17229522b730ea061.png" />
        </div>
    )
}
export default Header;
