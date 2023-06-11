/*
We are using corsproxy to bypass CORS restrictions. 
As a Chrome extension, we don't have a server, so we use corsproxy.
You should set proper CORS headers on your server instead.
*/

const API_URL = 'https://corsproxy.io/?https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site';

class Yumazoo {
    static async fetch(path: string, options?: RequestInit) {
        const response = await fetch(API_URL + path, options);
        if (!response.ok) {
            throw new Error(`Error fetching: ${response.statusText}`);
        }
        const data = await response.json();
        return data.message;
    }

    static async getRecipes() {
        return this.fetch('/yumazoo/recipes');
    }

    static async postRecipe(newRecipe: any) {
        return this.fetch('/yumazoo/recipes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRecipe),
        });
    }

    static async getRecipeNumber() {
        return this.fetch('/yumazoo/recipes/number');
    }

    static async getRecipe(index: number) {
        return this.fetch(`/yumazoo/recipes/${index}`);
    }
}

export default Yumazoo;