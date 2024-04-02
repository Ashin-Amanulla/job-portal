import {JOB_INSTANCE } from "./urlInitial";

export async function addJob(data) {
    try {
        const response = await JOB_INSTANCE.post(
            ``,
            data
        );
        return response.data;
    } catch (error) {
        throw error;
    }
}