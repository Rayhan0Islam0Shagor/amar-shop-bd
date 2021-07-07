import Spinner from '../../assets/spinner1.gif';
import styles from './Loading.module.scss';

const Loading = () => (
    <main className={styles.loading}>
        <div>
            <img src={Spinner} alt="" />
        </div>
    </main>
);

export default Loading;
