import React from 'react';
import style from './Style.module.css';

const HomeView = () => (
  <div className={style}>
    <h1 className={style}>
      Wellcome to CONTACTS APP !!!
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;
