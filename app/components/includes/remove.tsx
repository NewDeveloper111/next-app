const remove = async (id: string, route: string, func: any, setFunc: any) => {
    await fetch(route + '/' + id, {
        method: 'DELETE'
    });
    func(route, setFunc);
}

export default remove;