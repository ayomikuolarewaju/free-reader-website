<script>
    import img1 from '../img/reader.svg'
    import img2 from '../img/menu.svg'
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDate()
    let date = [day, month ,year].join('/')
    let rev = true;
    const reveler = ()=>{
        rev = !rev;
    }
</script>




<div class="flex flex-col justify-between static z-50 w-full bg-green-700 text-white items-center">
    <div class="container flex flex-row justify-between p-5 mx-auto items-center">
        <div>
            <img src="{img1}" alt="" srcset="" width="50" height="50">
            <h3><strong>FREE READERS CLUB</strong></h3>
        </div>
        <div>
           {#if rev}
           <ul class="md:flex md:flex-row justify-between space-x-10 hidden md:hover:p-3">
            <li><a href="/">Nigeria News</a></li>
            <li><a href="/foreign">Foreign News</a></li>
            <li class="hidden md:flex">{date}</li>
            </ul>
            {:else}
            <ul class="flex flex-col md:justify-between md:space-x-10 md:top-10 md:p-5
            justify-between absolute top-20 md:flex md:flex-row right-2 hover:bg-green-700 hover:p-3">
                <li><a href="/">Nigeria News</a></li>
                <li><a href="/foreign">Foreign News</a></li>
                <li class="hidden md:flex">{date}</li>
            </ul>
           {/if}
        </div>
       <div class="space-x-5 md:hidden cursor-pointer">
        <img src="{img2}" alt="" srcset="" width="30" height="30" on:click={()=>reveler()} on:keydown>
       </div>
    </div>
</div>