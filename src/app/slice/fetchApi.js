import { createSlice } from "@reduxjs/toolkit";
import { API } from "../ItemTypes";

const fetchApi = createSlice({
	name: API,
	initialState: {
		about: null,
		products: {
			special: null,
			bag: null,
			lacloc: null,
			cofia: null,
			mafrashsofra: null,
			mafrashsmall: null,
			icecap: null,
			babyhamdmade: null,
		},
		productsList: null,
		posts: null,
		instaPosts: null,
		hero: null,
		heroProduct: null,
		heroBlog: null,
	},
	reducers: {
		setAboutData: (state, action) => {
			state.about = action.payload;
		},
		setPosts: (state, action) => {
			state.posts = action.payload;
		},
		setInstaPosts: (state, action) => {
			state.instaPosts = action.payload;
		},
		setHero: (state, action) => {
			state.hero = action.payload;
		},
		setProductSpecial: (state, action) => {
			state.products.special = action.payload;
		},
		setProductBag: (state, action) => {
			state.products.bag = action.payload;
		},
		setProductLacloc: (state, action) => {
			state.products.lacloc = action.payload;
		},
		setProductCofia: (state, action) => {
			state.products.cofia = action.payload;
		},
		setProductMafrashsofra: (state, action) => {
			state.products.mafrashsofra = action.payload;
		},
		setProductMafrashsmall: (state, action) => {
			state.products.mafrashsmall = action.payload;
		},
		setProductIcecap: (state, action) => {
			state.products.icecap = action.payload;
		},
		setProductBabyhamdmade: (state, action) => {
			state.products.babyhamdmade = action.payload;
		},
		setHeroProduct: (state, action) => {
			state.heroProduct = action.payload;
		},
		setProductsList: (state, action) => {
			state.productsList = action.payload;
		},
		setHeroBlog: (state, action) => {
			state.heroBlog = action.payload;
		},
	},
});

const { reducer, actions } = fetchApi;

export const {
	setAboutData,
	setPosts,
	setInstaPosts,
	setHero,
	setProductSpecial,
	setProductBag,
	setProductLacloc,
	setProductCofia,
	setProductMafrashsofra,
	setProductMafrashsmall,
	setProductIcecap,
	setProductBabyhamdmade,
	setHeroProduct,
	setProductsList,
	setHeroBlog,
} = actions;

export default reducer;