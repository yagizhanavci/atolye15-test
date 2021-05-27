import { FilePosition, Folder, List } from '../models';

export function getFolderPosition(list: List, id: string): number | null {
  let result: null | number = null;

  for (let i = 0; i < list.length; i += 1) {
    if (list[i].files.map((file) => file.id).includes(id)) {
      result = i;
      break;
    }
  }

  return result;
}

export function getFilePosition(folder: Folder, id: string): number | null {
  const fileIndex = folder.files.findIndex((file) => file.id === id);

  if (fileIndex !== -1) {
    return fileIndex;
  }

  return null;
}

export function getPositionOfFile(list: List, id: string): FilePosition {
  let folderIndex: number | null = null;
  let fileIndex: number | null = null;

  folderIndex = getFolderPosition(list, id);
  if (folderIndex !== null) {
    fileIndex = getFilePosition(list[folderIndex], id);
    if (fileIndex !== null) {
      return [folderIndex, fileIndex];
    }
    throw new Error(`File with id of ${id} cannot be found.`);
  }
  throw new Error(`File with id of ${id} cannot be found.`);
}
