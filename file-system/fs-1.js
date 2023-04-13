const fs = require('fs');
/**
 * @Questions 1: Write a function to copy a file from one location to another using 
 * the fs module. The function should take two arguments: the path to the source file, 
 * and the path to the destination file.
 */
function copyFile(sourcePath, destinationPath) {
    return new Promise((resolve, reject) => {
        // Create read stream for the source file
        const readStream = fs.createReadStream(sourcePath);

        // Create write stream for the destination file
        const writeStream = fs.createWriteStream(destinationPath);

        // Pipe the readSteam to the writeStream to copy the source file
        readStream.pipe(writeStream);

        // Handle errors and completion of the copy process
        readStream.on('error', reject);
        writeStream.on('error', reject);
        writeStream.on('finish', resolve);
    })
}

// sample:
copyFile('./thefile.txt', './copyFile.txt')
    .then(() => {
        console.log('File copied successfully!');
    })
    .catch((err) => {
        console.error('An error occurred while copying the file:', err);
    });
