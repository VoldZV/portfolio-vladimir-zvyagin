import React from 'react';
import s from './skill.module.css'

type SkillPropsType = {
    title: string
    descr: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3 className={s.title}>{props.title}</h3>
            <span>{props.descr}</span>
        </div>
    );
};

