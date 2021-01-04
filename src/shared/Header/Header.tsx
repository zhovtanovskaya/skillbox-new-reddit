import React from 'react';
import {SearchBlock} from './SearchBlock/SearchBlock';
import {ThreadTitle} from './ThreadTitle/ThreadTitle';
import {SortBlock} from "./SortBlock/SortBlock";

export function Header() {
    return (
        <header>
            <SearchBlock />
            <ThreadTitle />
            <SortBlock />
        </header>
    )
}