const update = async (
    oldId: string, newTitle:string, route: string, func: any, setFunc: any) => {
    await fetch(route + '/' + oldId, {
        method: 'PUT',
        body: JSON.stringify({ id: oldId, title: newTitle }),
    });
    func(route, setFunc);
}

export default update;