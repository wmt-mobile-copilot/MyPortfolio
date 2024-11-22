const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || 'your_unsplash_access_key_here';

export async function getUnsplashImage(query: string): Promise<string> {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    const data = await response.json();
    return data.urls.regular;
  } catch (error) {
    console.error('Error fetching Unsplash image:', error);
    return 'https://source.unsplash.com/random/800x600/?coding'; // Fallback image
  }
}

