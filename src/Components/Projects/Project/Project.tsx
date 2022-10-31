import React from 'react';
import s from './project.module.css'

type ProjectPropsType = {
    title: string
    descr: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.imgProject}>
                <button>Watch</button>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.descr}>
                    {props.descr}
            </span>
        </div>
    );
};

