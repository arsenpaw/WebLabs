const filterData = {
    price: {
        title: 'Price',
        options: [
            { label: 'None', value: [] },
            { label: 'Under $50', value: [0,50] },
            { label: 'Under $100', value: [0,100] }
        ]
    },
    pps: {
        title: 'PPS',
        options: [
            { label: 'None', value: [] },
            { label: '0-1', value: [0,1] },
            { label: '1-10', value: [1,10] },
            { label: '10+', value: [10-999] }
        ]
    },
    sorting: {
        title: 'Sorting',
        options: [
            { label: 'None', value: [0] },
            { label: 'Low to High', value: [1]},
            { label: 'High to Low', value: [2] }
        ]
    }
};

export default filterData;