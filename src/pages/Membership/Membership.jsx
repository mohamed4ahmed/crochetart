import React, { useEffect } from "react";
import MembershipContainer from "../../containers/Membership/Membership";
const Membership = () => {
	useEffect(() => {
		document.title = "Member - Crochet Art - For Handmade";
	}, []);
	return <MembershipContainer />;
};

export default Membership;

