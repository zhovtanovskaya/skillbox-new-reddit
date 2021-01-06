import React from 'react';
import styles from './card.css';
import {Preview} from './Preview/Preview';

export function Card() {
    return (
        <li className={styles.card}>
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
            <div className={styles.preview}>
                <img
                    className={styles.previewImg}
                    // src="https://cdn.dribbble.com/users/1733140/screenshots/14877406/media/84941b06ee9e1f0613cc4f0da0abd8e3.png"
                    src="https://cdn.dribbble.com/users/1138006/screenshots/14732440/media/946bf7a9f91c49d3accb92662432d0fc.png?compress=1&resize=300x225"
                />
            </div>
            <div className={styles.menu} />
            <div className={styles.controls} />
        </li>
    )
}