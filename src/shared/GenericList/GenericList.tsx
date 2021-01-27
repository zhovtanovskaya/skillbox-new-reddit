import React from 'react';

interface Item {
    id: string;
    text: string;
    onClick: (id: string) => void;
    className: string;
    As: 'a' | 'li' | 'button' | 'div';
    href?: string;
}

interface GenericListProps {
    list: Item[];
}

const noop = () => {};

export function GenericList({ list }: GenericListProps) {
    return (
        <ul>
            {list.map(
                ({As, text, onClick=noop, className, id, href}) => (
                    <As
                        className={className}
                        onClick={() => onClick(id)}
                        key={id}
                        href={href}
                    >
                        {text}
                    </As>
                )
            )}
        </ul>
    )
}