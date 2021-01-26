import React from 'react';
import styles from './menu.css';
import { Dropdown } from "../../../Dropdown";
import { GenericList } from "../../../GenericList";
import { generateId } from "../../../../utils/generateId";

const MENU_ITEMS = [
    {
        As: 'li' as const,
        id: 'share',
        text: 'Share',
        onClick: () => {},
        className: '',
    },
    {
        As: 'li' as const,
        id: 'share',
        text: 'Share',
        onClick: () => {},
        className: '',
    },
].map(generateId);

export function Menu() {
    var menuButton = (
        <button className={styles.menuButton}>
            <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
                <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
                <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
            </svg>
        </button>
    );
    return (
        <div className={styles.menu}>
            <Dropdown button={menuButton}>
                <GenericList list={MENU_ITEMS}></GenericList>
            </Dropdown>
        </div>
    )
}