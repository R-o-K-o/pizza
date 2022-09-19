export const calcTotalPrice = (items) => {
    if (items.length) {
        return items.reduce((sum, item) => (item.count * item.price) + sum, 0);
    }

    return 0
};