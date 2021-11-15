import L from "leaflet";
import iconUrl from "../../../assets/img/logo-circle.png";

const iconSmart = new L.Icon({
	iconUrl: iconUrl,
	iconSize: [32, 32],
	iconAnchor: [32, 32],
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
});

export { iconSmart };
