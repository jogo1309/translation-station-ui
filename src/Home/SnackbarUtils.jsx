import React from "react";
import { useSnackbar } from "notistack";

const InnerSnackbarUtilsConfigurator = (props) => {
  props.setUseSnackbarRef(useSnackbar());
  return null;
};

let useSnackbarRef;
const setUseSnackbarRef = (useSnackbarRefProp) => {
  useSnackbarRef = useSnackbarRefProp;
};

export const SnackbarUtilsConfigurator = () => (
  <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />
);

//quick way to create snackbars in the application
export default {
  success(msg, props) {
    this.toast(msg, "success", {
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      ...props,
    });
  },
  warning(msg, props) {
    this.toast(msg, "warning", props);
  },
  info(msg, props) {
    this.toast(msg, "info", props);
  },
  error(msg, props) {
    this.toast(msg, "error", {
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      ...props,
    });
  },
  toast(msg, variant = "default", props = {}) {
    useSnackbarRef.enqueueSnackbar(msg, { variant, ...props });
  },
};
