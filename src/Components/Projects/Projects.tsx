import React from 'react';
import comStyles from '../../common/styles/commonStyles.module.css'
import s from './projects.module.css'
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={comStyles.flexColumnContainer}>
                <h2 className={s.title}>My projects</h2>
                <div className={s.projects}>
                    <Project title={"Todolist"} descr={'Lorem ipsum dolor sit amet, consectetur adipisibusdam '}/>
                    <Project title={'Social Network'} descr={'Quos ratione reiciendis repellendus saepe sint temporibus voluptatibus?'}/>
                </div>
            </div>
        </div>
    );
};

