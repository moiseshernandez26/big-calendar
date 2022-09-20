export const fetchAPI = (url: string, options: Request) => {
    return fetch(url, options).then(res => res.json()).then((res: any) => res.data).catch();
}