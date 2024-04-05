
// // fetch(" https://api.github.com/users/PrajPat").then((result)=>{
// //     return result.json();
// // }).then((data)=>{
// //     console.log(data);
// // })






// import { useEffect, useState, axios } from 'react';
// import {Row, Col, Image } from 'react-bootstrap';

// function Demo() {
//     const [data, setdata] = useState([])
//     useEffect(()=>
//     {
//         axios.get(" https://api.github.com/users/data")
//         .then((result)=>{
//             setdata(result.data)
//         }).catch((err)=>{
//             console.log(err)
//         });
//     },[])

//   return (
//     <div className='page'>
//     <Row>
//         {
//             data.map((user)=>{
//                 return(
//                     <Col>
//                     <Image src={`https://api.github.com/users${user.avatar_url}`}></Image>
//                     <h1>{user.login}</h1>
//                     <h1>{user.name}</h1>
//                     <h1>{user.public_gists}</h1>
//                     <h1>{user.created_at}</h1>
//                     </Col>
//                 )
//             })
//         }
//     </Row>
//     </div>
//   )
// }

// export default Demo
