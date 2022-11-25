const data = Array(63).fill(18).map((n, i) => ({
    id: Math.random(),
    value: n + i,
    label: n + i,
}));

export default data;