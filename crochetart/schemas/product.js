export default {
	name: "product",
	title: "Product",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "projectType",
			title: "Project type",
			type: "string",
			options: {
				list: [
					{ value: "special", title: "Special" },
					{ value: "bag", title: "Bag" },
					{ value: "lacloc", title: "Lacloc" },
					{ value: "cofia", title: "Cofia" },
					{ value: "mafrashsofra", title: "Mafrash Sofra" },
					{ value: "mafrashsmall", title: "Mafrash Small" },
					{ value: "icecap", title: "Ice cap" },
					{ value: "babyhamdmade", title: "Baby Hamdmade" },
				],
			},
		},
		{
			name: "special",
			title: "Special",
			type: "boolean",
		},
		{
			name: "new",
			title: "New",
			type: "boolean",
		},
		{
			name: "bestSeller",
			title: "Best Seller",
			type: "boolean",
		},
		{
			name: "price",
			title: "Price",
			type: "number",
		},
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
	],
};
