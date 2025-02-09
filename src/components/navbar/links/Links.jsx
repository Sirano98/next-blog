"use client"
import { useState } from "react"
import styles from "./links.module.css"
import NavLink from "./navLink/NavLink"

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

const Links = () => {
    const [open, setOpen] = useState(false)

    // Temporary
    const session = true;
    const admin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) =>
                    <NavLink item={link} key={link.title} />
                )}
                {
                    session ? (
                        <>
                            {admin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                            <button className={styles.logout}>Logout</button>
                        </>
                    ) : (
                        <NavLink item={{ title: "Login", path: "/login" }} />
                    )
                }
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) =>
                        <NavLink item={link} key={link.title} />
                    )}
                </div>
            )}
        </div>
    )
}

export default Links