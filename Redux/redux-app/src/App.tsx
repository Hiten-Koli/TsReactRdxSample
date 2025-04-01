import { useEffect, useState } from 'react';
import './App.css'
import { Counter } from './features/counter/Counter'
import ExtractedText from './features/file/ExtractedText'
import FileUpload from './features/file/FileUpload'
import { useAppSelector } from './hooks';

function App() {
  const { fileData } = useAppSelector((state) => state.file);
  const [fileId, setFileId] = useState<string | null>(null);

  useEffect(() => {
    if (fileData) {
      setFileId(fileData.name); // Assuming fileData.name is the file ID
    }
  }, [fileData]);
  return (
      <div>
       {/* <Counter/> */}
       <h1>PDF to Text Extractor</h1>
        <FileUpload />
        {fileId && <ExtractedText fileId={fileId} />}
      </div>
  )
}

export default App
