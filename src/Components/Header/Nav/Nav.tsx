import React from 'react';
import s from './nav.module.css'

export const Nav = () => {
    return (
        <div className={s.nav}>
                <a href="src/Components/Header/Nav/Nav">Home</a>
                <a href="src/Components/Header/Nav/Nav">Skills</a>
                <a href="src/Components/Header/Nav/Nav">Projects</a>
                <a href="src/Components/Header/Nav/Nav">Сonnection</a>
        </div>
    );
};

