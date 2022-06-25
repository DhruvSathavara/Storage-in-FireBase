import { useEffect, useState } from 'react';
import { storage_bucket } from './firebase';
import { ref, uploadBytesResumable, listAll, getDownloadURL } from "firebase/storage";

function App() {
  const [file, setFile] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage_bucket,)

  const UploadImage = () => {

//------------------ CREATING REFERENCE OR PATH GOR FILE-------------------
    let fileRef = ref(storage_bucket, file.name)

//--------------------------- UPLODING IMAGE-------------------------------

    const uploadTask = uploadBytesResumable(fileRef, file).then((snapshot) => {
      // AFTER UPLODING, GETTING THATT IMAGES/FILE'S URL

      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((previous) => [...previous, url])
      })
    })
  }


  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((previous) => [...previous, url]);
        })
      })
    })
  }, [])


  return (
    <div style={{
      width: '100vw',
      height: 'auto',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    }}>

      <div style={{display:'flex'}}>
      <input style={{color:'blue'}} 
      type='file' onChange={(event) => { setFile(event.target.files[0]) }}></input>
      <button style={{color:'red'}}
       onClick={UploadImage}>Upload image
      </button>
      </div>
      

      {/* LISTING ALL IMAGES FROM STORAGE  */}
      {imageList.map((url) => {
        return <img src={url} style={{ width: "200px", margin: '10px' }}></img>
      })}
    </div>
  )
}

export default App;
