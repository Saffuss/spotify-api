const AddToSpotify = {
    async getAccessToken() {
        const clientId = '2bb296eed39c4be7bfd5ef153ef3097e';
        const clientSecret = '399c28ba5be545ff96f91cf491442ccf';

        const encodedCredentials = btoa(`${clientId}:${clientSecret}`);

        const url = 'https://accounts.spotify.com/api/token';

        const body = new URLSearchParams();
        body.append('grant_type', 'client_credentials');

        try {
            const response = fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ${encodedCredentials}`
                },
                body: body.toString()
            });
            const data = (await response).json();

            console.log('Access Token:', data.access_token);
        } catch (error) {
            console.log('Error', error);
        }
    }
}