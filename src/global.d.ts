declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.JPG" {
  const value: string;
  export default value;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}