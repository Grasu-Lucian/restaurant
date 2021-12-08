import React from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
export default function MealItemForm() {
    return (
        <form className={classes.form}>
            <Input label='Amout' input={{id:"amout",type:'number',min:'1',max:'5',step:'1',
        defaultValu:'1'}}/>
            <button>+ Add</button>
        </form>
    )
}
