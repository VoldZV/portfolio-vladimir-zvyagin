import React from 'react';
import s from './skills.module.css'
import comStyles from '../../common/styles/commonStyles.module.css'
import {Skill} from "./Skill/Skill";


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={comStyles.flexColumnContainer}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'HTML'} descr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '}/>
                    <Skill title={'CSS'}
                           descr={'Atque commodi fuga non tenetur. Adipisci atque autem dicta distinctio'}/>
                    <Skill title={'JS'} descr={'dfbfrnghmtnm'}/>
                    <Skill title={'React'} descr={'dolores eius id illo iusto laborum magni nostrum odit'}/>
                    <Skill title={'Typescript'}
                           descr={'Typescript skills dolores eius id illo iusto laborum magni nostrum odit'}/>
                    <Skill title={'Other'}
                           descr={'Other skills laborum magni nostrum odit dolores eius id illo iusto'}/>
                </div>
            </div>


        </div>
    );
};

