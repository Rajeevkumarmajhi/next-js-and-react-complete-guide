import { useEffect, useState } from "react"
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

function LastSale(props) {

    const [sales,setSales] = useState(props.sales);
    // const [isLoading,setIsLoading] = useState(false);


    const { data , error } = useSWR('https://react-getting-started-122ec-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json',fetcher);

    if(error) return "An error has occured.";
    
    useEffect(()=>{
        if(data){
            const transformedSales = [];
            for(const key in data){
                transformedSales.push({ 
                    id:key, 
                    username: data[key].username, 
                    volume : data[key].volume 
                });
            }
            setSales(transformedSales);
        }
    },[data]);

    if(error){
        return <p>Failed to load</p>;
    }

    if(!data && !sales){
        return <p>Loading...</p>
    }


    return (
        <ul>
            {sales.map((sale)=> <li key={sale.id}>{sale.username} - ${sale.volume} </li> )}
        </ul>
    )
}

export default LastSale

export async function getStaticProps(){

    const response = await fetch('https://react-getting-started-122ec-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json');
    const data = await response.json();
    const transformedSales = [];
    for(const key in data){
        transformedSales.push({ 
            id:key, 
            username: data[key].username, 
            volume : data[key].volume 
        })
    }
    return {
        props: { sales: transformedSales},
        revalidate: 10,
    }
}
