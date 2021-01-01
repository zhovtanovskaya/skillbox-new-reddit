import React from 'react';
import {SearchBlock} from './SearchBlock/SearchBlock';
import {ThreadTitle} from './ThreadTitle/ThreadTitle';

export function Header() {
    return (
        <header>
            <SearchBlock />
            <ThreadTitle />
        </header>
    )
}