export const updateEvent = async (payload) => {
    try {
        const responseStream = await fetch(`/updateEvent`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
        const response = await responseStream.json();
        if (response.error) throw response.error;
        return response.data;
    } catch (e) {
        throw e;
    }
}

export const getEvents = async (month) => {
    try {
        const responseStream = await fetch(`/getEvents/${month}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
        const response = await responseStream.json();
        if (response.error) throw response.error;
        return response.data;
    } catch (e) {
        throw e;
    }
}