import { toast } from "react-toastify";

const settings = {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false
};

export default (color, text) =>
  color === "error"
    ? toast.error(text, settings)
    : color === "warn"
    ? toast.warn(text, settings)
    : toast.success(text, settings);
