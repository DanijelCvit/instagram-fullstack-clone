const createSlug = () => {
  const string = "abcdefghijklmnopqrstuvwxyzABCDEFGHILJKMNOPQRSTUVWXYZ-";
  let slug = "";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * string.length);
    slug += string.charAt(randomIndex);
  }
  return slug;
};

export default createSlug;
