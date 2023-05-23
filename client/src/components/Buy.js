
import { ethers } from "ethers";
const Buy = ({ state }) => {

    const Buychai = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        console.log(name, message, contract);
        const amount = {value:ethers.utils.parseEther("0.001")};
        const transaction = await contract.buychai(name,message,amount);
        console.log("Transaction is done",transaction);
        await transaction.wait();
        console.log("Transaction is done");
    };
//     return (<>
//         <form onSubmit={Buychai} >
//             <label>Name</label>
//             <input type="text" id="name" placeholder="Enter your name"></input>
//             <label>Message</label>
//             <input type="text" id="message" placeholder="Enter your message"></input>
//             <button type="submit">Pay</button>
//         </form>
//     </>

//     );
// };
return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={Buychai}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Pay
          </button>
        </form>
      </div>
    </>
  );
};
export default Buy;