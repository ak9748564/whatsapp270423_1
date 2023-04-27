import { API } from '../components/Constant/API'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getChats = createAsyncThunk(
    'chat/getChats',
    async (recieverId) => {
        try {
            const response = await axios.get(`${API}/chat/${recieverId}`, {
                headers: {
                    token: localStorage.getItem("token")
                }
            })
            return response.data;
        } catch (e) {
            console.log(e);
        }
    });

export const getProfile = createAsyncThunk(
    'chat/getProfile',
    async (recieverId) => {
        try {
            const response = await axios.get(`${API}/profile`, {
                headers: {
                    token: localStorage.getItem("token")
                }
            })
            return response.data;
        } catch (e) {
            console.log(e);
        }
    });


export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        chats: [],
        recieverId: "",
        reciever: {},
        profile: {},
        userId: "",
        friends: [],
    },
    reducers: {
        setReciever(state, action) {
            state.recieverId = action.payload;
        },
        setRecieverData(state, action) {
            state.reciever = action.payload;
        },
        addChat(state, action) {
            state.chats = [...state.chats, action.payload];
        },
        setFriends(state, action) {
            state.friends = action.payload;
        },
        addNewUnreadMessage(state, action) {
            const { sender } = action.payload;
            const findFriend = state.friends.find(friend => friend.friend._id === sender._id);
            if (findFriend) {
                if (findFriend.unreadMessage) {
                    findFriend.unreadMessage = findFriend.unreadMessage + 1;
                } else {
                    findFriend.unreadMessage = 1;

                }
            }
        },
        addLastMessage(state, action) {
            const { sender, message } = action.payload;
            const findFriend = state.friends.find(friend => friend.friend._id === sender._id);
            if (findFriend) {
                findFriend.lastMessage = message;
            }
        },
        readAllMessageOf(state, action) {
            const { fid } = action.payload;
            const findFriend = state.friends.find(friend => friend.friend._id === fid);
            if (findFriend) {
                findFriend.unreadMessage = 0;
            }
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getChats.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(getChats.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.chats = action.payload;
            })
            .addCase(getProfile.pending, (state, action) => {
                state.loading = 'idle';
                state.profile = action.payload;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.profile = action.payload.user;
                state.userId = action.payload?.user?._id;
            })
    },
});

export const { 
    setReciever, setRecieverData, addChat, 
    setFriends, addNewUnreadMessage, readAllMessageOf,
    addLastMessage
} = chatSlice.actions;

export default chatSlice.reducer;
