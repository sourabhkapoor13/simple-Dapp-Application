// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.11;

contract chai{
    
    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;
    }
   
   Memo[] memos;
   address  payable owner;
   
   constructor(){
       owner=payable(msg.sender);
   }


   function buychai(string memory name, string memory message) public  payable  {
     require(msg.value>0,"please pay greater then 0 ether");
     owner.transfer(msg.value);
     memos.push(Memo(name,message,block.timestamp,msg.sender));
 
   }
   function getMemo() public view returns(Memo[] memory){
       return memos;
   }

}