import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ item }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={item.avatar} alt="name" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    {item.full_name}
                    {item.tick && (
                        <span className={cx('check')}>
                            <FontAwesomeIcon icon={faCircleCheck} />
                        </span>
                    )}
                </h4>
                <p className={cx('username')}>{item.nickname}</p>
            </div>
        </div>
    );
}

export default AccountItem;
