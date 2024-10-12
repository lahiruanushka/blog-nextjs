"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

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
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      {/* Mobile menu button */}
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>

      {/* Show mobile links when open */}
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
          {session ? (
            <>
              {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <NavLink item={{ title: "Login", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
