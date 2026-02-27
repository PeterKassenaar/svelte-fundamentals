<script lang="ts">
    interface Props {
        message?: string
    }


    // destructuring the props
    let {message = `it's great to see you!`}: Props = $props();

    // usage in more complex scenarios: we have a list of cities,
    // some cities DO have an image and a link, others don't
    interface City {
        id: number;
        name: string;
        country: string;
        text: string;
        image: string;
        imageUrl?: string;
    };

    export const cities: City[] = [
        {
            id: 1,
            name: "London",
            country: "United Kingdom",
            text: "London skyline (St Paul's area)",
            image: "london.jpg",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1e/London_skyline_5.jpg",
        },
        {
            id: 2,
            name: "Berlin",
            country: "Germany",
            text: "Berlin skyline with Fernsehturm",
            image: "berlin.jpg",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/02/Berlin_Skyline_Fernsehturm_02.jpg",
        },
        {
            id: 3,
            name: "Tokyo",
            country: "Japan",
            text: "Tokyo skyline (2017)",
            image: "tokyo.jpg",
            // imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Tokyo_skyline_2017.jpg",
        },
        {
            id: 4,
            name: "New York City",
            country: "United States",
            text: "NYC panoramic skyline (2016)",
            image: "newyork.jpg",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/14/New_York_City_Skyline_2016.jpg",
        },
        {
            id: 5,
            name: "Sydney",
            country: "Australia",
            text: "Sydney Harbour Bridge with Opera House",
            image: "sydney.jpg",
            // imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Sydney-Harbour_bridge.JPG",
        },
    ];


</script>
<!--Defining a simple Snippet. This can be anywhere in your template -->
{#snippet greeting(name: string)}
    <div>Hello {name}, {message}</div>
{/snippet}

<!--Defining a more complex snippet, rendering a specific block of text-->
<!--depending if a certain property is available or not-->
{#snippet showCity(city: City)}
    <img src="/img/{city.image}" alt={city.name}/>
{/snippet}


<div>
    <!--Using the snippet by defining a render block -->
    {@render greeting('Peter')}
    {@render greeting('Sandra')}
    <hr>
    <!-- More complex snipptes: Rendering a list of cities, using
        the city snippet, creating a hyperlink if the city has an image -->
    {#each cities as city}
        <h3>{city.name}, {city.country}</h3>
        {#if city.imageUrl}
            <!--Not repeating the block of code here, but using a snippet instead-->
            <a href={city.imageUrl} target="_blank">
                {@render showCity(city)}
            </a>
        {:else}
            {@render showCity(city)}
        {/if}
    {/each}
</div>
<style>
    div {
        border: 1px solid rebeccapurple;
        padding: 4px;
        margin: 4px;
    }

    img {
        max-width: 100%;
    }
</style>
