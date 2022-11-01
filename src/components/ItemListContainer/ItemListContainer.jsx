import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mockData } from "../../data/MOCK_DATA";
import { ItemList } from "../ItemList/ItemList";
import { Loader } from "../Loader/Loader";

export const ItemListContainer = ({ saludo }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (params.category) {
        setItems(
          mockData.filter(
            (element) => element.category === params.category.toLowerCase()
          )
        );
      } else {
        setItems(mockData);
      }
      setIsLoading(false);
    }, 2000);
  }, [params]);

  return (
    <>
      <Box margin={2} textAlign="center">
        <Typography>{saludo}</Typography>
      </Box>
      {isLoading ? <Loader /> : <ItemList items={items} />}
    </>
  );
};
