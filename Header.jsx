import CartIcon from "./CartIcon";

export default function Header(props){
    return(
        <header>
        <div className="app-name">Cart</div>
        <CartIcon CartItems={props.CartItems}/>
        </header>
    )
}