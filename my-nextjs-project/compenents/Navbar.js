'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import useWindowSize from './useWindowSize';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
    const [width, height] = useWindowSize();
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMobileState, setIsMobileState] = useState(null);

    useEffect(() => {
        if (width <= 1024) {
            setIsMobileState(true);
        } else {
            setIsMobileState(false);
        }
    }, [width]);



    const toggleMenu = () => setMenuOpen(!menuOpen);



    if (isMobileState === null) {
        return null; 
    }


    return (
        <div className={styles.navbarContainer}>
            <Link href="/" onClick={() => setMenuOpen(false)}><div className={styles.logoContainer}>FLEXSOFT</div></Link>

            {isMobileState && !menuOpen && (
                <div className={styles.hamburgerContainer} onClick={toggleMenu}>
                    <FaBars />
                </div>
            )}

            {isMobileState && menuOpen && (
                <div className={styles.mobileMenuOverlay}>
                    <div className={styles.mobileMenuContent}>
                        <div className={styles.closeIconContainer}>
                            {activeMenu === null ? (
                                <>
                                    <Link href="/" onClick={() => setMenuOpen(false)}><div className={styles.logoContainer}>FLEXSOFT</div></Link>
                                    <div className={styles.hamburgerContainer} onClick={toggleMenu}>
                                        <FaTimes />
                                    </div>
                                </>
                            ) : (
                                <div
                                    className={styles.hamburgerContainer}
                                    onClick={() => setActiveMenu(null)}
                                >
                                    <FaChevronLeft />
                                </div>
                            )}
                        </div>
                        <div className={styles.closeMobileContainer}>
                            {/* Main Menu */}
                            {activeMenu === null && (
                                <>
                                    <Link href='/' onClick={() => setMenuOpen(false)}>
                                        <p>Ana Sayfa</p>
                                    </Link>
                                
                                    <Link href='/hakkimizda' onClick={() => setMenuOpen(false)}>
                                        <p>Hakkımızda</p>
                                    </Link>
                                    <Link href='/iletisim' onClick={() => setMenuOpen(false)}>
                                        <p>İletişim</p>
                                    </Link>
                                    <Link href='/indir' onClick={() => setMenuOpen(false)}>
                                        <p>İndir</p>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {!isMobileState && (
                <div className={styles.itemContainer}>
                    <div>
                        <Link href='/'><p>Ana Sayfa</p></Link>
                    </div>
                    
                    <div>
                        <Link href='/hakkimizda'><p>Hakkımızda</p></Link>
                    </div>
                    <div>
                        <Link href='/iletisim'><p>İletişim</p></Link>
                    </div>
                    <div>
                        <Link href='/indir'><p>İndir</p></Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;



