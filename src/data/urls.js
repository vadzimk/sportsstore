import {DATA_TYPES} from "./types";

const protocol="http";
const hostname="localhost";
const port=3501;

export const restUrls={
    [DATA_TYPES.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
    [DATA_TYPES.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
}