import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../utils/constant";

/**
 * @description - useFetch Hook - GET Api call
 * @param {string} path
 * @param {Number} pageNumber
 * @returns {useFetchObject}
 */
export default function useFetch(path, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const [hasMore, setHasMore] = useState(false);
  const url = path?.[pageNumber];

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios
      .get(url, {
        headers: {
          "secret-key": API.SECRET_KEY,
        },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setData(res?.data?.page);
        setHasMore(
          res?.data?.page
            ? res.data.page["page-size-requested"] ===
                res.data.page["page-size-returned"]
            : false
        );
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setLoading(false);
        setError(true);
      });
    return () => cancel();
  }, [path, pageNumber]);

  return { loading, error, data, hasMore };
}

/**
 * @typedef {object} useFetchObject
 * @property {boolean} loading
 * @property {Error} error
 * @property {Response} data
 * @property {boolean} hasMore
 */
