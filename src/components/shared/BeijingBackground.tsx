'use client';

import Image from 'next/image';
import styles from './BeijingBackground.module.css';

export default function BeijingBackground() {
  return (
    <div className={styles.backgroundContainer}>
      <Image
        src="/images/beijing.png"
        alt="Background"
        fill
        priority
        quality={100}
        className={styles.backgroundImage}
      />
    </div>
  );
} 