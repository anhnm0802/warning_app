import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('info_warning')}>Danh sách các quy tắc cảnh báo</div>
            <div className={cx('actions')}>
                <div className={cx('notìication')}>
                    <FontAwesomeIcon />
                </div>
            </div>
        </header>
    );
}

export default Header;
