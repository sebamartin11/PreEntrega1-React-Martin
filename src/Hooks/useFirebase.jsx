import { useEffect, useState } from "react";
import { db } from "../Firebase";
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { GlobalProvider } from "../Context/GlobalContext";

const useFirebase = () => {
    const [productos, setProductos] = useState([]);
    const [producto, setProducto] = useState(null);

    const {setLoading} = GlobalProvider()

    useEffect(() => {

    getProducts()
    return () => {

        };
    }, []);


    const getProducts = async () => {
        try {
        const prodCol = collection(db, "products");
        await getDocs(prodCol).then((snapshot) => {
            if (snapshot.size === 0) {
            console.log("base de datos esta vacio");
            }
            setProductos(
            snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            })
            );
        });
        } catch (error) {}
    };

    const getProduct = async (id) => {
        setLoading(true)
        try {
            const document = doc(db, "products", id);
            const response = await getDoc(document);
            setProducto({ id: response.id, ...response.data() });
            setLoading(false)
        } catch (error) {
        console.log(error);
        }
    };

    const fetchGenerateTicket = async (datos) => {
        setLoading(true)
        try {
        const col = collection(db, "ordenes");
        const order = await addDoc(col, datos);
        setLoading(false)
        console.log(order.id);
        } catch (error) {
        console.log(error);
        }
    };

    //

    // const guardarNuevoProducto = async (producto) => {
    //     try {
    //     const col = collection(db, "products");
    //     const order = await addDoc(col, producto);
    //     console.log(order.id);
    //     } catch (error) {
    //     console.log(error);
    //     }
    // };

    const fetchGetDataCollection = async () =>{
        setLoading(true)
        try {
            const data = collection (db, "products")
            const col = await getDocs(data)
            const response = col.docs.map(doc => doc={id:doc.id,...doc.data()});
            setProductos(response)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    const fetchGetIndividualProduct = async ({id}) => {
        setLoading(true)
        try {
            const document = doc (db,"products",id)
            const response = await getDoc(document)
            let result = response.data()
            setProducto({id:response.id,...result})
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    };

    // Para actualizar deberias utilizar updateDoc
        const fetchUpdateDoc = async ({id}) => {
        const orderDoc = doc(db,"marcas",id);
        try {
            await updateDoc(orderDoc,{precio:8000})
            console.log("se actualizo correctamente")
        } catch (error) {
            console.log(error)
        }
    }

    return {
        productos,
        producto,
        getProducts,
        getProduct,
        fetchGenerateTicket,
        updateDoc,
        fetchUpdateDoc,
        fetchGetDataCollection,
        fetchGetIndividualProduct
    };
};

export default useFirebase;
