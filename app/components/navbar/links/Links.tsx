import Link from 'next/link'
import React from 'react'
import styles from './links.module.css'
import NavLink from './navLink/NavLink'

interface NavLink {
    title: string,
    path: string,
}

const links: NavLink[] = [
    {
        title: "Homepage",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Blog",
        path: "/blog"
    },
]
const Links = () => {
  return (
    <div className={styles.links}>{links.map((link: NavLink) => {
        return <NavLink item={link} key={link.title} />
    })}
    </div>
  )
}

export default Links