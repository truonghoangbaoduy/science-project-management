export const postTechnologyScienceAccount = async (values) => {
  const res = await fetch("http://localhost:3000/api/technology-science/", {
    method: "POST",
    body: JSON.stringify(values),
  });

  if (res) {
    return res;
  }
};
