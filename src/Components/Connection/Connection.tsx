import React from 'react';
import s from './connection.module.css'
import comStyles from '../../common/styles/commonStyles.module.css'


export const Connection = () => {
    return (
        <div className={s.connectionBlock}>
            <div className={comStyles.flexColumnContainer}>
                <h2 className={s.title}>Connection</h2>
                <form action={"#"} className={s.connectionForm} method='#' encType='multipart/form-data'>
                    <input type="text" name='FirstName' placeholder='Enter your name'/>
                    <input type="text" name='LastName' placeholder='Enter your lastname'/>
                    <textarea name="message" cols={30} rows={10} placeholder='Enter your message'></textarea>
                    <div className={s.buttons}>
                        <button type='submit'>SEND</button>
                        <button type='reset'>CLEAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

