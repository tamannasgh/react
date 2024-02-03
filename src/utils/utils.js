export function filterRestaurants(searchTxt, data) {
    return data.filter( (restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchTxt) 
    );
}

export function getRandomNum(start, end){
    return Math.floor(Math.random() * (end - start)) + start;
}