export const findItem = (items, payload) => {
    if (items.length) {
        return items.find(item => {
            return (
                item.id === payload.id &&
                item.size === payload.size &&
                item.type === payload.type
            );
        });
    }
};