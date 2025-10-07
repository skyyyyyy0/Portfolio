import React from 'react';
import styles from './CategoryNavigation.module.css';
import { categoryIcons } from './CategoryIcons';

interface CategoryNavigationProps {
  categories: string[];
  activeCategory: number;
  onPrevClick: () => void;
  onNextClick: () => void;
  onCategoryClick: (index: number) => void;
}

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  categories,
  activeCategory,
  onPrevClick,
  onNextClick,
  onCategoryClick
}) => {
  return (
    <div className={styles.categoryNavigation}>
      {/* Previous button */}
      <button
        onClick={onPrevClick}
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        aria-label="Previous category"
      >
        ‹
      </button>

      {/* Category titles */}
      <div className={styles.categoryTitles}>
        {categories.map((category, index) => (
          <div
            key={category}
            className={`${styles.categoryItem} ${activeCategory === index ? styles.active : ''}`}
            onClick={() => onCategoryClick(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onCategoryClick(index);
              }
            }}
            style={{
              border: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              boxShadow: 'none'
            }}
          >
            <div className={styles.categoryIcon}>
              {categoryIcons[category as keyof typeof categoryIcons]}
            </div>
            <h3 className={styles.categoryName}>
              {category}
            </h3>
          </div>
        ))}
      </div>

      {/* Next button */}
      <button
        onClick={onNextClick}
        className={`${styles.navButton} ${styles.navButtonNext}`}
        aria-label="Next category"
      >
        ›
      </button>
    </div>
  );
};

export default CategoryNavigation;