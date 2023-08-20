import React from 'react';
import Link from 'next/link';

import {
  formatPrice,
  pluralize,
  isNewShoe,
} from '@/utils';

import styles from './ShoeCard.module.css';
import { pb } from '@/helpers/pocketbase';

function ShoeCard({ shoe, isPlaceholder }) {
  const {
    id,
    name,
    imageSrc,
    price,
    salePrice,
    releaseDate,
    numOfColors,
  } = shoe;

  const url = pb.files.getUrl(shoe, imageSrc, { thumb: '100x100' })

  let variant = 'default';
  if (salePrice > 0) {
    variant = 'on-sale'
  }

  return (
    <Link
      href=""
      className={styles.wrapper}
      style={{
        fontFamily: isPlaceholder
          ? 'var(--font-family-loading)'
          : undefined,
      }}
    >
      <article>
        <div className={styles.imageWrapper}>
          {isPlaceholder ? (
            <div className={styles.fakeImage} />
          ) : (
            <img
              className={styles.image}
              alt=""
              src={url}
            />
          )}
          {variant === 'on-sale' && (
            <div
              className={`${styles.flag} ${styles.sale}`}
            >
              Sale
            </div>
          )}
          {variant === 'new-release' && (
            <div
              className={`${styles.flag} ${styles.new}`}
            >
              Just released!
            </div>
          )}
        </div>

        <div className={styles.row}>
          <h3 className={styles.name}>{name}</h3>
          <span
            className={styles.price}
            style={{
              '--color':
                variant === 'on-sale'
                  ? 'var(--color-gray-700)'
                  : undefined,
              '--text-decoration':
                variant === 'on-sale'
                  ? 'line-through'
                  : undefined,
            }}
          >
            {formatPrice(price)}
          </span>
        </div>

        <div className={styles.row}>
          <p className={styles.colorInfo}>
            {pluralize('Color', numOfColors)}
          </p>
          {variant === 'on-sale' ? (
            <span className={styles.salePrice}>
              {formatPrice(salePrice)}
            </span>
          ) : undefined}
        </div>
      </article>
    </Link>
  );
}

export default ShoeCard;
