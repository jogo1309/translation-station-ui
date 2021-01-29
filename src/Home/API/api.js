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
    //SnackbarUtils.error(res.status + ": " + errorMessage.message);
  } else {
    return await res.json();
  }
}
