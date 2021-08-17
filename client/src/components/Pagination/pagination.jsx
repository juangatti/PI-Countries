import React from 'react';
import styles from './pagination.module.css'


export default function Pagination(props) {

    let pages = [];
    //[1,2,3,4,n]

    for (let i = 1; i <= Math.ceil(props.countries.length / props.countryPp); i++) {
        pages.push(i)
    }

    return (
        <div className={`${styles.paginationWrapper}`}>
            {
                pages && pages.map(e => {
                    return (
                        <button key={e} onClick={() => props.renderPage(e)}>{e}</button>
                    )
                })
            }
        </div>
    )
}