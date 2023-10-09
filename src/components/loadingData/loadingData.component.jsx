import { HashLoader } from "react-spinners";
import "./loadingData.styles.css";
const LoadingData = ({ isLoading }) => {
	return (
		<div className={`loading-container ${isLoading ? "loading" : "stoppedLoading"}`}>
			<HashLoader color={"#FFB000"} loading={isLoading} />
		</div>
	);
};
export default LoadingData;
