
//import { GoogleGenerativeAI } from "./node_modules/@google/generative-ai";
import { GoogleGenerativeAI } from "https://cdn.skypack.dev/@google/generative-ai";
/*console.log(import.meta.env);
const apiKey = import.meta.env.VITE_API;
*/

const apiKey = "AIzaSyAPP6_Kbytd5RufszlrFta_brG-qXD8vN0";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});


export async function generateContent(request){

    try{
        const result = await model.generateContent(request);
        const response = await result.response;
        const text = await response.text();
        return text
    }
    catch(err){
        return("error");
    }
}
