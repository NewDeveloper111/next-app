const add =
    async (list: any[], route: string, func: any, setFunc: any) => {
        const getLast = await fetch(route + '?_start=-1');
        const last = await getLast.json();
        const newId = list.length ? +last[0].id + 1 + '' : '1';
        const newData = { id: newId, title: 'New data' }
        await fetch(route, {
            method: 'POST',
            body: JSON.stringify(newData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        func(route, setFunc);
    }

export default add;