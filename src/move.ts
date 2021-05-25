// Please update this type as same as with the data shape.
import getFilePosition from './helpers/getFilePosition';
import { List } from './models';

export default function move(list: List, source: string, destination: string): List {
  // Check if the destination is actually a folder
  const destinationIndex = list.findIndex((folder) => folder.id === destination);

  if (destinationIndex === -1) {
    throw new Error('You cannot specify a file as the destination');
  }

  // Check if the source is actually a file
  const sourceIndex = list.findIndex((folder) => folder.id === source);

  if (sourceIndex !== -1) {
    throw new Error('You cannot move a folder');
  }

  // If all the requirements are met, continue with moving the file
  const filePosition = getFilePosition(list, source);

  if (filePosition[0] === null || filePosition[1] === null) {
    throw new Error(`File with id of ${source} cannot be found.`);
  } else {
    const newList = [...list];

    // Get file to be moved
    const fileToBeMoved = newList[filePosition[0]].files.splice(filePosition[1], 1);

    // Insert it to the desired folder
    newList[destinationIndex].files = [...newList[destinationIndex].files, ...fileToBeMoved];

    // Return the modified list
    return newList;
  }
}
