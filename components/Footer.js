import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div>
            <div className={styles.divider} />

            <div className={styles.container}>
                <p>NextApp &copy; 2021</p>
            </div>
        </div>
    )
}

export default Footer
