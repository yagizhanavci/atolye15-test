import { FilePosition, List } from '../models';

export default function getFilePosition(list: List, source: string): FilePosition {
  let folderIndex: number | null = null;
  let fileIndex: number | null = null;

  list.forEach((folder, foIndex) => {
    folder.files.forEach((file, fiIndex) => {
      if (file.id === source) {
        folderIndex = foIndex;
        fileIndex = fiIndex;
      }
    });
  });

  return [folderIndex, fileIndex];
}
