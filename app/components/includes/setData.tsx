const setData = (route: string, setFunc: any) => {
    fetch(route)
        .then(response => response.json())
        .then(data => { setFunc(data) });
}

export default setData;