import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react';
import { Wrapper as WrapperPoper } from '../index';
import Button from '../../../components/Button/Button';

const cx = classNames.bind(styles);
function Menu({ children, data = [] }) {
    return (
        <Tippy
            interactive
            visible
            placement="bottom-end"
            render={(attrs) => (
                <ul>
                    <div className={cx('setting')} tabIndex="-1" {...attrs}>
                        <WrapperPoper>
                            {data.map((item) => (
                                <li className={cx('setting-item')}>
                                    <Button leftIcon={item.icon} to={item.href}>
                                        {item.title}
                                    </Button>
                                </li>
                            ))}
                        </WrapperPoper>
                    </div>
                </ul>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
