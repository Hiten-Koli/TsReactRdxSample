import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { fetchExtractedText } from './fileSlice';

interface ExtractedTextProps {
    fileId: string;
  }
const ExtractedText:React.FC<ExtractedTextProps> = () => {
    const dispatch = useAppDispatch();
    const { fileId, extractedText, loading, error } = useAppSelector((state) => state.file);

    useEffect(()=>{
        if(fileId){
            dispatch(fetchExtractedText(fileId))
        }
    }, [dispatch, fileId]);

    
    return (
        <div>
            {loading ? <p>Loading extracted text...</p> : <pre>{extractedText}</pre>}
            {error && <p className="error">Error: {error}</p>}
        </div>
    )
}

export default ExtractedText

