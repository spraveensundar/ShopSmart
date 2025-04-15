import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import axios from 'axios';

import Header from './Header';
import ProductCard from './ProductCard';
import { API_HOST } from '../../../config';
import Container from '../../../components/container';

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
            <Container header={false} style={{ paddingRight: 0, paddingLeft: 0 }}>
                <View style={{ paddingBottom: 20 }}>
                    <FlatList
                        data={products}
                        horizontal={true}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <ProductCard product={item} />}
                    />
                </View>
            </Container>
        </>
    )
}

export default Home;