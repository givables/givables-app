import useSWR from "swr";
import { fetcher } from "./fetcher";

export function usePiece(dropId, pieceId) {
  const { data, error } = useSWR(`/api/drops/${dropId}/${pieceId}`, fetcher);

  return {
    piece: data,
    isLoading: !error && !data,
    isError: error,
  };
}
