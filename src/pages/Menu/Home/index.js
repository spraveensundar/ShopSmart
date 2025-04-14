import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';

import Header from './Header';
import ProductCard from './ProductCard';
import { API_HOST } from '../../../config';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.post(API_HOST,
                    {
                        page: '1',
                        pageSize: '10',
                        sort: { creationDateSortOption: 'DESC' }
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                );
                setProducts(res.data.products || []);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <>
            <Header />
            <FlatList
                data={products}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <ProductCard product={item} />}
            />
        </>
    )
}

export default Home;