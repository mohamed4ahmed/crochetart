import {
	Button,
	CircularProgress,
	Container,
	Typography,
} from "@material-ui/core";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useStyles } from "./InstaPosts.elements";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const InstaPosts = () => {
	const classes = useStyles();
	const posts = useSelector((state) => state.api.instaPosts);

	const postsSlice = posts ? posts.slice(0, 6) : null;

	return (
		<div className={classes.instaPosts}>
			{!posts ? (
				<div className={classes.spinner}>
					<CircularProgress />
				</div>
			) : (
				<Container maxWidth="lg">
					<div className={classes.posts}>
						<div className={classes.header}>
							<Typography variant="h4" className={classes.headerText}>
								{" "}
								OUR Facebook
							</Typography>
							<div className={classes.headerSubtitleWrapper}>
								<Typography variant="h6" className={classes.headerSubtitle}>
									{" "}
									#Crochet Art
								</Typography>
								<Typography variant="h6" className={classes.headerSubtitle}>
									{" "}
									#Crochet Art
								</Typography>
							</div>
						</div>
						<div className={classes.listImage}>
							{postsSlice.map((post, index) => (
								<a
									key={index}
									href={post.url}
									className={classes.postImgWrapper}
									target="_blank"
									rel="noopener noreferrer"
								>
									<LazyLoadImage
										src={post.mainImage.asset.url}
										alt={post.mainImage.asset.alt}
										className={classes.img}
										effect="opacity"
									/>
								</a>
							))}
						</div>
						<div className={classes.footer}>
							<a
								href="https://www.facebook.com/groups/1136290993230640"
								target="__blank"
								aria-label="Facebook"
							>
								<Button variant="contained" className={classes.button}>
									<span className={classes.iconInsta}>
										<FaFacebook />
									</span>{" "}
									View on Facebook
								</Button>
							</a>
						</div>
					</div>
				</Container>
			)}
		</div>
	);
};

export default InstaPosts;
