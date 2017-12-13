const a = () => {
    return new Promise((resolve, reject) => {
        resolve('done');
    });
};

[].find(item => item);

a().then(result => {
    console.log(result);
});

class A {

}