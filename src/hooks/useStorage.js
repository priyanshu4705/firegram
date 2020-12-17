import { useState, useEffect, useContext } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
import { AuthContext } from '../auth/Auth';


const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collection = projectFirestore.collection(`images-${currentUser.email}`);
        const createdAt = timestamp();

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
            console.log('progress : ', percentage);
        }, (err) => {
            setError(err);
            console.error('Upload error');
        }, async () => {
            const url = await storageRef.getDownloadURL();
            collection.add({ url, createdAt });
            setUrl(url);
            console.log('updated url');
        })
    }, [file]);

    return { progress, url, error };
}

export default useStorage;