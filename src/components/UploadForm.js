import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
function UploadForm() {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            console.log('file selected');
        } else {
            setFile(null);
            setError('please select an image file of type png or jpeg');
            console.error('invalid file type');
        }
    }

    return (
        <div>
            <form>
                <label>
                    <input type="file" onChange={changeHandler} />
                    <span>+</span>
                </label>
                <div className="output">
                    {error && <div className="error"><p>{error}</p></div>}
                    {file && <div>{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile} />}
                </div>
            </form>
        </div>
    )
}

export default UploadForm
