function proverka() {
    return new Promise((res) => {
        setTimeout(res, 800);
    });
}

proverka().then(() => console.log('Коллбэк'));
