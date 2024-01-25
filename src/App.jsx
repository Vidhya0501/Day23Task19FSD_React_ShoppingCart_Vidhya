import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar';
import Card from './Card';
import { useState } from 'react';

function App() {

 
  const productDetails=[
    {
      image:"https://assets.ajio.com/medias/sys_master/root/20231013/z9Tj/65289c27ddf779151938c101/-473Wx593H-466485728-black-MODEL3.jpg",
      name:"Long Gown",
      description:"Casual wear, Black color",
      price:800
    },
    {
      image:"https://5.imimg.com/data5/SELLER/Default/2021/1/SV/VO/EW/25739518/pink-women-maxi-dress.jpg",
      name:" Maxi dress",
      description:"Party wear, Blue color",
      price: 1600
    },
    {
      image:"https://www.wholesaletextile.in/product-img/Bipson-Riya-1796-Catalog-Women1-1649837175.jpeg",
      name:"Salwar suit",
      description:"Ethnic set",
      price: 750
    },
    {
      image:"https://assets.ajio.com/medias/sys_master/root/20230621/b4fw/64923837d55b7d0c6385f991/-1117Wx1400H-463529623-blue-MODEL.jpg",
      name:"A-line Kurta",
      description:"Casual wear",
      price: 600
    },
    {
      image:"https://img3.junaroad.com/uiproducts/20011897/pri_175_p-1687898767.jpg",
      name:"Denim",
      description:"High rise",
      price: 700
    },
    {
      image:"https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/8485221/2019/1/31/cb1b2d81-5351-4bb7-960d-6d8871b419e11548930273636-Harpa-Women-Tops-8121548930271762-1.jpg",
      name:"Crop top",
      description:"Black",
      price: 400
    },
    {
      image:"https://5.imimg.com/data5/SELLER/Default/2022/1/PH/FY/VK/13125714/green-soft-lichi-silk-saree.jpeg",
      name:"Silk Saree",
      description:"Wedding collection",
      price: 700
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXiK9AvnFttZXIKD6N3jRZ1UFbGTNI-8JXw&usqp=CAU",
      name:"Georgette Saree",
      description:"Party wear",
      price: 800
    }

  ]

  const [cart,setCart]=useState(0);

  const handleCart=(value)=>{
    setCart(cart+value);
  };

  
 
  return (
   <>
    <div className="container-fluid">
      <Navbar cart={cart}/>
     <div className="container mt-3">
        <div className="row">
        {
          productDetails.map((product)=>{
            return <Card product={product} handleCart={handleCart}/>
          })
        }
        
        </div>   
      </div> 
     

      <div className="footer bg-dark d-flex justify-content-center align-items-center">
        <p className="text-white fs-5">Copyright &copy; Vidhya 2024</p>
      </div>
    </div>
  
   </>
  
  );
}

export default App;
