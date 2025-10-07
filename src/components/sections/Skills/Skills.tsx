import React, { useState, useRef, useEffect } from 'react';
import styles from './Skills.module.css';
import { skillsData } from '../../../data/skills';
import CategoryNavigation from './CategoryNavigation';
import SkillCard from './SkillCard';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [animatingProgress, setAnimatingProgress] = useState<{[key: string]: number}>({});
  const intervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<{[key: string]: number}>({});

  const categories = skillsData.map(cat => cat.category);

  // Auto-rotate categories every 3 seconds
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [categories.length]);

  // Handle previous category button
  const handlePrevCategory = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length);
    
    intervalRef.current = window.setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 3000);
  };

  // Handle next category button
  const handleNextCategory = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    setActiveCategory((prev) => (prev + 1) % categories.length);
    
    intervalRef.current = window.setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 3000);
  };

  // Handle category click
  const handleCategoryClick = (index: number) => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    setActiveCategory(index);
    intervalRef.current = window.setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 3000);
  };

  // Handle skill card mouse enter with animation
  const handleMouseEnter = (skillName: string, targetPercentage: number) => {
    setHoveredSkill(skillName);

    // Cancel existing animation
    if (animationFrameRef.current[skillName]) {
      cancelAnimationFrame(animationFrameRef.current[skillName]);
    }

    // Reset progress to 0
    setAnimatingProgress(prev => ({
      ...prev,
      [skillName]: 0
    }));

    const duration = 800;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out cubic animation
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentPercentage = Math.round(easeProgress * targetPercentage);
      
      setAnimatingProgress(prev => ({
        ...prev,
        [skillName]: currentPercentage
      }));
      
      if (progress < 1) {
        animationFrameRef.current[skillName] = requestAnimationFrame(animate);
      }
    };
    
    animationFrameRef.current[skillName] = requestAnimationFrame(animate);
  };

  // Handle skill card mouse leave
  const handleMouseLeave = (skillName: string) => {
    setHoveredSkill(null);
    
    if (animationFrameRef.current[skillName]) {
      cancelAnimationFrame(animationFrameRef.current[skillName]);
      delete animationFrameRef.current[skillName];
    }
    
    // Remove progress completely
    setAnimatingProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[skillName];
      return newProgress;
    });
  };

  // Convert skill level to percentage
  const getLevelProgress = (level: string) => {
    const levels = { Beginner: 25, Intermediate: 50, Advanced: 75, Expert: 100 };
    return levels[level as keyof typeof levels] || 0;
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        {/* Header */}
        <div className={styles.skillsHeader}>
          <h2 className={styles.skillsTitle}>
            Skills & Technologies
          </h2>
          
          <p className={styles.skillsDescription}>
            A comprehensive overview of my technical expertise across programming, machine learning, data engineering, and cloud technologies
          </p>
        </div>

        {/* Category Navigation */}
        <CategoryNavigation
          categories={categories}
          activeCategory={activeCategory}
          onPrevClick={handlePrevCategory}
          onNextClick={handleNextCategory}
          onCategoryClick={handleCategoryClick}
        />

        {/* Skills Display */}
        <div 
          ref={containerRef}
          className={styles.skillsDisplay}
        >
          {skillsData.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`${styles.categorySkills} ${categoryIndex === activeCategory ? styles.active : ''}`}
              style={{
                transform: categoryIndex === activeCategory 
                  ? 'translateX(0) scale(1)' 
                  : `translateX(${categoryIndex < activeCategory ? '-100px' : '100px'}) scale(0.95)`,
              }}
            >
              <div className={styles.skillsGrid}>
                {category.skills.map((skill) => {
                  const targetPercentage = getLevelProgress(skill.level);
                  const isAnimating = hoveredSkill === skill.name && animatingProgress[skill.name] !== undefined;
                  
                  return (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      targetPercentage={targetPercentage}
                      isHovered={hoveredSkill === skill.name}
                      isAnimating={isAnimating}
                      animatedPercentage={animatingProgress[skill.name]}
                      onMouseEnter={() => handleMouseEnter(skill.name, targetPercentage)}
                      onMouseLeave={() => handleMouseLeave(skill.name)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className={styles.progressIndicators}>
          {categories.map((_, index) => (
            <div
              key={index}
              className={`${styles.progressIndicator} ${activeCategory === index ? styles.active : ''}`}
              onClick={() => handleCategoryClick(index)}
              role="button"
              tabIndex={0}
              aria-label={`Go to category ${index + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCategoryClick(index);
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;