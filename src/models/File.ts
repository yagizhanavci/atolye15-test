export type File = {
  /**
   *  Unique identifier of file
   */
  id: string;

  /**
   * Name of the file
   */
  name: string;
};

/**
 * File position in List as [FolderPosition,FilePosition]
 */
export type FilePosition = [number | null, number | null];
