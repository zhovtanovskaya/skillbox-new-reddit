import React from 'react';
import styles from './card.css';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from "./TextContent";

export function Card() {
    return (
        <li className={styles.card}>
            <TextContent />
            <Preview />
            <Menu />
            <div className={styles.controls} />
        </li>
    )
}