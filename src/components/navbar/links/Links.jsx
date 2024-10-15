"use client";

import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { LogIn, LogOut } from "lucide-react";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  /* Temporarily hardcoded session and admin */
  const session = true;
  const isAdmin = true;

  return (
    <div>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>
              <LogOut size={16} />
              Logout
            </button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }}>Login</NavLink>
        )}
      </div>

      {/* Mobile menu button */}
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />

      {/* Show mobile links when open */}
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
          {session ? (
            <>
              {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
              <button className={styles.logout}>
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            <NavLink item={{ title: "Login", path: "/login" }}>Login</NavLink>
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
