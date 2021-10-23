import React, { useEffect } from "react";
import FeedbackContainer from "../../containers/Feedback/Feedback";
const Feedback = () => {
	useEffect(() => {
		document.title = "Comment - Crochet Art - For Handmade";
	}, []);
	return <FeedbackContainer />;
};

export default Feedback;

