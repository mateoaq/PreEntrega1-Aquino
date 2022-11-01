import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockData } from "../../data/MOCK_DATA";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { ItemDetailLoader } from "../Loader/ItemDetailLoader";

export const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState();
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setItem(mockData.find((item) => item.id === parseInt(params.id)));
      setIsLoading(false);
    }, 2000);
  }, [params]);

  return (
    <Box marginY={10}>
      {!item ? <ItemDetailLoader /> : <ItemDetail item={item} />}
    </Box>
  );
};
