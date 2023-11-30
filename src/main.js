import { web } from "./app/web.js";

const PORT = process.env.PORT || 5500;

web.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
