import React from 'react';
import styles from './dropdown.css';

interface DropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
}

export function Dropdown({ button, children }: DropdownProps) {

    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    let setDropdownState = (isOpen:boolean) => () => setIsDropdownOpen(isOpen);

    return (
        <div className={ styles.dropdown }>
            {/* Вызов `setIsDropdownOpen()` приведет к вызову функции `Dropdown`.
                При этом она получит от `useState()` новове значение `isDropdownOpen`.
            */}
            <div onClick={setDropdownState(!isDropdownOpen)}>
                { button }
            </div>
            {isDropdownOpen && (
                <div>
                    <div onClick={setDropdownState(false)}>
                        { children }
                    </div>
                </div>
            )}
        </div>
    )
}