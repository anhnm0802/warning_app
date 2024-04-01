import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('sidebar_container')}>
                <div className={cx('sidebar_logo')}>
                    <div className={cx('sidebar_logo_cover_icon')}>
                        <FontAwesomeIcon icon={faCircle} />
                        <FontAwesomeIcon icon={faEye} />
                    </div>
                </div>
                <div className={cx('sidebar_details')}>
                    <div className={cx('sidebar_details_item')}>
                        <div className={cx('sidebar_details_cover_icon')}>
                            <FontAwesomeIcon icon={faCircle} />
                        </div>
                    </div>
                    <div className={cx('sidebar_details_item')}>
                        <div className={cx('sidebar_details_cover_icon')}>
                            <FontAwesomeIcon icon={faCircle} />
                        </div>
                    </div>
                    <div className={cx('sidebar_details_item')}>
                        <div className={cx('sidebar_details_cover_icon')}>
                            <FontAwesomeIcon icon={faCircle} />
                        </div>
                    </div>
                    <div className={cx('sidebar_details_item')}>
                        <div className={cx('sidebar_details_cover_icon')}>
                            <FontAwesomeIcon icon={faCircle} />
                        </div>
                    </div>
                    <div className={cx('sidebar_details_item')}>
                        <div className={cx('sidebar_details_cover_icon')}>
                            <FontAwesomeIcon icon={faCircle} />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
