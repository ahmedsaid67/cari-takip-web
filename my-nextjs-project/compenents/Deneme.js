'use client'
import React, { useRef, useState } from 'react';
import styles from "../src/app/deneme/deneme.module.css"

export default function Deneme() {
  return (
    <div className={styles.yuvarlakContainer}>
      <img
            src="/kapak2.png"
            alt="Flexsoft Cari Takip uygulamasında detaylı cari verileri gösteren ekran"
            className={styles.img}
        />
    </div>
  )
}