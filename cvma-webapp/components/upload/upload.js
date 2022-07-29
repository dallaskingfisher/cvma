
import { S3} from '@aws-sdk/client-s3'
import {useState} from 'react';
import { useS3Upload } from 'next-s3-upload';
function UploadFiles () {
    let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  let handleFileChange = async file => {
    let { url } = await uploadToS3(file);
     console.log(url);
  };
 

 return (
    <section>
        
        <FileInput onChange={handleFileChange} />
        <button onClick={openFileDialog}>Upload</button>
        
       
    </section>
 )
}
export default UploadFiles;