const apiKey = '90XZKF2ro6ebDRk27MqYH6Pkf4F75zHk';

export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${apiKey}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    let gifts = data.map( item => ({ 
        id      : item.id,
        title   : item.title,
        url     : item.images?.downsized.url
    }));

    return gifts;
}
