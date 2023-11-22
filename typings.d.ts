import "three";

declare module "three" {
  interface ShaderMaterial {
    zoom?: number;
  }
}
