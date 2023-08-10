import React from 'react'
import styles from "./content.module.css";
import Sider from '../sider';
import Dashboard from '../dashboard';


const Content = () => {
  return <section className={styles.main}>
    <Sider />
    <Dashboard />
  </section>;
}

export default Content