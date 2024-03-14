import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faPlus, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import styles from './header.module.scss';
import images from '~/assets/images';
import { faMessage, faPaperPlane, faCircle } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo tiktok" />
                </div>
                {/* Search */}
                <Tippy
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            Ket qua
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm"></input>
                        {/* button X */}
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* button loadung */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        {/* button search */}
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <div className={cx('upload')}>
                        <button className={cx('upload-btn')}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <span className={cx('upload-span')}>Tải lên</span>
                    </div>
                    <div className={cx('messenger')}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </div>
                    <div className={cx('notification')}>
                        <FontAwesomeIcon className={cx('notification_mes')} icon={faMessage} />
                        <FontAwesomeIcon className={cx('notification_ping')} icon={faCircle} />
                    </div>
                    <div className={cx('profile_user')}>
                        <FontAwesomeIcon className={cx('profile_icon')} icon={faUser} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
