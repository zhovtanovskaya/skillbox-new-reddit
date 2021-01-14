import React from 'react';
import styles from './dropdown.css';

interface DropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
}

export function Dropdown({ button, children }: DropdownProps) {

    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    return (
        <div className={ styles.dropdown }>
            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                { button }
            </div>
            {isDropdownOpen && (
                <div>
                    <div onClick={() => setIsDropdownOpen(false)}>
                        { children }
                    </div>
                </div>
            )}
        </div>
    )
}