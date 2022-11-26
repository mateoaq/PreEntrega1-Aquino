import { Box, Typography } from "@mui/material";
import { getDocs, query, where } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collectionProducts } from "../../firebase/firebaseConfig";
import { ItemList } from "../ItemList/ItemList";
import { Loader } from "../Loader/Loader";

export const ItemListContainer = ({ saludo }) => {
  const [items, setItems] = useState([]);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  //filter products
  useEffect(() => {
    setIsLoading(true);
    getDocs(
      params.category
        ? query(collectionProducts, where("category", "==", params.category))
        : collectionProducts
    )
      .then((res) => {
        const productos = res.docs.map((prod) => ({
          id: prod.id,
          ...prod.data(),
        }));
        setItems(productos);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
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
