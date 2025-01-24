import Links from "./links/Links"
import styles from "./navbar.module.css"

const Navbar = () => {
    const links = [
        {
            title: 'Homepage',
            path: '/'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Blog',
            path: '/blog'
        }
    ]
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar