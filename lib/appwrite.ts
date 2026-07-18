import {
    agentImages,
    galleryImages,
    propertiesImages,
    reviewImages,
} from './data';

export const config = {
    platform: 'com.nk.trueEstate',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    galleriesCollectionId:
        process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
    reviewsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID,
    agentsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_AGENT_COLLECTION_ID,
    propertiesCollectionId:
        process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID,
};

export const client = {} as any;
export const avatar = {} as any;
export const account = {} as any;
export const databases = {} as any;

export async function login() {
    return true;
}

export async function logout() {
    return true;
}

export async function getCurrentUser() {
    return {
        $id: 'dummy-user-id',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: reviewImages[0], // Using a realistic placeholder image
    };
}

const dummyAgent = {
    $id: 'agent-1',
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: agentImages[0],
};

const dummyReviews = reviewImages.slice(0, 3).map((img, i) => ({
    $id: `review-${i}`,
    name: `Reviewer ${i+1}`,
    avatar: img,
    review: 'This is an excellent property! Highly recommended.',
    rating: 5,
}));

const dummyGallery = galleryImages.slice(0, 5).map((img, i) => ({
    $id: `gallery-${i}`,
    image: img,
}));

const dummyProperties = Array.from({ length: 10 }).map((_, i) => ({
    $id: `prop-${i}`,
    name: `Luxury Villa ${i + 1}`,
    type: i % 2 === 0 ? 'House' : 'Villa',
    description: 'A beautiful property with amazing views and spacious rooms. Perfect for a family looking for comfort and luxury.',
    address: '123 Fake Street, Mock City',
    geolocation: '0,0',
    price: 5000 + i * 1000,
    area: 2500 + i * 100,
    bedrooms: 4,
    bathrooms: 3,
    rating: 4.8,
    facilities: ['Laundry', 'Parking', 'Gym', 'Wifi'],
    image: propertiesImages[i % propertiesImages.length],
    agent: dummyAgent,
    reviews: dummyReviews,
    gallery: dummyGallery,
}));

export async function getLatestProperties() {
    return dummyProperties.slice(0, 5);
}

export async function getProperties({
    filter,
    query,
    limit,
}: {
    filter: string;
    query: string;
    limit?: number;
}) {
    let result = dummyProperties;
    
    if (filter && filter !== 'All') {
        result = result.filter(p => p.type === filter);
    }
    
    if (query) {
        const lowerQuery = query.toLowerCase();
        result = result.filter(p => 
            p.name.toLowerCase().includes(lowerQuery) || 
            p.address.toLowerCase().includes(lowerQuery) ||
            p.type.toLowerCase().includes(lowerQuery)
        );
    }
    
    if (limit) {
        result = result.slice(0, limit);
    }
    
    return result;
}

export async function getPropertyById({ id }: { id: string }) {
    return dummyProperties.find(p => p.$id === id) || dummyProperties[0];
}
