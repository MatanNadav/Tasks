



function store(key: any, val: any) {
    localStorage[key] = JSON.stringify(val);
}

function load(key: any) {
    var str = localStorage[key] || 'null';
    return JSON.parse(str);
}

// added for logging out
function remove(key:any) {
    localStorage.removeItem(key);
}

export const storageService = {
    store,
    load,
    remove
}