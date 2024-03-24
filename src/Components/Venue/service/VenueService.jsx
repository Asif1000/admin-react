export const VenueService = {
    getVenuesData() {
        return [
            {
                name: 'Dream Dubai',
                price: '482 AED',
                main_category: 'Clubs',
                sub_category: 'Beach Clubs',
                status: 'Active',
                is_draft: 'No',
            },
            {
                name: 'Wakme Dubai',
                price: '800 AED',
                main_category: 'Clubs',
                sub_category: 'Beach Clubs',
                status: 'Active',
                is_draft: 'No',
            },
            {
                name: 'Marina Pot Restaurant',
                price: '569 AED',
                main_category: 'Restaurant',
                sub_category: 'Restaurant',
                status: 'Active',
                is_draft: 'No',
            },
            {
                name: 'Dubai 11',
                price: '342 AED',
                main_category: 'Bar',
                sub_category: 'Bar',
                status: 'Active',
                is_draft: 'No',
            }
        ];
    },

    getVenues() {
        return Promise.resolve(this.getVenuesData());
    }
};