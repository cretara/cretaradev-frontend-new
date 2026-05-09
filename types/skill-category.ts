/**
 * Defines the structure for a single skill entry.
 */
export interface Skill {
  name: string;
  level: number;
}

/**
 * Defines the structure for a skill category.
 */
export interface SkillCategory {
  title: string;
  skills: Array<Skill>;
}

/**
 * The main array containing all defined skill categories.
 * This type represents the structure of the `skillCategories` constant in app/constants/skill-categories.ts.
 */
export type SkillCategories = Array<SkillCategory>;