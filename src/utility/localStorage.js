import { toast } from "react-toastify";

const getStoredData = () => {
    const storeData = localStorage.getItem("donation-data");
    if (storeData) {
        return JSON.parse(storeData);
    } else {
        return [];
    }
}

const saveDataInLocalStore = id => {
    const storedData = getStoredData();
    const exist = storedData.find(dataId => dataId === id);
    if (!exist) {
        storedData.push(id);
        localStorage.setItem("donation-data", JSON.stringify(storedData))
        toast.success("Application successfully submited")
    } else {
        toast.error("Already exist")
    }
}

export { getStoredData, saveDataInLocalStore };

