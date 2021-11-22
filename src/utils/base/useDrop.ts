import useSWR from "swr";
import { fetcher } from "./fetcher";

export function useDrop(id) {
    const { data, error } = useSWR(`/api/drops/${id}`, fetcher);

    return {
        drop: data,
        isLoading: !error && !data,
        isError: error,
    }
}