import React from 'react'
import styles from './Bank.module.css'

export default function Bank({point}) {
    return (
        <div className={styles.bank}>
            Right answers:{point}
        </div>
    )
}
