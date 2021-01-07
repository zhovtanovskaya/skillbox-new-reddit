import React from 'react';
import styles from "./preview.css";

export function Preview() {
    return (
        <div className={styles.preview}>
            <img
                className={styles.previewImg}
                // src="https://cdn.dribbble.com/users/1733140/screenshots/14877406/media/84941b06ee9e1f0613cc4f0da0abd8e3.png"
                src="https://cdn.dribbble.com/users/1138006/screenshots/14732440/media/946bf7a9f91c49d3accb92662432d0fc.png?compress=1&resize=300x225"
            />
        </div>
    );
}