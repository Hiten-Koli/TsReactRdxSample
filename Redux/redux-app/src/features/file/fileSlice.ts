import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apiClient from "../../api/axiosInstance";


interface FileState{
    fileId:string;
    fileData: File | null;
    extractedText: string;
    loading: boolean;
    error: string | null;
}

const initialState: FileState = {
    fileId: "",
    fileData: null,
    extractedText: "",
    loading: false,
    error: null,
}

interface ApiResponse{
    file_id: string,
    status: string
}

export const uploadFile = createAsyncThunk<ApiResponse, File>(
    "file/upload",
    async (file, {rejectWithValue})=>{
        try{
            const formData = new FormData();
            formData.append("file", file);
            const response = await apiClient.post<ApiResponse>("file/upload/", formData);
            console.log(response.data)
            return response.data;
        }catch(err:any){
            return rejectWithValue(err.response?.data||"failed to upload File!!")
        }
    }
)

export const fetchExtractedText = createAsyncThunk<string, string>(
    "file/fetchText",
    async(fileId, {rejectWithValue})=>{
        try{
            const response = await apiClient.get<{result_text:string}>(`file/status/${fileId}`)
            return response.data.result_text
        }catch(err:any){
            return rejectWithValue(err.response?.data||"failed to upload File!!")
        }
    }
)

export const fileSlice = createSlice({
    name: "file",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder
            .addCase(uploadFile.pending, (state)=>{
                state.loading = true,
                state.error = null
            })
            .addCase(uploadFile.fulfilled, (state, action: PayloadAction<ApiResponse>)=>{
                state.loading = false,
                state.error = null,
                state.fileId = action.payload.file_id,
                state.fileData = { name: `Uploaded_File_${action.payload.file_id}` } as unknown as File;
            })
            .addCase(uploadFile.rejected, (state, action)=>{
                state.loading = false,
                state.error = action.payload as string;
            })
            .addCase(fetchExtractedText.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchExtractedText.fulfilled, (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.extractedText = action.payload;
            })
            .addCase(fetchExtractedText.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },

})

export default fileSlice.reducer