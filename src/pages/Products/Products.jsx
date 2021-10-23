import React, { useEffect } from "react";
import ProductsContainer from "../../containers/Products/Products";
const Products = () => {
	useEffect(() => {
		document.title = "Products - Crochet Art - For Handmade";
	}, []);

	return (
		<>
			<ProductsContainer />
		</>
	);
};

export default Products;
