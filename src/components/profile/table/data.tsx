import json from "./json.json";

const MData = () => {
    const jsonData = JSON.parse(JSON.stringify(json));

    const newData = jsonData.map((item: any) => ({
        adP: item.Column3,
        adM: item.Column4,
        ridP: item.Column5,
        rcdP: item.Column6,
        ridM: item.Column7,
        rcdM: item.Column8,
        aecP: item.Column9,
        aecM: item.Column10,
        vph1: item.Column11,
        vph2: item.Column12,
        vph3: item.Column13,
        iph1: item.Column14,
        iph2: item.Column15,
        iph3: item.Column16,
        actions: true,
    }));

    return newData.slice(11, 107);
};

export default MData;
