import { useState,useEffect } from "react";
const Memos =( {state})=>{

const[memos, setMemos]=useState([]);
const { contract } = state;
useEffect(()=>{
    const memosMessage= async()=>{
        
        const memos= await contract.getMemo();
        setMemos(memos);
    }
    contract && memosMessage();
},[contract]);


// return(<>
// <p>Message</p>
// {memos.map((memo)=>{return(
//     <table key={memo.timestamp}>
//         <tbody>
//             <tr>
//                 <td>{memo.name}</td>
//                 <td>{memo.message}</td>
//                 <td>{memo.timestamp}</td>
//                 <td>{memo.from}</td>
//             </tr>
//         </tbody>
//     </table>
// );
// })}
// </>
// );
// };
return (
    <><div>
      <p style={{ textAlign: "center", marginTop: "20px" }}>PERSONS DETAIL</p>
      {memos.map((memo) => {
        return (
          <div
            className="container-fluid"
            style={{ width: "100%" }}
            key={Math.random()}
          >
            <table
              style={{
                marginBottom: "10px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}
                  >
                    {memo.name}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}
                  >
                    {new Date(memo.timestamp * 1000).toLocaleString()}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "300px",
                    }}
                  >
                    {memo.message}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "400px",
                    }}
                  >
                    {memo.from}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>

    </>
  );
};

export default Memos;