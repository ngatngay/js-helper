function isPlainObject(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function prepareForStorage(value) {
    return typeof value === 'object' ? JSON.stringify(value) : value;
}

function parseJSON(value) {
    try {
        return JSON.parse(value);
    } catch {
        return value;
    }
}

// main
function lsData(arg1, arg2) {
    // get
    if (typeof arg1 === 'string') {
        const storedValue = localStorage.getItem(arg1);

        if (storedValue === null && arg2 !== undefined) {
            return arg2;
        } else {
            return parseJSON(storedValue);
        }
    }

    // set
    if (isPlainObject(arg1)) {
        for (const key in arg1) {
            if (Object.hasOwn(arg1, key)) {
                const value = prepareForStorage(arg1[key]);
                localStorage.setItem(key, value);
            }
        }
    }
}

lsData.remove = function (key) {
    if (typeof key === 'string') {
        localStorage.removeItem(key);
    } else {
        throw new Error('Key phải là một chuỗi');
    }
};

lsData.clear = function () {
    localStorage.clear();
};

export { lsData };
