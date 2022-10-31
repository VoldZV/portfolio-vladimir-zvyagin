import React from 'react';
import s from './header.module.css'
import {Nav} from "./Nav/Nav";
import comStyles from '../../common/styles/commonStyles.module.css'


export const Header = () => {
    return (
        <div className={s.header}>
            <div className={`${comStyles.flexRowContainer} ${s.headerContainer}`}>
                <Nav/>
            </div>
        </div>
    );
};

