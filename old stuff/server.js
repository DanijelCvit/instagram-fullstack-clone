import app from "./index.js";
import { PORT } from "./index.js";

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`);
});
