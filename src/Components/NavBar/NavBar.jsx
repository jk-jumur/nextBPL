import DollarImg from '../../assets/dollar 1.png'

const NavBar = () =>{
    return(
            <div className="navbar bg-base-100 shadow-sm">
    <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
   </div>
    <div className="flex-none">
    <button className=" flex justify-between items-center gap-2 font-bold text-2xl">
          0 Coin
         <img src={DollarImg} alt="" />
    </button>
    </div>
   </div>
    )
};

export default NavBar;