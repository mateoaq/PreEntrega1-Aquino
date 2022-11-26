import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { doc, getDoc } from "firebase/firestore/lite";
import { useParams } from "react-router-dom";
import { collectionProducts } from "../../firebase/firebaseConfig";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { ItemDetailLoader } from "../Loader/ItemDetailLoader";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(undefined);
  const params = useParams();

  useEffect(() => {
    const ref = doc(collectionProducts, params.id);
    getDoc(ref).then((res) => setItem({ id: res.id, ...res.data() }));
  }, [params]);

  return (
    <Box marginY={10}>
      {!item ? <ItemDetailLoader /> : <ItemDetail item={item} />}
    </Box>
  );
};
