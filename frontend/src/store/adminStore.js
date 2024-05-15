// store.js
import {create} from 'zustand'
import { adminLogin } from '../services/admin';

export const useAdminStore = create(set => ({
    user: [],
    isChange:false,
    getLogin: async (data) => {   
      set({ user: data }); 
    },

}))
