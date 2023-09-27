export function filterRestaurants(searchTxt, data) {
    return data.filter( (restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchTxt) 
    );
}