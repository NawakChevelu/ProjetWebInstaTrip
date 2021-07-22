import { PexelsPhotoSource } from "./pexels-photo-source";

export class PexelsPhoto {
  id ?: number;
  url ?:string;
  width ?: number;
  avg_color ?: string;
  height ?: number;
  src : PexelsPhotoSource;
}
