import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

const ProductList = () => {

  const [products, setProducts] = useState([]);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) =>
        item.productId ? item.productId.toString() : item.name + item.barcode
      }
      renderItem={({ item }) => (
        <View
          style={{
            marginBottom: 10,
            marginTop: 20,
            marginLeft: 50,
            flexDirection: 'row',
            textAlign: 'center',
          }}
        >
          <Text>{item.name}</Text>
          <Text>{item.barcode}</Text>
        </View>
      )}
      ListFooterComponent={() => <View style={{ height: 100 }} />}
    />
  );
};

export default ProductList;
