export const filterData = (data: any[], search: string) => {
    return data.filter((item: any) => {
        return (
            item.adP.toString().toLowerCase().includes(search.toLowerCase()) ||
            item.aecM.toString().toLowerCase().includes(search.toLowerCase())
        );
    });
};