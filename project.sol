pragma solidity ^0.5.1;

contract create {
    struct user {
      string name ;
        string password;
        string emil;
        //  string uploedname ;
        //  string uploedimge ;
    }
     mapping (string => user[]) map ;
    function addUser(string memory _Name,string memory _Password, string memory _Emil) public
    {
    
       map[_Name].push(user(_Name, _Password, _Emil));
    }
    
    //  mapping (string => user[]) uploed ;
    // function uploed(string memory _Uploedname,string memory _Uploedimge) public 
    // {
    
    //   uploed[_Uploedname].push(user(_Uploedname ,_Uploedimge));
    // }
}








