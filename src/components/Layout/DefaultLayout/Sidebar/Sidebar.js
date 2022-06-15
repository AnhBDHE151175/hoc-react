import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserFriends, faVideo } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('container')}>
                <div>
                    <a className={cx('component')}>
                        <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                        <h2>For You</h2>
                    </a>
                </div>
                <div>
                    <a className={cx('component')}>
                        <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon>
                        <h2>Following</h2>
                    </a>
                </div>
                <div>
                    <a className={cx('component')}>
                        <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
                        <h2>LIVE</h2>
                    </a>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
