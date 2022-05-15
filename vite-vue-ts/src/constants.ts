import { BlogType } from './types/common';

export const BLOGS = ['NAVER', 'TISTORY', 'VELOG'];
export const BLOG_IMAGES = {
  NAVER: 'blog-icon/naver.png',
  TISTORY: 'blog-icon/tistory.png',
  VELOG: 'blog-icon/velog.png',
};
export function getBlogIconUrl(type: BlogType): string {
  return new URL(`../assets/images/${BLOG_IMAGES[type]}`, import.meta.url).toString();
}
