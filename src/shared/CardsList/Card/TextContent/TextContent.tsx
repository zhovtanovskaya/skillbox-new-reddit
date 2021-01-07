import React from 'react';
import styles from "./textcontent.css";

export function TextContent() {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img
                        className={styles.avatar}
                        src="https://cdn.dribbble.com/users/1733140/avatars/small/6440179fdb64023698f6be34992ce902.png?1495037513"
                        alt="Дмитрий Гришин"
                    />
                    <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
                </div>
                <span className={styles.createdAt}>4 часа назад</span>
            </div>
            <h2 className={styles.title}>
                <a href="#post-url" className={styles.postLink}>
                    Следует отметить, что новая модель организационной Следует отметить, что новая модель организационной Следует отметить, что новая модель организационной
                </a>
            </h2>
        </div>
    );
}