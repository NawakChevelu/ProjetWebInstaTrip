import { PexelsPhotoSource } from "./pexels-photo-source";

export class PexelsPhoto {
  id ?: number;
  url ?:string;
  width ?: number;
  height ?: number;
  src : PexelsPhotoSource;
}
