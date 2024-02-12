import Link from 'next/link'
import React from 'react'
import styles from './links.module.css'

interface Link {
    title: string,
    path: string,
}

const links: Link[] = [
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
    <div className={styles.links}>{links.map((link: Link) => {
        return <Link key={link.title} href={link.path}>{link.title}</Link>
    })}
    </div>
  )
}

export default Links