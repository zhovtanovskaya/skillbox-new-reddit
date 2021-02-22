import React from 'react';
import styles from './menu.css';
import { Dropdown } from "../../../Dropdown";
import { MenuItemsList } from "./MenuItemsList/MenuItemsList";

export function Menu() {
    let menuButton = (
        <button className={styles.menuButton}>
            <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
                <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
                <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
            </svg>
        </button>
    );
    return (
        <Dropdown button={menuButton}>
            <div className={styles.dropdown}>
                <MenuItemsList postId="1" />
                <button className={styles.closeButton}>
                    Закрыть
                </button>
            </div>
        </Dropdown>
    )
}