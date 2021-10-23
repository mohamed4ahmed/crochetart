import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, fetchSingleProduct } from "../../api";
import {
	Bag,
	Lacloc,
	Cofia,
	Mafrashsofra,
	Mafrashsmall,
	Icecap,
	Babyhamdmade,
} from "../../app/ItemTypes";
import { setProductsList, setProductSpecial } from "../../app/slice/fetchApi";
import { SingleProduct, SpinnerBook } from "../../components";

const SingleProductContainer = () => {
	const [singleProduct, setSingleProduct] = useState(null);
	const [spinner, setSpinner] = useState(true);

	const special = useSelector((state) => state.api.products.special);

	const { slug } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!special) {
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
	}, [dispatch, special]);

	useEffect(() => {
		fetchSingleProduct(slug)
			.then((data) => {
				setSingleProduct(data[0]);
			})
			.catch((error) => console.log("error: ", error));
	}, [slug]);

	useEffect(() => {
		setTimeout(() => {
			setSpinner(false);
		}, 2300);
	}, []);

	return (
		<div className="">
			{spinner ? (
				<SpinnerBook />
			) : (
				<>
					<SingleProduct product={singleProduct} special={special} />
				</>
			)}
		</div>
	);
};

export default SingleProductContainer;
