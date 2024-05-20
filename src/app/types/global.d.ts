declare module "*.scss" {
  interface ClassNames {
    [className: string]: string;
  }
  const classes: ClassNames;
  export default classes;
}
