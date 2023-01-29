import packageJson from '../../../../package.json';

import styles from './Footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.wrapper}>
      &copy; 2018-{year}
      &nbsp;<a href="https://github.com/ckomop0x">Pavel Klochkov</a>. Icons &
      flags by&nbsp;
      <a
        href="https://www.flaticon.com"
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        Flaticon
      </a>
      . v{packageJson.version}
    </footer>
  );
};

export default Footer;
