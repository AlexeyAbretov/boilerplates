export const flat = ({ arr = [], hasDub = true } = {}) => {
    let result = [];

    for (let value of arr) {
        result = [
            ...result,
            ...Array.isArray(value)
                ? flat({ arr: value })
                : [ value ]
        ]
    }

    return hasDub ? result : Array.from(new Set(result));
}
