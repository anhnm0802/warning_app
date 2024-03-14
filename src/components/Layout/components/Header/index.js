import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import styles from './header.module.scss';
import images from '~/assets/images';

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
                <Tippy render={(attrs) => <div className={cx('search-result')} tabIndex="-1" {...attrs}></div>}>
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
                    <div className={cx('upload')}></div>
                    <div className={cx('messenger')}></div>
                    <div className={cx('notification')}></div>
                    <div className={cx('profile_user')}></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
