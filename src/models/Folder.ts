import { File } from './File';

export type Folder = {
  /**
   * Unique identifier of folder
   */
  id: string;

  /**
   * Name of the folder
   */
  name: string;

  /**
   * Files in this folder
   */
  files: File[];
};
