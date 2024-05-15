const axios = require( axios );
const fs = require( fs );

const downloadSong = async (url, outputPath) => {
    const response = await axios({
        url: url,
        method:  GET ,
        responseType:  stream 
    });

    response.data.pipe(fs.createWriteStream(outputPath));

    return new Promise((resolve, reject) => {
        response.data.on( end , () => {
            resolve();
        });
        response.data.on( error , (err) => {
            reject(err);
        });
    });
};

const songUrl =  https://example.com/song.mp3 ;
const outputPath =  song.mp3 ;

downloadSong(songUrl, outputPath)
    .then(() => console.log( Song downloaded successfully ))
    .catch((err) => console.error( Error downloading song: , err));
