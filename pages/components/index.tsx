import styles from './components.module.scss';
import DefaultButton from '@/cores/button/default_button';
import classnames from "classnames";
import Head from 'next/head';
const Components = (props) => {

    return <div className = {styles.Components}>
      <Head>
        <title>E-Rental Home</title>
        <link rel="icon" href="/app_icon.png" />
      </Head>
        <h1>Component List</h1>
        <h2>Button Group</h2>
        <div className = {classnames(styles.container)}>
            <DefaultButton className = "1">Button</DefaultButton>
        </div>
    </div>
}

export default Components;