import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroProduct, fetchProduct } from "../../api";
import {
	Bag,
	Lacloc,
	Cofia,
	Mafrashsofra,
	Mafrashsmall,
	Icecap,
	Babyhamdmade,
} from "../../app/ItemTypes";
import {
	setProductSpecial,
	setHeroProduct,
	setProductsList,
} from "../../app/slice/fetchApi";
import { SpinnerBook, HeroPage, ProductsList } from "../../components";

const Products = () => {
	const dispatch = useDispatch();
	const productsList = useSelector((state) => state.api.productsList);
	const heroProduct = useSelector((state) => state.api.heroProduct);

	const [spinner, setSpinner] = useState(true);

	useEffect(() => {
		if (!productsList) {
			fetchProduct()
				.then((products) => {
					const special = [];

					const bag = [];
					const lacloc = [];
					const cofia = [];
					const mafrashsofra = [];
					const mafrashsmall = [];
					const icecap = [];
					const babyhamdmade = [];

					products.map((product, index) => {
						if (product.projectType === Bag) bag.push(product);
						else if (product.projectType === Lacloc) lacloc.push(product);
						else if (product.projectType === Cofia) cofia.push(product);
						else if (product.projectType === Mafrashsofra) mafrashsofra.push(product);
						else if (product.projectType === Mafrashsmall) mafrashsmall.push(product);
						else if (product.projectType === Icecap) icecap.push(product);
						else if (product.projectType === Babyhamdmade) babyhamdmade.push(product);
						
						product.special && special.push(product);

						return null;
					});
					let action;
					const object = {
						special: special,
						bag: bag,
						lacloc: lacloc,
						cofia: cofia,
						mafrashsofra: mafrashsofra,
						mafrashsmall: mafrashsmall,
						icecap: icecap,
						babyhamdmade: babyhamdmade,
					};
					action = setProductsList(object);
					dispatch(action);
					action = setProductSpecial(special);
					dispatch(action);
				})
				.catch((error) => console.log("error", error));
		}
	}, [dispatch, productsList]);

	useEffect(() => {
		if (!heroProduct) {
			fetchHeroProduct()
				.then((data) => {
					const action = setHeroProduct(data);
					dispatch(action);
				})
				.catch((error) => console.log("error", error));
		}
	}, [dispatch, heroProduct]);

	useEffect(() => {
		setTimeout(() => {
			setSpinner(false);
		}, 2300);
	}, []);

	return (
		<>
			{spinner ? (
				<SpinnerBook />
			) : (
				<>
					{" "}
					<HeroPage slides={heroProduct} idScrollTo="productList" />
					<ProductsList products={productsList} />
				</>
			)}
		</>
	);
};

export default Products;