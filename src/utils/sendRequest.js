const sendRequest = async (url, method = "GET", payload = null) => {
  // Fetch accepts options obj as 2nd arg
  // used to include data payload, set headers etc.
  const options = { method };
  if (payload) {
    options.headers = {
      "Content-Type": "application/json",
    };
    options.body = JSON.stringify(payload);
  }

  const res = await fetch(url, options);
  // if res.ok is false, something went wrong
  if (res.ok) return res.json();
  throw new Error("Bad Request");
};

export default sendRequest;
