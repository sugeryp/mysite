const fnAll = (vals) => vals([1, 2, 3]);

const vals = ([val1, val2, val3]) => {
    console.log(val1);
    console.log(val2);
    console.log(val3);
};

fnAll(vals);