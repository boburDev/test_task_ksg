import axios from 'axios';
const apiKey = process.env.API_KEY || '';

export const getItemsInfo = async (query: any) => {
    try {
        if (!apiKey.length) throw new Error("Api not found check env file");
        const response = await axios.get(apiKey, { params: query });
        return response.data;
    } catch (error) {
        throw error;
    }
};
