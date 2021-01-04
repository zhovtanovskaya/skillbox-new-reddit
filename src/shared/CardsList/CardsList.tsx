import React from 'react';
import styles from "./cardslist.css";

export function CardsList() {
    return (
        <ul className={styles.cardsList}>
            <li>One.</li>
            <li>Two.</li>
        </ul>
    );
}