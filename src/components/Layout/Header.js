import React from 'react'
import { Fragment } from 'react'
import mealsImage from '../../Assets/download.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
export default function Header(props) {
    
    
    return (
        <Fragment>
            <header className={classes.header}> 
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}> <img src={mealsImage}/></div>
        </Fragment>
    )
}
