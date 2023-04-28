export const load =async()=>{
   const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=41c367a46ae44252ad8352fdfd65d528';
   const resp = await fetch(url);
   const newsbody = resp.json()
   return{
      newsbody
   }
}