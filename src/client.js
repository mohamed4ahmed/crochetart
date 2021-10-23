import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "t8m96emo",
	dataset: "production",
	useCdn: "true",
});

