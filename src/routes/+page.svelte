<script>
    export let data;
    let news = data.newsbody.articles;
</script>

<div class="container">
    <div class="container flex flex-col mx-auto items-center">
        {#each news as newsy }
        <div class="w-2/3 mb-2 bg-red-500 text-white p-5 rounded-xl mt-5">
            <h1 class="font-bold">{newsy.title}</h1>
            <div class="flex flex-row justify-around">
                <p>{newsy.author}</p>
                <p><a href="{newsy.url}">.........Read more</a></p>
                <p>{newsy.publishedAt}</p>
            </div>
        </div>
       {/each}
    </div>
</div>



