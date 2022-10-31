import React from 'react';
import s from './main.module.css'
import comStyles from '../../common/styles/commonStyles.module.css'
import '../../App.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${comStyles.flexRowContainer} ${s.mainContainer}`}>
                <div className={s.greeting}>
                    <span>Hi There</span>
                    <h1>I am Vladimir Zvyagin</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>

            </div>
        </div>
    );
};

