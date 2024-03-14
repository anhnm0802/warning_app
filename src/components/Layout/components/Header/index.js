import styles from './header.module.scss';
import images from '~/assets/images';
import { faMessage, faPaperPlane, faCircle } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return <header className={cx('wrapper')}></header>;
}

export default Header;
