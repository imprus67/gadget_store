import { axiosCustom } from '.';

export const createType = async (type) => {
    const response = await axiosCustom.post('/api/type', type);
    return response.data;
}

export const fetchTypes = async () => {
    const response = await axiosCustom.get('/api/type');
    return response.data;
}

export const createBrand = async (brand) => {
    const response = await axiosCustom.post('/api/brand', brand);
    return response.data;
}

export const fetchBrands = async () => {
    const response = await axiosCustom.get('/api/brand');
    return response.data;
}

export const createDevice = async (device) => {
    const response = await axiosCustom.post('/api/device', device);
    return response.data;
}

export const fetchDevices = async () => {
    const response = await axiosCustom.get('/api/device');
    return response.data.rows;
}

export const fetchDevicesForPagination = async (typeId, brandId, page, limit = 5) => {
    const response = await axiosCustom.get('/api/device', {params: {
        typeId,
        brandId,
        page,
        limit
    }});
    return response.data;
}

export const fetchDevice = async () => {
    const response = await axiosCustom.get('/api/device');
    return response.data.rows;
}

