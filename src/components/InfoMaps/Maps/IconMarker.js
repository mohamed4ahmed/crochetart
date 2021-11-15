import L from "leaflet";
import iconUrl from "../../../assets/img/logo-circle.png";

const iconSmart = new L.Icon({
	iconUrl: iconUrl,
	iconSize: [42, 42],
	iconAnchor: [42, 42],
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
});

export { iconSmart };
