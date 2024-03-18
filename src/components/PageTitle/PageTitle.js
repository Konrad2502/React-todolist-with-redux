
import styles from './PageTitle.module.scss'

const PageTitle = (props) => {
  return(
    <h1 className={styles.header}>{props.children}</h1>
  )
};

export default PageTitle;