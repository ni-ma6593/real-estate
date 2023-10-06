import { Triangle } from "react-loader-spinner";

const CLA = ({ visible = false }) => {
  return (
    <Triangle
      height="84"
      width="84"
      color="#1f3643"
      ariaLabel="triangle-loading"
      visible={visible}
    />
  );
};
export default CLA;
