import React from 'react';
import styles from './menuitemslist.css';

interface MenuItemsListProps {
    postId: string;
}

export function MenuItemsList({ postId }: MenuItemsListProps) {
    return (
        <ul className={styles.menuItemsList}>
            <div className={styles.desktopMenuItems}>
                <li className={styles.menuItem}>
                    Комментарий
                </li>
                <div className={styles.divider} />
                <li className={styles.menuItem}>
                    Поделиться
                </li>
                <div className={styles.divider} />
            </div>
            <li className={styles.menuItem}>
                Скрыть
            </li>
            <div className={styles.desktopMenuItems}>
                <div className={styles.divider} />
                <li className={styles.menuItem}>
                    Сохранить
                </li>
                <div className={styles.divider} />
            </div>
            <li className={styles.menuItem}>
                Пожаловаться
            </li>
        </ul>
    )
}