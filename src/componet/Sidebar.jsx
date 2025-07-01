import './sidebar.css'


function Sidebar() {
    function closeSidebar(){
        const sidebar=document.getElementsByClassName("sidebar")[0];
        const main=document.getElementsByClassName("main")[0];
        sidebar.classList.toggle("close");
        if(sidebar.classList.length>1){
            main.style.marginLeft="0px"
        }else{
            main.style.marginLeft="306px"
        }
    }
  return (
    <div className='sidebar'>
                              <h1><i class="fa-solid fa-gear"></i> Dashboard</h1>
        <button id='btn-sidebar'><i className="fa-solid fa-left-right"></i></button>
        <nav>
            <ul>
                <li><a href="#"><i class="fa-solid fa-key"></i>Dashboard</a></li>
                <li><a href="#"><i class="fa-solid fa-box"></i>Product</a></li>
                <li><a href="#"><i class="fa-solid fa-user"></i>Customers</a></li>
                <li><a href="#"><i class="fa-solid fa-wallet"></i>Income</a></li>
                <li><a href="#"><i class="fa-solid fa-tag"></i>Promote</a></li>
                <li><a href="#"><i class="fa-solid fa-message"></i>Help</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar
