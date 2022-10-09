export const calculateTotal = (defaultPrice: number = 0, pricePerKm: number = 0, distance: number = 0) => {
    return defaultPrice + pricePerKm * Math.ceil(distance / 1000);
};
