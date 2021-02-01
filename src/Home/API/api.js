import SnackbarUtils from "../SnackbarUtils";
export default async function request(endpoint, config) {
  config = {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(
    process.env.REACT_APP_API_ENDPOINT + endpoint,
    config
  );

  if (!res.ok) {
    const errorMessage = await res.clone().json();
    console.log(errorMessage);
    SnackbarUtils.error(
      "API returned " + res.status + ": " + errorMessage.message
    );
  } else {
    SnackbarUtils.success("API returned 200: success text was translated");
    return await res.json();
  }
}
