import React from 'react'
import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'
import { Fragment } from 'react'
export default function Meal() {
    return (
        <Fragment>
            <MealsSummary/>
            <AvailableMeals/>
        </Fragment>
    )
}
