"use client";
//note all components that use hooks must be client components

import React from 'react'
import styles from './navLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  item: {
    title: string;
    path: string;
  };
}

const NavLink: React.FC<NavLinkProps> = ({ item }) => {
  //hook from Next JS to access pathname https://nextjs.org/docs/app/api-reference/functions/use-pathname
  const pathName = usePathname();
  const isAstive = pathName == item.path
  return (
    <div>
      <Link href={item.path} className={`${styles.container} ${isAstive && styles.active}`}>
        {item.title}
      </Link>
    </div>
  );
};

export default NavLink;