import React from 'react';
import styles from './menuitemslist.css';

interface MenuItemsListProps {
    postId: string;
}

export function MenuItemsList({ postId }: MenuItemsListProps) {
    return (
        <ul className={styles.menuItemsList}>
            <li className={styles.menuItem}>
                Скрыть
            </li>
            <div className={styles.divider} />
            <li className={styles.menuItem}>
                Пожаловаться
            </li>
        </ul>
    )
}