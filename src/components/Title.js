import React from "react";
import style from './Title.css';

const Title = props => {
    return (
        <div>
            <h2 className={style.TitleApp}>
                {props.title}
            </h2>
            <h3>You have {props.itemList} things to do!</h3>
        </div>
    );
};

export default Title;