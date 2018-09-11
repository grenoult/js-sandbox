let name = 'Guillaume';

function getName() {
    return name;
}

function setName(newName) {
    name = newName;
}

export function person() {
    const api = {
        getName: getName,
        setName: setName
    }

    return api;
}