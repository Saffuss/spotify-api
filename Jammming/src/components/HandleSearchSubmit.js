async function handleSearchSubmit(e, query) {
    e.preventDefault();

    if (query.trim() === '') return;

    const url = `${query}`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        })
}

export default handleSearchSubmit;