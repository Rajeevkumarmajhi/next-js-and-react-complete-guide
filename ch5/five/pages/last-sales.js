import { useEffect, useState } from "react"

function LastSale() {

    const [sales,setSales] = useState();
    const [isLoading,setIsLoading] = useState(false);


    useEffect(() => {

        setIsLoading(true);

        fetch(
            'https://react-getting-started-122ec-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json'
        ).then(response => response.json()).then(data => {

            const transformedSales = [];
            for(const key in data){
                transformedSales.push({ 
                    id:key, 
                    username: data[key].username, 
                    volume : data[key].volume 
                })
            }


            setSales(transformedSales);
            setIsLoading(false);

        });

    }, []);

    if(isLoading){
        return <p>Loading...</p>
    }

    if(!sales){
        return <p>No data yet...</p>;
    }

    return (
        <ul>
            {sales.map((sale)=> <li key={sale.id}>{sale.username} - ${sale.volume} </li> )}
        </ul>
    )
}

export default LastSale
