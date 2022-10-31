import React from 'react';
import s from './footer.module.css'
import comStyles from '../../common/styles/commonStyles.module.css'
import {FooterIcon} from "./FooterIcon/FooterIcon";


export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${comStyles.flexColumnContainer} ${s.pb0}`}>
                <h2 className={s.title}>Vladimir Zvyagin</h2>
                <div className={s.footerContent}>
                    <FooterIcon/>
                    <FooterIcon/>
                    <FooterIcon/>
                    <FooterIcon/>
                </div>
                <h4 className={s.subtitle}>&copy; 2022 ALL RIGHTS RESERVED </h4>
            </div>
        </div>
    );
};

